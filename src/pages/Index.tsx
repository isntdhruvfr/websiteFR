import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedGames } from '@/components/FeaturedGames';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Percent, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedGames />

        {/* Deals Section Preview */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-transparent to-neon-cyan/10" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card-strong rounded-3xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-neon-pink/20 flex items-center justify-center">
                      <Flame className="w-6 h-6 text-neon-pink" />
                    </div>
                    <span className="badge-discount">Hot Deals</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                    Save Up To <span className="neon-text-purple">80%</span> Off
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-lg">
                    Compare prices across Steam, Epic Games, PlayStation, and Xbox. 
                    Never miss a deal with our real-time price tracking.
                  </p>
                  <Link to="/deals" className="btn-neon inline-flex items-center gap-2">
                    Browse Deals
                    <ArrowRight size={18} />
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-4 rounded-xl text-center">
                    <Percent className="w-8 h-8 text-neon-green mx-auto mb-2" />
                    <p className="text-2xl font-bold">500+</p>
                    <p className="text-sm text-muted-foreground">Active Deals</p>
                  </div>
                  <div className="glass-card p-4 rounded-xl text-center">
                    <Users className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
                    <p className="text-2xl font-bold">2M+</p>
                    <p className="text-sm text-muted-foreground">Happy Gamers</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Community Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Join Our <span className="gradient-text">Community</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Connect with millions of gamers. Share experiences, discover new games, 
                and be part of something bigger.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['RPG Sanctuary', 'FPS Arena', 'Indie Corner'].map((hub) => (
                  <Link
                    key={hub}
                    to="/community"
                    className="glass-card px-6 py-3 rounded-full hover:neon-border-purple transition-all duration-300"
                  >
                    {hub}
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/community" className="btn-ghost-neon inline-flex items-center gap-2">
                  Explore Community
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
