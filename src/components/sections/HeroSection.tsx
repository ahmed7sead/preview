
import TypeWriter from "../../components/TypeWriter";
import { Button } from "../../components/ui/button";
import { ArrowDown, ArrowRight, FileText, Sparkles, Code, Palette, Search, Zap, Globe, Layers, FileStack } from "lucide-react";

const HeroSection = () => {
  const typingPhrases = [
    "Interior design",
    "Decoration",
    "Luxury chandelier",
    "Smart home",
    "Installation services"
  ];

  const scrollToComponents = () => {
    const element = document.getElementById('components');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced background with better visual comfort */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white/80 to-slate-50/60"></div>

      {/* Enhanced decorative elements with better distribution */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-slate-200/25 to-slate-100/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-16 w-32 h-32 bg-gradient-to-r from-slate-100/20 to-slate-200/25 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-gradient-to-r from-slate-100/12 to-slate-200/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Enhanced golden accents for brand consistency */}
      <div className="absolute top-60 right-1/3 w-24 h-24 bg-gradient-to-r from-[#caa93c]/8 to-[#caa93c]/4 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-60 right-20 w-28 h-28 bg-gradient-to-r from-[#caa93c]/6 to-[#caa93c]/2 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 left-1/6 w-20 h-20 bg-gradient-to-r from-[#caa93c]/5 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '5s' }}></div>

      {/* Subtle grid pattern for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Enhanced UI elements for visual interest */}
      <div className="absolute top-1/3 left-8 w-1 h-24 bg-gradient-to-b from-[#caa93c]/15 to-transparent rounded-full"></div>
      <div className="absolute top-1/2 right-8 w-1 h-20 bg-gradient-to-b from-slate-300/25 to-transparent rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/5 w-16 h-0.5 bg-gradient-to-r from-[#caa93c]/12 to-transparent rounded-full"></div>
      <div className="absolute top-1/4 right-1/4 w-12 h-0.5 bg-gradient-to-r from-slate-300/20 to-transparent rounded-full"></div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center">
          {/* Enhanced TypeWriter section with better spacing */}
          <div className="mb-16 lg:mb-20">
            <TypeWriter
              phrases={typingPhrases}
              typeSpeed={120}
              deleteSpeed={60}
              pauseTime={2800}
            />
          </div>

          {/* Enhanced CTA buttons with improved design and positioning */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20 lg:mb-24 fade-in-up -mt-4" style={{ animationDelay: '0.2s' }}>
            <Button asChild size="lg" className="group relative bg-gradient-to-r from-[#caa93c] to-[#b8952e] hover:from-[#b8952e] hover:to-[#a68529] text-white border-0 px-14 py-7 text-lg font-bold shadow-2xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-2xl overflow-hidden">
              <a
                href="https://hebat-east-web-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 relative z-10"
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Sparkles className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">View Live Demo</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="group relative border-3 border-slate-800 hover:border-[#caa93c] hover:bg-slate-900 hover:text-white text-slate-900 px-14 py-7 text-lg font-bold bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 rounded-2xl overflow-hidden">
              <a
                href="#documentation"
                className="flex items-center gap-4 relative z-10"
              >
                {/* Subtle inner glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#caa93c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <FileText className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Documentation</span>
              </a>
            </Button>
          </div>

          {/* Enhanced Features Grid with better spacing and visual comfort */}
          <div className="max-w-6xl mx-auto mb-16 lg:mb-20 fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {/* React + TypeScript */}
              <div className="flex flex-col items-center gap-3 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#caa93c]/30 group">
                <Code className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" style={{ color: '#caa93c' }} />
                <span className="text-xs font-semibold text-slate-900 text-center leading-relaxed">React + <span className="text-slate-900">TypeScript</span></span>
              </div>

              {/* Tailwind CSS */}
              <div className="flex flex-col items-center gap-3 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#caa93c]/30 group">
                <Palette className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" style={{ color: '#caa93c' }} />
                <span className="text-xs font-semibold text-slate-900 text-center">TailwindCSS</span>
              </div>

              {/* SEO Optimized */}
              <div className="flex flex-col items-center gap-3 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#caa93c]/30 group">
                <Search className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" style={{ color: '#caa93c' }} />
                <span className="text-xs font-semibold text-slate-900 text-center">SEO Optimized</span>
              </div>

              {/* 100% Performance */}
              <div className="flex flex-col items-center gap-3 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#caa93c]/30 group">
                <Zap className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" style={{ color: '#caa93c' }} />
                <span className="text-xs font-semibold text-slate-900 text-center">100% Performance</span>
              </div>

              {/* Two Languages */}
              <div className="flex flex-col items-center gap-3 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#caa93c]/30 group">
                <Globe className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" style={{ color: '#caa93c' }} />
                <span className="text-xs font-semibold text-center group-hover:scale-105 transition-transform duration-300" style={{ color: '#caa93c' }}>Two Languages</span>
              </div>

              {/* Modern Design */}
              <div className="flex flex-col items-center gap-3 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#caa93c]/30 group">
                <Sparkles className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" style={{ color: '#caa93c' }} />
                <span className="text-xs font-semibold text-slate-900 text-center">Modern Design</span>
              </div>
            </div>

            {/* Enhanced statistics with better spacing */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
              <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-2xl border border-slate-200/50 shadow-md hover:shadow-lg hover:border-[#caa93c]/30 transition-all duration-300 hover:-translate-y-1">
                <Layers className="h-6 w-6" style={{ color: '#caa93c' }} />
                <span className="text-base font-bold" style={{ color: '#caa93c' }}>100+ Components</span>
              </div>
              <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-2xl border border-slate-200/50 shadow-md hover:shadow-lg hover:border-[#caa93c]/30 transition-all duration-300 hover:-translate-y-1">
                <FileStack className="h-6 w-6" style={{ color: '#caa93c' }} />
                <span className="text-base font-bold" style={{ color: '#caa93c' }}>30+ Unique Pages</span>
              </div>
            </div>
          </div>

          {/* Enhanced scroll indicator with simplified design and better positioning */}
          <div className="flex flex-col items-center gap-6 fade-in-up -mt-8" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToComponents}
              className="group flex flex-col items-center gap-4 transform hover:-translate-y-4 transition-all duration-500 focus:outline-none"
            >
              {/* Elegant circular button with enhanced hover effects */}
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#caa93c] to-[#b8952e] rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                  <ArrowDown className="h-7 w-7 text-white animate-bounce group-hover:animate-pulse transition-all duration-300" />
                </div>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#caa93c]/20 to-[#b8952e]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-125"></div>
              </div>

              {/* Elegant text label */}
              <span className="text-base font-semibold text-slate-700 group-hover:text-[#caa93c] transition-colors duration-300 tracking-wide">
                Explore More
              </span>

              {/* Subtle animated dots */}
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-[#caa93c]/40 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                <div className="w-1.5 h-1.5 bg-[#caa93c]/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1.5 h-1.5 bg-[#caa93c]/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced separator line */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-[#caa93c]/15 to-transparent rounded-full blur-sm"></div>
      </div>
    </section>
  );
};

export default HeroSection;
