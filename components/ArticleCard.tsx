import React from 'react';
import { Article } from '../types';
import Badge from './ui/Badge';

interface ArticleCardProps {
  article: Article;
  onClick?: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group flex flex-col h-full bg-[#202227] border border-white/5 rounded-[32px] p-3 hover:bg-[#2A2C32] hover:border-white/10 transition-colors duration-300 ease-out cursor-pointer"
    >
      
      {/* Image Header - Inset with rounded corners. Added bg-gray-800 for fallback visibility */}
      <div className="relative aspect-[16/9] overflow-hidden w-full rounded-[24px] bg-gray-800">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Inner shadow/vignette to make badge readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        {/* Badge positioned bottom-left inside image */}
        <div className="absolute bottom-3 left-3 z-10">
          <Badge label={article.category} />
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-col flex-grow pt-4 pb-2">
        <div className="text-[#898A8D] text-xs font-normal mb-2 group-hover:text-[#9EA0A3] transition-colors">
          {article.date}
        </div>

        <h3 className="text-lg font-bold text-white mb-2 leading-snug transition-colors duration-200 line-clamp-2">
          {article.title}
        </h3>

        <p className="text-sm text-[#B0B1B3] leading-relaxed line-clamp-3 group-hover:text-[#C0C1C3] transition-colors">
          {article.summary}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;