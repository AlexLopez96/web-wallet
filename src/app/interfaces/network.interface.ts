interface TokenObjectInterface {
  [tokenName: string]: {
    icon: string;
    tokenAddress: string;
    abi: any;
    decimals: number;
    testToken?: boolean;
    balance?: number;
  };
}

export interface NetworkInterface {
  name: string;
  connectionType: 'STANDARD' | 'URL';
  connectionAccess: string;
  symbol: string;
  icon: string;
  rpcUrl?: string;
  contractAddress: string;
  explorer: string;
  addressExplorer: string;
  contractExplorer: string;
  tokensExplorer: string;
  tokenIdExplorer: string;
  tokenExplorer: string;
  txExplorer: string;
  decimals: number;
  saveHashToChain: boolean;
  tokens: TokenObjectInterface;
  chainId?: string;
  isMetamaskDefault: boolean;
}

export interface NetworkObjectInterface {
  [networkName: string]: NetworkInterface;
}
