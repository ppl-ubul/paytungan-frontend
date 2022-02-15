import { motion } from "framer-motion"
import { css } from "twin.macro"
import { Navbar } from "@components/Navbar"
import { headerAnimation } from "@components/Animation/headerAnimation"
import { Splashscreen } from "@components/Splashscreen"

export default function Home() {
  return (
    <>
      <Splashscreen />
      <div
        css={css`
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <motion.h1
          tw="text-3xl"
          initial={"initial"}
          animate={"animate"}
          variants={headerAnimation}
          transition={{ duration: 2, ease: "easeOut", delay: 1.2 }}
        >
          Paytungan : Your Split Bill Partner
        </motion.h1>
      </div>
      <Navbar />
    </>
  )
}
