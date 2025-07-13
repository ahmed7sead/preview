import { useState } from "react";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import { Zap, Database, Globe, TestTube, Shield, Gauge, ChevronLeft, ChevronRight } from "lucide-react";

interface AdvancedStep {
  id: string;
  title: string;
  description: string;
  code: string;
  image: string;
  icon: any;
  category: string;
}

const advancedSteps: AdvancedStep[] = [
  {
    id: "state-management",
    title: "State Management",
    description: "Implement advanced state management with React Query and Zustand for scalable applications",
    code: `// stores/useAppStore.ts
import { create } from 'zustand';

interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  setUser: (user: User | null) => void;
  toggleTheme: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  theme: 'light',
  setUser: (user) => set({ user }),
  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'light' ? 'dark' : 'light' 
  })),
}));`,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    icon: Database,
    category: "State"
  },
  {
    id: "api-integration",
    title: "API Integration",
    description: "Advanced API patterns with React Query and comprehensive error handling strategies",
    code: `// hooks/useApi.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('/api/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (userData: CreateUserData) => {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};`,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    icon: Zap,
    category: "API"
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description: "Advanced performance patterns including code splitting, memoization, and lazy loading",
    code: `// utils/lazyLoader.ts
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const LazyComponent = lazy(() => import('./HeavyComponent'));

export const OptimizedComponent = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<ComponentSkeleton />}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
};

// Memoization example
export const ExpensiveComponent = memo(({ data, onAction }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      computed: heavyComputation(item)
    }));
  }, [data]);

  const handleAction = useCallback((id) => {
    onAction(id);
  }, [onAction]);

  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} data={item} onAction={handleAction} />
      ))}
    </div>
  );
});`,
    image: "https://images.unsplash.com/photo-1571677208775-05aa9c93a18c?w=600&h=400&fit=crop",
    icon: Gauge,
    category: "Performance"
  },
  {
    id: "testing",
    title: "Testing Strategies",
    description: "Comprehensive testing with Jest, React Testing Library, and End-to-End testing",
    code: `// __tests__/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('custom-class');
  });
});

// E2E test example with Playwright
test('user can navigate and interact with the app', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Get Started');
  await expect(page).toHaveURL('/dashboard');
});`,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    icon: TestTube,
    category: "Testing"
  },
  {
    id: "internationalization",
    title: "Internationalization",
    description: "Multi-language support with react-i18next and RTL layout implementation",
    code: `// i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our app",
          buttons: {
            submit: "Submit",
            cancel: "Cancel"
          }
        }
      },
      ar: {
        translation: {
          welcome: "مرحباً بكم في تطبيقنا",
          buttons: {
            submit: "إرسال",
            cancel: "إلغاء"
          }
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// Component usage
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button onClick={() => changeLanguage('ar')}>العربية</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
};`,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    icon: Globe,
    category: "i18n"
  },
  {
    id: "security",
    title: "Security Best Practices",
    description: "Implement security measures including authentication, data protection, and CSRF prevention",
    code: `// security/auth.ts
import { jwtVerify } from 'jose';

export const validateToken = async (token: string) => {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    throw new Error('Invalid token');
  }
};

// Input sanitization
import DOMPurify from 'dompurify';

export const sanitizeInput = (input: string) => {
  return DOMPurify.sanitize(input);
};

// CSRF protection
export const csrfToken = () => {
  return crypto.randomUUID();
};

// Secure headers middleware
export const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline';"
};`,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    icon: Shield,
    category: "Security"
  }
];

const AdvancedDocs = () => {
  const [activeStep, setActiveStep] = useState(advancedSteps[0].id);
  const currentStep = advancedSteps.find(step => step.id === activeStep) || advancedSteps[0];
  const IconComponent = currentStep.icon;

  return (
    <div className="min-h-screen bg-bg-light">
      <Header />

      <div className="pt-24 pb-20">
        <div className="container-custom">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 gradient-accent rounded-2xl mb-6 shadow-elevated">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Advanced Documentation
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Deep dive into advanced patterns and professional development practices
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="card-modern p-6 sticky top-8">
                  <h3 className="text-lg font-semibold text-text-primary mb-6">Advanced Topics</h3>
                  <div className="space-y-2">
                    {advancedSteps.map((step) => {
                      const StepIcon = step.icon;
                      return (
                        <button
                          key={step.id}
                          onClick={() => setActiveStep(step.id)}
                          className={`w-full text-left p-4 rounded-lg transition-all duration-200 group ${activeStep === step.id
                            ? 'gradient-accent text-white shadow-md'
                            : 'hover:bg-gray-50 text-text-primary'
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${activeStep === step.id
                              ? 'bg-white/20 text-white'
                              : 'bg-gray-100 text-text-secondary'
                              }`}>
                              <StepIcon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className={`font-medium text-sm transition-colors ${activeStep === step.id ? 'text-white' : 'text-text-primary'
                                }`}>
                                {step.title}
                              </h4>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-8">
                <div className="card-modern overflow-hidden">
                  {/* Content Header */}
                  <div className="gradient-accent p-8 text-white">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-green-100 text-xs font-medium uppercase tracking-wider">{currentStep.category}</span>
                        <h2 className="text-2xl font-bold mt-1">{currentStep.title}</h2>
                      </div>
                    </div>
                    <p className="text-lg text-green-100 leading-relaxed">
                      {currentStep.description}
                    </p>
                  </div>

                  <div className="p-8">
                    {/* Preview Image */}
                    <div className="rounded-xl overflow-hidden mb-10 shadow-elevated border border-border-color">
                      <img
                        src={currentStep.image}
                        alt={currentStep.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>

                    {/* Code Block */}
                    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-elevated border border-border-color">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-white font-medium text-sm">Advanced Code Example</span>
                        </div>
                        <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 text-xs">
                          Copy Code
                        </Button>
                      </div>
                      <pre className="p-6 text-green-400 text-sm overflow-x-auto leading-relaxed bg-gray-900">
                        <code className="font-mono">{currentStep.code}</code>
                      </pre>
                    </div>
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

export default AdvancedDocs;
