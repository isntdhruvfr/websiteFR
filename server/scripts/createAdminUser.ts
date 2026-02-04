console.log('createAdminUser script starting...');
import { randomBytes } from 'crypto';
import { config as loadEnv } from 'dotenv';
import { appendFileSync, mkdirSync, existsSync } from 'fs';

loadEnv({ path: './server/.env' });
const LOG_DIR = './server/logs';
if (!existsSync(LOG_DIR)) mkdirSync(LOG_DIR, { recursive: true });
const LOG_FILE = `${LOG_DIR}/create_admin.log`;
function log(msg: string) { appendFileSync(LOG_FILE, `${new Date().toISOString()} ${msg}\n`); }

async function run() {
  const email = process.env.ADMIN_EMAILS?.split(',')[0]?.trim();
  if (!email) {
    log('ADMIN_EMAILS not set in server/.env');
    console.error('ADMIN_EMAILS not set in server/.env');
    process.exit(1);
  }

  // dynamic import to ensure env is loaded
  const { supabaseAdmin } = await import('../src/config/supabase.ts');
  if (!supabaseAdmin) {
    log('Supabase admin client not configured (missing SUPABASE_SERVICE_ROLE_KEY)');
    console.error('Supabase admin client not configured (missing SUPABASE_SERVICE_ROLE_KEY)');
    process.exit(1);
  }

  const password = randomBytes(10).toString('base64url');

  // try the admin create user endpoint
  try {
    log('Attempting to create admin user: ' + email);
    // Supabase JS exposes admin API under auth.admin.createUser
    // This call may vary depending on supabase-js version so we test it.
    if (supabaseAdmin.auth && (supabaseAdmin.auth as any).admin && (supabaseAdmin.auth as any).admin.createUser) {
      const res = await (supabaseAdmin.auth as any).admin.createUser({
        email,
        password,
        email_confirm: true,
      });

      if (res.error) {
        log('Failed to create admin user: ' + JSON.stringify(res.error));
        console.error('Failed to create admin user:', res.error);
        process.exit(1);
      }

      log('Admin user created: ' + email);
      console.log('Admin user created:', email);
      console.log('Password:', password);
      appendFileSync(LOG_FILE, `PASSWORD:${password}\n`);
      process.exit(0);
    }

    // fallback: signup using the normal signup API (works with service role key)
    const signUpRes = await supabaseAdmin.auth.signUp({ email, password });
    if ((signUpRes as any).error) {
      log('Failed to sign up admin user: ' + JSON.stringify((signUpRes as any).error));
      console.error('Failed to sign up admin user:', (signUpRes as any).error);
      process.exit(1);
    }

    log('Admin user signed up: ' + email);
    console.log('Admin user signed up:', email);
    console.log('Password:', password);
    appendFileSync(LOG_FILE, `PASSWORD:${password}\n`);
    process.exit(0);
  } catch (err) {
    log('Unexpected error creating admin user: ' + String(err));
    console.error('Unexpected error creating admin user:', err);
    process.exit(1);
  }
}

run();