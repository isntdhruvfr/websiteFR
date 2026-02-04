import { Router } from 'express';
import { supabaseAdmin } from '../config/supabase.ts';

const router = Router();

// Get current user info from token in Authorization header
router.get('/me', async (req, res) => {
  const auth = req.headers.authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  if (!supabaseAdmin) return res.status(500).json({ error: 'Supabase admin not configured' });

  const { data, error } = await supabaseAdmin.auth.getUser(token);
  if (error || !data?.user) return res.status(401).json({ error: 'Invalid token' });
  res.json({ user: data.user });
});

export default router;