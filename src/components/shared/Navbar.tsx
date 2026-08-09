import { Heart, Search } from "lucide-react";

const Navbar = () => {
    return (
       <header className="sticky top-0 z-50 flex justify-between items-center h-16 px-8 bg-[#f8f9fa]/90 backdrop-blur mx-auto shadow-sm w-full border-b border-[#c7c4d8]">
        <div className="flex items-center gap-6">
          <a className="text-xl font-bold text-[#4F46E5]" href="#">
            SkillMart
          </a>
          <nav className="hidden md:flex gap-6">
            <a className="text-[#4F46E5] font-bold border-b-2 border-[#4F46E5] pb-1" href="#">
              Home
            </a>
            <a className="text-[#575e70] hover:text-[#4F46E5] transition-colors" href="#">
              Explore
            </a>
          </nav>
        </div>

        <div className="flex-1 max-w-md mx-6 hidden lg:block relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#464555] w-5 h-5" />
          <input
            className="w-full pl-10 pr-4 py-2 bg-[#f3f4f5] border border-[#c7c4d8] rounded-full focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20 transition-all text-sm text-[#191c1d] placeholder-[#464555]"
            placeholder="Search for anything"
            type="text"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex text-[#575e70] hover:text-[#4F46E5] transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <a className="hidden md:inline-block text-sm font-medium text-[#575e70] hover:text-[#4F46E5] transition-colors" href="#">
            Login
          </a>
          <a className="bg-[#4F46E5] text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-[#4F46E5]/90 transition-colors shadow-sm" href="#">
            Sign Up
          </a>
        </div>
      </header>
    );
};

export default Navbar;