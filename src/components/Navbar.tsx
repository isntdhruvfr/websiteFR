import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Gamepad2, Menu, X } from 'lucide-react';
import { useAuth } from '@/hooks/useSupabaseAuth';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/games', label: 'Games' },
  { href: '/deals', label: 'Deals' },
  { href: '/community', label: 'Community' },
];

export const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="glass-card-strong border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-neon-purple/30 blur-xl rounded-full group-hover:bg-neon-purple/50 transition-all duration-300" />
                <Gamepad2 className="relative w-8 h-8 text-primary" />
              </div>
              <span className="font-display text-xl lg:text-2xl font-bold gradient-text">
                Gaming Hub
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`neon-link font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              {/* Show user email + sign out when logged in */}
              {(() => {
                try {
                  const { user, signOut } = useAuth();
                  if (user) {
                    return (
                      <>
                        <span className="text-sm text-muted-foreground">{user.email}</span>
                        <button
                          onClick={() => signOut()}
                          className="btn-ghost-neon text-sm px-4 py-2"
                        >
                          Sign Out
                        </button>
                      </>
                    );
                  }
                } catch (_) {
                  /* hook only available in app context */
                }

                return (
                  <>
                    <Link
                      to="/login"
                      className="btn-ghost-neon text-sm px-4 py-2"
                    >
                      Login
                    </Link>
                    <Link
                      to="/login"
                      className="btn-neon text-sm px-4 py-2"
                    >
                      Sign Up
                    </Link>
                  </>
                );
              })()}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2 font-medium ${
                    location.pathname === link.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-4 pt-4 border-t border-border/50">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-ghost-neon text-sm px-4 py-2 flex-1 text-center"
                >
                  Login
                </Link>
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-neon text-sm px-4 py-2 flex-1 text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};
