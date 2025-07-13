import ConfigurationPanel, { ConfigState } from "../../components/ConfigurationPanel";
import DeviceMockup from "../../components/DeviceMockup";
import { useMemo } from "react";

interface ComponentsSectionProps {
  config: ConfigState;
  onConfigChange: (newConfig: ConfigState) => void;
}

const ComponentsSection = ({ config, onConfigChange }: ComponentsSectionProps) => {
  // Generate dynamic URL based on configuration
  const previewUrl = useMemo(() => {
    const baseUrl = "https://hebat-east-web-app.vercel.app/";
    const params = new URLSearchParams();

    Object.entries(config).forEach(([key, value]) => {
      params.append(key, value);
    });

    return `${baseUrl}?${params.toString()}`;
  }, [config]);

  return (
    <section id="components" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Modern Light Background */}
      <div className="absolute inset-0">
        {/* Base gradient with soft cream colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cream/30 to-gray-50/50"></div>

        {/* Soft mesh overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.8),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(250,249,245,0.6),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(247,247,247,0.4),transparent_50%)]"></div>

        {/* Gentle floating shapes */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-white/40 to-cream/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-gray-50/30 to-white/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cream/20 to-gray-50/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-full px-4 py-2 mb-6 shadow-sm">
            <div className="w-2 h-2 bg-bravio-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Live Customization</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
            <span className="text-slate-900 mr-3">Customize Your</span>
            <span className="bg-gradient-to-r from-bravio-600 via-bravio-500 to-accent-600 bg-clip-text text-transparent">
              Components
            </span>
          </h2>
        </div>

        {/* Enhanced Configuration Panel */}
        <div className="fade-in-up mb-8 lg:mb-12">
          <div className="relative">
            {/* Soft glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-cream/40 rounded-3xl blur-xl transform scale-105"></div>
            <div className="relative">
              <ConfigurationPanel onConfigChange={onConfigChange} />
            </div>
          </div>
        </div>

        {/* Enhanced Device Mockups */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Desktop Mockup */}
          <div className="flex-1 max-w-4xl fade-in-up relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-cream/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 transform group-hover:scale-105"></div>
            <div className="relative transform group-hover:-translate-y-2 transition-all duration-500">
              <DeviceMockup
                url={previewUrl}
                device="desktop"
                scale={0.75}
              />
            </div>
          </div>

          {/* Mobile Mockup */}
          <div className="xl:flex-shrink-0 fade-in-up relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cream/40 to-white/50 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500 transform group-hover:scale-105"></div>
            <div className="relative transform group-hover:-translate-y-3 transition-all duration-500">
              <DeviceMockup
                url={previewUrl}
                device="mobile"
              />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-gray-200/40 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default ComponentsSection;
