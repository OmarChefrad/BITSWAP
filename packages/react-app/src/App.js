import React from "react"
import { useEthers } from "@usedapp/core"

import styles from "./styles"
import { usePools } from "./hooks"
import { uniswapLogo } from "./assets"
import WalletButton from "./components/WalletButton"
import Loader from "./components/Loader"
import Exchange from "./components/Exchange"

const App = () => {
  const { account } = useEthers()
  const [loading, pools] = usePools()

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img
            src={uniswapLogo}
            alt="uniswapLogo"
            className="w-16 h-16 object-contain"
          />
          <WalletButton />
        </header>
        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>BITSWAP</h1>
          <p className={styles.subTitle}>Exchange tokens in seconds</p>
          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink_gradient" />
              <div className={styles.exchange}>
                {account ? (
                  loading ? (
                    <Exchange pools={pools} />
                  ) : (
                    <Exchange pools={pools} />
                  )
                ) : (
                  <Loader title="Please Connect Your Wallet" />
                )}
                <p className="text-white">{account}</p>
              </div>
              <div className="blue_gradient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
