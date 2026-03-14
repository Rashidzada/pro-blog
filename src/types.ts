export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
  followers?: number;
  following?: number;
  posts?: number;
  isVerified?: boolean;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: Author;
  date: string;
  readTime: string;
  image: string;
  status?: 'Hot' | 'Popular' | 'Rising' | 'New';
  likes?: number;
  comments?: number;
}

export interface Comment {
  id: string;
  author: Author;
  content: string;
  date: string;
  likes: number;
  replies?: Comment[];
}
