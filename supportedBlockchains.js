/* Total supported blockains: 65 */
/* Total supported blockains with contracts: 14 */
/* eslint array-bracket-newline: ["error", { "minItems": 1 }] */
/* eslint array-element-newline: ["error", "always"] */
/* eslint object-property-newline: "error" */
const supportedBlockchains = {
  algorand: {
    coin: "algorand",
    name: "Algorand",
    family: "algorand",
    hasTokens: true,
    unit: "ALGO",
  },
  anon: {
    coin: "anon",
    name: "Anon",
    family: "zcash",
    hasTokens: false,
    unit: "ANON",
  },
  avaxavalanchec: {
    coin: "avaxavalanchec",
    name: "Avax C-Chain",
    family: "avalanchec",
    hasTokens: true,
    unit: "AVAX-C",
  },
  avaxavalanchep: {
    coin: "avaxavalanchep",
    name: "Avax P-Chain",
    family: "avalanchep",
    hasTokens: false,
    unit: "AVAX-P",
  },
  avaxavalanchex: {
    coin: "avaxavalanchex",
    name: "Avax X-Chain",
    family: "avalanchex",
    hasTokens: false,
    unit: "AVAX-X",
  },
  axe: {
    coin: "axe",
    name: "Axe",
    family: "btc",
    hasTokens: false,
    unit: "AXE",
  },
  beldex: {
    coin: "beldex",
    name: "Beldex",
    family: "cryptonight",
    hasTokens: false,
    unit: "BDX",
  },
  bitcoin: {
    coin: "bitcoin",
    name: "Bitcoin",
    family: "blockbook",
    hasTokens: true,
    unit: "BTC",
  },
  bitcoincash: {
    coin: "bitcoincash",
    name: "Bitcoin Cash",
    family: "electrum",
    hasTokens: false,
    unit: "BCH",
  },
  bitcoingold: {
    coin: "bitcoingold",
    name: "Bitcoin Gold",
    family: "btc",
    hasTokens: false,
    unit: "BTG",
  },
  bitcoinz: {
    coin: "bitcoinz",
    name: "BitcoinZ",
    family: "zcash",
    hasTokens: false,
    unit: "BTCZ",
  },
  bitcoinzero: {
    coin: "bitcoinzero",
    name: "Bitcoin Zero",
    family: "electrum",
    hasTokens: false,
    unit: "BZX",
  },
  bitcore: {
    coin: "bitcore",
    name: "Bitcore",
    family: "electrum",
    hasTokens: false,
    unit: "BTX",
  },
  bithereum: {
    coin: "bithereum",
    name: "Bithereum",
    family: "electrum",
    hasTokens: false,
    unit: "BTH",
  },
  bnbbinance: {
    coin: "bnbbinance",
    name: "BNB (BC) BEP2",
    family: "bnb",
    hasTokens: true,
    unit: "BNB",
  },
  bscbinance: {
    coin: "bscbinance",
    name: "BNB (BSC) BEP20",
    family: "bsc",
    hasTokens: true,
    unit: "BNB",
  },
  btcp: {
    coin: "btcp",
    name: "Bitcoin Private",
    family: "zcash",
    hasTokens: false,
    unit: "BTCP",
  },
  bzedge: {
    coin: "bzedge",
    name: "BZEdge",
    family: "zcash",
    hasTokens: false,
    unit: "BZE",
  },
  cardano: {
    coin: "cardano",
    name: "Cardano",
    family: "cardano",
    hasTokens: false,
    unit: "ADA",
  },
  commercium: {
    coin: "commercium",
    name: "Commercium",
    family: "zcash",
    hasTokens: false,
    unit: "CMM",
  },
  dash: {
    coin: "dash",
    name: "Dash",
    family: "blockbook",
    hasTokens: false,
    unit: "DASH",
  },
  digibyte: {
    coin: "digibyte",
    name: "DigiByte",
    family: "blockbook",
    hasTokens: false,
    unit: "DGB",
  },
  dogecoin: {
    coin: "dogecoin",
    name: "Dogecoin",
    family: "blockbook",
    hasTokens: false,
    unit: "DOGE",
  },
  dot: {
    coin: "dot",
    name: "Polkadot",
    family: "substrate",
    hasTokens: false,
    unit: "DOT",
  },
  eos: {
    coin: "eos",
    name: "EOS",
    family: "eos",
    hasTokens: false,
    unit: "EOS",
  },
  ergo: {
    coin: "ergo",
    name: "Ergo",
    family: "ergo",
    hasTokens: true,
    unit: "ERG",
  },
  etc: {
    coin: "etc",
    name: "Ethereum Classic",
    family: "etc",
    hasTokens: false,
    unit: "ETC",
  },
  ethereum: {
    coin: "ethereum",
    name: "Ethereum",
    family: "eth",
    hasTokens: true,
    unit: "ETH",
  },
  fio: {
    coin: "fio",
    name: "Fio Protocol",
    family: "fio",
    hasTokens: false,
    unit: "FIO",
  },
  gemlink: {
    coin: "gemlink",
    name: "Gemlink",
    family: "zcash",
    hasTokens: false,
    unit: "GLINK",
  },
  genesis: {
    coin: "genesis",
    name: "Genesis",
    family: "electrum",
    hasTokens: false,
    unit: "GENX",
  },
  groestlcoin: {
    coin: "groestlcoin",
    name: "Groestlcoin",
    family: "blockbook",
    hasTokens: false,
    unit: "GRS",
  },
  hush: {
    coin: "hush",
    name: "Hush",
    family: "zcash",
    hasTokens: false,
    unit: "HUSH",
  },
  ilcoin: {
    coin: "ilcoin",
    name: "ILCoin",
    family: "btc",
    hasTokens: false,
    unit: "ILC",
  },
  kadena: {
    coin: "kadena",
    name: "Kadena",
    family: "kadena",
    hasTokens: true,
    unit: "KDA",
  },
  komodo: {
    coin: "komodo",
    name: "Komodo",
    family: "zcash",
    hasTokens: false,
    unit: "KMD",
  },
  ksm: {
    coin: "ksm",
    name: "Kusama",
    family: "substrate",
    hasTokens: false,
    unit: "KSM",
  },
  litecoin: {
    coin: "litecoin",
    name: "Litecoin",
    family: "blockbook",
    hasTokens: false,
    unit: "LTC",
  },
  lunaterra: {
    coin: "lunaterra",
    name: "Terra",
    family: "terra",
    hasTokens: true,
    unit: "LUNC",
  },
  maticpolygon: {
    coin: "maticpolygon",
    name: "Polygon",
    family: "polygon",
    hasTokens: true,
    unit: "MATIC",
  },
  monero: {
    coin: "monero",
    name: "Monero",
    family: "cryptonight",
    hasTokens: false,
    unit: "XMR",
  },
  neo: {
    coin: "neo",
    name: "NEO Legacy",
    family: "neo",
    hasTokens: true,
    unit: "NEO",
  },
  ontology: {
    coin: "ontology",
    name: "Ontology",
    family: "ontology",
    hasTokens: false,
    unit: "ONT",
  },
  raptoreum: {
    coin: "raptoreum",
    name: "Raptoreum",
    family: "electrum",
    hasTokens: false,
    unit: "RTM",
  },
  ravencoin: {
    coin: "ravencoin",
    name: "Ravencoin",
    family: "btc",
    hasTokens: true,
    unit: "RVN",
  },
  ripple: {
    coin: "ripple",
    name: "XRP",
    family: "ripple",
    hasTokens: false,
    unit: "XRP",
  },
  safecoin: {
    coin: "safecoin",
    name: "Safecoin Classic",
    family: "zcash",
    hasTokens: false,
    unit: "SAFE",
  },
  sinovate: {
    coin: "sinovate",
    name: "SINOVATE",
    family: "blockbook",
    hasTokens: false,
    unit: "SIN",
  },
  snowgem: {
    coin: "snowgem",
    name: "TENT",
    family: "zcash",
    hasTokens: false,
    unit: "TENT",
  },
  solana: {
    coin: "solana",
    name: "Solana",
    family: "solana",
    hasTokens: true,
    unit: "SOL",
  },
  stellar: {
    coin: "stellar",
    name: "Stellar Lumens",
    family: "stellar",
    hasTokens: false,
    unit: "XLM",
  },
  testnet: {
    coin: "testnet",
    name: "Flux Test Coin",
    family: "zcash",
    hasTokens: false,
    unit: "TESTFLUX",
  },
  testnetbitcoin: {
    coin: "testnetbitcoin",
    name: "Testnet Bitcoin",
    family: "blockbook",
    hasTokens: false,
    unit: "TESTBTC",
  },
  testnetkadena: {
    coin: "testnetkadena",
    name: "Testnet Kadena",
    family: "kadena",
    hasTokens: false,
    unit: "TESTKDA",
  },
  testnetropstenethereum: {
    coin: "testnetropstenethereum",
    name: "Testnet Goerli Ethereum",
    family: "goerli",
    hasTokens: false,
    unit: "TESTETH",
  },
  testnetsepoliaethereum: {
    coin: "testnetsepoliaethereum",
    name: "Testnet Sepolia Ethereum",
    family: "sepolia",
    hasTokens: true,
    unit: "TESTETH",
  },
  testnetwnd: {
    coin: "testnetwnd",
    name: "Testnet Westend",
    family: "substrate",
    hasTokens: false,
    unit: "TESTWND",
  },
  tron: {
    coin: "tron",
    name: "TRON",
    family: "tron",
    hasTokens: true,
    unit: "TRX",
  },
  veriblock: {
    coin: "veriblock",
    name: "VeriBlock",
    family: "veriblock",
    hasTokens: false,
    unit: "VBK",
  },
  vertcoin: {
    coin: "vertcoin",
    name: "Vertcoin",
    family: "blockbook",
    hasTokens: false,
    unit: "VTC",
  },
  zcash: {
    coin: "zcash",
    name: "Zcash",
    family: "zcash",
    hasTokens: false,
    unit: "ZEC",
  },
  zclassic: {
    coin: "zclassic",
    name: "Zclassic",
    family: "zcash",
    hasTokens: false,
    unit: "ZCL",
  },
  zcoin: {
    coin: "zcoin",
    name: "Firo",
    family: "btc",
    hasTokens: false,
    unit: "FIRO",
  },
  zelcash: {
    coin: "zelcash",
    name: "Flux",
    family: "zcash",
    hasTokens: false,
    unit: "FLUX",
  },
  zen: {
    coin: "zen",
    name: "Horizen",
    family: "zcash",
    hasTokens: false,
    unit: "ZEN",
  },
  zero: {
    coin: "zero",
    name: "Zero",
    family: "zcash",
    hasTokens: false,
    unit: "ZER",
  },
};

export default {
  supportedBlockchains,
};
