import React from "react";

export default function BecomeInstructor() {
  return (
    <section className="bg-[#4F46E5] text-white">
      <div className="max-w-[1280px] mx-auto px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Turn Your Skills Into Opportunities</h2>
          <p className="text-white/80 text-lg max-w-xl">
            Upgrade your career with the latest skills. Get 20% off your first course today.
          </p>
        </div>
        <button className="bg-[#f8f9fa] text-[#4F46E5] px-8 py-4 rounded-lg font-bold hover:bg-[#edeeef] transition-colors shadow-sm whitespace-nowrap">
          Start Learning
        </button>
      </div>
    </section>
  );
}
