import { motion } from "framer-motion"
import { css } from "twin.macro"
import { Navbar } from "@components/Navbar"
import { headerAnimation } from "@components/Animation/headerAnimation"
import { Splashscreen } from "@components/Splashscreen"
import Head from "next/head"

export default function Home() {
  return (
    <div tw="overflow-x-hidden relative">
      <Head>
        <title>Paytungan - Easiest Split Bill App</title>
        <meta name="description" content="Paytungan Split Bill App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
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
          tw="text-3xl text-center"
          initial={"initial"}
          animate={"animate"}
          variants={headerAnimation}
          transition={{ duration: 2, ease: "easeOut", delay: 1.2 }}
        >
          Paytungan : The Easiest Split Bill Application Ever
        </motion.h1>
      </div>

      <div
        css={css`
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <motion.h1
          tw="text-3xl text-center"
          initial={"initial"}
          animate={"animate"}
          variants={headerAnimation}
          transition={{ duration: 2, ease: "easeOut", delay: 1.2 }}
        >
          Paytungan : The Easiest Split Bill Application Ever
        </motion.h1>
      </div>
    </div>
  )
}
