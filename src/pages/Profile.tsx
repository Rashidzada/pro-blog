import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { authors, posts } from '../data';
import { ArticleCard } from '../components/ArticleCard';
import { Zap, Users, FileText, MessageCircle, Twitter, Github, Linkedin, Globe, Settings, MoreHorizontal, Plus } from 'lucide-react';

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const author = authors.find(a => a.id === id) || authors[0];
  const [activeTab, setActiveTab] = useState('Latest');

  return (
    <div className="pb-20">
      {/* Profile Hero */}
      <section className="pt-12 pb-12 lg:pt-20 lg:pb-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            <div className="relative">
              <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
                <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              {author.isVerified && (
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary text-white rounded-2xl flex items-center justify-center border-4 border-white shadow-lg">
                  <Zap className="w-5 h-5 fill-white" />
                </div>
              )}
            </div>

            <div className="flex-grow text-center lg:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
                <h1 className="text-4xl font-bold text-slate-900 tracking-tight">{author.name}</h1>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">Pro Member</span>
                  <span className="px-3 py-1 bg-slate-200 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">{author.role}</span>
                </div>
              </div>
              
              <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
                {author.bio}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900">{(author.followers! / 1000).toFixed(1)}k</span>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Followers</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900">{author.following}</span>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Following</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900">{author.posts}</span>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Posts</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Follow
                </button>
                <button className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:border-primary hover:text-primary transition-all flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Message
                </button>
                <button className="p-3 bg-white border border-slate-200 text-slate-400 rounded-xl hover:text-primary hover:border-primary transition-all">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="hidden xl:block w-64 space-y-6">
              <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Connect</h4>
                <div className="space-y-4">
                  <a href="#" className="flex items-center gap-3 text-sm text-slate-600 hover:text-primary transition-colors">
                    <Twitter className="w-4 h-4" /> @alexrivera
                  </a>
                  <a href="#" className="flex items-center gap-3 text-sm text-slate-600 hover:text-primary transition-colors">
                    <Github className="w-4 h-4" /> arivera-dev
                  </a>
                  <a href="#" className="flex items-center gap-3 text-sm text-slate-600 hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4" /> alex-rivera
                  </a>
                  <a href="#" className="flex items-center gap-3 text-sm text-slate-600 hover:text-primary transition-colors">
                    <Globe className="w-4 h-4" /> alexrivera.io
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex border-b border-slate-100 mb-12">
          {['Latest', 'Popular', 'About'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 text-sm font-bold transition-all relative ${
                activeTab === tab ? 'text-primary' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full"></div>
              )}
            </button>
          ))}
        </div>

        {activeTab === 'Latest' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {posts.map(post => (
              <ArticleCard key={post.id} post={post} />
            ))}
            {posts.map(post => (
              <ArticleCard key={`${post.id}-copy`} post={{...post, id: `${post.id}-copy`}} />
            ))}
          </div>
        )}

        {activeTab === 'Popular' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[...posts].sort((a, b) => (b.likes || 0) - (a.likes || 0)).map(post => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {activeTab === 'About' && (
          <div className="max-w-3xl mx-auto py-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">About Alex</h3>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
              <p>
                I'm a Senior SaaS Engineer with over 10 years of experience in building scalable cloud architectures. My journey began in the early days of AWS, and I've since witnessed the evolution of the web from monolithic structures to the distributed edge-first systems we see today.
              </p>
              <p>
                Currently, I'm focused on exploring how serverless technologies can be leveraged to create more resilient and cost-effective applications. I believe that the future of software engineering lies in the abstraction of infrastructure, allowing developers to focus purely on business logic and user experience.
              </p>
              <p>
                When I'm not coding or writing for ProBlog, you can find me hiking in the Pacific Northwest or experimenting with minimalist UI design patterns.
              </p>
            </div>
            
            <div className="mt-12 pt-12 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Member Since</div>
                <div className="font-bold text-slate-900">Jan 2022</div>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Location</div>
                <div className="font-bold text-slate-900">Seattle, WA</div>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total Reads</div>
                <div className="font-bold text-slate-900">1.2M+</div>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Articles</div>
                <div className="font-bold text-slate-900">42</div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <button className="px-10 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
