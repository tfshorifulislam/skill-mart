import { Button } from "../ui/button";
import { SearchInput } from "./SearchInput";

const Navbar = () => {
    return (
        <div className="shadow-sm bg-white">
            <div className="py-3 w-11/12 mx-auto flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <span className="text-2xl leading-6 text-[#4f46e5] font-bold">SkillMart</span>
                    <ul className="flex gap-6">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Explore</li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <SearchInput />
                </div>

                <div className="flex gap-4 items-center">
                    <Button
                        variant='ghost' className='cursor-pointer leading-6 text-sm text-[#575e70]'>
                        Login
                    </Button>
                    <Button
                        className='bg-[#4F46E5] hover:bg-[#3f2edd] cursor-pointer px-6 py-2 rounded-full text-white leading-6 text-sm'>
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;