import React, { useState } from 'react';
import { posts } from '../data';
import { ArticleCard } from '../components/ArticleCard';
import { ChevronLeft, ChevronRight, Filter, Search } from 'lucide-react';

const Articles: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Topics');
  const categories = ['All Topics', 'Technology', 'Architecture', 'Frontend', 'Backend', 'Design', 'DevOps', 'AI'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Latest Insights</h1>
        <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
          Explore our collection of in-depth articles, tutorials, and case studies from the world's leading SaaS engineers and designers.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="relative flex-grow lg:flex-grow-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all w-full lg:w-64"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {posts.map(post => (
          <ArticleCard key={post.id} post={post} />
        ))}
        {/* Repeat some posts to fill the grid for demo */}
        {posts.map(post => (
          <ArticleCard key={`${post.id}-copy`} post={{...post, id: `${post.id}-copy`}} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2">
        <button className="p-2 border border-slate-200 rounded-xl text-slate-400 hover:text-primary hover:border-primary transition-all disabled:opacity-50" disabled>
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-1">
          {[1, 2, 3, '...', 12].map((page, idx) => (
            <button 
              key={idx}
              className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                page === 1 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button className="p-2 border border-slate-200 rounded-xl text-slate-400 hover:text-primary hover:border-primary transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Articles;
