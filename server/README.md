Quick backend for the Vite React app

This small Express backend provides a simple API used by the frontend:

Endpoints:
- GET /api/health — health check
- GET /api/games — list all games (read from `src/data/games.ts`)
- GET /api/games/:id — game by `id` or `slug`

Run locally:
1. Install new dependencies: `npm install`
2. Start the backend: `npm run server`

Notes:
- `server/index.ts` is written in TypeScript and runs via `ts-node`.
- In production you may want to compile the server or proxy API requests to a hosted API.
