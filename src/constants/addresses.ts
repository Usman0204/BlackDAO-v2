import { NetworkId } from "src/constants";

export type AddressMap = Partial<Record<NetworkId, string>>;

export const STAKING_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0x507a7Aa2A4a7A9fAeb045BdD6d0145e76c857AbC",
  [NetworkId.MAINNET]: "0xB63cac384247597756545b500253ff8E607a8020",
};

export const GOHM_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0x11cc4CCF4dD3F2F19f22A1D171002103F295f795",
  [NetworkId.MAINNET]: "0x0ab87046fBb341D058F17CBC4c1133F25a20a52f",
  [NetworkId.ARBITRUM]: "0x8D9bA570D6cb60C7e3e0F31343Efe75AB8E65FB1",
  [NetworkId.AVALANCHE]: "0x321e7092a180bb43555132ec53aaa65a5bf84251",
  [NetworkId.POLYGON]: "0xd8cA34fd379d9ca3C6Ee3b3905678320F5b45195",
  [NetworkId.FANTOM]: "0x91fa20244fb509e8289ca630e5db3e9166233fdc",
};

export const WSOHM_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0x6b02f8c2f25c424263500B55E0a30069D8752952",
  [NetworkId.MAINNET]: "0xca76543cf381ebbb277be79574059e32108e3e65",
  [NetworkId.ARBITRUM]: "0x739ca6D71365a08f584c8FC4e1029045Fa8ABC4B",
  [NetworkId.AVALANCHE]: "0x8cd309e14575203535ef120b5b0ab4dded0c2073",
};

export const OHM_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0x61b4C75cC8058E5cd8B6b67C7008ec6319Fe97eE",
};

export const V1_OHM_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0x61b4C75cC8058E5cd8B6b67C7008ec6319Fe97eE",
};

export const SOHM_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0x6b02f8c2f25c424263500B55E0a30069D8752952",
};

export const V1_SOHM_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0x6b02f8c2f25c424263500B55E0a30069D8752952",
};

export const MIGRATOR_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0x568c257BF4714864382b643fC8e6Ce5fbBcC6d3C",
  [NetworkId.MAINNET]: "0x184f3FAd8618a6F458C16bae63F70C426fE784B3",
  [NetworkId.ARBITRUM]: "0x1e7902a8b0adbf81042b5e30bdfa281f0b928d6d",
  [NetworkId.AVALANCHE]: "0xB10209BFbb37d38EC1B5F0c964e489564e223ea7",
};
