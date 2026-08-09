import React from "react";
import SkillCard, { SkillCardProps } from "./SkillCard";

const featuredSkillsData: SkillCardProps[] = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBe4aKGPuX1VTxLfOJRzQdqMnGrAN8V4ShPOYSivL3z5fv3z8eaQMoIaIC31tfZKxdO8KZjBiFomZ4rfJDTi_CSTEpe4ngJQR2Dd7yyoVrVJkYwiZsQU_wOUqAQt-vgw-X8bXyT8peKWYU23MMp31BhEMMQ5Nf46Sx35VSSLlpxhhPK34_kUUGv9BrD2WAAq6o607PN3WKKqRBfSWpkwgFYk8BevLI-5R7ND03WvzhSsmM1b-_G0D1_",
    category: "Web Dev",
    title: "Advanced React Patterns",
    instructor: "Jane Doe",
    rating: 4.8,
    reviewsCount: "1.2k",
    price: "$89.99",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAupQ4DFHILdogc7lwaz1-ZPQtHlFYN0sjLM-kfafI_SC93gUhAw2X668TMvvLve_eZ3yzmr7tdgM3ifJuesV3FtTZQsepFE5Cj6U28Ye7okENcnA7RVj7Zf3xoylcwc6FwJ0m7SWk6dMvaOAdMHJ-eDlefJst0q42k682kBitA_KMwsFDPc4UGa0omf6GlUitLeB0taINOrazopzgcdph9ET0xAE-O8_zmw7WzIbBtDPxML9gs7Mbu",
    category: "UI/UX",
    title: "Complete Figma Masterclass",
    instructor: "John Smith",
    rating: 4.9,
    reviewsCount: "2.4k",
    price: "$79.99",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUKi_Rjsi2c4iQCkRLcv_dNeO_GsxIrBSxjAq2iubwO24pKbur0MO0SyDwDyaFG9Sybd3Wc1M6AlAbNK9nPxlyjfHRzf0nphGGxU8Eavvv8dnBXrpTNRvv209dn4n5h_7BCuY2GPHXCEmy6Nj6HcvEfS2VSEmBbPAk0LLfWp_G9OT_8bce7Gk85Lv7btn7ax9uzgJLH9mweswevseEL7eneLeediQEwo7afzYHa_WhMBfI03EQjdkf",
    category: "Data Science",
    title: "Python for Data Science",
    instructor: "Emily Chen",
    rating: 4.7,
    reviewsCount: "850",
    price: "$94.99",
  },
];

export default function FeaturedSkills() {
  return (
    <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-8">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-[#191c1d]">Featured Courses</h2>
        <p className="text-[#464555] mt-2">Premium content curated for you</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredSkillsData.map((skill, idx) => (
          <SkillCard key={idx} {...skill} />
        ))}
      </div>
    </section>
  );
}
