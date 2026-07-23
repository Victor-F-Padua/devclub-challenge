import { useEffect, useRef } from "react";
import { motion } from "motion/react";

import Pixel from "./Pixel";
import logoPixels from "../../data/logoPixels";

const PIXEL_SIZE = 10;
const LOGO_SIZE = 174;

const totalRows = logoPixels.length;
const totalColumns = logoPixels[0].length;

const activePixels = logoPixels.flatMap((row, rowIndex) =>
  row.flatMap((cell, columnIndex) =>
    cell === 1
      ? [
          {
            row: rowIndex,
            column: columnIndex,
          },
        ]
      : [],
  ),
);

function LogoAnimation({ phase, onFallComplete }) {
  const completedRef = useRef(false);

  const hasStarted = phase !== "idle";
  const canComplete = phase === "falling";

  useEffect(() => {
    if (phase === "idle") {
      completedRef.current = false;
    }
  }, [phase]);

  function handleLastPixelComplete() {
    if (!canComplete || completedRef.current) {
      return;
    }

    completedRef.current = true;
    onFallComplete();
  }

  return (
    <div
      aria-hidden="true"
      className="relative overflow-visible"
      style={{
        width: LOGO_SIZE,
        height: LOGO_SIZE,
      }}
    >
      {/* Fundo roxo */}
      <motion.div
        className="
          absolute
          inset-0
          rounded-md
          bg-[#68009B]
          shadow-[0_0_45px_rgba(104,0,155,0.4)]
        "
        initial={false}
        animate={
          hasStarted
            ? {
                scale: [1, 1.08, 1.15],
                opacity: [1, 1, 0],
              }
            : {
                scale: 1,
                opacity: 1,
              }
        }
        transition={
          hasStarted
            ? {
                duration: 1.05,
                delay: 0.35,
                times: [0, 0.35, 1],
                ease: "easeInOut",
              }
            : {
                duration: 0.35,
              }
        }
      />

      {/* Pixels verdes */}
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          transform: "translate(calc(-50% + 5px), -50%)",
        }}
      >
        <div
          className="grid overflow-visible"
          style={{
            gridTemplateColumns: `repeat(${totalColumns}, ${PIXEL_SIZE}px)`,
            gridTemplateRows: `repeat(${totalRows}, ${PIXEL_SIZE}px)`,
          }}
        >
          {activePixels.map((pixel, index) => (
            <Pixel
              key={`${pixel.row}-${pixel.column}`}
              row={pixel.row}
              column={pixel.column}
              index={index}
              totalColumns={totalColumns}
              shouldFall={hasStarted}
              canComplete={canComplete}
              isLast={index === activePixels.length - 1}
              onComplete={handleLastPixelComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoAnimation;