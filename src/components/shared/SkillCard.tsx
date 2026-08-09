import React from "react";
import { Star } from "lucide-react";

export interface SkillCardProps {
  image: string;
  category: string;
  title: string;
  instructor: string;
  rating: number;
  reviewsCount: string;
  price: string;
}

export default function SkillCard({
  image,
  category,
  title,
  instructor,
  rating,
  reviewsCount,
  price,
}: SkillCardProps) {
  return (
    <div className="bg-[#f8f9fa] border border-[#c7c4d8] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-48 bg-[#e7e8e9] relative">
        <img
          alt={title}
          className="w-full h-full object-cover"
          src={image}
        />
        <span className="absolute top-4 left-4 bg-[#4F46E5] text-white text-xs font-bold px-2 py-1 rounded">
          {category}
        </span>
      </div>
      <div className="p-6 flex flex-col gap-3">
        <h3 className="font-bold text-lg leading-tight">{title}</h3>
        <p className="text-sm text-[#464555]">By {instructor}</p>
        <div className="flex items-center gap-1 text-sm font-medium text-orange-600">
          {rating} <Star className="w-4 h-4 fill-current inline" /> ({reviewsCount})
        </div>
        <div className="font-bold text-lg mt-2">{price}</div>
      </div>
    </div>
  );
}
