import Header from "../components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Book, Replace, Zap, Menu } from "lucide-react";
import BasicDocumentation from "../components/documentation/BasicDocumentation";
import ComponentReplacement from "../components/documentation/ComponentReplacement";
import AdvancedDocumentation from "../components/documentation/AdvancedDocumentation";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { useState } from "react";

const Documentation = () => {
  const [activeTab, setActiveTab] = useState("basic");

  const TabButton = ({ value, icon: Icon, title, subtitle, gradientFrom, gradientTo, activeColors }: any) => (
    <TabsTrigger
      value={value}
      className="group relative z-10 flex items-center justify-center px-2 py-2 md:px-6 md:py-4 text-sm font-bold transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-xl text-slate-700 data-[state=active]:text-white data-[state=active]:shadow-xl hover:scale-[1.02] hover:shadow-lg min-w-[100px] md:min-w-[160px] data-[state=active]:bg-gradient-to-r"
      style={{
        background: activeTab === value
          ? `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`
          : 'transparent'
      }}
    >
      <div className="relative z-10 flex items-center gap-1 md:gap-3">
        <div className="w-5 h-5 md:w-8 md:h-8 rounded-lg bg-blue-100/80 group-data-[state=active]:bg-white/20 flex items-center justify-center transition-all duration-500 group-data-[state=active]:rotate-6 group-hover:scale-110">
          <Icon className="w-3 h-3 md:w-4 md:h-4 text-blue-600 group-data-[state=active]:text-white transition-all duration-300" />
        </div>
        <div className="text-left">
          <div className="font-bold text-xs md:text-base">{title}</div>
          <div className="text-xs opacity-80 font-medium hidden md:block">{subtitle}</div>
        </div>
      </div>
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-700 blur-xl"
        style={{
          background: activeTab === value
            ? `linear-gradient(135deg, ${activeColors.from} 0%, ${activeColors.to} 100%)`
            : 'transparent'
        }}
      />
    </TabsTrigger>
  );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header />

        <div className="pt-16 md:pt-28 pb-6 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            {/* Mobile Header - Improved */}
            <div className="text-center mb-6 md:mb-12 lg:mb-16 ">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl mb-4 md:mb-6 shadow-xl bg-gradient-to-r from-[#0f172a] to-[#1e293b] ">
                <Book className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-6 leading-tight px-2 md:px-4 bg-gradient-to-b from-[#0f172a] to-[#1e293b] bg-clip-text text-transparent">
                Complete Documentation
              </h1>
              <p className="text-sm md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed px-4 md:px-4 text-slate-600">
                An easy guide for non-programmers to easily customize your website in seconds.
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                {/* Mobile Navigation - Improved Sheet */}
                <div className="block md:hidden mb-6">
                  <Sheet>
                    <SheetTrigger className="w-full bg-gradient-to-r from-white/95 to-blue-50/95 backdrop-blur-xl border-2 border-blue-200/50 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-between group">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {activeTab === "basic" && <Book className="w-5 h-5 text-white" />}
                          {activeTab === "components" && <Replace className="w-5 h-5 text-white" />}
                          {activeTab === "advanced" && <Zap className="w-5 h-5 text-white" />}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-bold text-base text-slate-800 truncate">
                            {activeTab === "basic" && "Basic Documentation"}
                            {activeTab === "components" && "Components Replacement"}
                            {activeTab === "advanced" && "Advanced Documentation"}
                          </div>
                          <div className="text-xs text-blue-600 font-medium">
                            {activeTab === "basic" && "Getting started guide"}
                            {activeTab === "components" && "Component design guide"}
                            {activeTab === "advanced" && "Advanced topics"}
                          </div>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-xl bg-blue-100/80 flex items-center justify-center group-hover:bg-blue-200/80 transition-colors duration-300">
                        <Menu className="w-4 h-4 text-blue-600" />
                      </div>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="h-auto max-h-[80vh] rounded-t-3xl border-t-4 border-blue-500 p-0">
                      <div className="p-4 space-y-3">
                        <div className="text-center mb-6">
                          <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-3"></div>
                          <h3 className="text-lg font-bold text-slate-800 mb-1">Choose Documentation Section</h3>
                          <p className="text-slate-600 text-sm">Select the section you want to explore</p>
                        </div>

                        <div className="space-y-2">
                          <button
                            onClick={() => setActiveTab("basic")}
                            className={`w-full p-4 rounded-2xl text-left transition-all duration-300 transform hover:scale-[1.02] ${activeTab === "basic"
                              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl"
                              : "bg-slate-50 text-slate-700 hover:bg-blue-50 border-2 border-blue-100"
                              }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTab === "basic" ? "bg-white/20" : "bg-blue-100"
                                }`}>
                                <Book className={`w-5 h-5 ${activeTab === "basic" ? "text-white" : "text-blue-600"}`} />
                              </div>
                              <div className="flex-1">
                                <div className="font-bold text-base mb-1">Basic Documentation</div>
                                <div className={`text-sm ${activeTab === "basic" ? "opacity-90" : "opacity-70"}`}>
                                  Getting started guide with step-by-step instructions
                                </div>
                              </div>
                            </div>
                          </button>

                          <button
                            onClick={() => setActiveTab("components")}
                            className={`w-full p-4 rounded-2xl text-left transition-all duration-300 transform hover:scale-[1.02] ${activeTab === "components"
                              ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-xl"
                              : "bg-slate-50 text-slate-700 hover:bg-orange-50 border-2 border-orange-100"
                              }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTab === "components" ? "bg-white/20" : "bg-orange-100"
                                }`}>
                                <Replace className={`w-5 h-5 ${activeTab === "components" ? "text-white" : "text-orange-600"}`} />
                              </div>
                              <div className="flex-1">
                                <div className="font-bold text-base mb-1">Components Replacement</div>
                                <div className={`text-sm ${activeTab === "components" ? "opacity-90" : "opacity-70"}`}>
                                  Learn how to customize and replace components
                                </div>
                              </div>
                            </div>
                          </button>

                          <button
                            onClick={() => setActiveTab("advanced")}
                            className={`w-full p-4 rounded-2xl text-left transition-all duration-300 transform hover:scale-[1.02] ${activeTab === "advanced"
                              ? "bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-xl"
                              : "bg-slate-50 text-slate-700 hover:bg-purple-50 border-2 border-purple-100"
                              }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTab === "advanced" ? "bg-white/20" : "bg-purple-100"
                                }`}>
                                <Zap className={`w-5 h-5 ${activeTab === "advanced" ? "text-white" : "text-purple-600"}`} />
                              </div>
                              <div className="flex-1">
                                <div className="font-bold text-base mb-1">Advanced Documentation</div>
                                <div className={`text-sm ${activeTab === "advanced" ? "opacity-90" : "opacity-70"}`}>
                                  Advanced features and customization options
                                </div>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-center mb-12 lg:mb-16">
                  <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-2xl p-2 shadow-2xl max-w-4xl">
                    <TabsList className="relative grid w-full grid-cols-3 rounded-xl bg-transparent p-0 h-auto">
                      <TabButton
                        value="basic"
                        icon={Book}
                        title="Basic"
                        subtitle="Documentation"
                        gradientFrom="#3b82f6"
                        gradientTo="#1d4ed8"
                        activeColors={{ from: "rgba(59, 130, 246, 0.4)", to: "rgba(29, 78, 216, 0.3)" }}
                      />
                      <TabButton
                        value="components"
                        icon={Replace}
                        title="Components"
                        subtitle="Replacement"
                        gradientFrom="#f97316"
                        gradientTo="#ec4899"
                        activeColors={{ from: "rgba(249, 115, 22, 0.4)", to: "rgba(236, 72, 153, 0.3)" }}
                      />
                      <TabButton
                        value="advanced"
                        icon={Zap}
                        title="Advanced"
                        subtitle="Documentation"
                        gradientFrom="#8b5cf6"
                        gradientTo="#7c3aed"
                        activeColors={{ from: "rgba(139, 92, 246, 0.4)", to: "rgba(124, 58, 237, 0.3)" }}
                      />
                    </TabsList>
                  </div>
                </div>

                <TabsContent value="basic" className="mt-4 md:mt-8 lg:mt-12">
                  <BasicDocumentation />
                </TabsContent>

                <TabsContent value="components" className="mt-4 md:mt-8 lg:mt-12">
                  <ComponentReplacement />
                </TabsContent>

                <TabsContent value="advanced" className="mt-4 md:mt-8 lg:mt-12">
                  <AdvancedDocumentation />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Enhanced modern animations */
        @keyframes modernSlide {
          0% {
            transform: translateX(var(--start-pos, 0)) scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: translateX(calc(var(--start-pos, 0) + var(--end-pos, 0)) / 2) scale(1.02);
            opacity: 0.9;
          }
          100% {
            transform: translateX(var(--end-pos, 0)) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.2);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        
        /* Enhanced hover and interaction effects */
        .group:hover {
          transform: translateY(-2px) scale(1.01);
        }
        
        /* Modern backdrop effects */
        .backdrop-blur-xl {
          backdrop-filter: blur(24px) saturate(180%);
        }
        
        /* Smooth transitions for all interactive elements */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Enhanced glass morphism */
        .glass-modern {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        /* Mobile specific optimizations */
        @media (max-width: 768px) {
          .min-w-0 {
            min-width: 0;
          }
          
          .truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      `}</style>
    </>
  );
};

export default Documentation;