import { Goerli } from "@usedapp/core"

export const ROUTER_ADDRESS = "0xe348d803054AFdcA5AF6D6063B79CCC9c8fE1F09"

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/_rqZwvGEhbL1lcJuUEdARCxWKxl1iA7t",
  },
}
