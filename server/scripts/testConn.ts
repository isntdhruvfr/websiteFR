import { Client } from 'pg';
import { config as loadEnv } from 'dotenv';

loadEnv({ path: './server/.env' });

async function run() {
  const conn = process.env.PG_CONNECTION_STRING;
  console.log('PG_CONNECTION_STRING present:', !!conn);
  if (!conn) process.exit(1);

  const client = new Client({ connectionString: conn });
  try {
    await client.connect();
    console.log('Connected to Postgres');
    const { rows } = await client.query('SELECT now() as now, version() as version');
    console.log('Query rows:', rows);
  } catch (err) {
    console.error('Conn error:', err);
  } finally {
    await client.end();
  }
}

run();