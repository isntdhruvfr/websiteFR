import { Gamepad2, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-neon-purple/30 blur-xl rounded-full" />
                <Gamepad2 className="relative w-8 h-8 text-primary" />
              </div>
              <span className="font-display text-xl font-bold gradient-text">
                Gaming Hub
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your ultimate destination for game discovery, deals, and community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/games" className="text-muted-foreground hover:text-primary transition-colors text-sm">Game Library</Link></li>
              <li><Link to="/deals" className="text-muted-foreground hover:text-primary transition-colors text-sm">Best Deals</Link></li>
              <li><Link to="/community" className="text-muted-foreground hover:text-primary transition-colors text-sm">Community</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 glass-card flex items-center justify-center rounded-lg hover:neon-border-purple transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-card flex items-center justify-center rounded-lg hover:neon-border-purple transition-all duration-300"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Gaming Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
