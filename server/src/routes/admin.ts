import { Router } from 'express';
import { verifyAuth } from '../middleware/verifyAuth.ts';
import { supabaseAdmin } from '../config/supabase.ts';
import { games } from '../../../src/data/games.ts';

const router = Router();

// Protected import endpoint — only accessible to authenticated users
router.post('/import-games', verifyAuth, async (req, res) => {
  if (!supabaseAdmin) return res.status(500).json({ error: 'Supabase admin not configured' });

  // only allow admin emails
  const user = (req as any).user;
  const admins = (process.env.ADMIN_EMAILS || '').split(',').map((s) => s.trim()).filter(Boolean);
  if (admins.length > 0 && !admins.includes(user.email)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const results: Array<{ id: string; error?: any }> = [];
  for (const g of games) {
    const { error } = await supabaseAdmin.from('games').upsert(g, { onConflict: 'id' });
    results.push({ id: g.id, error: error ?? undefined });
  }

  res.json({ results });
});

export default router;
