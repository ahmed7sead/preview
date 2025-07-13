import { useState, useEffect } from 'react';

interface TypeWriterProps {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

const TypeWriter = ({
  phrases,
  typeSpeed = 120,
  deleteSpeed = 60,
  pauseTime = 2800
}: TypeWriterProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);

      return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentPhrase) {
        setIsPaused(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases, typeSpeed, deleteSpeed, pauseTime]);

  return (
    <div className="text-center max-w-6xl mx-auto">
      <div className="mb-6 lg:mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight fade-in-up">
          <span className="text-slate-900 mr-3">Professional</span>
          <span className="text-slate-900">Template</span>
        </h1>
      </div>

      <div className="min-h-[3rem] md:min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-relaxed">
          <span className="text-slate-700 mr-3">Perfect for</span>
          <span className="relative inline-block min-w-[280px] md:min-w-[350px] lg:min-w-[450px] xl:min-w-[500px] text-left">
            <span className="font-extrabold transition-all duration-300 ease-in-out" style={{ color: '#caa93c' }}>
              {currentText}
            </span>
            <span className="modern-cursor text-slate-900">|</span>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default TypeWriter;
