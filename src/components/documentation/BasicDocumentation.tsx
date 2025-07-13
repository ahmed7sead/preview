import { useState } from 'react';
import { Copy, Check, Menu, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { basicSteps } from '../../data/documentationData';
import DocumentationSidebar from './DocumentationSidebar';
import NavigationControls from './NavigationControls';
import CodeBlock from './CodeBlock';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const BasicDocumentation = () => {
  const [activeStep, setActiveStep] = useState(basicSteps[0].id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [copiedPath, setCopiedPath] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const currentStep = basicSteps.find(step => step.id === activeStep) || basicSteps[0];

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % currentStep.images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + currentStep.images.length) % currentStep.images.length);
  };
  const nextCode = () => {
    setCurrentCodeIndex(prev => (prev + 1) % currentStep.codeExamples.length);
  };
  const prevCode = () => {
    setCurrentCodeIndex(prev => (prev - 1 + currentStep.codeExamples.length) % currentStep.codeExamples.length);
  };
  const handleStepChange = (stepId: string) => {
    setActiveStep(stepId);
    setCurrentImageIndex(0);
    setCurrentCodeIndex(0);
  };
  const copyPath = async (path: string) => {
    try {
      await navigator.clipboard.writeText(path);
      setCopiedPath(true);
      setTimeout(() => setCopiedPath(false), 2000);
    } catch (err) {
      console.error('Failed to copy path:', err);
    }
  };

  const openModal = (imageIndex: number) => {
    setModalImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalImage = () => {
    setModalImageIndex(prev => (prev + 1) % currentStep.images.length);
  };

  const prevModalImage = () => {
    setModalImageIndex(prev => (prev - 1 + currentStep.images.length) % currentStep.images.length);
  };

  // Handle keyboard navigation for modal
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      nextModalImage();
    } else if (e.key === 'ArrowLeft') {
      prevModalImage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 lg:py-8">
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 xl:gap-8">
          {/* Mobile Sidebar - Sheet */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger className="w-full bg-white/80 backdrop-blur-sm border border-blue-200/60 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between group">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                    <currentStep.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-blue-600 text-xs font-medium uppercase tracking-wider block">{currentStep.category}</span>
                    <span className="font-bold text-slate-800 text-sm block truncate">{currentStep.title}</span>
                  </div>
                </div>
                <div className="bg-blue-100 rounded-lg p-2 group-hover:bg-blue-200 transition-colors duration-300">
                  <Menu className="w-4 h-4 text-blue-600" />
                </div>
              </SheetTrigger>
              <SheetContent side="left" className="w-[85vw] sm:w-80 p-0 bg-white/95 backdrop-blur-md">
                <div className="p-4 sm:p-6">
                  <DocumentationSidebar
                    title="Getting Started"
                    items={basicSteps}
                    activeItem={activeStep}
                    onItemChange={handleStepChange}
                    gradientColors="bg-gradient-to-br from-blue-500 to-blue-600"
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-4">
            <DocumentationSidebar
              title="Getting Started"
              items={basicSteps}
              activeItem={activeStep}
              onItemChange={handleStepChange}
              gradientColors="bg-gradient-to-br from-blue-500 to-blue-600"
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 mt-4 lg:mt-0">
            <div className="rounded-2xl sm:rounded-3xl shadow-xl border overflow-hidden bg-white/90 backdrop-blur-sm border-blue-100/60">
              {/* Header */}
              <div className="p-4 sm:p-6 lg:p-8 text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg shrink-0">
                      <currentStep.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-blue-100 text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-1">{currentStep.category}</span>
                      <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-slate-50 leading-tight">{currentStep.title}</h2>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-blue-50 leading-relaxed">
                    {currentStep.description}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
                {/* Image Gallery */}
                {currentStep.images.length > 0 && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex justify-center">
                        <NavigationControls
                          currentIndex={currentImageIndex}
                          totalItems={currentStep.images.length}
                          onPrevious={prevImage}
                          onNext={nextImage}
                          label="Images"
                        />
                      </div>
                    </div>
                    <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-blue-100/60 bg-gradient-to-br from-white to-blue-50/30 relative group cursor-pointer"
                      onClick={() => openModal(currentImageIndex)}>
                      <img
                        src={currentStep.images[currentImageIndex]}
                        alt={`${currentStep.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover hover:scale-105 transition-transform duration-500"
                      />
                      {/* Zoom overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                          <ZoomIn className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Code Examples */}
                {currentStep.codeExamples.length > 0 && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">💻</span>
                        </div>
                        Code Example
                      </h3>
                      <div className="flex justify-center">
                        <NavigationControls
                          currentIndex={currentCodeIndex}
                          totalItems={currentStep.codeExamples.length}
                          onPrevious={prevCode}
                          onNext={nextCode}
                          label="Code Examples"
                        />
                      </div>
                    </div>
                    {/* File Path */}
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl p-4 sm:p-6 border border-blue-200/60 shadow-lg">
                      <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 text-slate-800 flex items-center gap-2">
                        file path
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-white rounded-xl p-3 sm:p-4 border border-blue-200/60 shadow-sm">
                          <code className="text-xs sm:text-sm font-mono text-slate-700 break-all block overflow-x-auto">
                            {currentStep.codeExamples[currentCodeIndex].path}
                          </code>
                        </div>
                      </div>
                    </div>

                    {/* Code Block */}
                    <div className="overflow-hidden rounded-2xl shadow-2xl">
                      <CodeBlock
                        codeExample={currentStep.codeExamples[currentCodeIndex]}
                        onCopy={() => console.log('Code copied')}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-label="Image modal"
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation buttons */}
          {currentStep.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevModalImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextModalImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-200"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image counter */}
          {currentStep.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
              {modalImageIndex + 1} / {currentStep.images.length}
            </div>
          )}

          {/* Modal image */}
          <div
            className="relative max-w-[95vw] max-h-[95vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentStep.images[modalImageIndex]}
              alt={`${currentStep.title} - Image ${modalImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicDocumentation;