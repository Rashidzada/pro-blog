import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { Clock, MessageSquare, Heart, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  post: Post;
  variant?: 'horizontal' | 'vertical';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ post, variant = 'vertical' }) => {
  if (variant === 'horizontal') {
    return (
      <Link to={`/article/${post.id}`} className="group flex flex-col sm:flex-row gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
        <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden shrink-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">{post.category}</span>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-slate-500">{post.date}</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
          <p className="text-sm text-slate-500 line-clamp-2 mb-3">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</div>
            <div className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {post.comments}</div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/article/${post.id}`} className="group flex flex-col rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      <div className="aspect-video overflow-hidden relative">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-primary uppercase tracking-wider shadow-sm">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
          <span className="text-xs font-medium text-slate-600">{post.author.name}</span>
          <span className="text-slate-300 ml-auto">•</span>
          <span className="text-xs text-slate-400">{post.date}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-tight">
          {post.title}
        </h3>
        <p className="text-sm text-slate-500 line-clamp-3 mb-6 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</div>
            <div className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {post.comments}</div>
          </div>
          <div className="text-primary font-bold text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Read <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </Link>
  );
};
