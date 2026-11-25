-- ============================================================
--  Hireginie — Supabase schema, allowlist & security policies
--  Run this in: Supabase Dashboard → SQL Editor → New query
-- ============================================================

-- 1) PROFILES ------------------------------------------------
-- One row per allowed user. Role is 'admin' or 'member'.
-- A user can only USE the site if they exist in auth.users
-- (you create them manually) AND have a profile row here.
create table if not exists public.profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  email      text,
  full_name  text,
  role       text not null default 'member' check (role in ('admin','member')),
  created_at timestamptz not null default now()
);

-- Auto-create a profile whenever you add a user in the dashboard.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'full_name',''))
  on conflict (id) do nothing;
  return new;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 2) POSTS ---------------------------------------------------
create table if not exists public.posts (
  id         uuid primary key default gen_random_uuid(),
  title      text not null,
  slug       text unique not null,
  excerpt    text,
  content    text,
  author     text,
  tag        text,
  published  boolean not null default false,
  created_at timestamptz not null default now()
);

-- 3) ROW LEVEL SECURITY --------------------------------------
alter table public.profiles enable row level security;
alter table public.posts    enable row level security;

-- helper: is the current user an admin?
create or replace function public.is_admin()
returns boolean language sql stable security definer as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- profiles: a user can read their own row; admins read all.
drop policy if exists "read own profile" on public.profiles;
create policy "read own profile" on public.profiles
  for select using (id = auth.uid() or public.is_admin());

-- posts: anyone can read PUBLISHED posts (public blog).
drop policy if exists "public read published" on public.posts;
create policy "public read published" on public.posts
  for select using (published = true or public.is_admin());

-- posts: only admins can create / edit / delete.
drop policy if exists "admin write" on public.posts;
create policy "admin write" on public.posts
  for all using (public.is_admin()) with check (public.is_admin());

-- 4) MAKE YOURSELF ADMIN -------------------------------------
-- After creating your user in Authentication → Users, run:
--   update public.profiles set role = 'admin' where email = 'you@example.com';

-- 5) SEED SAMPLE POSTS ---------------------------------------
insert into public.posts (title, slug, excerpt, content, author, tag, published) values
('5 Ways AI Is Reshaping Modern Recruitment',
 'ai-reshaping-recruitment',
 'How intelligent matching cuts time-to-hire without losing the human touch.',
 E'Recruitment has always been part art, part science. Today, AI is tilting the balance — not by replacing recruiters, but by handing them sharper tools.\n\n1. Smarter sourcing. Models surface candidates who match on skills and trajectory, not just keywords.\n2. Faster screening. Structured signals rank applicants so recruiters spend time on the strongest fits.\n3. Bias-aware shortlists. Anonymised, criteria-first review reduces unconscious bias.\n4. Predictive fit. Historical outcomes hint at who will thrive and stay.\n5. The human close. Technology accelerates the funnel; people still build trust and close offers.\n\nAt Hireginie we pair AI-driven matching with specialist recruiters — speed without losing the human touch.',
 'Hireginie Team', 'Hiring', true),
('Building Teams Beyond Bias',
 'building-teams-beyond-bias',
 'Practical steps to make your hiring funnel genuinely inclusive.',
 E'Inclusive hiring is not a checkbox — it is a system. Here is how high-performing teams design for it.\n\nStart with the job description. Neutral language widens your top of funnel. Audit for gendered or exclusionary phrasing.\n\nStructure the interview. Same questions, same rubric, scored independently. Structure beats gut feel.\n\nWiden the sources. Partner with communities and programs that reach underrepresented talent.\n\nMeasure honestly. Track funnel conversion by stage. Where you lose diverse candidates is where to fix.\n\nOur Business Beyond Bias program is built around exactly these principles.',
 'Hireginie Team', 'Diversity', true),
('Scaling From 10 to 100 Without Breaking',
 'scaling-10-to-100',
 'A founder''s guide to hiring fast while protecting culture.',
 E'Hypergrowth breaks most hiring processes. The teams that scale cleanly do a few things differently.\n\nDefine the bar before you need it. Write down what great looks like for each role so every interviewer aligns.\n\nHire ahead of pain, not after. By the time a team is drowning, quality drops. Plan two quarters out.\n\nProtect culture deliberately. Culture is not ping-pong tables — it is the behaviours you reward. Interview for them.\n\nUse a partner for surge capacity. Dedicated recruiter pods let you scale without permanent overhead.\n\nThat is the model behind our Accelerator Program.',
 'Hireginie Team', 'Startups', true),
('What Great Executive Search Looks Like',
 'great-executive-search',
 'The signals that separate a good CXO hire from a great one.',
 E'Executive hiring is high-stakes and low-volume — every decision matters.\n\nMandate clarity. The best searches begin with brutal honesty about what the business actually needs in the next 24 months.\n\nMarket mapping. Great search firms map the whole landscape, not just who is actively looking.\n\nReference depth. Backchannel references reveal what polished interviews cannot.\n\nDiscretion. Senior candidates are often passive and employed; confidentiality is non-negotiable.\n\nOur executive practice is built on all four.',
 'Hireginie Team', 'Leadership', true),
('Designing a Candidate Experience People Love',
 'candidate-experience',
 'Why your hiring process is your strongest employer brand.',
 E'Every candidate who touches your process becomes an ambassador — or a critic.\n\nRespect their time. Clear timelines, prompt updates, no black holes.\n\nBe human. A warm, well-prepared interviewer says more about your culture than any careers page.\n\nClose the loop. Even rejections, done with care, build goodwill and referrals.\n\nGreat candidate experience is not expensive — it is intentional.',
 'Hireginie Team', 'Process', true),
('The 2026 India Talent Outlook',
 'india-talent-outlook-2026',
 'Where demand is heading across BFSI, IT, and beyond.',
 E'India''s talent market in 2026 is defined by specialisation and speed.\n\nBFSI is hiring for risk, compliance and AI-driven products. IT demand is shifting from generalists to platform and ML specialists. Healthcare and logistics continue rapid expansion.\n\nThe common thread: employers who move fast and offer clarity win. Average turnaround is the new battleground.\n\nWe help clients stay ahead of these shifts with market intelligence and ready talent pipelines.',
 'Hireginie Team', 'Trends', true)
on conflict (slug) do nothing;
