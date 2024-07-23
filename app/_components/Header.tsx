import React from "react";

interface HeaderProps {
  color: string;
}

export default function Header({ color }: HeaderProps) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex items-center justify-center w-full">
        <h1
          className={`font-inter text-6xl font-extrabold leading-[96.82px] text-center custom-shadow`}
          style={{ color: color }}
        >
          Chai aur Code
        </h1>
      </div>
    </div>
  );
}
