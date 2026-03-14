import React from 'react';
import { Link } from 'react-router-dom';
import { posts, authors } from '../data';
import { ArticleCard } from '../components/ArticleCard';
import { TrendingUp, Users, Mail, ArrowRight, Zap, Star, Flame } from 'lucide-react';
import { motion } from 'motion/react';

const Home: React.FC = () => {
  const featuredPost = posts[0];
  const trendingPosts = posts.slice(0, 3);
  const categories = ['Architecture', 'Frontend', 'Backend', 'Design', 'DevOps', 'Security', 'AI', 'Career'];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <Star className="w-3 h-3 fill-primary" />
                Featured Post
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
                {featuredPost.title}
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 mb-10">
                <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-12 h-12 rounded-full border-2 border-white shadow-md" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold text-slate-900">{featuredPost.author.name}</div>
                  <div className="text-sm text-slate-500">{featuredPost.author.role}</div>
                </div>
              </div>
              <Link 
                to={`/article/${featuredPost.id}`}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
              >
                Read Featured Post
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">12.4k</div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Active Readers</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
              <Flame className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Trending on ProBlog</h2>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">#</th>
                    <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Article</th>
                    <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Author</th>
                    <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                    <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody>
                  {trendingPosts.map((post, idx) => (
                    <tr key={post.id} className="group hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0">
                      <td className="px-8 py-6 text-lg font-bold text-slate-300 group-hover:text-primary transition-colors">0{idx + 1}</td>
                      <td className="px-8 py-6">
                        <Link to={`/article/${post.id}`} className="font-bold text-slate-900 hover:text-primary transition-colors block mb-1">{post.title}</Link>
                        <span className="text-xs text-slate-400">{post.category} • {post.readTime}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
                          <span className="text-sm font-medium text-slate-700">{post.author.name}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          post.status === 'Hot' ? 'bg-orange-100 text-orange-600' :
                          post.status === 'Popular' ? 'bg-blue-100 text-blue-600' :
                          'bg-emerald-100 text-emerald-600'
                        }`}>
                          {post.status}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <Link to={`/article/${post.id}`} className="p-2 text-slate-300 hover:text-primary transition-colors inline-block">
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 tracking-tight">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <Link 
                key={cat} 
                to={`/articles?category=${cat}`}
                className="px-6 py-3 rounded-2xl border border-slate-200 text-sm font-bold text-slate-600 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Authors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-2">
                <Users className="w-4 h-4" />
                Community
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Popular Authors</h2>
            </div>
            <Link to="/authors" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
              View all authors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {authors.map(author => (
              <Link key={author.id} to={`/profile/${author.id}`} className="group text-center">
                <div className="relative mb-4 inline-block">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-primary transition-colors">
                    <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  {author.isVerified && (
                    <div className="absolute bottom-1 right-1 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center border-2 border-white">
                      <Zap className="w-3 h-3 fill-white" />
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{author.name}</h4>
                <p className="text-xs text-slate-500">{author.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">Stay Ahead of the Curve</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 50,000+ engineers and designers receiving our weekly curated insights on SaaS, architecture, and design.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/20">
                Subscribe
              </button>
            </form>
            <p className="text-slate-500 text-xs mt-6">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
