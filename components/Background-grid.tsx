"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { backgroundImages } from "@/config/data";

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

  const repeatingColumns = Array.from({ length: totalcols }).map(
    (_, i) => backgroundImages[i % backgroundImages.length]
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 flex gap-2 overflow-hidden">
      {repeatingColumns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-2">
          {Array.from({ length: totalrows }).map((_, r) =>
            column.map((svg: string, i: number) => (
              <Image
                key={`${colIndex}-${r}-${i}`}
                src={svg}
                alt=""
                width={374}
                height={543}
                className="h-auto w-[374px] object-cover"
                loading="lazy"
              />
            ))
          )}
        </div>
      ))}
    </div>
  );
};

export default BackgroundGrid;
