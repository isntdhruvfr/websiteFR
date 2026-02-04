import type { Request, Response, NextFunction } from 'express';
import { supabaseAdmin } from '../config/supabase.ts';

export async function verifyAuth(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  if (!supabaseAdmin) return res.status(500).json({ error: 'Supabase admin not configured' });

  const { data, error } = await supabaseAdmin.auth.getUser(token);
  if (error || !data?.user) return res.status(401).json({ error: 'Invalid token' });

  // attach user to request
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  (req as any).user = data.user;
  next();
}
