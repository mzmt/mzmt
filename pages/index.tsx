import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from "framer-motion"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>mzmt site</title>
        <meta name="description" content="mzmt web page" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
      </Head>

      <motion.div
        className="circle"
        animate={{
          // ciecle size: 0    400   400   400    0    0  2500
          borderWidth: [1250, 1100, 1100, 1100, 1250, 1250, 0]
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.55, 0.7, 0.8, 1],
        }}
      >
      </motion.div>

      <motion.div
        className="avatar"
        initial={{ y: 280 }}
        animate={{
          y: [280, 280, 0, 0, 0, 0, 0],
          opacity: [1, 1, 1, 1, 1, 0, 0],
        }}
        transition={{
          duration: 4,
          times: [0, 0.2, 0.33, 0.55, 0.7, 0.8, 1],
        }}
      >
        <Image className="" src="/test.png" alt="Vercel Logo" width={274} height={252} />
      </motion.div>

      <main>
        {/* content */}
      </main>
    </div>
  )
}

export default Home
