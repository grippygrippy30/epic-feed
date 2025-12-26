import React, { useEffect } from 'react';
import { Article } from '../types';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { ArrowLeft, Clock, User, Share2, Bookmark, Twitter, Facebook, Linkedin } from 'lucide-react';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in-up w-full max-w-[1200px] mx-auto pb-20">
      
      {/* Navigation */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200"
        >
          <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
             <ArrowLeft size={20} />
          </div>
          <span className="text-sm font-medium">返回列表</span>
        </button>
      </div>

      {/* Header Section */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-4 mb-6">
           <Badge label={article.category} className="bg-[#2F7FD7]/80 border-[#2F7FD7]/50" />
           <span className="flex items-center gap-2 text-[#9EA0A3] text-sm font-medium">
              <Clock size={16} />
              {article.date}
           </span>
           <span className="flex items-center gap-2 text-[#9EA0A3] text-sm font-medium">
              <User size={16} />
              由 编辑部 发布
           </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">
          {article.title}
        </h1>

        {/* Hero Image */}
        <div className="w-full aspect-video md:aspect-[21/9] rounded-[32px] overflow-hidden border border-white/10 bg-gray-800 shadow-2xl mb-12 relative">
           <img 
             src={article.imageUrl} 
             alt={article.title} 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent opacity-40"></div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Main Content Column */}
        <div className="w-full lg:w-2/3">
           <div className="prose prose-invert prose-lg max-w-none">
              <p className="lead text-xl text-[#C0C1C3] leading-relaxed mb-8 font-medium border-l-4 border-[#2F7FD7] pl-6">
                {article.summary}
              </p>
              
              {/* Simulated Content */}
              <div className="space-y-6 text-[#B0B1B3] leading-8 font-light tracking-wide">
                <p>
                  在过去的十年里，游戏开发技术经历了指数级的增长。随着硬件性能的提升，开发者们不再受限于多边形数量或纹理分辨率。然而，真正的革命往往不仅仅来自于算力的提升，更来自于工具链的革新与思维方式的转变。
                </p>
                <p>
                  本次我们深入探讨的核心议题，正是如何在追求极致视觉效果的同时，保持游戏性能的稳定以及开发流程的高效。这对于任何规模的团队来说，都是一个永恒的挑战。
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-10 mb-6">技术的边界与艺术的融合</h2>
                <p>
                  “如果你无法在运行时实时渲染它，那么它在概念设计阶段有多美都毫无意义。” 这句话常常被技术美术（Technical Artist）挂在嘴边。但在最新的引擎技术支持下，这种界限正在变得模糊。
                </p>
                <div className="my-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                   <h4 className="text-white font-bold mb-2">关键数据</h4>
                   <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>渲染效率提升了约 40%</li>
                      <li>内存占用降低了 15%</li>
                      <li>开发迭代周期缩短了 3 周</li>
                   </ul>
                </div>
                <p>
                  通过引入基于物理的渲染（PBR）流程以及实时的全局光照系统（Global Illumination），现在的游戏场景能够呈现出前所未有的真实感。光线不再是简单的贴图烘焙，而是成为了场景叙事的一部分。
                </p>

                <h2 className="text-2xl font-bold text-white mt-10 mb-6">面向未来的开发范式</h2>
                <p>
                  除了图形学，AI 也在改变着游戏制作的方方面面。从自动生成的植被覆盖，到能够理解自然语言的 NPC，技术正在赋予游戏世界以“生命”。
                </p>
                <p>
                  总而言之，我们正处于一个激动人心的时代。技术不再是限制想象力的枷锁，而是让梦想照进现实的桥梁。
                </p>
              </div>
           </div>
        </div>

        {/* Sidebar Column (Sticky) */}
        <div className="w-full lg:w-1/3">
          <div className="lg:sticky lg:top-24 space-y-8">
            
            {/* Share Widget */}
            <div className="p-6 rounded-3xl bg-[#15171C] border border-white/5">
               <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                 <Share2 size={18} /> 分享文章
               </h3>
               <div className="flex gap-2">
                 <Button variant="ghost" className="flex-1 px-0 py-3 rounded-xl border-white/10 hover:bg-[#1da1f2]/20 hover:text-[#1da1f2] hover:border-[#1da1f2]/30">
                    <Twitter size={20} />
                 </Button>
                 <Button variant="ghost" className="flex-1 px-0 py-3 rounded-xl border-white/10 hover:bg-[#3b5998]/20 hover:text-[#3b5998] hover:border-[#3b5998]/30">
                    <Facebook size={20} />
                 </Button>
                 <Button variant="ghost" className="flex-1 px-0 py-3 rounded-xl border-white/10 hover:bg-[#0077b5]/20 hover:text-[#0077b5] hover:border-[#0077b5]/30">
                    <Linkedin size={20} />
                 </Button>
               </div>
            </div>

            {/* Tags Widget */}
            <div className="p-6 rounded-3xl bg-[#15171C] border border-white/5">
              <h3 className="text-white font-bold mb-4">相关话题</h3>
              <div className="flex flex-wrap gap-2">
                {['游戏开发', '渲染技术', 'Unreal Engine 5', '美术设计', 'AI', '行业趋势'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 text-xs text-[#9EA0A3] bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer transition-colors border border-white/5">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

             {/* Action */}
             <Button className="w-full py-4 text-base bg-white/10 hover:bg-white/20 border border-white/10">
                <Bookmark size={18} className="mr-2" /> 收藏以稍后阅读
             </Button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ArticleDetail;