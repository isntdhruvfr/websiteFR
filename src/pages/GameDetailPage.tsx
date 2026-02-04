import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PriceTracker } from '@/components/PriceTracker';
import { getGameBySlug } from '@/data/games';
import { 
  ArrowLeft, 
  Calendar, 
  Building2, 
  Star, 
  Shield, 
  Play,
  Monitor,
  Cpu,
  HardDrive,
  MemoryStick,
  Gamepad2
} from 'lucide-react';
import { useState } from 'react';

const GameDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const game = getGameBySlug(slug || '');
  const [selectedTab, setSelectedTab] = useState<'about' | 'specs' | 'media'>('about');
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

  if (!game) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Game Not Found</h1>
          <p className="text-muted-foreground mb-8">The game you're looking for doesn't exist.</p>
          <Link to="/games" className="btn-neon inline-flex items-center gap-2">
            <ArrowLeft size={18} />
            Back to Library
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={game.bannerImage}
            alt={game.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <Link 
              to="/games" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft size={18} />
              Back to Library
            </Link>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Game Cover */}
              <div className="hidden lg:block w-64 flex-shrink-0">
                <div className="glass-card-strong rounded-2xl overflow-hidden neon-border-purple">
                  <img
                    src={game.coverImage}
                    alt={game.title}
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
              </div>

              {/* Game Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {game.genres.map((genre) => (
                    <span key={genre} className="glass-card px-3 py-1 rounded-full text-sm">
                      {genre}
                    </span>
                  ))}
                  <span className="badge-discount flex items-center gap-1">
                    <Shield size={14} />
                    {game.esrbRating}
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {game.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <Building2 size={18} />
                    {game.developer}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={18} />
                    {game.releaseYear}
                  </span>
                  <span className="flex items-center gap-2 text-neon-cyan">
                    <Star size={18} fill="currentColor" />
                    {game.rating}/10
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((platform) => (
                    <span key={platform} className="glass-card px-3 py-1 rounded-lg text-sm flex items-center gap-2">
                      <Gamepad2 size={14} />
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Tabs */}
              <div className="glass-card p-1 rounded-xl inline-flex">
                {(['about', 'specs', 'media'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-6 py-3 rounded-lg font-medium capitalize transition-all duration-300 ${
                      selectedTab === tab
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={selectedTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {selectedTab === 'about' && (
                  <div className="space-y-8">
                    {/* Description */}
                    <div className="glass-card-strong p-6 rounded-2xl">
                      <h2 className="font-display text-2xl font-bold mb-4">About the Game</h2>
                      <p className="text-muted-foreground leading-relaxed">{game.description}</p>
                    </div>

                    {/* Story */}
                    <div className="glass-card-strong p-6 rounded-2xl">
                      <h2 className="font-display text-2xl font-bold mb-4">Story</h2>
                      <p className="text-muted-foreground leading-relaxed">{game.story}</p>
                    </div>

                    {/* Features */}
                    <div className="glass-card-strong p-6 rounded-2xl">
                      <h2 className="font-display text-2xl font-bold mb-4">Key Features</h2>
                      <ul className="space-y-3">
                        {game.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Characters */}
                    <div className="glass-card-strong p-6 rounded-2xl">
                      <h2 className="font-display text-2xl font-bold mb-4">Characters</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {game.characters.map((character) => (
                          <div key={character.name} className="glass-card p-4 rounded-xl">
                            <h3 className="font-bold text-lg">{character.name}</h3>
                            <p className="text-sm text-primary mb-2">{character.role}</p>
                            <p className="text-sm text-muted-foreground">{character.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {selectedTab === 'specs' && (
                  <div className="glass-card-strong p-6 rounded-2xl">
                    <h2 className="font-display text-2xl font-bold mb-6">System Requirements</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Minimum */}
                      <div className="space-y-4">
                        <h3 className="font-bold text-lg flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-neon-cyan" />
                          Minimum
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Monitor className="text-muted-foreground flex-shrink-0" size={18} />
                            <div>
                              <p className="text-sm text-muted-foreground">OS</p>
                              <p>{game.minimumRequirements.os}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Cpu className="text-muted-foreground flex-shrink-0" size={18} />
                            <div>
                              <p className="text-sm text-muted-foreground">Processor</p>
                              <p>{game.minimumRequirements.processor}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <MemoryStick className="text-muted-foreground flex-shrink-0" size={18} />
                            <div>
                              <p className="text-sm text-muted-foreground">Memory</p>
                              <p>{game.minimumRequirements.memory}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Gamepad2 className="text-muted-foreground flex-shrink-0" size={18} />
                            <div>
                              <p className="text-sm text-muted-foreground">Graphics</p>
                              <p>{game.minimumRequirements.graphics}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <HardDrive className="text-muted-foreground flex-shrink-0" size={18} />
                            <div>
                              <p className="text-sm text-muted-foreground">Storage</p>
                              <p>{game.minimumRequirements.storage}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Recommended */}
                      <div className="space-y-4">
                        <h3 className="font-bold text-lg flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-neon-green" />
                          Recommended
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Monitor className="text-muted-foreground flex-shrink-0" size={18} />
                            <div>
                              <p className="text-sm text-muted-foreground">OS</p>
                              <p>{game.recommendedRequirements.os}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Cpu className="text-muted-foreground flex-shrink-0" size={18} />
                            <div>
                              <p className="text-sm text-muted-foreground">Processor</p>
                              <p>{game.recommendedRequirements.processor}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <MemoryStick className="text-muted-foreground flex-shrink-0" size={18} />
                            <div>
                              <p className="text-sm text-muted-foreground">Memory</p>
                              <p>{game.recommendedRequirements.memory}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Gamepad2 className="text-muted-foreground flex-shrink-0" size={18} />
                            <div>
                              <p className="text-sm text-muted-foreground">Graphics</p>
                              <p>{game.recommendedRequirements.graphics}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <HardDrive className="text-muted-foreground flex-shrink-0" size={18} />
                            <div>
                              <p className="text-sm text-muted-foreground">Storage</p>
                              <p>{game.recommendedRequirements.storage}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedTab === 'media' && (
                  <div className="space-y-8">
                    {/* Trailer */}
                    <div className="glass-card-strong p-6 rounded-2xl">
                      <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
                        <Play size={24} className="text-primary" />
                        Trailer
                      </h2>
                      <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                        <iframe
                          src={game.trailerUrl}
                          title={`${game.title} Trailer`}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>

                    {/* Screenshots */}
                    <div className="glass-card-strong p-6 rounded-2xl">
                      <h2 className="font-display text-2xl font-bold mb-4">Screenshots</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {game.screenshots.map((screenshot, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedScreenshot(screenshot)}
                            className="aspect-video rounded-xl overflow-hidden hover:ring-2 ring-primary transition-all duration-300"
                          >
                            <img
                              src={screenshot}
                              alt={`${game.title} Screenshot ${index + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Sidebar - Price Tracker */}
            <div className="space-y-6">
              <PriceTracker prices={game.prices} />

              {/* Quick Info */}
              <div className="glass-card-strong p-6 rounded-2xl">
                <h3 className="font-display text-lg font-bold mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Developer</span>
                    <span className="font-medium">{game.developer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Publisher</span>
                    <span className="font-medium">{game.publisher}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Release Year</span>
                    <span className="font-medium">{game.releaseYear}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="font-medium text-neon-cyan">{game.rating}/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Modal */}
      {selectedScreenshot && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
          onClick={() => setSelectedScreenshot(null)}
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedScreenshot}
            alt="Screenshot"
            className="max-w-full max-h-[90vh] rounded-2xl object-contain"
          />
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default GameDetailPage;
