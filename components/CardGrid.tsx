import React from 'react';
import { Article } from '../types';
import ArticleCard from './ArticleCard';

interface CardGridProps {
  articles: Article[];
  onArticleClick?: (article: Article) => void;
}

const CardGrid: React.FC<CardGridProps> = ({ articles, onArticleClick }) => {
  if (articles.length === 0) {
    return (
        <div className="w-full py-20 text-center border border-dashed border-white/10 rounded-3xl bg-white/5">
            <h3 className="text-xl text-white/50 font-medium">没有找到符合条件的文章。</h3>
        </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {articles.map((article) => (
        <ArticleCard 
            key={article.id} 
            article={article} 
            onClick={() => onArticleClick && onArticleClick(article)}
        />
      ))}
    </div>
  );
};

export default CardGrid;