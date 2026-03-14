import React from 'react';
import { Link } from 'react-router-dom';
import { Search, PenSquare, Bell, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold tracking-tight">ProBlog</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Home</Link>
              <Link to="/articles" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Articles</Link>
              <Link to="/pricing" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Pricing</Link>
              <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">About</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-slate-100 rounded-full px-3 py-1.5 gap-2">
              <Search className="w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="bg-transparent border-none focus:ring-0 text-sm w-40"
              />
            </div>
            
            <Link to="/editor" className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              <PenSquare className="w-4 h-4" />
              <span>Write</span>
            </Link>

            <Link to="/notifications" className="p-2 text-slate-600 hover:text-primary transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </Link>

            <Link to="/profile/1" className="flex items-center gap-2 p-1 pl-2 border border-slate-200 rounded-full hover:border-primary transition-colors">
              <span className="hidden lg:block text-sm font-medium text-slate-700">Alex Rivera</span>
              <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200">
                <img src="https://picsum.photos/seed/alex/100/100" alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
