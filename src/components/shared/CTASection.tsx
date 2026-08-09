import React from "react";

export default function CTASection() {
  return (
    <section className="bg-[#f3f4f5] py-20 text-center border-t border-[#c7c4d8]">
      <div className="max-w-3xl mx-auto px-8 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[#191c1d] mb-6">Ready to Start Learning?</h2>
        <p className="text-xl text-[#464555] mb-10">Join millions of learners from around the world.</p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="bg-[#4F46E5] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#4F46E5]/90 transition-colors shadow-sm text-lg">
            Sign Up for Free
          </button>
          <button className="bg-[#f8f9fa] text-[#191c1d] border border-[#c7c4d8] px-8 py-4 rounded-lg font-bold hover:bg-[#edeeef] transition-colors shadow-sm text-lg">
            Browse Courses
          </button>
        </div>
      </div>
    </section>
  );
}
