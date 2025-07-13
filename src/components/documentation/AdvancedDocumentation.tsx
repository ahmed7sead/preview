import { useState } from 'react';
import { advancedSteps } from '../../data/documentationData';
import DocumentationSidebar from './DocumentationSidebar';
import CodeBlock from './CodeBlock';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { FileText, Menu, Image } from 'lucide-react';

const AdvancedDocumentation = () => {
  const [activeStep, setActiveStep] = useState(advancedSteps[0].id);

  const currentStep = advancedSteps.find(step => step.id === activeStep) || advancedSteps[0];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto px-4 py-4 lg:py-6">
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 xl:gap-8">
          {/* Mobile Sidebar - Sheet */}
          <div className="lg:hidden mb-6">
            <Sheet>
              <SheetTrigger className="w-full bg-white border border-purple-200/60 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between group">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-purple-200 transition-colors">
                    <currentStep.icon className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-purple-600 uppercase tracking-wider mb-0.5">
                      {currentStep.category}
                    </p>
                    <h3 className="font-semibold text-slate-800 text-sm truncate leading-tight">
                      {currentStep.title}
                    </h3>
                  </div>
                </div>
                <Menu className="w-5 h-5 text-slate-400 shrink-0 group-hover:text-slate-600 transition-colors" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[320px] p-0 bg-white">
                <div className="p-6">
                  <DocumentationSidebar
                    title="Advanced Topics"
                    items={advancedSteps}
                    activeItem={activeStep}
                    onItemChange={setActiveStep}
                    gradientColors="bg-gradient-to-br from-purple-500 to-purple-600"
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-6">
              <DocumentationSidebar
                title="Projects Section Pages"
                items={advancedSteps}
                activeItem={activeStep}
                onItemChange={setActiveStep}
                gradientColors="bg-gradient-to-br from-purple-500 to-purple-600"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl lg:rounded-xl shadow-lg border overflow-hidden bg-white border-purple-100/60">
              {/* Header Section */}
              <div className="p-4 sm:p-6 lg:p-8 text-white bg-gradient-to-r from-purple-600 to-purple-700 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-purple-800/90"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm shrink-0 shadow-lg">
                      <currentStep.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                    <div className="min-w-0 flex-1 pt-1">
                      <span className="text-purple-100 text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-1">
                        {currentStep.category}
                      </span>
                      <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white leading-tight">
                        {currentStep.title}
                      </h1>
                    </div>
                  </div>
                  <div className="pl-0 sm:pl-16 lg:pl-18">
                    <p className="text-sm sm:text-base lg:text-lg text-purple-50/90 leading-relaxed max-w-2xl">
                      {currentStep.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                  {/* Image Section - استبدال الفيديو */}
                  <div>

                    <div className="bg-gray-50/50 rounded-2xl p-3 sm:p-4 border border-gray-100">
                      <div className="w-full rounded-xl overflow-hidden shadow-sm bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                        <img
                          src={currentStep.videoPoster || "https://via.placeholder.com/800x400/6b46c1/ffffff?text=Example"}
                          alt={`${currentStep.title} - image exmpe`}
                          className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/800x400/6b46c1/ffffff?text=مثال+تطبيقي";
                          }}
                        />

                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50/50 rounded-2xl p-3 sm:p-4 border border-gray-100 overflow-hidden">
                    <CodeBlock
                      codeExample={{
                        title: "Implementation Code",
                        description: "Advanced implementation example",
                        code: currentStep.code,
                        path: currentStep.path
                      }}
                      onCopy={() => console.log('Code copied')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedDocumentation;