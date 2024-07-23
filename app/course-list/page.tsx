"use client";
import React, { useState } from "react";
import Container from "../_components/Container";
import DragComponent from "../_components/DragComponent";
import Header from "../_components/ui/Header";
import Sixdots from "../_components/ui/Sixdots";

const initialData = [
  {
    imageSrc: "/images/thumbnail.svg",
    title: "Interview preparation with JavaScript 2.0",
    price: "Rs. 9000.00",
    badgeText: "Course",
  },
  {
    imageSrc: "/images/thumbnail.svg",
    title: "Aptitude - Averages, Mixtures & Allegation",
    price: "Free",
    badgeText: "Mock Text",
  },
  {
    imageSrc: "/images/thumbnail.svg",
    title: "Aptitude - Simple & Compound Interest",
    price: "Free",
    badgeText: "Mock Text",
  },
  {
    imageSrc: "/images/thumbnail.svg",
    title: "Aptitude - Partnership",
    price: "Free",
    badgeText: "Mock Text",
  },
  {
    imageSrc: "/images/thumbnail.svg",
    title: "Aptitude - Time & Work",
    price: "Free",
    badgeText: "Mock Text",
  },
];

export default function Page() {
  const [items, setItems] = useState(initialData);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData("text"));
    if (dragIndex === dropIndex) return;

    const newItems = [...items];
    const [reorderedItem] = newItems.splice(dragIndex, 1);
    newItems.splice(dropIndex, 0, reorderedItem);
    setItems(newItems);
  };

  const handleMoveToTop = (index: number) => {
    const newItems = [...items];
    const [movedItem] = newItems.splice(index, 1);
    newItems.unshift(movedItem);
    setItems(newItems);
  };

  const handleMoveToBottom = (index: number) => {
    const newItems = [...items];
    const [movedItem] = newItems.splice(index, 1);
    newItems.push(movedItem);
    setItems(newItems);
  };

  const handleRemove = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-[#D2E3C8]">
      <Header color="#4F6F52" />
      <Container>
        <div className="text-black flex flex-col items-start space-y-4">
          <h1 className="text-4xl font-bold">Manage Bundle</h1>
          <p className="text-xl">
            Change orders of the products based on priority
          </p>
        </div>
        <div className="py-8 space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            >
              <DragComponent
                imageSrc={item.imageSrc}
                title={item.title}
                price={item.price}
                badgeText={item.badgeText}
                onMoveToTop={() => handleMoveToTop(index)}
                onMoveToBottom={() => handleMoveToBottom(index)}
                onRemove={() => handleRemove(index)}
                SixdotsComponent={Sixdots}
                isOpen={openMenuIndex === index}
                toggleMenu={() => toggleMenu(index)}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
