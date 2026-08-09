import React from "react";
import { LucideIcon } from "lucide-react";

export interface CategoryCardProps {
  label: string;
  icon: LucideIcon;
}

export default function CategoryCard({ label, icon: IconComponent }: CategoryCardProps) {
  return (
    <div className="bg-[#f8f9fa] p-6 rounded-lg border border-[#c7c4d8] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer flex flex-col items-center text-center gap-3">
      <div className="w-12 h-12 bg-[#4F46E5]/10 rounded-full flex items-center justify-center text-[#4F46E5]">
        <IconComponent className="w-6 h-6" />
      </div>
      <h3 className="font-medium text-[#191c1d]">{label}</h3>
    </div>
  );
}
