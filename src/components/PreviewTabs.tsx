import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Home, Folder, Users, MessageSquare, Phone, Settings, Image, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

interface TabContent {
  id: string;
  title: string;
  description: string;
  icon: any;
  images: string[];
}

const tabsData: TabContent[] = [
  {
    id: "homepage",
    title: "Home Page",
    description: "Main landing page with hero sections and modern design",
    icon: Home,
    images: [
      "/Components/hero/hero-light-anmite.png",
      "/Components/hero/hero-multiple.png",
      "/Components/hero/video-heroSection.png",
      "/Components/hero/wave+down-button.png",
    ]
  },
  {
    id: "projects",
    title: "Projects",
    description: "Showcase of work and portfolio items",
    icon: Folder,
    images: [
      "/Components/project/main-page-1.png",
      "/Components/project/anmite-card.png",
      "/Components/project/g3.png",
      "/Components/project/g2.png",
      "/Components/project/g1.png",
      "/Components/project/duflit.png",
      "/Components/project/cover-above.png",
      "/Components/project/more-info.png",
    ]
  },
  {
    id: "about",
    title: "About Us",
    description: "Company information and team details",
    icon: Users,
    images: [
      "/Components/about/as1.png",
      "/Components/about/as2.png",
      "/Components/about/a1.png",
      "/Components/about/a2.png",
    ]
  },
  {
    id: "testimonials",
    title: "Testimonials",
    description: "Customer reviews and testimonials",
    icon: MessageSquare,
    images: [
      "/Components/Testimonials/t1.png",
      "/Components/Testimonials/t2.png",
      "/Components/Testimonials/t3-full-card.png",
      "/Components/Testimonials/t3-one.png",
    ]
  },
  {
    id: "contact",
    title: "Contact",
    description: "Get in touch with our team",
    icon: Phone,
    images: [
      "/Components/Contact/c1.png",
      "/Components/Contact/c2.png",
      "/Components/Contact/c3.png",
      "/Components/Contact/c4.png",
    ]
  },
  {
    id: "services",
    title: "Services",
    description: "Our professional services and offerings",
    icon: Settings,
    images: [
      "/Components/Services/s1.png",
      "/Components/Services/s2.png",
      "/Components/Services/s3.png",
      "/Components/Services/s4.png",
    ]
  },
  {
    id: "gallery",
    title: "Gallery",
    description: "Image gallery and visual content showcase",
    icon: Image,
    images: [
      "/Components/Gallery/g1.png",
      "/Components/Gallery/g2.png",
      "/Components/Gallery/g3.png",
      "/Components/Gallery/g4.png",
    ]
  }
];

