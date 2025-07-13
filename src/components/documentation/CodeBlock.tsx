import { Button } from "../ui/button";
import { CodeExample } from "../../hooks/documentation";

interface CodeBlockProps {
  codeExample: CodeExample;
  onCopy?: () => void;
}

const CodeBlock = ({ codeExample, onCopy }: CodeBlockProps) => {
  return (
    <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl border border-slate-700/60 backdrop-blur-sm mx-2 sm:mx-0">
      {/* Header */}
      <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5 border-b bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-slate-700/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-2 sm:gap-3 lg:gap-4">
            <div className="flex items-start gap-2 sm:gap-3 lg:gap-4 min-w-0 flex-1">
              {/* Traffic Light Buttons */}
              <div className="flex gap-1 sm:gap-1.5 lg:gap-2 shrink-0 mt-0.5 sm:mt-1">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 bg-red-500 rounded-full shadow-md hover:bg-red-400 transition-colors duration-200"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 bg-yellow-500 rounded-full shadow-md hover:bg-yellow-400 transition-colors duration-200"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 bg-green-500 rounded-full shadow-md hover:bg-green-400 transition-colors duration-200"></div>
              </div>

              {/* Title and Description */}
              <div className="min-w-0 flex-1">
                <h4 className="text-white font-bold text-xs sm:text-sm lg:text-base xl:text-lg mb-0.5 sm:mb-1 line-clamp-1">
                  {codeExample.title}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {codeExample.description}
                </p>
              </div>
            </div>

            {/* Copy Button */}
            <Button
              size="sm"
              variant="outline"
              className="text-xs text-slate-300 hover:text-white border-slate-600 hover:border-slate-500 hover:bg-slate-700/80 bg-slate-800/60 backdrop-blur-sm font-semibold rounded-lg sm:rounded-xl h-7 sm:h-8 lg:h-9 px-2 sm:px-3 lg:px-4 shadow-lg hover:shadow-xl transition-all duration-300 shrink-0 min-w-0"
              onClick={onCopy}
            >
              <span className="hidden xs:inline sm:hidden md:inline">Copy</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Code Content */}
      <div className="relative bg-slate-900">
        <pre className="p-3 sm:p-4 lg:p-6 text-green-400 text-xs sm:text-sm lg:text-base overflow-x-auto leading-relaxed bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 min-h-[150px] sm:min-h-[200px] lg:min-h-[250px]">
          <code className="font-mono block whitespace-pre-wrap sm:whitespace-pre">{codeExample.code}</code>
        </pre>

        {/* Gradient Overlay for Better Mobile Reading */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-3 sm:h-4 bg-gradient-to-b from-slate-900/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-3 sm:h-4 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="absolute top-2 right-2 sm:hidden">
          <div className="bg-slate-700/80 text-slate-300 text-xs px-2 py-1 rounded-full backdrop-blur-sm">
            ↔️
          </div>
        </div>
      </div>

      {/* Mobile Helper Text */}
      <div className="sm:hidden bg-slate-800 px-3 py-2 border-t border-slate-700">
        <p className="text-slate-400 text-xs text-center font-medium">pull to see more</p>
      </div>

      {/* Mobile Quick Actions */}
      <div className="sm:hidden bg-slate-800/50 px-3 py-2 border-t border-slate-700/50 flex items-center justify-between">
        <div className="text-slate-400 text-xs">
          <span className="font-medium text-slate-300">{codeExample.title}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-slate-400 text-xs">copy</span>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;