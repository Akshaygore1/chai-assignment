import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="bg-[#F9F7F7] flex flex-col items-center justify-center p-8 text-center rounded-2xl">
      {children}
    </div>
  );
};

export default Container;
