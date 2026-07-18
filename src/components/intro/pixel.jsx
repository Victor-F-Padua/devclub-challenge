import { motion } from "motion/react";

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

  const horizontalRatio =
    (column - centerColumn) / centerColumn;

  /*
    Espalhamento horizontal leve.

    Pixels da esquerda seguem um pouco para a esquerda.
    Pixels da direita seguem um pouco para a direita.
  */
  const finalX =
    horizontalRatio * 170 +
    ((index % 3) - 1) * 14;

  /*
    A logo termina aproximadamente em 44% da tela.

    Portanto, uma queda de cerca de 53% leva os pixels
    até o limite inferior, sem deixá-los viajando
    invisíveis abaixo da tela.
  */
  const finalY =
    `${52 + (row % 4) * 1.5}vh`;

  /*
    Stagger pequeno.

    Eles não caem todos juntos, mas também não existe
    um intervalo grande entre o primeiro e o último.
  */
  const delay =
    0.72 + index * 0.0025;

  function handleAnimationComplete() {
    if (
      shouldFall &&
      canComplete &&
      isLast
    ) {
      onComplete();
    }
  }

  return (
    <motion.span
      aria-hidden="true"
      className="
        block
        h-[10px]
        w-[10px]
        bg-[#35E657]
        will-change-transform
      "
      style={{
        gridColumn: column + 1,
        gridRow: row + 1,
        borderRadius: 0,
      }}
      initial={false}
      animate={
        shouldFall
          ? {
              /*
                Não existe mais um ponto intermediário.

                O movimento vai diretamente da logo
                até a parte inferior da tela.
              */
              x: finalX,
              y: finalY,
              scale: 2.6,

              /*
                O pixel fica completamente visível
                durante quase toda a queda.
              */
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

                /*
                  Começa controlado e ganha velocidade
                  progressivamente, como uma queda.
                */
                ease: [0.45, 0, 1, 1],
              },

              opacity: {
                duration: 2.05,
                delay,

                /*
                  Só desaparece nos últimos 4%.
                */
                times: [0, 0.96, 1],
                ease: "linear",
              },
            }
          : {
              duration: 0.3,
              ease: "easeOut",
            }
      }
      onAnimationComplete={
        handleAnimationComplete
      }
    />
  );
}

export default Pixel;