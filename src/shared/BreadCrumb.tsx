import { FaHome, FaSlidersH } from "react-icons/fa";

import React from "react";

export const BreadCrumb = () => {
  return (
    <nav className="flex items-center space-x-2 bg-gray-100 p-4 rounded-lg shadow-md">
      <FaHome className="text-xl text-gray-600" />
      <span className="text-gray-500">›</span>

      <a
        href="/categories"
        className="text-black font-semibold hover:text-gray-700"
      >
        Категорії
      </a>
      <span className="text-gray-500">›</span>

      <span className="text-gray-600 truncate">
        Кріплення обшивки, одна шляпка
      </span>

      <FaSlidersH className="text-xl text-gray-600 ml-auto" />
    </nav>
  );
};

export default BreadCrumb;
