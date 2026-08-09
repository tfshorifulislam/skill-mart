import React from "react";
import { GraduationCap, Clock, Wrench, PiggyBank } from "lucide-react";

interface BenefitItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const benefitsData: BenefitItem[] = [
  {
    icon: GraduationCap,
    title: "Learn From Experts",
    description: "Industry leaders sharing real-world knowledge.",
  },
  {
    icon: Clock,
    title: "Learn At Your Own Pace",
    description: "Lifetime access to courses on any device.",
  },
  {
    icon: Wrench,
    title: "Practical Skills",
    description: "Project-based learning you can apply immediately.",
  },
  {
    icon: PiggyBank,
    title: "Affordable Learning",
    description: "High-quality education without the high price tag.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-[#191c1d]">Why Choose SkillMart?</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {benefitsData.map((benefit, idx) => {
          const IconComponent = benefit.icon;
          return (
            <div key={idx} className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-[#4F46E5]/10 text-[#4F46E5] rounded-lg flex items-center justify-center mb-6">
                <IconComponent className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-[#464555]">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
