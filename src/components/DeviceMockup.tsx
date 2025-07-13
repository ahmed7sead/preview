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
      <div className="relative animate-fade-in">
        <div
          className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg p-2 shadow-md"
          style={{
            width: displayWidth + 16,
            height: realHeight * scale + 32,
          }}
        >
          <div className="bg-gray-800 rounded-t-sm px-2 py-1 flex items-center justify-between mb-1">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <div className="text-white text-sm font-medium">Desktop ({realWidth}×{realHeight})</div>
            <button onClick={handleRefresh} className="text-white hover:text-gray-300 p-1 rounded">
              <RefreshCw className="w-3 h-3" />
            </button>
          </div>
          <div
            className="bg-black rounded-b-sm overflow-hidden relative"
            style={{
              width: displayWidth,
              height: realHeight * scale,
            }}
          >
            {!isLoaded && (
              <div className="absolute inset-0 bg-white flex items-center justify-center z-10">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                  <div className="text-gray-500 text-sm">Loading...</div>
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
          <div className="mt-1 mx-auto w-12 h-1 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full"></div>
          <div className="mt-1 mx-auto w-16 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
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
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-2 shadow-lg"
        style={{
          width: displayWidth + 16,
          height: realHeight * scale + 32,
        }}
      >
        <div className="flex items-center justify-between mb-1 px-1">
          <div className="text-white text-sm font-medium">Mobile ({realWidth}×{realHeight})</div>
          <button onClick={handleRefresh} className="text-white hover:text-gray-300 p-1 rounded">
            <RefreshCw className="w-3 h-3" />
          </button>
        </div>
        <div
          className="bg-black rounded-xl overflow-hidden relative"
          style={{
            width: displayWidth,
            height: realHeight * scale,
          }}
        >
          {!isLoaded && (
            <div className="absolute inset-0 bg-white flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-2">
                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <div className="text-gray-500 text-sm">Loading...</div>
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
        <div className="mt-2 mx-auto w-10 h-1 bg-white rounded-full opacity-60"></div>
      </div>
    </div>
  );
};

export default DeviceMockup;
