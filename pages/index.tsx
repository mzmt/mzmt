import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
import { tabs } from "../components/tabs";

const Home: NextPage = () => {
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
        initial={{ y: 10, opacity: 0 }}
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
                {<Content/>}
              </motion.div>
            </AnimatePresence>
          </main>
      </div>
      </motion.div>

      <motion.footer
        className="absolute -ml-40 text-gray-600 footer-index"
        initial={{ y: 10, opacity: 0 }}
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
        initial={{ y: 280, opacity: 0 }}
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

  function Content() {
    if (selectedTab.label == "Profile") {
      return (
        <div>
          <h1 className="text-4xl">
            Ryohei Mizumoto
          </h1>
          <p className="text-base mb-8">
            Developer
          </p>

          <p>
            <span className="text-lg mr-4">1996</span>Born in Nagasaki, Japan.
          </p>
          <p>
            <span className="text-lg mr-4">2019</span>Graduated from Nagasaki University(長崎大学)
          </p>
          <p>
            <span className="text-lg mr-4">2019</span>Worked at FOWD, inc.
          </p>
          <p>
            <span className="text-lg mr-4">2019</span>Worked at WED, inc.
          </p>
          <p>
            <span className="text-lg mr-4">2020</span>Worked at StartupTechnology, inc.(now)
          </p>
          <p className="mt-8 text-indigo-600">
            <a href="https://github.com/mzmt" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-indigo-400 hover:underline">GitHub</a>
            <a href="https://zenn.dev/mz" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 hover:underline">Zenn</a>
          </p>
        </div>
      )
    } else if (selectedTab.label == "Works") {
      return (
        <div>
          {/* <h1>
            Works
          </h1> */}
          <p>
            WIP
          </p>
        </div>
      )
    } else if (selectedTab.label == "Activities") {
      return (
        <div>
          <h1 className="text-4xl mb-4">2021</h1>
          <h2 className="mb-1 hover:text-indigo-400 hover:underline text-indigo-600">
            <a href="https://jawspankration2021.jaws-ug.jp/" target="_blank" rel="noopener noreferrer">
            JAWS PANKRATION 2021実行委員
            </a>
          </h2>
          <div className="text-xl">
            <p>- Next.js / AWS Amplifyなどを利用した配信サイトの構築</p>
            <p>- 24時間連続で行われる配信イベントの当日のオペレーションなど</p>
          </div>
        </div>
      )
    } else {
      return (
        <div>nothing</div>
      )
    }
  }
}

export default Home
