export const COIN_LOGOS: Record<string, string> = {
  BTC: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
  ETH: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
  DOGE: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png',
  USDT: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
  XRP: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png',
  USDC: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
  BNB: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png',
  ADA: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
  TRX: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png',
  LINK: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png',
  LTC: 'https://assets.coingecko.com/coins/images/2/large/litecoin.png',
  DAI: 'https://assets.coingecko.com/coins/images/9956/large/4943.png',
  UNI: 'https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png',
};

export const getCoinLogo = (ticker: string) => {
  return COIN_LOGOS[ticker] || null;
};
