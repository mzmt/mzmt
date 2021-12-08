import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";

const Home: NextPage = () => {
  const tabs = [
    { icon: "📝", label: "Profile", content: "Ryohei Mizumoto" },
    { icon: "🛠", label: "Work", content: "service -> https://www.gemify.me/" },
    { icon: "📗", label: "Tech Blog", content: "zenn -> https://zenn.dev/mz" },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

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
          borderWidth: [1250, 1100, 1100, 1100, 1250, 1250, 0],
          opacity: [1, 1, 1, 1, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.15, 0.3, 0.55, 0.7, 0.8, 1],
        }}
      >
      </motion.div>

      <motion.div
        className="content"
        initial={{ y: 80 }}
        animate={{
          y: [10, 10, 10, 10, 10, 10, 0],
          opacity: [0, 0, 0, 0, 0, 0, 1],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.55, 0.7, 0.8, 1],
        }}
      >

        <div className="window bg-white overflow-hidden flex flex-col">
          <nav>
            <ul>
              {tabs.map((item) => (
                <li
                  key={item.label}
                  className={item === selectedTab ? "selected" : ""}
                  onClick={() => setSelectedTab(item)}
                >
                  {`${item.icon}　${item.label}`}
                  {item === selectedTab ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <main>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={selectedTab.label}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
              >
                {selectedTab.content}
              </motion.div>
            </AnimatePresence>
          </main>
      </div>
      </motion.div>

      <motion.footer
        className="absolute -ml-40 text-gray-600 footer-index"
        initial={{ y: 80 }}
        animate={{
          y: [10, 10, 10, 10, 10, 10, 0],
          opacity: [0, 0, 0, 0, 0, 0, 1],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.55, 0.7, 0.8, 1],
        }}
      >
        <span>© 2021 Ryohei Mizumoto. All Rights Reserved.</span>
      </motion.footer>

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
    </div>
  )
}

export default Home
