import { motion } from "motion/react";

const PIXEL_SIZE = 10;
const TARGET_GAP = 11;

const TARGET_ORIGIN_X = -13;
const TARGET_ORIGIN_Y = 170;

function Pixel({
  row,
  column,
  index,
  target,
  shouldBuild,
}) {
  const originalX = column * PIXEL_SIZE;
  const originalY = row * PIXEL_SIZE;

  const targetX =
    TARGET_ORIGIN_X + target.column * TARGET_GAP;

  const targetY =
    TARGET_ORIGIN_Y + target.row * TARGET_GAP;

  const landingX = targetX - originalX;
  const landingY = targetY - originalY;

  const burstX = ((index % 7) - 3) * 8;
  const burstY = -22 - (index % 4) * 7;

  const rotationDirection =
    index % 2 === 0 ? 1 : -1;

  const rotation =
    rotationDirection * (45 + (index % 5) * 18);

  const delay =
    0.52 +
    target.row * 0.025 +
    (index % 5) * 0.012;

  return (
    <motion.span
      aria-hidden="true"
      className="block h-[10px] w-[10px] bg-[#35E657]"
      style={{
        gridColumn: column + 1,
        gridRow: row + 1,
      }}
      initial={{
        opacity: 0,
        scale: 0.6,
        x: 0,
        y: 0,
      }}
      animate={
        shouldBuild
          ? {
              x: [0, burstX, landingX],
              y: [0, burstY, landingY],
              rotate: [0, rotation, 0],
              scale: [1, 0.85, 1],
              opacity: [1, 1, 1],
            }
          : {
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
              opacity: 1,
            }
      }
      transition={
        shouldBuild
          ? {
              duration: 1.4,
              delay,
              times: [0, 0.18, 1],
              ease: ["easeOut", "easeIn"],
            }
          : {
              duration: 0.45,
              delay: index * 0.006,
              ease: "easeOut",
            }
      }
    />
  );
}

export default Pixel;