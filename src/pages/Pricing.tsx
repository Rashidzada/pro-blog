import React from 'react';
import { Check, Star, Zap, Shield, Globe, Users, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Pricing Hero */}
      <section className="pt-20 pb-20 lg:pt-32 lg:pb-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -ml-64 -mb-64"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-8 border border-white/10">
            <Star className="w-3.5 h-3.5 fill-primary" />
            Premium Content
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 tracking-tight">Support your favorite writers</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Unlock exclusive articles, early access to new features, and a distraction-free reading experience while supporting the creators you love.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 text-left">
              <img src="https://picsum.photos/seed/alex/100/100" alt="Author" className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
              <div>
                <div className="font-bold">Alex Rivera</div>
                <div className="text-xs text-slate-500">Senior SaaS Engineer</div>
              </div>
              <button className="ml-4 px-6 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-dark transition-all">
                Subscribe for Updates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-[2.5rem] p-10 lg:p-12 border border-slate-100 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Free</h3>
              <p className="text-slate-500 mb-8">Perfect for occasional readers.</p>
              <div className="text-4xl font-bold text-slate-900 mb-10">$0<span className="text-lg text-slate-400 font-medium">/month</span></div>
              
              <ul className="space-y-5 mb-12">
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0"><Check className="w-3 h-3" /></div>
                  Access to public articles
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0"><Check className="w-3 h-3" /></div>
                  Basic newsletter subscription
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0"><Check className="w-3 h-3" /></div>
                  Community comments
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 bg-slate-100 text-slate-300 rounded-full flex items-center justify-center shrink-0"><Check className="w-3 h-3" /></div>
                  Exclusive member content
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 bg-slate-100 text-slate-300 rounded-full flex items-center justify-center shrink-0"><Check className="w-3 h-3" /></div>
                  Ad-free experience
                </li>
              </ul>

              <button className="w-full py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all">
                Current Plan
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-[2.5rem] p-10 lg:p-12 border-2 border-primary shadow-2xl shadow-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white px-6 py-1.5 rounded-bl-2xl text-[10px] font-bold uppercase tracking-widest">Recommended</div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro Access</h3>
              <p className="text-slate-500 mb-8">For serious learners and professionals.</p>
              <div className="text-4xl font-bold text-slate-900 mb-10">$12<span className="text-lg text-slate-400 font-medium">/month</span></div>
              
              <ul className="space-y-5 mb-12">
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0"><Check className="w-3 h-3" /></div>
                  Everything in Free
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0"><Check className="w-3 h-3" /></div>
                  Exclusive member-only articles
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0"><Check className="w-3 h-3" /></div>
                  Ad-free reading experience
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0"><Check className="w-3 h-3" /></div>
                  Early access to new features
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0"><Check className="w-3 h-3" /></div>
                  Direct support for writers
                </li>
              </ul>

              <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                Get Pro Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Loved by the community</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">
                  "ProBlog has become my go-to source for high-quality engineering content. The Pro subscription is worth every penny for the exclusive architectural deep-dives."
                </p>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Jonathan Doe</div>
                    <div className="text-xs text-slate-500">Full Stack Developer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Lightning Fast</h4>
              <p className="text-sm text-slate-500">Optimized for speed and high performance reading.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Secure & Private</h4>
              <p className="text-sm text-slate-500">Your data is always encrypted and never sold.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Global Community</h4>
              <p className="text-sm text-slate-500">Connect with engineers from around the world.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Expert Writers</h4>
              <p className="text-sm text-slate-500">Content curated by industry-leading professionals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
