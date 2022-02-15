import { css } from "twin.macro"
import { motion } from "framer-motion"

const Splashscreen = () => {
  const overlayAnimation = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
    },
  }
  const splashAnimation = {
    initial: {
      y: 0,
    },
    animate: {
      y: "-100vh",
    },
  }
  return (
    <>
      <motion.div
        tw="flex items-center justify-center h-screen w-screen fixed shadow-xl
      bg-black"
        css={css`
          z-index: 999;
          transition: all 0.6s ease-in-out 0s;
        `}
        initial={"initial"}
        animate={"animate"}
        variants={overlayAnimation}
        transition={{ duration: 0.6, delay: 0 }}
      />
      <motion.div
        tw="flex items-center justify-center h-screen w-screen fixed shadow-xl bg-white"
        css={css`
          z-index: 1000;
          transition: all 0.6s ease-in-out 0s;
        `}
        initial={"initial"}
        animate={"animate"}
        variants={splashAnimation}
        transition={{ duration: 0.6, delay: 0 }}
      >
        <img src="/images/logo/logo.png" alt="" />
      </motion.div>
    </>
  )
}

export { Splashscreen }
