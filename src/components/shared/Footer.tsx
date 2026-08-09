import React from "react";
import { Globe } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Explore",
    links: [
      { label: "Business", href: "#" },
      { label: "Development", href: "#" },
      { label: "Design", href: "#" },
      { label: "Marketing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Instructors", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full py-16 px-8 bg-[#e1e3e4] border-t border-[#c7c4d8]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold text-[#4F46E5] mb-4">SkillMart</div>
          <p className="text-[#464555] text-sm mb-6">
            Empowering professionals worldwide to learn new skills and advance their careers.
          </p>
        </div>
        {footerSections.map((section, idx) => (
          <div key={idx}>
            <h4 className="font-bold text-[#191c1d] mb-4">{section.title}</h4>
            <ul className="flex flex-col gap-3 text-sm text-[#464555]">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a className="hover:text-[#4F46E5] transition-colors" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-[#c7c4d8] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#464555]">
        <div>© 2024 SkillMart Professional Marketplace. All rights reserved.</div>
        <div className="flex gap-4">
          <a className="hover:text-[#4F46E5] transition-colors" href="#">
            <Globe className="w-5 h-5" />
          </a>
          <a className="hover:text-[#4F46E5] transition-colors" href="#">
            Twitter
          </a>
          <a className="hover:text-[#4F46E5] transition-colors" href="#">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
