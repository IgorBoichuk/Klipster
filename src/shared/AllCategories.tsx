import React from "react";
import { CategoryCard } from "./CategoryCard";
import Bolt from "../../public/images/bolts.png";
import Bolts from "../../public/images/boltstt.png";
import Clips from "../../public/images/clips.jpg";
import Clipses from "../../public/images/clipses.png";
import { SectionTitle } from "./SectionTitle";
export const AllCategories = () => {
  return (
    <div className="">
      <SectionTitle title="Всі категорії" />
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">
        <li className="h-full">
          <CategoryCard title="Болти" image={Bolt} />
        </li>
        <li className="h-full">
          <CategoryCard title="Кліпси" image={Bolts} />
        </li>
        <li className="h-full">
          <CategoryCard title="Закладні гайки" image={Clips} />
        </li>
        <li className="h-full">
          <CategoryCard title="Якийсь дуже довгий текст" image={Clipses} />
        </li>
        <li className="h-full">
          <CategoryCard title="Втуки" image={Clipses} />
        </li>
        <li className="h-full">
          <CategoryCard title="Втуки" image={Clipses} />
        </li>
      </ul>
    </div>
  );
};
