import { motion } from "motion/react";

const PIXEL_SIZE = 10;

function Pixel({
  row,
  column,
  index,
  totalColumns,
  shouldFall,
  canComplete,
  isLast,
  onComplete,
}) {
  const centerColumn = (totalColumns - 1) / 2;
  const horizontalRatio = (column - centerColumn) / centerColumn;

  // Espalhamento horizontal leve
  const finalX = horizontalRatio * 170 + ((index % 3) - 1) * 14;

  // Queda até a parte inferior visível da tela
  const finalY = `${52 + (row % 4) * 1.5}vh`;

  // Pequeno stagger entre os pixels
  const delay = 0.72 + index * 0.0025;

  function handleAnimationComplete() {
    if (!shouldFall || !canComplete || !isLast) {
      return;
    }

    onComplete();
  }

  return (
    <motion.span
      aria-hidden="true"
      className="block bg-[#35E657] will-change-transform"
      style={{
        width: PIXEL_SIZE,
        height: PIXEL_SIZE,
        gridColumn: column + 1,
        gridRow: row + 1,
        borderRadius: 0,
      }}
      initial={false}
      animate={
        shouldFall
          ? {
              x: finalX,
              y: finalY,
              scale: 2.6,
              opacity: [1, 1, 0],
            }
          : {
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
            }
      }
      transition={
        shouldFall
          ? {
              default: {
                type: "tween",
                duration: 2.05,
                delay,
                ease: [0.45, 0, 1, 1],
              },
              opacity: {
                duration: 2.05,
                delay,
                times: [0, 0.96, 1],
                ease: "linear",
              },
            }
          : {
              duration: 0.3,
              ease: "easeOut",
            }
      }
      onAnimationComplete={handleAnimationComplete}
    />
  );
}

export default Pixel;