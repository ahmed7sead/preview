import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";

interface DeviceMockupProps {
  url: string;
  device: 'desktop' | 'mobile';
  siteWidth?: number;
  siteHeight?: number;
  frameWidth?: number; // كم بيكسل تحب تظهر الجهاز كإطار
}

const DeviceMockup = ({
  url,
  device,
  siteWidth,
  siteHeight,
  frameWidth,
}: DeviceMockupProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, [key]);

  const handleRefresh = () => {
    setIsLoaded(false);
    setKey(prev => prev + 1);
  };

  if (device === 'desktop') {
    const realWidth = siteWidth || 1280;
    const realHeight = siteHeight || 800;
    const displayWidth = frameWidth || 700;
    const scale = displayWidth / realWidth;

    return (
      <div className="relative animate-fade-in hidden md:block">
        <div
          className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded-2xl p-4 shadow-2xl"
          style={{
            width: displayWidth + 32,
            height: realHeight * scale + 56,
            boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 1px rgba(0,0,0,0.2)',
          }}
        >
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-lg px-4 py-2 flex items-center justify-between mb-2 shadow-inner">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg hover:bg-red-400 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg hover:bg-yellow-400 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg hover:bg-green-400 transition-colors cursor-pointer" />
            </div>
            <div className="text-gray-300 text-xs font-medium tracking-wide">Desktop Preview • {realWidth}×{realHeight}</div>
            <button onClick={handleRefresh} className="text-gray-400 hover:text-white p-1.5 rounded-md hover:bg-gray-700 transition-all">
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
          <div
            className="bg-black rounded-b-lg overflow-hidden relative ring-1 ring-gray-900/50"
            style={{
              width: displayWidth,
              height: realHeight * scale,
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            {!isLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
                  <div className="text-gray-600 text-sm font-medium">Loading Preview...</div>
                </div>
              </div>
            )}
            <iframe
              key={key}
              src={url}
              className={`border-0 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{
                width: realWidth,
                height: realHeight,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }}
              title="Desktop Preview"
            />
          </div>
          <div className="mt-3 mx-auto w-20 h-1.5 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 rounded-full shadow-md"></div>
          <div className="mt-2 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full opacity-60"></div>
        </div>
      </div>
    );
  }

  // Mobile section
  const realWidth = siteWidth || 415;
  const realHeight = siteHeight || 800;
  const displayWidth = frameWidth || 200;
  const scale = displayWidth / realWidth;

  return (
    <div className="relative animate-fade-in">
      <div
        className="bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-3xl p-3 shadow-2xl relative"
        style={{
          width: displayWidth + 24,
          height: realHeight * scale + 48,
          boxShadow: '0 25px 70px rgba(0,0,0,0.5), 0 0 1px rgba(255,255,255,0.1)',
        }}
      >
        {/* Camera notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-20 shadow-lg">
          <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-gray-900 rounded-full"></div>
          <div className="absolute top-1 right-3 w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
        </div>

        <div className="flex items-center justify-between mb-2 px-2 relative z-10">
          <div className="text-gray-400 text-xs font-medium tracking-wide">Mobile • {realWidth}×{realHeight}</div>
          <button onClick={handleRefresh} className="text-gray-500 hover:text-white p-1.5 rounded-lg hover:bg-gray-800 transition-all">
            <RefreshCw className="w-3 h-3" />
          </button>
        </div>

        <div
          className="bg-black rounded-2xl overflow-hidden relative ring-1 ring-white/10"
          style={{
            width: displayWidth,
            height: realHeight * scale,
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8)',
          }}
        >
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-7 h-7 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <div className="text-gray-600 text-xs font-medium">Loading Preview...</div>
              </div>
            </div>
          )}
          <iframe
            key={key}
            src={url}
            className={`border-0 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{
              width: realWidth,
              height: realHeight,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
            title="Mobile Preview"
          />
        </div>

        {/* Home indicator */}
        <div className="mt-3 mx-auto w-16 h-1 bg-white rounded-full opacity-40 shadow-lg"></div>

        {/* Side buttons */}
        <div className="absolute -right-0.5 top-20 w-0.5 h-12 bg-gradient-to-b from-gray-700 to-gray-800 rounded-r"></div>
        <div className="absolute -right-0.5 top-36 w-0.5 h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-r"></div>
        <div className="absolute -left-0.5 top-24 w-0.5 h-10 bg-gradient-to-b from-gray-700 to-gray-800 rounded-l"></div>
      </div>
    </div>
  );
};

export default DeviceMockup;