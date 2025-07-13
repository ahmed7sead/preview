
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

const FeatureCard = ({ icon: Icon, title, description, color = "blue" }: FeatureCardProps) => {
  const colorClasses = {
    blue: "bg-blue-50/80 text-blue-600 border-blue-200/60 hover:border-blue-300/80 hover:bg-blue-100/60",
    red: "bg-red-50/80 text-red-600 border-red-200/60 hover:border-red-300/80 hover:bg-red-100/60",
    green: "bg-green-50/80 text-green-600 border-green-200/60 hover:border-green-300/80 hover:bg-green-100/60",
    purple: "bg-purple-50/80 text-purple-600 border-purple-200/60 hover:border-purple-300/80 hover:bg-purple-100/60",
    orange: "bg-orange-50/80 text-orange-600 border-orange-200/60 hover:border-orange-300/80 hover:bg-orange-100/60",
    cyan: "bg-cyan-50/80 text-cyan-600 border-cyan-200/60 hover:border-cyan-300/80 hover:bg-cyan-100/60",
    yellow: "bg-yellow-50/80 text-yellow-600 border-yellow-200/60 hover:border-yellow-300/80 hover:bg-yellow-100/60",
    pink: "bg-pink-50/80 text-pink-600 border-pink-200/60 hover:border-pink-300/80 hover:bg-pink-100/60",
    indigo: "bg-indigo-50/80 text-indigo-600 border-indigo-200/60 hover:border-indigo-300/80 hover:bg-indigo-100/60",
    teal: "bg-teal-50/80 text-teal-600 border-teal-200/60 hover:border-teal-300/80 hover:bg-teal-100/60",
  };

  return (
    <div className="group relative bg-white/90 backdrop-blur-sm border border-slate-200/70 rounded-2xl p-6 hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:bg-white">
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-2xl ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center mb-5 group-hover:scale-105 transition-all duration-300 shadow-sm group-hover:shadow-md`}>
          <Icon className="h-7 w-7" />
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
