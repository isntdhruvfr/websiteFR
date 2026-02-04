import { config as loadEnv } from 'dotenv';
loadEnv({ path: './server/.env' });
console.log('Loaded server/.env:', !!process.env.SUPABASE_SERVICE_ROLE_KEY);
console.log('SUPABASE_URL present:', !!process.env.SUPABASE_URL);
import { games } from '../../src/data/games.ts';
import { appendFileSync, mkdirSync, existsSync } from 'fs';
import { config as loadEnv } from 'dotenv';

loadEnv({ path: './server/.env' });
const LOG_DIR = './server/logs';
if (!existsSync(LOG_DIR)) mkdirSync(LOG_DIR, { recursive: true });
const LOG_FILE = `${LOG_DIR}/import_games.log`;
function log(msg: string) { appendFileSync(LOG_FILE, `${new Date().toISOString()} ${msg}\n`); }

async function run() {
  // dynamically import the admin client after env is loaded
  const { supabaseAdmin } = await import('../src/config/supabase.ts');

  if (!supabaseAdmin) {
    log('SUPABASE_SERVICE_ROLE_KEY not set. Set it in environment to run this script.');
    console.error('SUPABASE_SERVICE_ROLE_KEY not set. Set it in environment to run this script.');
    process.exit(1);
  }

  log(`Importing ${games.length} games into Supabase...
`);
  console.log(`Importing ${games.length} games into Supabase...`);

  for (const g of games) {
    const { error } = await supabaseAdmin.from('games').upsert(g, { onConflict: 'id' });
    if (error) {
      log(`Failed to upsert ${g.id}: ${JSON.stringify(error)}`);
      console.error('Failed to upsert', g.id, error);
    }
  }

  log('Import complete.');
  console.log('Import complete.');
  process.exit(0);
}

run().catch((err) => {
  log('Unhandled error: ' + String(err));
  console.error(err);
  process.exit(1);
});
