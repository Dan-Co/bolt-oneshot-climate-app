import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Earth, Home, Gamepad2, BarChart3, BookOpen, Info } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/quest', icon: Gamepad2, label: 'Quest' },
    { path: '/dashboard', icon: BarChart3, label: 'Dashboard' },
    { path: '/story', icon: BookOpen, label: 'Story Builder' },
    { path: '/about', icon: Info, label: 'How I Built This' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-green-900 to-blue-800">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-white hover:text-green-300 transition-colors">
              <Earth className="w-8 h-8" />
              <span className="font-bold text-xl">Climate Quest</span>
            </Link>
            
            <div className="flex space-x-1">
              {navItems.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === path
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-300">
            <p className="text-sm">
              Built with ❤️ using <span className="text-green-400 font-semibold">Bolt.new</span> - 
              AI-powered single-shot app development
            </p>
            <p className="text-xs mt-2 opacity-75">
              Race to Net Zero • Education through Innovation • Climate Action Through Technology
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;