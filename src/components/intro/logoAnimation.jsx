import { motion } from "motion/react";

import Pixel from "./Pixel";
import logoPixels from "../../data/LogoPixels";

const PIXEL_SIZE = 10;

function createHorizontalLine(startColumn, length, row) {
  return Array.from({ length }, (_, index) => ({
    column: startColumn + index,
    row,
  }));
}

/*
  Desenho final que os pixels formarão:

  ───────────────     navbar

  ───────  ┌───────┐
           │       │
  ──────   │ ────  │
           │       │
  ─────    │       │
           │       │
  ────     └───────┘
*/
const buildTargets = [
  // Navbar
  ...createHorizontalLine(1, 15, 0),

  // Painel da direita
  ...createHorizontalLine(9, 8, 2),
  ...createHorizontalLine(9, 8, 10),

  ...Array.from({ length: 7 }, (_, index) => ({
    column: 9,
    row: index + 3,
  })),

  ...Array.from({ length: 7 }, (_, index) => ({
    column: 16,
    row: index + 3,
  })),

  // Textos da esquerda
  ...createHorizontalLine(0, 7, 3),
  ...createHorizontalLine(0, 6, 5),
  ...createHorizontalLine(0, 5, 7),

  // Botão
  ...createHorizontalLine(0, 4, 10),

  // Linha dentro do painel
  ...createHorizontalLine(11, 4, 5),

  // Alvos extras caso você adicione pixels na logo
  ...createHorizontalLine(11, 4, 7),
];

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

function LogoAnimation({ phase, onBuildComplete }) {
  const shouldBuild = phase !== "idle";

  const numberOfColumns = logoPixels[0].length;
  const numberOfRows = logoPixels.length;

  function handleBackgroundAnimationComplete() {
    if (phase === "building") {
      onBuildComplete();
    }
  }

  return (
    <div className="relative h-[174px] w-[174px] overflow-visible">
      {/* Fundo roxo */}
      <motion.div
        className="absolute inset-0 rounded-md"
        initial={{
          scale: 1,
          backgroundColor: "#68009B",
          boxShadow: "0 0 40px rgba(104, 0, 155, 0.35)",
        }}
        animate={
          shouldBuild
            ? {
                scale: [1, 1.55, 1.65],
                backgroundColor: [
                  "#68009B",
                  "#68009B",
                  "rgba(104, 0, 155, 0)",
                ],
                boxShadow: [
                  "0 0 40px rgba(104, 0, 155, 0.35)",
                  "0 0 100px rgba(104, 0, 155, 0.55)",
                  "0 0 0 rgba(104, 0, 155, 0)",
                ],
              }
            : {
                scale: 1,
                backgroundColor: "#68009B",
                boxShadow: "0 0 40px rgba(104, 0, 155, 0.35)",
              }
        }
        transition={
          shouldBuild
            ? {
                duration: 2.25,
                times: [0, 0.22, 1],
                ease: "easeInOut",
              }
            : {
                duration: 0.4,
              }
        }
        onAnimationComplete={handleBackgroundAnimationComplete}
      />

      {/*
        O + 5px corrige o desenho verde,
        que estava levemente para a esquerda.
      */}
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          transform: "translate(calc(-50% + 5px), -50%)",
        }}
      >
        <motion.div
          className="relative z-10 grid"
          style={{
            gridTemplateColumns: `repeat(${numberOfColumns}, ${PIXEL_SIZE}px)`,
            gridTemplateRows: `repeat(${numberOfRows}, ${PIXEL_SIZE}px)`,
          }}
          animate={
            shouldBuild
              ? {
                  scale: [1, 1.55, 1],
                }
              : {
                  scale: 1,
                }
          }
          transition={
            shouldBuild
              ? {
                  duration: 0.7,
                  times: [0, 0.65, 1],
                  ease: "easeInOut",
                }
              : {
                  duration: 0.4,
                }
          }
        >
          {activePixels.map((pixel, index) => (
            <Pixel
              key={`${pixel.row}-${pixel.column}`}
              row={pixel.row}
              column={pixel.column}
              index={index}
              target={
                buildTargets[index] ??
                buildTargets[index % buildTargets.length]
              }
              shouldBuild={shouldBuild}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default LogoAnimation;