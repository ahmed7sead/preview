import { DocStep, AdvancedStep, ComponentReplaceStep } from "@/hooks/documentation";
import {
  Download, Palette, Type, Image, Globe, Languages, Search, Navigation,
  Home, MessageCircle, ArrowUp, CreditCard, Settings, Users, Info,
  FileText, Menu, Plus, Trash2, Layers, Smartphone, Heart, Briefcase,
  Building2, Phone, Edit, FolderPlus, FilePlus, Layout, ToggleLeft
} from "lucide-react";

export const basicSteps: DocStep[] = [
  {
    id: "installation",
    title: "Installation & Setup",
    description: "Whether you're a developer or a beginner, this setup guide will help you launch the project in under 1 minute.",
    codeExamples: [
      {
        title: "download and Install",
        description: "Clone the project  or download and install dependencies",
        code: `# 1- Download the project ZIP

# 2- Unzip the project file.

# Navigate to project directory
cd template

#  3- Inside the project file, open the terminal and type:

# 4-npm install

# 4- Or IF using yarn
yarn install`,

        path: "terminal/Main-template"
      },
      {
        title: "Start Development",
        description: "Run the development server",
        code: `# Start development server
npm run dev

# Server will start at   ➜  Local:   http://localhost:10000/ 

#Dont forget download node frist `,
        path: "terminal/Main-template/"

      }
    ],
    images: [
      "/basic/install.png"
    ],
    icon: Download,
    category: "Setup",
    path: "project-root/"
  },
  {
    id: "customize-colors",
    title: "Customize colors",
    description: " how to customize colors and color schemes throughout your website using Tailwind and CSS variables.",
    codeExamples: [
      {
        title: "Tailwind Color Configuration",
        description: "Customize your color palette in tailwind.config.ts",
        code: `// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37',
          light: '#F5EFD8',
          dark: '#A38728'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        neutral: {
          DEFAULT: '#222222',
          light: '#444444',
          dark: '#0F0F0F'
        },
        surface: '#FAFAF8'
      }
    }
  }
}`,
        path: "tailwind.config.ts"
      }
    ],
    images: [
      "basic/color.png"
    ], icon: Palette,
    category: "Design",
    path: "src/styles/"

  },
  {
    id: "customize-fonts",
    title: "Customize fonts",
    description: "Add and configure custom fonts to enhance your website's typography",
    codeExamples: [
      {
        title: "Google Fonts Integration",
        description: "Add Google Fonts to your project and configure in Tailwind",
        code: `<!-- index.html -->
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet">
</head>

// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        tajawal: ['"Tajawal"', 'sans-serif'],
      },
    },
  },
};`,
        path: "index.html + tailwind.config.ts"
      }
    ],
    images: [
      "basic/font.png"
    ],
    icon: Type,
    category: "Typography",
    path: "src/styles/"
  },
  {
    id: "edit-texts",
    title: "Edit texts",
    description: "Use simple inline logic like `isRTL` to easily support both Arabic and English — or any RTL/LTR language pair.",
    codeExamples: [
      {
        title: "Switch text by language",
        description: "Inline conditional text lets you switch between Arabic and English — clean, fast, and easy to maintain.",
        code: `// src/components/AboutSection.tsx

// This is a simplified example — don't copy-paste directly,
// but use it as a reference in your multilingual components.

const AboutSection = ({ isRTL }: { isRTL: boolean }) => {
  return (
    <section>
      {/* Example: Show heading in the right language */}
      <h1>{isRTL ? "أهلاً بك" : "Welcome"}</h1>

      {/* Paragraph switches based on language */}
      <p>
        {isRTL
          ? "نحن نقدم أفضل التصاميم الداخلية الفاخرة."
          : "We provide the best in luxury interior design."}
      </p>

      {/* More benefits of this method below 👇 */}
    </section>
  );
};

/**
 * ✅ Why this method works well:
 * - Supports any RTL language: Arabic, Hebrew, Persian, Urdu, etc.
 * - Keeps content in one place (easy to update)
 * - No external translation library required
 * - Works perfectly with any static site or React framework
 */
`,
        path: "src/pages/About.tsx"
      }
    ],
    images: [
      "basic/text.jpg"
    ],
    icon: Type,
    category: "Content",
    path: "src/components/"
  },
  {
    id: "default-language",
    title: "Default language",
    description: "Set up and configure the default language for your website",
    codeExamples: [
      {
        title: "Language Configuration",
        description: "Set default language ",
        code: `<!-- LanguageContext.tsx -->

// Option 1: Always fallback to English

return (savedLanguage === 'en' || savedLanguage === 'ar') ? savedLanguage : 'en';


// Option 2: Always fallback to Arabic
return (savedLanguage === 'en' || savedLanguage === 'ar') ? savedLanguage : 'ar';


// Option 3: Auto-detect based on user's browser language
// 👉 This option chooses the language automatically from the browser settings
// Example: If user's browser is in Arabic, the site opens in Arabic

// Option 4: Auto-detect based on user's location (Geo IP)
// 👉 You can use IP detection services to set language based on country
// Example: User from Saudi → Arabic, User from US → English

// 🔎To learn how to implement Option 3 & 4, check:
// Components Replacement > Default Language


  default: 'en',
  fallback: 'en',
  available: ['en = any ltr langaue', 'ar=a rabic,Persian Hebrew Urdu Armenian']
};`,
        path: "src/context/LanguageContext.tsx"
      }
    ],
    images: [
      "basic/lang.png"
    ],
    icon: Globe,
    category: "Localization",
    path: "src/config/"
  },
  {
    id: "add-page",
    title: "Add page",
    description: "Learn how to create and add new pages to your React application with routing",
    codeExamples: [
      {
        title: "Create New Page Component",
        description: "Create a new page component with proper structure",
        code: `// src/App.tsx

import NewPage from "./pages/NewPage";   // 1

...

        <Route path="/new" element={<NewPage />} /> // 2


export default NewPage;`,
        path: "src/App.tsx"
      },
      {
        title: "Add to Navbar.tsx",
        description: "Add the new page to your application routes",
        code: `Navbar.tsx
        
# add to nav bar

#  { name: isRTL ? 'صفحة جديدة' : 'New page', path: '/new' } <- the path 



`,
        path: "src/components/Navbar.tsx"
      }
    ],
    images: [
      "basic/new-page.png", "basic/page.png"

    ],
    icon: FilePlus,
    category: "Development",
    path: "src/pages/"
  },
  {

    id: "seo-control",
    title: "SEO Component",
    description: "Create a reusable SEO component",
    codeExamples: [
      {
        title: "Meta Tags Configuration",
        description: "Set up essential meta tags for SEO",
        code: `<!-- index.html -->
  <
  <meta name="description" content="Your website description for search engines">
  <meta name="keywords" content="keyword1, keyword2, keyword3">
  <meta name="author" content="Your Name">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://yourwebsite.com/">
  <meta property="og:title" content="Your Website Title">
  <meta property="og:description" content="Your website description">
  <meta property="og:image" content="https://yourwebsite.com/og-image.jpg">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://yourwebsite.com/">
  <meta property="twitter:title" content="Your Website Title">
  <meta property="twitter:description" content="Your website description">
  <meta property="twitter:image" content="https://yourwebsite.com/og-image.jpg">
</head>`

        ,
        path: "src/components/SEOHead.tsx"
      },
      {
        title: "SEO head",
        description: "Optimize your website for search engines with proper SEO configuration",

        code: `// src/components/SEOHead.tsx
import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead = ({ title, description, keywords, image, url }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);
    
  }, [title, description, keywords, image, url]);

  return null;
};

export default SEOHead;`,
        path: "src/components/SEOHead.tsx"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
    ],
    icon: Search,
    category: "Optimization",
    path: "src/components/"
  }
];

export const componentsReplaceSteps: ComponentReplaceStep[] = [
  {
    id: "header-navbar",
    title: "Header (Navigation Bar)",
    description: "Customizable navigation bar with advanced design and functionality options",
    demoComponents: [
      "Demo Component One - Basic Header",
      "Demo Component Two - Modern Header with Logo",
      "Demo Component Three - Responsive Mobile Menu"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    icon: Navigation,
    category: "Navigation"
  },
  {
    id: "hero-section",
    title: "Hero Section",
    description: "Eye-catching hero sections with various layouts and call-to-action designs",
    demoComponents: [
      "Demo Component One - Minimal Hero",
      "Demo Component Two - Hero with Background Video",
      "Demo Component Three - Split Layout Hero"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    icon: Home,
    category: "Layout"
  },
  {
    id: "whatsapp-button",
    title: "WhatsApp Button",
    description: "Floating WhatsApp contact buttons with animations and customizable positions",
    demoComponents: [
      "Demo Component One - Simple WhatsApp Button",
      "Demo Component Two - Animated Floating Button",
      "Demo Component Three - Multi-contact Button"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1521931961826-fe48677230a5?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    icon: MessageCircle,
    category: "Communication"
  },
  {
    id: "arrow-button",
    title: "Arrow Button",
    description: "Stylish arrow buttons for navigation and call-to-action with smooth animations",
    demoComponents: [
      "Demo Component One - Simple Arrow Button",
      "Demo Component Two - Animated Arrow Effect",
      "Demo Component Three - Multi-directional Arrows"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    icon: ArrowUp,
    category: "Interaction"
  },
  {
    id: "card-girly",
    title: "Card Girly",
    description: "Beautiful and elegant card components with feminine design touches and soft colors",
    demoComponents: [
      "Demo Component One - Soft Pink Card",
      "Demo Component Two - Floral Border Card",
      "Demo Component Three - Pastel Gradient Card"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1518414922567-57639bb5e2a4?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    icon: Heart,
    category: "Design"
  },
  {
    id: "services",
    title: "Services",
    description: "Professional service section layouts with icons, descriptions, and pricing options",
    demoComponents: [
      "Demo Component One - Grid Services Layout",
      "Demo Component Two - Card-based Services",
      "Demo Component Three - Tabbed Services View"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    icon: Briefcase,
    category: "Business"
  },
  {
    id: "partners",
    title: "Partners",
    description: "Partner and client showcase sections with logos, testimonials, and trust indicators",
    demoComponents: [
      "Demo Component One - Logo Grid Partners",
      "Demo Component Two - Sliding Partners Carousel",
      "Demo Component Three - Featured Partners Section"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    icon: Building2,
    category: "Business"
  },
  {
    id: "about-us",
    title: "About Us",
    description: "Engaging about us sections with team photos, company story, and mission statements",
    demoComponents: [
      "Demo Component One - Team Grid Layout",
      "Demo Component Two - Story Timeline",
      "Demo Component Three - Values & Mission"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    icon: Users,
    category: "Company"
  },
  {
    id: "footer",
    title: "Footer",
    description: "Comprehensive footer designs with links, contact info, and social media integration",
    demoComponents: [
      "Demo Component One - Multi-column Footer",
      "Demo Component Two - Minimal Footer",
      "Demo Component Three - Newsletter Signup Footer"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    icon: Info,
    category: "Layout"
  },
  {
    id: "pages-header",
    title: "Pages Header",
    description: "Dynamic page headers with breadcrumbs, titles, and background images for internal pages",
    demoComponents: [
      "Demo Component One - Simple Page Header",
      "Demo Component Two - Background Image Header",
      "Demo Component Three - Breadcrumb Navigation Header"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    icon: FileText,
    category: "Navigation"
  },
  {
    id: "default-language",
    title: "Default Language",
    description: "Language selection components with automatic detection and default language configuration",
    demoComponents: [
      "Demo Component One - Simple Language Selector",
      "Demo Component Two - Auto-detect Language",
      "Demo Component Three - Multi-language Support"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1521931961826-fe48677230a5?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    icon: Globe,
    category: "Localization"
  },
  {
    id: "page-layout-language",
    title: "Page Layout Language",
    description: "Advanced page layout components with RTL/LTR support and language-specific styling",
    demoComponents: [
      "Demo Component One - RTL Layout Support",
      "Demo Component Two - Language-specific Fonts",
      "Demo Component Three - Dynamic Layout Direction"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    icon: Layout,
    category: "Localization"
  },
  {
    id: "switcher-button",
    title: "Switcher Button",
    description: "Interactive toggle and switcher buttons with smooth animations and multiple states",
    demoComponents: [
      "Demo Component One - Simple Toggle Switch",
      "Demo Component Two - Multi-state Switcher",
      "Demo Component Three - Animated Button Switcher"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    icon: ToggleLeft,
    category: "Interaction"
  }
];

export const advancedSteps: AdvancedStep[] = [
  {
    id: "new-project-page",
    title: "New Project Page",
    description: "Create new project pages with dynamic routing and modern page layouts",
    code: `Add New page Project
    
1- Add new-page to  date from 

src/pages/projectsData.ts

2- Add new-page to  image from display main page

src/pages/Projects.tsx

3- Add new-page to  from nav bar dropdwon desktop 

src/components/ProjectsDropdown.tsx

4- Add new-page to  from drop down mobile  

src/components/MobileProjectsMenu.tsx

`,
    path: "src/pages/NewProject.tsx",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    videoPoster: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
    icon: Plus,
    category: "Pages"
  },
  {
    id: "delete-project-page",
    title: "Delete Project Page",
    description: "just",
    code: ` Just reverse the steps for creating a new project.

1- Delete date from 
src/pages/projectsData.ts

2- Delete image from display main page

src/pages/Projects.tsx

3- Delete from nav bar dropdwon desktop 

src/components/ProjectsDropdown.tsx

4- Delete from drop down mobile  

src/components/MobileProjectsMenu.tsx
`,
    path: "src/pages/projectsData.ts",
    videoUrl: "",
    videoPoster: "basic/no-page.png",
    icon: Trash2,
    category: "Management"
  },
  {
    id: "compound-project",
    title: "Compound Project",
    description: "replace complex multi-component projects with advanced architecture patterns",
    code: `src


You can go to the following path and choose the best layout 
for your project page. You can simply 
copy and paste and replace any component.

    `,
    path: "stoke/components/10-project-pages",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",

    videoPoster: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    icon: FolderPlus,
    category: "Architecture"
  }
];
