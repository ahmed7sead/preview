import { LucideIcon } from 'lucide-react';

interface SidebarItem {
  id: string;
  title: string;
  category: string;
  icon: LucideIcon;
}

interface DocumentationSidebarProps {
  title: string;
  items: SidebarItem[];
  activeItem: string;
  onItemChange: (itemId: string) => void;
  gradientColors: string;
}

const DocumentationSidebar = ({
  title,
  items,
  activeItem,
  onItemChange,
  gradientColors
}: DocumentationSidebarProps) => {
  return (
    <div className="rounded-xl shadow-lg border p-3 sm:p-4 lg:p-6 sticky top-4 sm:top-8 bg-white border-slate-200 max-h-[80vh] sm:max-h-none overflow-y-auto">
      <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-slate-800 sticky top-0 bg-white pb-2 border-b border-slate-100">
        {title}
      </h3>
      <div className="space-y-2 sm:space-y-2">
        {items.map((item, index) => {
          const ItemIcon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onItemChange(item.id)}
              className={`w-full text-left p-3 sm:p-3 lg:p-4 rounded-lg transition-all duration-300 ease-out group relative overflow-hidden border ${isActive
                ? 'text-white shadow-xl border-opacity-30 scale-105 sm:scale-100'
                : 'hover:shadow-md border-transparent text-slate-700 hover:scale-105 sm:hover:scale-100'
                }`}
              style={{
                background: isActive
                  ? gradientColors.includes('blue')
                    ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
                    : gradientColors.includes('orange')
                      ? 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)'
                      : 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
                  : 'transparent',
                borderColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = gradientColors.includes('blue')
                    ? 'rgba(59, 130, 246, 0.05)'
                    : gradientColors.includes('orange')
                      ? 'rgba(249, 115, 22, 0.05)'
                      : 'rgba(139, 92, 246, 0.05)';
                  e.currentTarget.style.borderColor = gradientColors.includes('blue')
                    ? 'rgba(59, 130, 246, 0.1)'
                    : gradientColors.includes('orange')
                      ? 'rgba(249, 115, 22, 0.1)'
                      : 'rgba(139, 92, 246, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'transparent';
                }
              }}
            >
              <div className={`absolute inset-0 transition-all duration-500 ease-out ${isActive
                ? 'bg-gradient-to-r from-white/10 to-white/5 translate-x-0'
                : 'bg-gradient-to-r from-slate-100/50 to-slate-200/50 -translate-x-full group-hover:translate-x-0'
                }`} />

              <div className="flex items-center gap-2 sm:gap-3 relative z-10">
                <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center transition-all duration-300 ease-out ${isActive
                  ? 'bg-white/20 text-white -rotate-3 scale-110'
                  : 'text-slate-600 group-hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : gradientColors.includes('blue')
                      ? 'rgba(59, 130, 246, 0.1)'
                      : gradientColors.includes('orange')
                        ? 'rgba(249, 115, 22, 0.1)'
                        : 'rgba(139, 92, 246, 0.1)',
                  }}>
                  <ItemIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-medium text-sm sm:text-sm lg:text-base transition-all duration-300 line-clamp-2 sm:line-clamp-1 ${isActive ? 'text-white' : 'group-hover:text-slate-900'
                    }`}>
                    {item.title}
                  </h4>
                  {/* Mobile Category Label */}
                  <div className={`text-xs mt-0.5 sm:hidden ${isActive ? 'text-white/80' : 'text-slate-500'
                    }`}>
                    {item.category}
                  </div>
                </div>

                {/* Step Number for Mobile */}
                <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold transition-all duration-300 sm:hidden ${isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                  }`}>
                  {index + 1}
                </div>

                {/* Desktop Indicator Dot */}
                <div className={`hidden sm:block w-2 h-2 rounded-full transition-all duration-300 ${isActive
                  ? 'bg-white scale-100 opacity-100'
                  : 'bg-slate-400 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50'
                  }`} />
              </div>

              {isActive && (
                <>
                  <div className="absolute inset-0 transition-all duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                  {/* Active Indicator for Mobile */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white/30 rounded-r-full sm:hidden" />
                </>
              )}
            </button>
          );
        })}
      </div>

      {/* Mobile Footer */}
      <div className="sm:hidden mt-4 pt-3 border-t border-slate-100">
        <div className="text-center">
          <div className="text-xs text-slate-500 mb-2">total</div>
          <div className="text-lg font-bold text-slate-700">{items.length}</div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationSidebar;