
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Palette, Layout, MessageCircle, CreditCard, Users, Home, Settings, Plus, Sparkles } from "lucide-react";

interface ConfigurationPanelProps {
  onConfigChange: (config: ConfigState) => void;
}

export interface ConfigState {
  heroSection: string;
  whatsappButton: string;
  footer: string;
  cardStyle: string;
  partners: string;
  colorTheme: string;
}

const configOptions = {
  heroSection: [
    { value: 'default', label: 'Default Hero', icon: Home },
    { value: 'minimal', label: 'Minimal Hero', icon: Layout },
    { value: 'gradient', label: 'Gradient Hero', icon: Palette },
    { value: 'video', label: 'Video Background', icon: Layout }
  ],
  whatsappButton: [
    { value: 'floating', label: 'Floating Button', icon: MessageCircle },
    { value: 'header', label: 'Header Button', icon: Layout },
    { value: 'footer', label: 'Footer Button', icon: Layout },
    { value: 'none', label: 'No WhatsApp', icon: Layout }
  ],
  cardStyle: [
    { value: 'rounded', label: 'Rounded Cards', icon: CreditCard },
    { value: 'sharp', label: 'Sharp Cards', icon: CreditCard },
    { value: 'elevated', label: 'Elevated Cards', icon: CreditCard },
    { value: 'flat', label: 'Flat Cards', icon: CreditCard }
  ],
  partners: [
    { value: 'carousel', label: 'Carousel View', icon: Users },
    { value: 'grid', label: 'Grid Layout', icon: Layout },
    { value: 'list', label: 'List View', icon: Layout },
    { value: 'none', label: 'No Partners', icon: Layout }
  ]
};

const colorThemes = [
  { value: 'cream', label: 'Cream Theme', color: 'bg-amber-100', gradient: 'from-amber-100 to-orange-100' },
  { value: 'pearl', label: 'Pearl Theme', color: 'bg-gray-100', gradient: 'from-gray-100 to-slate-100' },
  { value: 'ivory', label: 'Ivory Theme', color: 'bg-yellow-50', gradient: 'from-yellow-50 to-amber-50' },
  { value: 'soft', label: 'Soft Theme', color: 'bg-stone-100', gradient: 'from-stone-100 to-neutral-100' }
];

