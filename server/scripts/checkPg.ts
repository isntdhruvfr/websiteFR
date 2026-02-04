import { Client } from 'pg';
import { config as loadEnv } from 'dotenv';

loadEnv({ path: './server/.env' });

async function run() {
  const conn = process.env.PG_CONNECTION_STRING;
  if (!conn) {
    console.error('PG_CONNECTION_STRING not set');
    process.exit(1);
  }

  const client = new Client({ connectionString: conn });
  await client.connect();
  try {
    const { rows } = await client.query(`
      SELECT tablename
      FROM pg_catalog.pg_tables
      WHERE schemaname = 'public' AND tablename = 'games';
    `);
    if (rows.length === 0) {
      console.log('Table public.games: DOES NOT EXIST');
    } else {
      console.log('Table public.games: EXISTS');
      const { rows: countRows } = await client.query('SELECT count(*)::int AS cnt FROM public.games;');
      console.log('Row count:', countRows[0].cnt);
    }
  } catch (err) {
    console.error('Error checking DB:', err);
  } finally {
    await client.end();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});