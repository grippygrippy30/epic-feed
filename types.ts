export type Category = 
  | '全部' 
  | '新闻' 
  | '活动' 
  | '社区' 
  | '焦点' 
  | '技术博客' 
  | '面试' 
  | '学习';

export interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: Category;
  imageUrl: string;
  author?: string;
}

export interface TabItem {
  id: Category;
  label: string;
}