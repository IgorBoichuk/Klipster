// 'use client'
import React, { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
  custom?: string;
}

export const Container: FC<ContainerProps> = ({ children, custom }) => {
  return (
    <div
      className={`px-4 md:px-[30px] lg:px-[38px] xl:px-[160px]  ${
        custom ? custom : ""
      }`}
    >
      {children}
    </div>
  );
};
