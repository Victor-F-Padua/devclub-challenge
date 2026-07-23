import { motion } from "motion/react";

function GreenCurtain({ phase, onCovered, onFinish }) {
  const isCovering = phase === "covering";
  const isRevealing = phase === "revealing";

  const curtainY = isCovering ? "0%" : "100%";

  const curtainTransition = isCovering
    ? {
        duration: 1.25,
        delay: 0,
        ease: [0.76, 0, 0.24, 1],
      }
    : isRevealing
      ? {
          duration: 1.05,
          delay: 0.18,
          ease: [0.76, 0, 0.24, 1],
        }
      : {
          duration: 0,
        };

  function handleAnimationComplete() {
    if (isCovering) {
      onCovered();
      return;
    }

    if (isRevealing) {
      onFinish();
    }
  }

  return (
    <motion.div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-50
        bg-[#35E657]
        will-change-transform
      "
      initial={{ y: "100%" }}
      animate={{ y: curtainY }}
      transition={curtainTransition}
      onAnimationComplete={handleAnimationComplete}
    />
  );
}

export default GreenCurtain;