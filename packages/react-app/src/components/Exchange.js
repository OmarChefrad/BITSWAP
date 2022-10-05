import React, { useState } from "react"
import { Contract } from "@ethersproject/contracts"
import { abis } from "@my-app/contracts"
import {
  ERC20,
  useContactFunction,
  useEthers,
  useTokenAllowance,
  useTokenBalance,
} from "@usedapp/core"
import { ethers } from "ethers"
import { parseUnits } from "ethers/lib/utils"

import {
  getAvailableTokens,
  getCounterpartTokens,
  findPoolByTokens,
  isOperationPending,
  getFailureMessage,
  getSuccessMessage,
} from "../utils"
import { ROUTER_ADDRESS } from "../config"
import AmountIn from "./AmountIn"
import Balance from "./Balance"
import AmountOut from "./AmountOut"

import styles from "../styles"

const Exchange = ({ pools }) => {
  const isApproving = isOperationPending("approve")
  const isSwapping = isOperationPending("swap")

  // const successMessage = getSuccessMessage()
  // const failureMessage = getFailureMessage()

  return (
    <div className="flex flex-col w-full item-center">
      <div className="mb-8">
        <AmountIn />

        <Balance />
      </div>
      <div className="mb-8 w-[100%]">
        <AmountOut />

        <Balance />
      </div>
      {"approvedNeeded" && !isSwapping} (
      <button
        disabled={!"canApprove"}
        className={
          "canApprove"
            ? "bg-site-pink hover:bg-pink-600 text-white font-bold rounded-lg shadow-2xl shadow-white-500/50 mb-6 h-12 cursor-pointer ease-in-out duration-300"
            : "bg-site-dim2 hover:bg-pink-200 font-bold  text-site-dim2  rounded-lg shadow-2xl shadow-white-500/50 mb-6 ease-in-out duration-300"`${styles.actionButton}`
        }
      >
        {isApproving ? "Approving..." : "Approve"}
      </button>
      ): (
      <button
        disabled={!"canApprove"}
        className={
          "canApprove"
            ? "bg-site-pink hover:bg-pink-600 text-white font-bold rounded-lg shadow-2xl shadow-white-500/50 mb-6 h-12 cursor-pointer ease-in-out duration-300"
            : "bg-site-dim2 hover:bg-pink-200 font-bold  text-site-dim2  rounded-lg shadow-2xl shadow-white-500/50 mb-6 ease-in-out duration-300"`${styles.actionButton}`
        }
      >
        {isApproving ? "Approving..." : "Approve"}
      </button>
      ):
    </div>
  )
}

export default Exchange
