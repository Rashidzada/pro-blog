import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image as ImageIcon, Bold, Italic, List, ListOrdered, Quote, Link as LinkIcon, Eye, Send, Save, Trash2, ChevronDown, Settings, BarChart2, Clock } from 'lucide-react';

const Editor: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Editor Header */}
      <header className="h-16 border-b border-slate-100 px-4 sm:px-8 flex items-center justify-between sticky top-0 bg-white z-50">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
          </Link>
          <div className="h-4 w-px bg-slate-200"></div>
          <span className="text-xs font-medium text-slate-400 italic">Saved 2 mins ago</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-slate-600 font-bold text-sm hover:bg-slate-50 rounded-xl transition-all">
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
            <Send className="w-4 h-4" />
            Publish
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200 ml-2">
            <img src="https://picsum.photos/seed/alex/100/100" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </header>

      <div className="flex-grow flex flex-col lg:flex-row">
        {/* Main Editor Area */}
        <main className="flex-grow max-w-4xl mx-auto w-full p-8 sm:p-12 lg:p-20">
          <div className="mb-12">
            <input 
              type="text" 
              placeholder="Enter blog title..." 
              className="w-full text-4xl sm:text-5xl font-bold text-slate-900 placeholder:text-slate-200 border-none focus:ring-0 p-0 mb-8"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            
            <button className="w-full aspect-[21/9] rounded-3xl border-2 border-dashed border-slate-100 hover:border-primary/30 hover:bg-primary/5 transition-all flex flex-col items-center justify-center gap-4 group">
              <div className="w-12 h-12 bg-slate-50 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary rounded-2xl flex items-center justify-center transition-all">
                <ImageIcon className="w-6 h-6" />
              </div>
              <div className="text-center">
                <p className="font-bold text-slate-900">Add a cover image</p>
                <p className="text-xs text-slate-400">Recommended size: 1600 x 900px</p>
              </div>
            </button>
          </div>

          {/* Toolbar */}
          <div className="sticky top-20 bg-white/80 backdrop-blur-md border border-slate-100 rounded-2xl p-2 mb-8 flex flex-wrap gap-1 shadow-sm z-40">
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"><Bold className="w-5 h-5" /></button>
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"><Italic className="w-5 h-5" /></button>
            <div className="w-px h-6 bg-slate-100 mx-1 self-center"></div>
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"><List className="w-5 h-5" /></button>
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"><ListOrdered className="w-5 h-5" /></button>
            <div className="w-px h-6 bg-slate-100 mx-1 self-center"></div>
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"><Quote className="w-5 h-5" /></button>
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"><LinkIcon className="w-5 h-5" /></button>
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"><ImageIcon className="w-5 h-5" /></button>
          </div>

          <textarea 
            placeholder="Tell your story..." 
            className="w-full flex-grow text-xl text-slate-700 placeholder:text-slate-200 border-none focus:ring-0 p-0 min-h-[500px] resize-none leading-relaxed font-serif"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </main>

        {/* Right Sidebar - Settings */}
        <aside className="w-full lg:w-80 border-l border-slate-100 p-8 bg-slate-50/50">
          <div className="sticky top-24 space-y-10">
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Post Settings
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
                  <button className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-600 hover:border-primary transition-all">
                    Select Category
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tags</label>
                  <input 
                    type="text" 
                    placeholder="Add tags (max 5)..." 
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-primary hover:text-primary transition-all">
                  <Save className="w-4 h-4" />
                  Save as Draft
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-primary hover:text-primary transition-all">
                  <Clock className="w-4 h-4" />
                  Schedule Post
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl text-sm font-bold transition-all">
                  <Trash2 className="w-4 h-4" />
                  Discard
                </button>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <BarChart2 className="w-4 h-4" />
                Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-lg font-bold text-slate-900">0</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Words</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">0 min</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Read Time</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Editor;
