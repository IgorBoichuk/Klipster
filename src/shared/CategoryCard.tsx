import Image from "next/image";
import React from "react";

interface CategoryCardProps {
  title: string;
  custom?: string;
  image?: any;
}

export const CategoryCard = ({ image, title }: CategoryCardProps) => {
  return (
    <div className="relative w-40 h-36 bg-white border-0 border-gray-300 rounded-xl shadow-md flex justify-center">
      <Image
        src={image}
        alt="Category"
        width={160}
        height={147}
        className="rounded-xl"
      />
      <div className="absolute inset-x-0 bottom-0 place-items-center bg-slate-500 bg-opacity-15 backdrop-blur-md rounded-b-xl w-full h-12">
        <p className="mt-3">{title}</p>
      </div>
    </div>
  );
};
