import React, { useState, useMemo } from 'react';
import { TABS, MOCK_ARTICLES } from './constants';
import { Category, Article } from './types';
import TopBar from './components/TopBar';
import FeaturedHero from './components/FeaturedHero';
import CardGrid from './components/CardGrid';
import ArticleDetail from './components/ArticleDetail';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('全部');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Navigation State
  const [view, setView] = useState<'feed' | 'detail'>('feed');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Filter Logic
  const filteredArticles = useMemo(() => {
    return MOCK_ARTICLES.filter((article) => {
      const matchesTab = activeTab === '全部' || article.category === activeTab;
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            article.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  // Derived State for View
  const heroArticle = filteredArticles.length > 0 ? filteredArticles[0] : null;
  const gridArticles = filteredArticles.length > 0 ? filteredArticles.slice(1) : [];

  // Handlers
  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    setView('detail');
  };

  const handleBackToFeed = () => {
    setView('feed');
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white relative selection:bg-[#2F7FD7] selection:text-white overflow-x-hidden font-sans">
      
      {/* Visual Token: Background Vignette & Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep blue/purple ambient glow top left */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
         {/* Deep ambient glow bottom right */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3"></div>
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,6,8,0.8)_90%)]"></div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        <TopBar 
          tabs={TABS} 
          activeTab={activeTab} 
          onTabChange={(tab) => {
            setActiveTab(tab);
            if (view === 'detail') handleBackToFeed(); // Switch back to feed if clicking tabs
          }}
          searchQuery={searchQuery}
          onSearchChange={(q) => {
             setSearchQuery(q);
             if (view === 'detail') handleBackToFeed(); // Switch back to feed if searching
          }}
        />

        <main className="flex-grow max-w-[1400px] mx-auto w-full px-4 md:px-8 py-8 md:py-12">
          
          {view === 'feed' ? (
            <>
              {/* Featured Hero Section */}
              <div className="animate-fade-in-up">
                 {heroArticle ? (
                   <FeaturedHero 
                     article={heroArticle} 
                     onClick={() => handleArticleClick(heroArticle)}
                   />
                 ) : null}
              </div>

              {/* Grid Section */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                 <CardGrid 
                    articles={gridArticles} 
                    onArticleClick={handleArticleClick}
                 />
                 
                 {gridArticles.length === 0 && heroArticle && (
                    <div className="py-10 text-center text-white/30 text-sm">
                       已显示全部结果
                    </div>
                 )}
                  {!heroArticle && gridArticles.length === 0 && (
                     <div className="w-full py-32 text-center">
                        <h2 className="text-2xl font-bold text-white mb-2">未找到结果</h2>
                        <p className="text-white/50">请尝试调整搜索关键词或分类筛选。</p>
                     </div>
                  )}
              </div>
            </>
          ) : (
            selectedArticle && (
              <ArticleDetail 
                article={selectedArticle} 
                onBack={handleBackToFeed} 
              />
            )
          )}

        </main>
        
        {/* Simple Footer */}
        <footer className="w-full border-t border-white/5 bg-[#08090c] py-8 text-center text-white/20 text-sm">
           <p>&copy; 2024 Brand Feed. Designed with React & Tailwind.</p>
        </footer>

      </div>
    </div>
  );
};

export default App;