const ConfigurationPanel: React.FC<ConfigurationPanelProps> = ({ onConfigChange }) => {
  const [config, setConfig] = useState<ConfigState>({
    heroSection: 'default',
    whatsappButton: 'floating',
    footer: 'modern',
    cardStyle: 'rounded',
    partners: 'carousel',
    colorTheme: 'cream'
  });

  const handleConfigChange = (key: keyof ConfigState, value: string) => {
    const newConfig = { ...config, [key]: value };
    setConfig(newConfig);
    onConfigChange(newConfig);
  };

  const renderDropdown = (
    key: keyof ConfigState, 
    label: string, 
    options: any[], 
    icon: React.ReactNode,
    isColorTheme = false
  ) => {
    const currentOption = options.find(opt => opt.value === config[key]);
    
    return (
      <div className="group">
        <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          {React.cloneElement(icon as React.ReactElement, { className: "h-4 w-4" })}
          {label}
        </label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full justify-between h-10 bg-white/95 border border-gray-200/80 hover:border-bravio-200 hover:bg-cream/30 transition-all duration-300 shadow-sm hover:shadow-md text-sm font-medium hover:scale-[1.01] transform backdrop-blur-sm"
            >
              <div className="flex items-center gap-2.5">
                {isColorTheme && currentOption ? (
                  <div className={`w-4 h-4 rounded-full ${currentOption.color} shadow-sm ring-1 ring-gray-200`}></div>
                ) : null}
                <span className="text-gray-700 truncate">{currentOption?.label}</span>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:rotate-180" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className={`w-full min-w-[200px] ${isColorTheme ? 'bg-white border' : 'bg-white/10 backdrop-blur-xl border'} border-gray-100/80 shadow-xl rounded-xl p-2 animate-in slide-in-from-top-3 duration-300 z-50`}>
            {isColorTheme ? (
              <div className="grid grid-cols-2 gap-3 p-2">
                {options.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleConfigChange(key, option.value)}
                    className="cursor-pointer hover:bg-cream/50 rounded-lg p-3 transition-all duration-200 flex flex-col items-center gap-2 group/item hover:scale-105 transform"
                  >
                    <div className={`w-8 h-8 rounded-full ${option.color} shadow-md ring-1 ring-gray-200 group-hover/item:ring-bravio-300 transition-all duration-200 group-hover/item:shadow-lg`}></div>
                    <span className="text-xs font-medium text-gray-600 group-hover/item:text-bravio-700 transition-colors text-center">
                      {option.label.replace(' Theme', '')}
                    </span>
                    {config[key] === option.value && (
                      <div className="w-2 h-2 bg-bravio-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              options.map((option) => {
                const IconComponent = option.icon;
                return (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => handleConfigChange(key, option.value)}
                    className="cursor-pointer hover:bg-white/20 rounded-lg p-3 transition-all duration-200 flex items-center gap-3 group/item text-sm hover:scale-[1.01] transform text-gray-800"
                  >
                    {IconComponent && (
                      <IconComponent className="h-4 w-4 text-gray-600 group-hover/item:text-bravio-600 transition-all duration-200 group-hover/item:scale-110" />
                    )}
                    <span className="font-medium text-gray-800 group-hover/item:text-bravio-700 transition-colors">
                      {option.label}
                    </span>
                    {config[key] === option.value && (
                      <div className="ml-auto w-2 h-2 bg-bravio-500 rounded-full animate-pulse"></div>
                    )}
                  </DropdownMenuItem>
                );
              })
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  };

  return (
    <div className="relative bg-gradient-to-br from-white/95 via-cream/20 to-gray-50/30 border border-gray-200/60 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 mb-6 backdrop-blur-sm">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02),transparent_70%)] rounded-2xl"></div>
      
      {/* Header */}
      <div className="relative z-10 mb-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-bravio-500/20 to-accent-500/20 rounded-xl shadow-sm backdrop-blur-sm">
              <Settings className="h-5 w-5 text-bravio-600" />
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Customize Components
            </h3>
            <Badge variant="secondary" className="text-xs bg-amber-50 text-amber-700 border-amber-200/60">
              Live Preview
            </Badge>
          </div>
          
          {/* Components Counter */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-white/80 to-cream/60 border border-gray-200/50 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer backdrop-blur-sm">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-bravio-500/30 to-accent-500/30 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200 backdrop-blur-sm">
                <Plus className="h-4 w-4 text-bravio-700" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-300 to-amber-400 rounded-full flex items-center justify-center">
                <Sparkles className="h-2 w-2 text-white" />
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-gray-700 leading-none">50+</div>
              <div className="text-[10px] text-gray-500 leading-none">Components</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Configuration Grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {renderDropdown('heroSection', 'Hero Section', configOptions.heroSection, 
          <Home className="h-4 w-4 text-bravio-600" />)}
        
        {renderDropdown('whatsappButton', 'WhatsApp Button', configOptions.whatsappButton, 
          <MessageCircle className="h-4 w-4 text-green-600" />)}
        
        {renderDropdown('cardStyle', 'Card Style', configOptions.cardStyle, 
          <CreditCard className="h-4 w-4 text-blue-600" />)}
        
        {renderDropdown('partners', 'Partners Section', configOptions.partners, 
          <Users className="h-4 w-4 text-purple-600" />)}
        
        {renderDropdown('colorTheme', 'Color Theme', colorThemes, 
          <Palette className="h-4 w-4 text-rose-600" />, true)}
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-bravio-500/30 via-accent-500/30 to-bravio-500/30 rounded-full"></div>
    </div>
  );
};

export default ConfigurationPanel;
