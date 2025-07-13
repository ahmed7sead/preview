import Header from "../components/Header";
import HeroSection from "../components/sections/HeroSection";
import ComponentsSection from "../components/sections/ComponentsSection";
import PreviewTabs from "../components/PreviewTabs";
import FeaturesSection from "../components/sections/FeaturesSection";
import { ConfigState } from "../components/ConfigurationPanel";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Zap, Shield, Code, Heart, ArrowRight, Star, CheckCircle } from "lucide-react";

const Index = () => {
  const [config, setConfig] = useState<ConfigState>({
    heroSection: 'default',
    whatsappButton: 'floating',
    footer: 'modern',
    cardStyle: 'rounded',
    partners: 'carousel',
    colorTheme: 'cream'
  });

  const handleConfigChange = (newConfig: ConfigState) => {
    setConfig(newConfig);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/50">
      <Header />

      {/* Hero Section with enhanced spacing */}
      <div className="relative">
        <HeroSection />
        {/* Gentle gradient separator */}
        <div className="absolute -bottom-20 left-0 right-0 h-20 bg-gradient-to-b from-transparent via-slate-50/30 to-slate-50/80"></div>
      </div>

      {/* Enhanced spacing - 64px minimum */}
      <div className="py-16 lg:py-20">
        <ComponentsSection config={config} onConfigChange={handleConfigChange} />
      </div>

      {/* Breathing space with subtle background change */}
      <div className="relative py-16 lg:py-20 bg-gradient-to-br from-slate-50/70 via-white to-slate-50/30">
        {/* Subtle decorative elements for visual comfort */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-slate-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-l from-slate-100/30 to-transparent rounded-full blur-3xl"></div>

        <PreviewTabs />
      </div>

      {/* More breathing space */}
      <div className="py-16 lg:py-20 relative">
        {/* Gentle background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(148,163,184,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(203,175,92,0.03),transparent_50%)]"></div>
        <div className="relative z-10">
          <FeaturesSection />
        </div>
      </div>

      {/* Enhanced Conversion Section with better spacing and visual comfort */}
      <section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
        {/* Enhanced gradient background for better eye comfort */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

        {/* Multiple subtle pattern overlays for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.02),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(203,175,92,0.03),transparent_40%)]"></div>

        {/* Enhanced floating elements for visual interest */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-slate-700/30 to-slate-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-r from-amber-500/10 to-amber-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-slate-600/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          {/* Enhanced spacing and visual hierarchy */}
          <div className="mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-300">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Get This Premium Template
              <span className="block text-amber-400 mt-4">Start Building Today</span>
            </h2>

            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Professional template with modern components, responsive design, and comprehensive documentation
            </p>
          </div>

          {/* Enhanced pricing block with better spacing */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 md:p-16 border border-slate-200/50 shadow-2xl mb-16 max-w-2xl mx-auto relative">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5 rounded-3xl"></div>

            <div className="relative z-10">
              <div className="mb-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="text-3xl text-slate-400 line-through font-medium">$14</span>
                  <span className="text-5xl md:text-6xl font-bold text-slate-900">$9</span>
                  <div className="bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-sm animate-bounce">
                    save $5
                  </div>
                </div>

                <p className="text-lg text-slate-600 font-medium">
                  One-time payment • Lifetime access • Free updates
                </p>
              </div>

              {/* Enhanced features grid with better spacing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-50/50">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">50+ Components</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-50/50">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">2same time language</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-50/50">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Complete Documentation</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-50/50">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Technical Support</span>
                </div>
              </div>

              {/* Enhanced CTA button with better spacing */}
              <Button
                size="lg"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-7 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-6 hover:scale-[1.02]"
                onClick={() => window.open('https://www.theportfolio.pro', '_blank')}
              >
                Get Home-East Template Now - $9
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>

              {/* Enhanced trust indicators */}
              <div className="flex items-center justify-center gap-8 text-sm text-slate-500 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>100% SEO</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-500" />
                  <span>100% prefromace</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-purple-500" />
                  <span>Clean Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Enhanced Footer with better spacing */}
      <footer className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50/80 border-t border-slate-200/50 relative">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.03),transparent_70%)]"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-md mx-auto space-y-6">
            <div className="flex items-center justify-center gap-3 text-slate-600">
              <span className="text-base font-medium">Designed with</span>
              <Heart className="w-5 h-5 text-red-500 animate-pulse" />
              <span className="text-base font-medium">
                BY <a
                  href="https://www.theportfolio.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 hover:text-blue-600 transition-colors duration-200 font-semibold underline decoration-dotted underline-offset-2"
                >
                  Ahmed
                </a>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
