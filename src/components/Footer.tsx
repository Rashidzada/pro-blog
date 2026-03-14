import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold tracking-tight">ProBlog</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The premier platform for SaaS engineers and designers to share insights, build their brand, and stay ahead of the curve.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-sm text-slate-500 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/pricing" className="text-sm text-slate-500 hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-500 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="/articles" className="text-sm text-slate-500 hover:text-primary transition-colors">Latest Articles</Link></li>
              <li><Link to="/newsletter" className="text-sm text-slate-500 hover:text-primary transition-colors">Newsletter</Link></li>
              <li><Link to="/help" className="text-sm text-slate-500 hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/guides" className="text-sm text-slate-500 hover:text-primary transition-colors">Guides</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-sm text-slate-500 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-slate-500 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-sm text-slate-500 hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">© 2024 ProBlog Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/status" className="text-sm text-slate-400 hover:text-primary transition-colors">System Status</Link>
            <Link to="/security" className="text-sm text-slate-400 hover:text-primary transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
