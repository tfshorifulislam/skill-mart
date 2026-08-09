import React from "react";

interface StatItem {
  value: string;
  label: string;
}

const statItems: StatItem[] = [
  { value: "10K+", label: "Learners" },
  { value: "500+", label: "Courses" },
  { value: "200+", label: "Expert Instructors" },
  { value: "50K+", label: "Reviews" },
];

export default function TrustStatsSection() {
  return (
    <section className="border-y border-[#c7c4d8] bg-white">
      <div className="max-w-[1280px] mx-auto px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#c7c4d8]/50">
          {statItems.map((item, idx) => (
            <div key={idx}>
              <div className="text-3xl font-bold text-[#4F46E5]">{item.value}</div>
              <div className="text-sm text-[#464555] font-medium mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
