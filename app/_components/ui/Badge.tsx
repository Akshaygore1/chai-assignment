import React from "react";

interface BadgeProps {
  badgeText: string;
  disabled?: boolean;
}

export function Badge({ badgeText, disabled }: BadgeProps) {
  return (
    <div
      className={`rounded-md border-black border p-1 px-2 flex-shrink-0 ${
        disabled ? "bg-[#A4A4A4]" : "bg-[#DBFFCE]"
      }`}
    >
      <div className="text-md font-normal">{badgeText}</div>
    </div>
  );
}
