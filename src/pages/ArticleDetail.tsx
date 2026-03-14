import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts, comments } from '../data';
import { Clock, MessageSquare, Heart, Bookmark, Share2, Twitter, Linkedin, Link as LinkIcon, Send, MoreHorizontal, Reply, Flag } from 'lucide-react';
import { motion } from 'motion/react';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === id) || posts[0];

  return (
    <div className="pb-20">
      {/* Article Header */}
      <header className="pt-12 pb-12 lg:pt-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-slate-500 font-medium">{post.date}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Link to={`/profile/${post.author.id}`} className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </Link>
              <div>
                <div className="flex items-center gap-2">
                  <Link to={`/profile/${post.author.id}`} className="font-bold text-slate-900 hover:text-primary transition-colors">{post.author.name}</Link>
                  <button className="text-xs font-bold text-primary hover:underline">Follow</button>
                </div>
                <div className="text-xs text-slate-500">{post.author.role} • {post.readTime}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-xl border border-slate-200 transition-all">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-xl border border-slate-200 transition-all">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                <Heart className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 sticky top-32 h-fit">
            <div className="flex flex-col gap-6 items-center">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest vertical-text mb-4">Share</div>
              <button className="p-3 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-full transition-all"><Twitter className="w-5 h-5" /></button>
              <button className="p-3 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-full transition-all"><Linkedin className="w-5 h-5" /></button>
              <button className="p-3 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-full transition-all"><LinkIcon className="w-5 h-5" /></button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8">
            <div className="aspect-video rounded-3xl overflow-hidden mb-12 shadow-xl">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>

            <article className="markdown-body" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-12 border-t border-slate-100">
              {['SaaS', 'Engineering', 'Architecture', 'Cloud', 'Future'].map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-sm font-medium hover:bg-slate-200 cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Bio Card */}
            <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left">
              <img src={post.author.avatar} alt={post.author.name} className="w-24 h-24 rounded-2xl object-cover shadow-lg" referrerPolicy="no-referrer" />
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Written by {post.author.name}</h4>
                    <p className="text-sm text-primary font-bold">{post.author.role}</p>
                  </div>
                  <button className="px-6 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-primary hover:text-primary transition-all">
                    Follow
                  </button>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {post.author.bio}
                </p>
              </div>
            </div>

            {/* Comments Section */}
            <section className="mt-20">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-bold text-slate-900">Responses ({post.comments})</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  Sort by: <button className="font-bold text-slate-900 flex items-center gap-1">Newest <MoreHorizontal className="w-4 h-4" /></button>
                </div>
              </div>

              {/* Comment Input */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-12 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                <div className="flex gap-4">
                  <img src="https://picsum.photos/seed/alex/100/100" alt="Your avatar" className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                  <div className="flex-grow">
                    <textarea 
                      placeholder="What are your thoughts?" 
                      className="w-full bg-transparent border-none focus:ring-0 text-slate-700 placeholder:text-slate-400 resize-none h-24"
                    ></textarea>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <div className="flex gap-2">
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors"><LinkIcon className="w-4 h-4" /></button>
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors"><Share2 className="w-4 h-4" /></button>
                      </div>
                      <button className="px-6 py-2 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all flex items-center gap-2">
                        Publish <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment List */}
              <div className="space-y-10">
                {comments.map(comment => (
                  <div key={comment.id} className="group">
                    <div className="flex gap-4 mb-4">
                      <img src={comment.author.avatar} alt={comment.author.name} className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900">{comment.author.name}</span>
                            <span className="text-xs text-slate-400">{comment.date}</span>
                          </div>
                          <button className="p-1 text-slate-300 hover:text-slate-600 transition-colors opacity-0 group-hover:opacity-100"><MoreHorizontal className="w-4 h-4" /></button>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-4">{comment.content}</p>
                        <div className="flex items-center gap-6">
                          <button className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-primary transition-colors">
                            <Heart className="w-4 h-4" /> {comment.likes}
                          </button>
                          <button className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-primary transition-colors">
                            <Reply className="w-4 h-4" /> Reply
                          </button>
                          <button className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-red-500 transition-colors ml-auto opacity-0 group-hover:opacity-100">
                            <Flag className="w-4 h-4" /> Report
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Replies */}
                    {comment.replies && (
                      <div className="ml-14 mt-6 space-y-6 border-l-2 border-slate-50 pl-6">
                        {comment.replies.map(reply => (
                          <div key={reply.id} className="flex gap-4">
                            <img src={reply.author.avatar} alt={reply.author.name} className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-slate-900 text-sm">{reply.author.name}</span>
                                <span className="text-[10px] text-slate-400">{reply.date}</span>
                              </div>
                              <p className="text-sm text-slate-600 leading-relaxed mb-2">{reply.content}</p>
                              <button className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 hover:text-primary transition-colors">
                                <Heart className="w-3.5 h-3.5" /> {reply.likes}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Right Sidebar - Related */}
          <aside className="lg:col-span-3">
            <div className="sticky top-32 space-y-12">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  Related Articles
                </h3>
                <div className="space-y-8">
                  {posts.slice(1, 4).map(p => (
                    <Link key={p.id} to={`/article/${p.id}`} className="group block">
                      <div className="aspect-video rounded-xl overflow-hidden mb-3">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                      </div>
                      <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight mb-2">{p.title}</h4>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        {p.category} • {p.readTime}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-primary rounded-3xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-xl font-bold mb-4 relative z-10">Get the best of ProBlog in your inbox.</h3>
                <p className="text-primary-100 text-sm mb-6 relative z-10">Weekly insights on SaaS and design.</p>
                <form className="space-y-3 relative z-10">
                  <input type="email" placeholder="Email address" className="w-full bg-white/20 border border-white/20 rounded-xl px-4 py-2 text-sm placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" />
                  <button className="w-full bg-white text-primary font-bold py-2 rounded-xl text-sm hover:bg-slate-50 transition-colors">Subscribe</button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
