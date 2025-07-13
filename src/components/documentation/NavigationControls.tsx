
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationControlsProps {
  currentIndex: number;
  totalItems: number;
  onPrevious: () => void;
  onNext: () => void;
  label: string;
}

const NavigationControls = ({
  currentIndex,
  totalItems,
  onPrevious,
  onNext,
  label
}: NavigationControlsProps) => {
  if (totalItems <= 1) return null;

  return (
    <div className="flex items-center gap-2 rounded-lg p-1 bg-slate-50 border border-slate-200">
      <button
        onClick={onPrevious}
        className="p-2 rounded-md transition-all duration-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50 hover:text-slate-800 hover:shadow-md"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <span className="text-sm font-medium px-3 text-slate-600">
        {currentIndex + 1} / {totalItems}
      </span>
      <button
        onClick={onNext}
        className="p-2 rounded-md transition-all duration-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50 hover:text-slate-800 hover:shadow-md"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default NavigationControls;
