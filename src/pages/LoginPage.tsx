import { useState } from 'react';
import { useAuth } from '@/hooks/useSupabaseAuth';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Eye, EyeOff, Gamepad2, Chrome, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signIn(email, password);
        alert('Logged in successfully');
      } else {
        await signUp(email, password);
        alert('Sign up successful — check your email for confirmation if required');
      }
    } catch (err: any) {
      alert(err?.message ?? 'Authentication failed');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="min-h-screen flex">
        {/* Left Side - Cinematic Background */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          {/* Background Collage */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200)',
              }}
            />
            <div 
              className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-50"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200)',
              }}
            />
          </div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
          
          {/* Content */}
          <div className="relative z-10 p-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-5xl font-bold mb-6 leading-tight">
                Join the
                <br />
                <span className="gradient-text">Gaming Revolution</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Access exclusive deals, track your wishlist, and connect with millions of gamers worldwide.
              </p>
            </motion.div>

            {/* Floating Game Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 flex gap-4"
            >
              {['GTA V', 'God of War', 'RDR2'].map((game, i) => (
                <div
                  key={game}
                  className="glass-card px-4 py-2 rounded-full animate-float"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  <span className="text-sm font-medium">{game}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            {/* Logo (Mobile) */}
            <div className="lg:hidden flex items-center gap-3 mb-8 justify-center">
              <Gamepad2 className="w-10 h-10 text-primary" />
              <span className="font-display text-2xl font-bold gradient-text">Gaming Hub</span>
            </div>

            {/* Glass Card Form */}
            <div className="glass-card-strong p-8 rounded-2xl">
              {/* Toggle */}
              <div className="flex mb-8 p-1 glass-card rounded-xl">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isLogin ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 rounded-lg font-medium transition-all duration-300 ${
                    !isLogin ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={isLogin ? 'login' : 'signup'}
                  initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display text-2xl font-bold mb-2">
                    {isLogin ? 'Welcome Back' : 'Create Account'}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {isLogin
                      ? 'Enter your credentials to access your account'
                      : 'Join the ultimate gaming community'}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {!isLogin && (
                      <div>
                        <label className="block text-sm font-medium mb-2">Username</label>
                        <input
                          type="text"
                          placeholder="Choose a username"
                          className="input-glass"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-glass"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="input-glass pr-12"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>

                    {isLogin && (
                      <div className="flex justify-end">
                        <a href="#" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </a>
                      </div>
                    )}

                    <button type="submit" className="btn-neon w-full text-lg">
                      {isLogin ? 'Login' : 'Create Account'}
                    </button>
                  </form>

                  {/* Divider */}
                  <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-muted-foreground text-sm">or continue with</span>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  {/* Social Login */}
                  <div className="flex gap-4">
                    <button className="flex-1 glass-card py-3 rounded-lg flex items-center justify-center gap-2 hover:neon-border-purple transition-all duration-300">
                      <Chrome size={20} />
                      <span className="text-sm font-medium">Google</span>
                    </button>
                    <button className="flex-1 glass-card py-3 rounded-lg flex items-center justify-center gap-2 hover:neon-border-purple transition-all duration-300">
                      <MessageCircle size={20} />
                      <span className="text-sm font-medium">Discord</span>
                    </button>
                    <button className="flex-1 glass-card py-3 rounded-lg flex items-center justify-center gap-2 hover:neon-border-purple transition-all duration-300">
                      <Gamepad2 size={20} />
                      <span className="text-sm font-medium">Steam</span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer Link */}
            <p className="text-center text-muted-foreground text-sm mt-6">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:underline font-medium"
              >
                {isLogin ? 'Sign up' : 'Login'}
              </button>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
