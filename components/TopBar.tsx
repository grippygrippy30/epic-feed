import React from 'react';
import { Search } from 'lucide-react';
import { TabItem, Category } from '../types';

interface TopBarProps {
  tabs: TabItem[];
  activeTab: Category;
  onTabChange: (id: Category) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({ 
  tabs, 
  activeTab, 
  onTabChange, 
  searchQuery, 
  onSearchChange 
}) => {
  return (
    <div className="sticky top-0 z-50 w-full bg-[#0b0c10]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Scrollable Tabs */}
        <div className="w-full md:w-auto overflow-x-auto hide-scrollbar">
          <div className="flex items-center space-x-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`
                    whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                    ${isActive 
                      ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                      : 'bg-white/5 text-white/60 border-white/5 hover:bg-white/10 hover:text-white hover:border-white/20'
                    }
                  `}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64 lg:w-80 group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white/40 group-focus-within:text-white transition-colors duration-300">
            <Search size={18} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="搜索文章标题..."
            className="
              w-full bg-white/5 border border-white/10 text-white rounded-xl py-2 pl-10 pr-4
              placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-white/30
              transition-all duration-300
            "
          />
        </div>

      </div>
    </div>
  );
};

export default TopBar;