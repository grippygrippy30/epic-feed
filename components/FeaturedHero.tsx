import React from 'react';
import { Article } from '../types';
import Badge from './ui/Badge';
import Button from './ui/Button';

interface FeaturedHeroProps {
  article: Article;
  onClick?: () => void;
}

const FeaturedHero: React.FC<FeaturedHeroProps> = ({ article, onClick }) => {
  return (
    <section className="w-full mb-20" onClick={onClick}>
      {/* 
        Container acts as a single interactive unit ('group') 
        Hovering anywhere triggers the image zoom, but text remains static color
      */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center group cursor-pointer">
        
        {/* Left Side: Image Card. Added bg-gray-800 for fallback visibility */}
        <div className="w-full lg:w-7/12 relative aspect-video lg:aspect-[16/10] rounded-[32px] overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 bg-gray-800">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
            />
             
             {/* Badge - Bottom left inside image */}
            <div className="absolute bottom-6 left-6 z-20">
              <Badge label={article.category} />
            </div>

            {/* Subtle inner border for better definition */}
            <div className="absolute inset-0 rounded-[32px] border border-white/10 pointer-events-none"></div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
            
            {/* Date */}
            <div className="text-white font-bold text-base mb-4 tracking-wide opacity-90">
                {article.date}
            </div>

            {/* Title - Removed group-hover color change */}
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white mb-6 leading-[1.1] tracking-tight transition-colors duration-300">
              {article.title}
            </h1>
            
            {/* Summary - Removed group-hover color change */}
            <p className="text-[#9EA0A3] text-base md:text-lg mb-10 leading-relaxed line-clamp-4 font-medium transition-colors duration-300">
              {article.summary}
            </p>

            {/* Button */}
            <div>
              <Button className="px-8 py-3.5 text-base font-bold bg-[#2da6ff] hover:bg-[#2da6ff]/90 text-black lg:text-white lg:bg-[#2F7FD7] lg:hover:bg-[#4a9eff]">
                <span>阅读更多</span>
              </Button>
            </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedHero;