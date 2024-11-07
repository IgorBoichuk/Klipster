import Image from "next/image";
import React from "react";
import Bolt from "../../public/images/bolt.webp";

export const RecommendedProducts = () => {
  return (
    <div className="w-99 bg-white border-0 border-gray-300 rounded-xl shadow-md">
      <Image src={Bolt} alt="Category" />
    </div>
  );
};
