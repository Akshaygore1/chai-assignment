"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowDown, ArrowUp, Trash2 } from "lucide-react";

interface DragComponentProps {
  imageSrc: string;
  title: string;
  price: string;
  badgeText?: string;
  onMoveToTop?: () => void;
  onMoveToBottom?: () => void;
  onRemove?: () => void;
  SixdotsComponent?: React.ComponentType;
  openMenu?: boolean;
  toggleMenu?: () => void;
}

export default function DragComponent({
  imageSrc,
  title,
  price,
  badgeText,
  onMoveToTop,
  onMoveToBottom,
  onRemove,
  SixdotsComponent = () => null,
}: DragComponentProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      id="drag-component"
      className="w-full h-auto flex flex-row items-center p-4 text-black shadow-md gap-4 bg-white rounded-lg"
    >
      {SixdotsComponent && <SixdotsComponent />}
      <div className="flex-shrink-0 px-4">
        <Image src={imageSrc} alt="product" width={125} height={65} />
      </div>
      <div className="flex-1">
        <div className="text-xl font-medium truncate">{title}</div>
      </div>
      <div className="px-4 flex-shrink-0">
        <div className="text-lg font-normal">{price}</div>
      </div>
      {badgeText && (
        <div className="bg-[#DBFFCE] rounded-md border-black border p-1 px-2 flex-shrink-0">
          <div className="text-md font-normal">{badgeText}</div>
        </div>
      )}
      <div className="relative inline-block w-10 p-2">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="w-2 h-2 bg-gray-800 rounded-full mb-0.5"></div>
          <div className="w-2 h-2 bg-gray-800 rounded-full mb-0.5"></div>
          <div className="w-2 h-2 bg-gray-800 rounded-full mb-0.5"></div>
        </div>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            {onMoveToTop && (
              <div
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
                onClick={onMoveToTop}
              >
                <ArrowUp size={16} className="text-gray-600" />
                <span>Move To Top</span>
              </div>
            )}
            {onMoveToBottom && (
              <div
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
                onClick={onMoveToBottom}
              >
                <ArrowDown size={16} className="text-gray-600" />
                <span>Move To Bottom</span>
              </div>
            )}
            {onRemove && (
              <div
                className="py-2 px-4 hover:bg-red-50 cursor-pointer flex items-center space-x-2 text-red-500"
                onClick={onRemove}
              >
                <Trash2 size={16} className="text-red-500" />
                <span>Remove</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
