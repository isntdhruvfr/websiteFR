# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

---

## Supabase integration 🔌

This project can use Supabase for the games data and optional auth.

- Frontend client uses Vite env vars in `src/lib/supabase.ts` (uses `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`).
- Server-side admin client uses `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` from `server/.env` (see `server/.env.example`). The server will proxy requests to Supabase for endpoints under `/api/*` when a service role key is present; otherwise it falls back to the local `src/data/games.ts` file.

How to configure locally:

1. Frontend (.env.local at project root):

```env
VITE_SUPABASE_URL=https://jqzqhigbmbwclxvvajcw.supabase.co
VITE_SUPABASE_ANON_KEY=REPLACE_WITH_ANON_KEY
```

2. Server (`server/.env`):

```env
SUPABASE_URL=https://jqzqhigbmbwclxvvajcw.supabase.co
SUPABASE_SERVICE_ROLE_KEY=REPLACE_WITH_SERVICE_ROLE_KEY
PORT=4000
# optional: comma-separated admin emails who can run import endpoint
ADMIN_EMAILS=you@example.com
```

3. Install new dependency and scripts:

```sh
npm install
# to run server locally
npm run dev:server
# to create the games table using a Postgres connection string (set PG_CONNECTION_STRING in your environment)
npm run server:create-table
# to import existing games into Supabase (requires service role key + admin email set in server/.env)
npm run server:import-games
```

If you don't want to provide a DB connection string, you can manually run the SQL in `server/sql/create_games_table.sql` using the Supabase SQL editor (recommended option if you don't want to share DB credentials).
Security note: keep your `SUPABASE_SERVICE_ROLE_KEY` secret and do not commit it.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
