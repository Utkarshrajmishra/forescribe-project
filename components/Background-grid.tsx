"use client";

import { useEffect, useState } from "react";

import { backgroundImages } from "@/config/data";
import { motion } from "framer-motion";

import Cards from "./Cards";

const IMAGE_WIDTH = 382;

export default function BackgroundGrid() {
  const [cols, setCols] = useState(1);

  useEffect(() => {
    const update = () => {
      setCols(Math.ceil(window.innerWidth / IMAGE_WIDTH));
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const repeatedCols = Array.from({ length: cols }).map(
    (_, i) => backgroundImages[i % backgroundImages.length]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-10 flex gap-2 overflow-hidden opacity-20">
      {repeatedCols.map((col, colIndex) => {
        const isSlow = colIndex % 2 === 1;

        const duration = isSlow ? 40 : 22;

        return (
          <div key={colIndex} className="flex flex-col gap-2 overflow-hidden">
            <motion.div
              className="flex flex-col gap-2 will-change-transform"
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...Array(2)].map((_, dupIndex) =>
                col.map((svg: string, i: number) => (
                  <Cards key={`${colIndex}-${dupIndex}-${i}`} svgPath={svg} />
                ))
              )}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
