import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "[YOUR ADDRESS HERE]"; 

export const DAPP_CONFIG = {
         readOnlyChainId: Goerli.chainId,
         readOnlyUrls: {
           [Goerli.chainId]:
             "https://eth-goerli.g.alchemy.com/v2/_rqZwvGEhbL1lcJuUEdARCxWKxl1iA7t",
         },
       }