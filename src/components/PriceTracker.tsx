import { motion } from 'framer-motion';
import type { GamePrice } from '@/data/games';
import { ExternalLink } from 'lucide-react';

interface PriceTrackerProps {
  prices: GamePrice[];
}

const storeLogos: Record<string, string> = {
  steam: '🎮',
  epic: '🏪',
  playstation: '🎯',
  xbox: '🟢',
};

const storeColors: Record<string, string> = {
  steam: 'from-blue-600 to-blue-800',
  epic: 'from-slate-600 to-slate-800',
  playstation: 'from-blue-500 to-indigo-700',
  xbox: 'from-green-600 to-green-800',
};

export const PriceTracker = ({ prices }: PriceTrackerProps) => {
  const sortedPrices = [...prices].sort((a, b) => a.currentPrice - b.currentPrice);
  const bestPrice = sortedPrices[0];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-card-strong p-6 rounded-2xl"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-xl font-bold">Price Tracker</h3>
        <span className="badge-best-value">Best Value</span>
      </div>

      <div className="space-y-4">
        {sortedPrices.map((price, index) => {
          const isBest = index === 0;
          
          return (
            <motion.div
              key={price.store}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className={`relative p-4 rounded-xl transition-all duration-300 ${
                isBest
                  ? 'neon-border-cyan bg-neon-cyan/5'
                  : 'border border-border bg-muted/30 hover:border-primary/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${storeColors[price.store]} flex items-center justify-center text-xl`}>
                    {storeLogos[price.store]}
                  </div>
                  <div>
                    <p className="font-semibold">{price.storeName}</p>
                    {price.discount > 0 && (
                      <span className="text-xs text-neon-pink font-medium">
                        {price.discount}% OFF
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    {price.discount > 0 && (
                      <p className="text-sm text-muted-foreground line-through">
                        ${price.originalPrice}
                      </p>
                    )}
                    <p className={`font-bold text-lg ${isBest ? 'text-neon-cyan' : 'text-foreground'}`}>
                      ${price.currentPrice}
                    </p>
                  </div>
                  
                  <button className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                    isBest
                      ? 'bg-neon-cyan text-background hover:shadow-lg hover:shadow-neon-cyan/30'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}>
                    Buy
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>

              {isBest && (
                <div className="absolute -top-2 left-4">
                  <span className="badge-best-value text-xs">Lowest Price</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
