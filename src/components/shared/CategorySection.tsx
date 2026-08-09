import React from "react";
import {
  Code,
  Layout,
  Brush,
  Megaphone,
  BarChart2,
  Briefcase,
  Camera,
  Video,
  ArrowRight,
} from "lucide-react";
import CategoryCard from "./CategoryCard";

const categories = [
  { label: "Web Dev", icon: Code },
  { label: "UI/UX", icon: Layout },
  { label: "Graphic Design", icon: Brush },
  { label: "Marketing", icon: Megaphone },
  { label: "Data Science", icon: BarChart2 },
  { label: "Business", icon: Briefcase },
  { label: "Photography", icon: Camera },
  { label: "Video Editing", icon: Video },
];

export default function CategorySection() {
  return (
    <section className="bg-[#f3f4f5] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-[#191c1d]">Popular Categories</h2>
            <p className="text-[#464555] mt-2">Explore top courses across various disciplines</p>
          </div>
          <a className="hidden md:flex items-center gap-1 font-medium text-[#4F46E5] hover:underline" href="#">
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} label={cat.label} icon={cat.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
