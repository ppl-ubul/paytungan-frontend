import { motion } from "framer-motion"
import { css } from "twin.macro"
import { Navbar } from "@components/Navbar"
import { headerAnimation } from "@components/Animation/headerAnimation"
import { Splashscreen } from "@components/Splashscreen"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Paytungan - Easiest Split Bill App</title>
        <meta name="description" content="Paytungan Split Bill App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          Paytungan : The Easiest Split Bill Aplication Ever
        </motion.h1>
      </div>
      <Navbar />
    </>
  )
}
