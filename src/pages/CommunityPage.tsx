import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  Users, 
  Sword, 
  Target, 
  Sparkles, 
  MessageSquare, 
  Heart, 
  Share2, 
  Image as ImageIcon,
  Trophy,
  Star,
  Clock
} from 'lucide-react';

interface Hub {
  id: string;
  name: string;
  icon: React.ElementType;
  members: string;
  description: string;
  color: string;
}

interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
    rank: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: string;
  hub: string;
}

const hubs: Hub[] = [
  {
    id: 'rpg',
    name: 'RPG Sanctuary',
    icon: Sword,
    members: '125K',
    description: 'For lovers of epic quests and character building',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'fps',
    name: 'FPS Arena',
    icon: Target,
    members: '89K',
    description: 'Competitive shooters and tactical gameplay',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 'indie',
    name: 'Indie Corner',
    icon: Sparkles,
    members: '67K',
    description: 'Discover hidden gems and unique experiences',
    color: 'from-cyan-500 to-blue-500',
  },
];

const mockPosts: Post[] = [
  {
    id: '1',
    user: {
      name: 'DragonSlayer99',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
      rank: 'Legendary',
    },
    content: 'Just finished Elden Ring for the 5th time. The Malenia fight never gets old! Anyone else still playing? 🔥',
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600',
    likes: 234,
    comments: 45,
    timestamp: '2 hours ago',
    hub: 'RPG Sanctuary',
  },
  {
    id: '2',
    user: {
      name: 'NightOwlGamer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      rank: 'Elite',
    },
    content: 'The Witcher 3 is still the gold standard for open-world RPGs. Change my mind.',
    likes: 567,
    comments: 123,
    timestamp: '5 hours ago',
    hub: 'RPG Sanctuary',
  },
  {
    id: '3',
    user: {
      name: 'PixelHunter',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      rank: 'Pro',
    },
    content: 'Just discovered this amazing indie game called Hades. The art style and gameplay are incredible! Highly recommend 🎮',
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600',
    likes: 189,
    comments: 34,
    timestamp: '1 day ago',
    hub: 'Indie Corner',
  },
];

const CommunityPage = () => {
  const [selectedHub, setSelectedHub] = useState<string | null>(null);
  const [postContent, setPostContent] = useState('');

  const filteredPosts = selectedHub
    ? mockPosts.filter((post) => post.hub === hubs.find((h) => h.id === selectedHub)?.name)
    : mockPosts;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Gaming <span className="gradient-text">Community</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Connect with fellow gamers, share your experiences, and discover new games together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              {/* Create Post */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-card-strong p-6 rounded-2xl"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold">
                    G
                  </div>
                  <div className="flex-1">
                    <textarea
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                      placeholder="Share what's on your mind..."
                      className="input-glass w-full resize-none"
                      rows={3}
                    />
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex gap-2">
                        <button className="p-2 glass-card rounded-lg hover:neon-border-purple transition-all duration-300">
                          <ImageIcon size={20} className="text-muted-foreground" />
                        </button>
                      </div>
                      <button className="btn-neon text-sm px-4 py-2">
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Posts */}
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="glass-card-strong p-6 rounded-2xl"
                >
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.user.avatar}
                        alt={post.user.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold">{post.user.name}</h3>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                            {post.user.rank}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock size={14} />
                          <span>{post.timestamp}</span>
                          <span>•</span>
                          <span>{post.hub}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Post Content */}
                  <p className="mb-4 leading-relaxed">{post.content}</p>

                  {/* Post Image */}
                  {post.image && (
                    <div className="rounded-xl overflow-hidden mb-4">
                      <img
                        src={post.image}
                        alt="Post"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="flex items-center gap-6 pt-4 border-t border-border">
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-neon-pink transition-colors">
                      <Heart size={20} />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <MessageSquare size={20} />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors">
                      <Share2 size={20} />
                      <span>Share</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Interest Hubs */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card-strong p-6 rounded-2xl"
              >
                <h2 className="font-display text-xl font-bold mb-4">Interest Hubs</h2>
                <div className="space-y-3">
                  {hubs.map((hub) => {
                    const Icon = hub.icon;
                    return (
                      <button
                        key={hub.id}
                        onClick={() => setSelectedHub(selectedHub === hub.id ? null : hub.id)}
                        className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                          selectedHub === hub.id
                            ? 'neon-border-purple bg-primary/10'
                            : 'glass-card hover:bg-muted/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${hub.color} flex items-center justify-center`}>
                            <Icon size={20} className="text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold">{hub.name}</h3>
                            <p className="text-xs text-muted-foreground">{hub.members} members</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              {/* User Profile Preview */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card-strong p-6 rounded-2xl"
              >
                <h2 className="font-display text-xl font-bold mb-4">Your Profile</h2>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold mb-3">
                    G
                  </div>
                  <h3 className="font-bold text-lg">Guest User</h3>
                  <p className="text-sm text-muted-foreground">Join to unlock features</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-neon-cyan">
                      <Trophy size={16} />
                    </div>
                    <p className="text-xl font-bold">0</p>
                    <p className="text-xs text-muted-foreground">Achievements</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-neon-pink">
                      <Star size={16} />
                    </div>
                    <p className="text-xl font-bold">0</p>
                    <p className="text-xs text-muted-foreground">Wishlist</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-primary">
                      <Users size={16} />
                    </div>
                    <p className="text-xl font-bold">0</p>
                    <p className="text-xs text-muted-foreground">Friends</p>
                  </div>
                </div>

                <button className="btn-ghost-neon w-full">
                  Create Account
                </button>
              </motion.div>

              {/* Top Contributors */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card-strong p-6 rounded-2xl"
              >
                <h2 className="font-display text-xl font-bold mb-4">Top Contributors</h2>
                <div className="space-y-3">
                  {[
                    { name: 'DragonSlayer99', points: '15.2K', rank: 1 },
                    { name: 'NightOwlGamer', points: '12.8K', rank: 2 },
                    { name: 'PixelHunter', points: '10.5K', rank: 3 },
                  ].map((user) => (
                    <div key={user.name} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        user.rank === 1 ? 'bg-yellow-500/20 text-yellow-500' :
                        user.rank === 2 ? 'bg-gray-400/20 text-gray-400' :
                        'bg-orange-500/20 text-orange-500'
                      }`}>
                        {user.rank}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.points} points</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CommunityPage;
