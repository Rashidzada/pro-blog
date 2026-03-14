import React, { useState } from 'react';
import { Bell, MessageSquare, UserPlus, Heart, Star, Settings, Check, MoreHorizontal, Clock } from 'lucide-react';

const Notifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const notifications = [
    {
      id: 1,
      type: 'comment',
      user: { name: 'Sarah Chen', avatar: 'https://picsum.photos/seed/sarah/100/100' },
      content: 'commented on your article "The Future of SaaS Engineering"',
      time: '2 mins ago',
      isUnread: true,
      icon: <MessageSquare className="w-4 h-4 text-blue-500" />,
      iconBg: 'bg-blue-50'
    },
    {
      id: 2,
      type: 'follow',
      user: { name: 'Marcus Thorne', avatar: 'https://picsum.photos/seed/marcus/100/100' },
      content: 'started following you',
      time: '1 hour ago',
      isUnread: true,
      icon: <UserPlus className="w-4 h-4 text-emerald-500" />,
      iconBg: 'bg-emerald-50'
    },
    {
      id: 3,
      type: 'like',
      user: { name: 'Elena Gilbert', avatar: 'https://picsum.photos/seed/elena/100/100' },
      content: 'liked your comment on "Mastering React Server Components"',
      time: '3 hours ago',
      isUnread: false,
      icon: <Heart className="w-4 h-4 text-red-500" />,
      iconBg: 'bg-red-50'
    },
    {
      id: 4,
      type: 'mention',
      user: { name: 'David Miller', avatar: 'https://picsum.photos/seed/david/100/100' },
      content: 'mentioned you in a post: "Check out @alexrivera\'s latest piece..."',
      time: '5 hours ago',
      isUnread: false,
      icon: <Star className="w-4 h-4 text-orange-500" />,
      iconBg: 'bg-orange-50'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
            <Bell className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Notifications</h1>
        </div>
        <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-50">
          <div className="flex gap-6">
            {['All', 'Unread', 'Mentions'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-bold transition-all relative pb-1 ${
                  activeTab === tab ? 'text-primary' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute -bottom-6 left-0 right-0 h-1 bg-primary rounded-t-full"></div>
                )}
              </button>
            ))}
          </div>
          <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
            <Check className="w-3 h-3" /> Mark all as read
          </button>
        </div>

        <div className="divide-y divide-slate-50">
          {notifications.map(notif => (
            <div 
              key={notif.id} 
              className={`p-8 flex gap-6 hover:bg-slate-50 transition-colors relative group ${notif.isUnread ? 'bg-primary/[0.02]' : ''}`}
            >
              {notif.isUnread && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
              )}
              
              <div className="relative shrink-0">
                <img src={notif.user.avatar} alt={notif.user.name} className="w-12 h-12 rounded-2xl object-cover shadow-sm" referrerPolicy="no-referrer" />
                <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${notif.iconBg} rounded-lg border-2 border-white flex items-center justify-center shadow-sm`}>
                  {notif.icon}
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-slate-900 leading-relaxed">
                    <span className="font-bold">{notif.user.name}</span> {notif.content}
                  </p>
                  <button className="p-1 text-slate-300 hover:text-slate-600 transition-colors opacity-0 group-hover:opacity-100">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <Clock className="w-3 h-3" />
                  {notif.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 bg-slate-50 text-center">
          <button className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">
            View all past notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
