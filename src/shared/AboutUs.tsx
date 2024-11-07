import React from "react";

export const AboutUs = () => {
  return (
    <div className="relative bg-[url('../../public/images/car.jpg')] bg-white bg-opacity-70 bg-cover bg-center h-96 w-80 flex items-center justify-center pb-4">
      <ul className="flex-col absolute bg-white bg-opacity-70 h-96 w-80 place-items-center bottom-0 p-4 ">
        <li className="pb-2">
          <p>
            KLIPSTER — український інтернет-магазин, який спеціалізується на
            продажу високоякісних автомобільних кліпс та інших кріпильних
            елементів для вашого авто.
          </p>
        </li>
        <li>
          <p>
            Ми пропонуємо широкий вибір продукції, яка відповідає найвищим
            стандартам якості, щоб ви могли легко знайти та замінити необхідні
            деталі для свого автомобіля. Наші клієнти можуть розраховувати на
            компетентну підтримку та своєчасну доставку.{" "}
          </p>
        </li>
      </ul>
    </div>
  );
};
