import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [lineStyle, setLineStyle] = useState({ width: 0, left: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const isDocumentation = location.pathname.includes('documentation');
  const isHome = location.pathname === '/';

  // Update magic line position - Visual Hierarchy
  useEffect(() => {
    if (!isHome || !navRef.current) return;

    const activeButton = buttonsRef.current[activeSection];
    if (activeButton) {
      const navRect = navRef.current.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setLineStyle({
        width: buttonRect.width,
        left: buttonRect.left - navRect.left
      });
    }
  }, [activeSection, isHome]);

  // Scrollspy effect for user guidance
  useEffect(() => {
    if (!isHome) return;

    const sections = ['home', 'components', 'pages', 'features'];
    const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.3, 0.7],
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    sectionElements.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionElements.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [isHome]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const NavButton = ({ sectionId, children }: { sectionId: string; children: React.ReactNode }) => {
    const isActive = activeSection === sectionId;
    return (
      <button
        ref={(el) => buttonsRef.current[sectionId] = el}
        onClick={() => scrollToSection(sectionId)}
        className={`relative z-10 transition-all duration-300 font-semibold px-4 py-2 rounded-lg text-sm md:text-base ${isActive
          ? 'text-white'
          : 'text-slate-700 hover:text-slate-900'
          }`}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo - Strong Visual Hierarchy */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-slate-900 hover:text-slate-700 transition-colors duration-200"
          >
            Template Preview
          </Link>

          {/* Desktop Navigation - Consistent Alignment */}
          <div className="hidden md:flex items-center space-x-1">
            {isHome ? (
              <div ref={navRef} className="relative flex items-center space-x-1 bg-slate-100 rounded-xl p-1">
                {/* Visual Indicator for Active State */}
                <div
                  className="absolute top-1 bottom-1 bg-slate-900 rounded-lg transition-all duration-300 ease-out shadow-sm"
                  style={{
                    width: `${lineStyle.width}px`,
                    left: `${lineStyle.left}px`,
                  }}
                />
                <NavButton sectionId="home">Home</NavButton>
                <NavButton sectionId="components">Components</NavButton>
                <NavButton sectionId="pages">Pages</NavButton>
                <NavButton sectionId="features">Features</NavButton>
              </div>
            ) : (
              <Link
                to="/"
                className="font-semibold text-slate-700 hover:text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-100 transition-all duration-200"
              >
                Home
              </Link>
            )}

            <Link
              to="/documentation"
              className={`font-semibold flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${isDocumentation
                ? 'text-white bg-slate-900 shadow-sm'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
            >
              <FileText className="h-4 w-4" />
              <span className="hidden lg:inline">Documentation</span>
              <span className="lg:hidden">Docs</span>
            </Link>

            {/* Primary CTA - Maximum Contrast */}
            <Button
              asChild
              className="ml-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-sm hover:shadow-md transition-all duration-200"
            >
              <a
                href="https://flex-fast-multi-purpose.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span className="hidden sm:inline">Live Demo</span>
                <span className="sm:hidden">Demo</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button - Clear Visual Hierarchy */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation - Consistent Spacing & Hierarchy */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 animate-fade-in">
            <div className="flex flex-col space-y-2 pt-4">
              {isHome ? (
                <>
                  <button
                    onClick={() => scrollToSection('home')}
                    className={`font-semibold text-left px-4 py-3 rounded-lg transition-all duration-200 ${activeSection === 'home'
                      ? 'text-white bg-slate-900'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection('components')}
                    className={`font-semibold text-left px-4 py-3 rounded-lg transition-all duration-200 ${activeSection === 'components'
                      ? 'text-white bg-slate-900'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                  >
                    Components
                  </button>
                  <button
                    onClick={() => scrollToSection('pages')}
                    className={`font-semibold text-left px-4 py-3 rounded-lg transition-all duration-200 ${activeSection === 'pages'
                      ? 'text-white bg-slate-900'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                  >
                    Pages
                  </button>
                  <button
                    onClick={() => scrollToSection('features')}
                    className={`font-semibold text-left px-4 py-3 rounded-lg transition-all duration-200 ${activeSection === 'features'
                      ? 'text-white bg-slate-900'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                  >
                    Features
                  </button>
                </>
              ) : (
                <Link
                  to="/"
                  className="font-semibold text-slate-700 hover:text-slate-900 px-4 py-3 rounded-lg hover:bg-slate-100 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              )}

              <Link
                to="/documentation"
                className={`font-semibold flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 ${isDocumentation
                  ? 'text-white bg-slate-900'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText className="h-4 w-4" />
                Documentation
              </Link>

              <Button
                asChild
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold mt-2 w-fit"
              >
                <a
                  href="https://flex-fast-multi-purpose.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Live Demo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
