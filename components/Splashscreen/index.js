import { css } from "twin.macro"
import { motion } from "framer-motion"

const Splashscreen = () => {
  const overlayAnimation = {
    initial: {
      opacity: 0.5,
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
        initial={{ display: "block" }}
        animate={{ display: "none" }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          tw="h-screen w-screen fixed shadow-xl
      bg-black"
          css={css`
            z-index: 999;
            transition: all 0.6s ease-in-out;
          `}
          initial={"initial"}
          animate={"animate"}
          variants={overlayAnimation}
          transition={{ ease: "easeInOut", duration: 0.6 }}
        />
      </motion.div>
      <motion.div
        initial={{ display: "block" }}
        animate={{ display: "none" }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          tw="flex items-center justify-center h-screen w-screen fixed shadow-xl bg-white"
          css={css`
            z-index: 1000;
            transition: all 0.6s ease-in-out;
          `}
          initial={"initial"}
          animate={"animate"}
          variants={splashAnimation}
          transition={{ ease: "easeInOut", duration: 0.6 }}
        >
          <img src="/images/logo/logo.png" alt="" />
        </motion.div>
      </motion.div>
    </>
  )
}

export { Splashscreen }
