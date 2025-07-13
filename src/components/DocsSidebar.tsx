
import { useRef, useEffect, useState } from "react";
import { FileText, Component, Settings } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent } from "../components/ui/sidebar";

interface DocsSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function DocsSidebar({ activeSection, setActiveSection }: DocsSidebarProps) {
  const [lineStyle, setLineStyle] = useState({ width: 0, top: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const menuItems = [
    {
      id: "basic",
      title: "Basic Documentation",
      icon: FileText,
    },
    {
      id: "replacement",
      title: "Component Replacement",
      icon: Component,
    },
    {
      id: "advanced",
      title: "Advanced Documentation",
      icon: Settings,
    },
  ];

  useEffect(() => {
    if (!navRef.current) return;

    const activeButton = buttonsRef.current[activeSection];
    if (activeButton) {
      const navRect = navRef.current.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setLineStyle({
        width: buttonRect.width - 16,
        top: buttonRect.top - navRect.top + 8,
      });
    }
  }, [activeSection]);

  return (
    <Sidebar className="border-r border-slate-200 bg-white">
      <SidebarContent className="p-6">
        <div className="content-block">
          <h2 className="hierarchy-2 text-lg mb-2">Documentation</h2>
          <p className="hierarchy-5 text-sm">Comprehensive guides and API references</p>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <div ref={navRef} className="relative space-y-2">
              <div
                className="absolute left-2 bg-slate-900 rounded-lg transition-all duration-300 ease-out shadow-sm z-0"
                style={{
                  width: `${lineStyle.width}px`,
                  height: '48px',
                  top: `${lineStyle.top}px`,
                }}
              />

              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    ref={(el) => buttonsRef.current[item.id] = el}
                    onClick={() => setActiveSection(item.id)}
                    className={`relative z-10 w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 font-semibold text-left focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 ${isActive
                      ? 'text-white'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                  >
                    <item.icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span className="relative z-10 text-sm">{item.title}</span>
                  </button>
                );
              })}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Support Section - Proximity & Grouping */}
        <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h3 className="hierarchy-3 text-sm mb-2">Need Assistance?</h3>
          <p className="hierarchy-5 text-xs mb-3 leading-relaxed">
            Contact our support team for technical assistance and guidance.
          </p>
          <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2">
            Contact Support
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
