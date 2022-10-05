import React, { useState, useEffect, useRef } from "react"

import { chevronDown } from "../assets"
import styles from "../styles"
import { useOnClickOutside } from "../utils"

const AmountOut = () => {
  const [shownList, setShownList] = useState(false)

  return (
    <div className={styles.amountContainer}>
      <input
        placeholder="0.0"
        type="number"
        value=""
        disabled
        onChange={() => {}}
        className={styles.amountInput}
      />
      <div
        className="relative"
        onClick={() => {
          setShownList((prevState) => !prevState)
        }}
      >
        <button className={styles.currencyButton}>
          {"ETH"}
          <img
            src={chevronDown}
            alt="chevron down"
            className={`w-4 h-4 object-contain ml-2 ${
              true ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        {shownList && (
          <ul className={styles.currencyList}>
            {[
              { token: "ETH", tokenName: "ETH" },
              { token: "Golden MAD", tokenName: "GMAD" },
              { token: "Silver MAD", tokenName: "SMAD" },
              { token: "Copper MAD", tokenName: "CMAD" },
            ].map(({ token, tokenName }, index) => (
              <li
                key={index}
                className={`${styles.currencyListItem} ${
                  true ? "bg-site-dim2" : ""
                }cursor-pointer`}
              >
                {tokenName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default AmountOut
