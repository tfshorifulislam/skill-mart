import React from "react";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-8 py-16 md:py-24 grid md:grid-cols-2 gap-6 items-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#191c1d] leading-tight">
          Learn New Skills.<br />
          <span className="text-[#4F46E5]">Build Your Future.</span>
        </h1>
        <p className="text-lg text-[#464555] max-w-xl">
          Join thousands of professionals leveling up their careers with premium courses on SkillMart.
        </p>
        <div className="relative w-full max-w-lg mt-4">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#464555] w-5 h-5" />
          <input
            className="w-full pl-12 pr-32 py-4 bg-[#f8f9fa] border border-[#c7c4d8] rounded-lg focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20 transition-all shadow-sm"
            placeholder="What do you want to learn?"
            type="text"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#4F46E5] text-white px-6 py-2 rounded-md font-medium hover:bg-[#4F46E5]/90 transition-colors">
            Search
          </button>
        </div>
        <div className="flex gap-4 mt-2">
          <button className="bg-[#4F46E5] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#4F46E5]/90 transition-colors shadow-sm">
            Explore Courses
          </button>
          <button className="bg-[#f3f4f5] text-[#191c1d] border border-[#c7c4d8] px-6 py-3 rounded-lg font-medium hover:bg-[#edeeef] transition-colors shadow-sm">
            Become an Instructor
          </button>
        </div>
      </div>
      <div className="relative rounded-lg overflow-hidden shadow-lg h-80 md:h-[500px]">
        <img
          alt="Professional learning"
          className="object-cover w-full h-full"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU707NNVbUN-WbPedc71Pe1_dIyXRD3Vmk6lj8iWwA-9LRvRtan9kvATsd40BkdgqY3qIVQVPr8osMUEi7n4GiIFhnOANXaQiwImb6bDigyOsfFzX-6vAus1Gw0oHn0xOo5iU-FmidFi1TBhjs-5ZdWQ5bBi9AKB5zEp1tZ2bueb2Fe8-mJBN7l3F4Vyi1T7uqGXPdbZpNadokiSGBxSQouVQyVuCzUN0v6MwcLEq-H82cAK9z832x"
        />
      </div>
    </section>
  );
}