const PreviewTabs = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const [currentImageSet, setCurrentImageSet] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [currentZoomedIndex, setCurrentZoomedIndex] = useState<number>(0);
  const activeContent = tabsData.find(tab => tab.id === activeTab) || tabsData[0];

  const imagesPerSet = 4;
  const totalSets = Math.ceil(activeContent.images.length / imagesPerSet);
  const currentImages = activeContent.images.slice(
    currentImageSet * imagesPerSet,
    (currentImageSet + 1) * imagesPerSet
  );

  const nextImageSet = () => {
    setCurrentImageSet((prev) => (prev + 1) % totalSets);
  };

  const prevImageSet = () => {
    setCurrentImageSet((prev) => (prev - 1 + totalSets) % totalSets);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentImageSet(0);
  };

  const openImageZoom = (image: string) => {
    const imageIndex = activeContent.images.indexOf(image);
    setCurrentZoomedIndex(imageIndex);
    setZoomedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImageZoom = () => {
    setZoomedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextZoomedImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentZoomedIndex + 1) % activeContent.images.length;
    setCurrentZoomedIndex(nextIndex);
    setZoomedImage(activeContent.images[nextIndex]);
  };

  const prevZoomedImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentZoomedIndex - 1 + activeContent.images.length) % activeContent.images.length;
    setCurrentZoomedIndex(prevIndex);
    setZoomedImage(activeContent.images[prevIndex]);
  };

  const getImageTitle = (index: number) => {
    return `${activeContent.title} - img ${index + 1}`;
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!zoomedImage) return;
    if (e.key === 'ArrowLeft') {
      prevZoomedImage(e as any);
    } else if (e.key === 'ArrowRight') {
      nextZoomedImage(e as any);
    }


    else if (e.key === 'Escape') {
      closeImageZoom();
    }
  };

  return (
    <>
      <section id="pages" className="py-12 lg:py-16 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,0,0,0.02),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(0,0,0,0.01),transparent_50%)]"></div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-gray-100/60 to-white/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-white/40 to-gray-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full px-6 sm:px-8 py-3 sm:py-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-3 h-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-gray-800 tracking-wide">Explore</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-gray-900">Explore Pages</span>
            </h2>
          </div>

          <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* Tabs Section */}
            <div className="xl:w-1/3 space-y-3 flex flex-col">
              {tabsData.map((tab, index) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`group relative overflow-hidden text-left transition-all duration-700 ease-out transform flex-1 min-h-[70px] sm:min-h-[75px] ${activeTab === tab.id
                      ? 'scale-105 -translate-y-2'
                      : 'hover:scale-102 hover:-translate-y-1'
                      }`}
                    style={{
                      animationDelay: `${index * 0.15}s`,
                    }}
                  >
                    <div className={`relative w-full h-full p-4 sm:p-5 rounded-2xl border-2 transition-all duration-700 backdrop-blur-sm ${activeTab === tab.id
                      ? 'bg-gradient-to-br from-white via-gray-50/90 to-white border-gray-400 shadow-2xl shadow-gray-200/60'
                      : 'bg-white/80 border-gray-200 hover:bg-white/95 hover:border-gray-300 hover:shadow-xl'
                      }`}>

                      {activeTab === tab.id && (
                        <>
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-r-full shadow-lg"></div>
                          <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-gray-200/30 via-transparent to-gray-200/30 rounded-2xl"></div>
                        </>
                      )}

                      <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                        <div className={`relative transition-all duration-700 ${activeTab === tab.id
                          ? 'transform rotate-6 scale-110'
                          : 'group-hover:scale-105 group-hover:rotate-3'
                          }`}>
                          <div className={`p-2.5 sm:p-3 rounded-2xl transition-all duration-700 shadow-lg ${activeTab === tab.id
                            ? 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white shadow-xl shadow-gray-400/30'
                            : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 group-hover:from-gray-200 group-hover:to-gray-300'
                            }`}>
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>

                          {activeTab === tab.id && (
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-2xl blur-lg animate-pulse"></div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className={`font-bold text-sm sm:text-base transition-all duration-500 ${activeTab === tab.id
                            ? 'text-gray-900 transform translate-x-2'
                            : 'text-gray-800 group-hover:text-gray-900'
                            }`}>
                            {tab.title}
                          </h3>
                          <p className={`text-xs mt-1 transition-all duration-500 leading-relaxed ${activeTab === tab.id
                            ? 'text-gray-600 transform translate-x-2 opacity-100'
                            : 'text-gray-500 group-hover:text-gray-600 opacity-80'
                            }`}>
                            {tab.description}
                          </p>
                        </div>
                      </div>

                      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${activeTab === tab.id
                        ? 'bg-gradient-to-r from-gray-100/10 via-white/5 to-gray-100/10 opacity-100'
                        : 'bg-gradient-to-r from-gray-50/5 via-white/10 to-gray-50/5 opacity-0 group-hover:opacity-100'
                        }`}></div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Main Content Section - Enhanced */}
            <div className="xl:w-2/3 flex flex-col">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-4 sm:p-5 lg:p-6 border border-gray-200 shadow-xl shadow-gray-200/30 flex-1 flex flex-col">
                <div className="mb-4 sm:mb-5">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="p-2.5 sm:p-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl shadow-lg shadow-gray-300/30 transform hover:scale-110 transition-transform duration-300">
                      <activeContent.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {activeContent.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
                    {activeContent.description}
                  </p>
                </div>

                {/* Navigation */}
                {totalSets > 1 && (
                  <div className="flex items-center justify-between mb-4 sm:mb-5 gap-2">
                    <Button
                      onClick={prevImageSet}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1.5 sm:gap-2 bg-white/95 border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-gray-400 font-bold px-3 sm:px-4 py-2 hover:scale-105 transition-all duration-300 rounded-xl text-xs sm:text-sm"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Previous</span>
                    </Button>
                    <span className="text-xs sm:text-sm font-bold text-gray-800 bg-gray-100 px-2.5 sm:px-3 py-1 rounded-full border border-gray-200">
                      {currentImageSet + 1} / {totalSets}
                    </span>
                    <Button
                      onClick={nextImageSet}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1.5 sm:gap-2 bg-white/95 border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-gray-400 font-bold px-3 sm:px-4 py-2 hover:scale-105 transition-all duration-300 rounded-xl text-xs sm:text-sm"
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </Button>
                  </div>
                )}

                {/* Enhanced Image Grid - Better responsiveness */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 flex-1">
                  {currentImages.map((image, index) => (
                    <div
                      key={`${currentImageSet}-${index}`}
                      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-200 cursor-pointer transform hover:-translate-y-1"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => openImageZoom(image)}
                    >
                      {/* Enhanced aspect ratio container */}
                      <div className="relative w-full" style={{ paddingBottom: '66.67%' }}>
                        <img
                          src={image}
                          alt={`${activeContent.title} preview ${currentImageSet * imagesPerSet + index + 1}`}
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                        />

                        {/* Enhanced overlay with gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                        {/* Image counter badge */}
                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md rounded-lg px-2.5 py-1 shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <span className="text-xs font-bold text-gray-800">
                            {currentImageSet * imagesPerSet + index + 1} / {activeContent.images.length}
                          </span>
                        </div>

                        {/* Enhanced zoom icon */}
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                          <div className="bg-white/95 backdrop-blur-md rounded-full p-2.5 shadow-xl border border-gray-200 flex items-center gap-2">
                            <ZoomIn className="w-4 h-4 text-gray-800" />
                            <span className="text-xs font-bold text-gray-800 pr-1 hidden sm:inline">عرض</span>
                          </div>
                        </div>

                        {/* Image title on hover */}
                        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                          <div className="bg-white/95 backdrop-blur-md rounded-lg px-3 py-2 shadow-xl border border-gray-200">
                            <p className="text-xs font-semibold text-gray-800 truncate">
                              {getImageTitle(currentImageSet * imagesPerSet + index)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Image Zoom Modal - Full Screen Experience */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/97 backdrop-blur-md z-50 flex items-center justify-center"
          onClick={closeImageZoom}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative w-full h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Header with title and counter */}
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex-1">
                <h3 className="text-white text-base sm:text-lg lg:text-xl font-bold mb-1">
                  {getImageTitle(currentZoomedIndex)}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  img {currentZoomedIndex + 1} من {activeContent.images.length}
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={closeImageZoom}
                className="bg-white/95 backdrop-blur-md text-gray-800 rounded-full p-2.5 sm:p-3 hover:bg-white transition-all duration-300 shadow-2xl hover:scale-110 border border-gray-200 ml-4"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Main image container */}
            <div className="flex-1 relative flex items-center justify-center px-4 sm:px-12 lg:px-20 py-4">
              <img
                src={zoomedImage}
                alt={getImageTitle(currentZoomedIndex)}
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg sm:rounded-xl shadow-2xl"
                style={{ maxHeight: 'calc(100vh - 200px)' }}
              />

              {/* Navigation arrows - Enhanced for mobile */}
              <button
                onClick={prevZoomedImage}
                className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md text-gray-800 rounded-full p-3 sm:p-4 hover:bg-white transition-all duration-300 shadow-2xl hover:scale-110 border border-gray-200 z-10"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextZoomedImage}
                className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md text-gray-800 rounded-full p-3 sm:p-4 hover:bg-white transition-all duration-300 shadow-2xl hover:scale-110 border border-gray-200 z-10"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

            </div>

            {/* Thumbnail strip at bottom */}
            <div className="bg-gradient-to-t from-black/80 to-transparent px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
              <div className="flex justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {activeContent.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentZoomedIndex(idx);
                      setZoomedImage(img);
                    }}
                    className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${idx === currentZoomedIndex
                      ? 'border-white shadow-lg shadow-white/50 scale-110'
                      : 'border-gray-500 opacity-60 hover:opacity-100 hover:border-gray-300'
                      }`}
                    style={{
                      width: '60px',
                      height: '60px',
                    }}
                  >
                    <img
                      src={img}
                      alt={`معاينة ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewTabs;