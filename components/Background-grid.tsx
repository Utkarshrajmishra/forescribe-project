"use client";

import { useEffect, useState } from "react";

import { backgroundImages } from "@/config/data";

import Cards from "./Cards";

const imageHeight = 551;
const imageWidth = 382;

const BackgroundGrid = () => {
  const [totalrows, settotalRows] = useState(1);
  const [totalcols, setTotalCols] = useState(1);

  useEffect(() => {
    const updateBackground = () => {
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;

      settotalRows(Math.ceil(screenHeight / imageHeight));
      setTotalCols(Math.ceil(screenWidth / imageWidth));
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  const repeatedCols = Array.from({ length: totalcols }).map(
    (_, i) => backgroundImages[i % backgroundImages.length]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-10 flex gap-2 overflow-hidden opacity-20">
      {repeatedCols.map((col, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-2">
          {Array.from({ length: totalrows }).map((_, r) =>
            col.map((svg: string, i: number) => (
              <Cards key={`${colIndex}-${r}-${i}`} svgPath={svg} />
            ))
          )}
        </div>
      ))}
    </div>
  );
};

export default BackgroundGrid;
