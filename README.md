# Hireginie — Tech-Enabled Recruitment Website

Static multi-page site built from the Figma flow. No build step — open `index.html` in a browser.

## Pages
| File | Page |
|------|------|
| `index.html` | Home (hero, clients marquee, services, programs, industries, why-us, testimonials, CTA) |
| `about.html` | About Us (intro, company overview stats, mission/vision, what makes us different) |
| `services.html` | Services (overview, industries, why choose us) |
| `programs.html` | Programs (Business Beyond Bias, Accelerator, details, success stories) |
| `blogs.html` | Blogs (insights grid) |
| `contact.html` | Contact (form + info card) |

Shared: `styles.css` (design system) · `script.js` (scroll reveals, count-up stats, marquee, animated bars, mobile nav).

## Animations
- Scroll-reveal fade/slide on every section (IntersectionObserver)
- Count-up on stat numbers
- Continuous left→right **client logo marquee** (pauses on hover, seamless loop)
- Floating hero cards + rotating dotted globe
- Card hover lift, animated vision bar chart

## Swapping in real client logos
The marquee currently uses styled text chips. To use real logos:
1. Drop image files into `assets/logos/` (e.g. `act.svg`, `ihx.svg`).
2. In `index.html`, edit the `clients` array and `makeChip` to render `<img src="assets/logos/act.svg" alt="ACT Fibernet">` instead of the lettered `.mark` + name.

The `.logo-chip img` style is already in `styles.css`.

## Login + Admin Blog (Supabase)

Real, secure auth with an **allowlist** — only accounts you create can log in, nobody else (there is no public sign-up). Admins write/edit/delete blog posts that persist in a database; published posts appear on the public Blogs page.

**Files:** `login.html`, `admin.html`, `post.html`, `auth.js`, `supabase-config.js`, `supabase-setup.sql`, `posts-data.js` (offline fallback content).

### One-time setup
1. Create a free project at https://supabase.com
2. **Project Settings → API** → copy the Project URL and `anon` public key into `supabase-config.js`.
3. **SQL Editor** → paste & run `supabase-setup.sql` (creates `profiles` + `posts` tables, row-level-security policies, and seeds the 6 sample posts).
4. **Authentication → Providers → Email**: turn **OFF** "Allow new users to sign up" (this is what makes it invite-only).
5. **Authentication → Users → Add user** for each person who should have access (admin + approved members).
6. Make yourself admin — in SQL Editor run:
   ```sql
   update public.profiles set role = 'admin' where email = 'you@example.com';
   ```
7. Visit `login.html`, sign in, and you'll land on `admin.html` to manage blogs.

### How security is enforced
- **Login:** Supabase only authenticates users that exist in `auth.users`. With sign-up disabled, only people you add can ever log in.
- **Writing blogs:** RLS policy `admin write` allows insert/update/delete **only** if the caller's profile role is `admin`. The anon key is safe to ship publicly — the database, not the browser, enforces who can do what.
- Before Supabase is configured, login is disabled and the blog shows the static sample posts from `posts-data.js`.
