import { readFileSync, appendFileSync, mkdirSync, existsSync } from 'fs';
import { Client } from 'pg';
import { config as loadEnv } from 'dotenv';

loadEnv({ path: './server/.env' });

const LOG_DIR = './server/logs';
if (!existsSync(LOG_DIR)) mkdirSync(LOG_DIR, { recursive: true });
const LOG_FILE = `${LOG_DIR}/create_table.log`;
function log(msg: string) { appendFileSync(LOG_FILE, `${new Date().toISOString()} ${msg}\n`); }

const sql = readFileSync('./server/sql/create_games_table.sql', 'utf-8');

async function run() {
  const conn = process.env.PG_CONNECTION_STRING;
  log('Starting createTable script');
  if (!conn) {
    log('PG_CONNECTION_STRING not set. Provide a Postgres connection string in environment to run this script.');
    console.error('PG_CONNECTION_STRING not set. Provide a Postgres connection string in environment to run this script.');
    process.exit(1);
  }

  const client = new Client({ connectionString: conn });
  await client.connect();
  try {
    await client.query(sql);
    log('Table created (or already exists).');
    console.log('Table created (or already exists).');
  } catch (err) {
    log('Failed to run SQL: ' + String(err));
    console.error('Failed to run SQL:', err);
  } finally {
    await client.end();
    log('Finished createTable script');
  }
}

run().catch((err) => {
  log('Unhandled error: ' + String(err));
  console.error(err);
  process.exit(1);
});