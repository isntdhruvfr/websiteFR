import React, { useEffect, useState } from 'react'
import { demoGames } from './data/demoGames'
import { fetchWithFallback } from './lib/fetchWithFallback'

type Game = {
  id: string
  slug: string
  title?: string
  description?: string
  image?: string
}

export default function App() {
  const [games, setGames] = useState<Game[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    async function load() {
      setLoading(true)
      // Try API first, then fallback to demoGames
      const apiData = await fetchWithFallback('/api/games', [])
      if (!mounted) return
      if (Array.isArray(apiData) && apiData.length > 0) {
        setGames(apiData as Game[])
      } else {
        setGames(demoGames)
      }
      setLoading(false)
    }

    load()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <nav className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Game Hub</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-4">Welcome to Game Hub</h2>
        <p className="text-slate-300 mb-6">Explore our collection of games</p>

        {loading && <div className="text-slate-300">Loading games…</div>}

        {!loading && (!games || games.length === 0) && (
          <div className="text-slate-300">No games available. Showing demo content.</div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {games && games.map((g) => (
            <article key={g.id} className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold">{g.title ?? g.slug}</h3>
              <p className="text-slate-400 text-sm mt-2">{g.description ?? 'No description'}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
