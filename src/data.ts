import { Post, Author, Comment } from './types';

export const authors: Author[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Senior SaaS Engineer',
    avatar: 'https://picsum.photos/seed/alex/200/200',
    bio: 'Building the future of cloud infrastructure. Passionate about minimalist design and high-performance systems.',
    followers: 12400,
    following: 850,
    posts: 42,
    isVerified: true
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Product Designer',
    avatar: 'https://picsum.photos/seed/sarah/200/200',
    bio: 'Focusing on user-centric design and accessibility in modern web applications.',
    followers: 8900,
    following: 420,
    posts: 28,
    isVerified: true
  },
  {
    id: '3',
    name: 'Marcus Thorne',
    role: 'Frontend Architect',
    avatar: 'https://picsum.photos/seed/marcus/200/200',
    bio: 'Exploring the boundaries of React and modern frontend frameworks.',
    followers: 15600,
    following: 1100,
    posts: 56,
    isVerified: true
  }
];

export const posts: Post[] = [
  {
    id: '1',
    title: 'The Future of SaaS Engineering',
    excerpt: 'How serverless architectures and edge computing are redefining the way we build and deploy software in 2024.',
    content: `
      <p>The landscape of SaaS engineering is shifting beneath our feet. As we move further into the decade, the traditional boundaries between frontend and backend are blurring, replaced by a more fluid, distributed architecture.</p>
      <blockquote>"The most successful SaaS products of the next five years will be those that embrace the edge, moving computation as close to the user as possible."</blockquote>
      <p>In this article, we'll explore the three key pillars of this new era: Serverless 2.0, Edge Computing, and AI-driven infrastructure management.</p>
      <h2>The Rise of Serverless 2.0</h2>
      <p>Serverless is no longer just about functions. It's about a holistic approach to infrastructure where the developer never has to think about a server, even for complex stateful operations.</p>
      <ul>
        <li>Instant scaling without cold starts</li>
        <li>Stateful serverless databases</li>
        <li>Integrated security at the function level</li>
      </ul>
    `,
    category: 'Architecture',
    author: authors[0],
    date: 'Mar 12, 2024',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/saas/1200/600',
    status: 'Hot',
    likes: 1240,
    comments: 48
  },
  {
    id: '2',
    title: 'The Future of Minimalist Interface Design',
    excerpt: 'Why less is still more, and how to achieve clarity in an increasingly complex digital world.',
    content: '<p>Minimalism is not just about removing elements; it is about adding clarity...</p>',
    category: 'Design',
    author: authors[1],
    date: 'Mar 10, 2024',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/design/1200/600',
    status: 'Popular',
    likes: 850,
    comments: 32
  },
  {
    id: '3',
    title: 'Mastering React Server Components',
    excerpt: 'A deep dive into the most significant change to the React ecosystem in years.',
    content: '<p>React Server Components (RSC) represent a fundamental shift...</p>',
    category: 'Frontend',
    author: authors[2],
    date: 'Mar 08, 2024',
    readTime: '12 min read',
    image: 'https://picsum.photos/seed/react/1200/600',
    status: 'Rising',
    likes: 2100,
    comments: 64
  }
];

export const comments: Comment[] = [
  {
    id: 'c1',
    author: authors[1],
    content: 'This is a fantastic overview of where the industry is heading. I particularly agree with the points on edge computing.',
    date: '2 hours ago',
    likes: 12,
    replies: [
      {
        id: 'c2',
        author: authors[0],
        content: 'Thanks Sarah! The edge is definitely where the most exciting innovations are happening right now.',
        date: '1 hour ago',
        likes: 5
      }
    ]
  },
  {
    id: 'c3',
    author: authors[2],
    content: 'Great read. How do you see this impacting small-scale startups who might find edge infrastructure too complex to manage initially?',
    date: '4 hours ago',
    likes: 8
  }
];
