
import { LucideIcon } from 'lucide-react';

export interface CodeExample {
  title: string;
  description: string;
  code: string;
  path: string; // Added path for each code example
}

export interface DocStep {
  id: string;
  title: string;
  description: string;
  codeExamples: CodeExample[];
  images: string[];
  icon: LucideIcon;
  category: string;
  path: string; // Keep the general path for the step
}

export interface AdvancedStep {
  id: string;
  title: string;
  description: string;
  code: string;
  path: string; // Added path property
  videoUrl?: string;
  videoPoster?: string;
  icon: LucideIcon;
  category: string;
}

export interface ComponentReplaceStep {
  id: string;
  title: string;
  description: string;
  demoComponents: string[];
  installationImages: string[];
  videoUrl: string;
  icon: LucideIcon;
  category: string;
}
