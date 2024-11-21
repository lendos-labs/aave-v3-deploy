import { eNeonNetwork, IAaveConfiguration } from "./../../helpers/types";
import AaveMarket from "../aave";
import { ZERO_ADDRESS } from "../../helpers";
import {
  strategyUSDC,
  strategyWETH,
  strategySOL,
  strategyNEON,
} from "./reservesConfigs";

export const NeonConfig: IAaveConfiguration = {
  ...AaveMarket,
  MarketId: "Neon LendOS Market",
  WrappedNativeTokenSymbol: "WNEON",
  ATokenNamePrefix: "Neon",
  StableDebtTokenNamePrefix: "Neon",
  VariableDebtTokenNamePrefix: "Neon",
  SymbolPrefix: "Neon",
  ProviderId: 38,
  ReservesConfig: {
    WNEON: strategyNEON,
    SOL: strategySOL,
    USDC: strategyUSDC,
    WETH: strategyWETH,
  },
  ReserveAssets: {
    [eNeonNetwork.neonmain]: {
      WNEON: "0x202C35e517Fa803B537565c40F0a6965D7204609",
      SOL: "0x5f38248f339Bf4e84A2caf4e4c0552862dC9F82a",
      USDC: "0xEA6B04272f9f62F997F666F07D3a974134f7FFb9",
      WETH: "0xcFFd84d468220c11be64dc9dF64eaFE02AF60e8A",
    },
    [eNeonNetwork.neondev]: {
      WNEON: "0x11adC2d986E334137b9ad0a0F290771F31e9517F",
      WSOL: "0x017919985AE96aBd773864006BC1bD802cdf741B",
      USDC: "0x26833EeC144EF2d7b2394CAFbd5CD5ceB1d3B3Af",
      WETH: "0x37BEFeC3d434E86759C33D7A1536040749713DeE",
    },
  },
  ChainlinkAggregator: {
    [eNeonNetwork.neonmain]: {
      WNEON: "0xD7ED1612b54dd31A0CA1AA30ed32eAbf9230873E",
      SOL: "0x76721563EC3CF5fB94737Eb583F38f3cD166C7Bb",
      USDC: "0x8cb22a71AD5ef0384B85FF08Ba1343ec71880C35",
      WETH: "0xC55B1E0c36A69e2b40BD16759434B071F4bBe8df",
    },
    [eNeonNetwork.neondev]: {
      WNEON: "0x551aC68023586dCA747A8Bb5418dCE0221C81056",
      WSOL: "0xec852B2A009f49E4eE4ffEddeDcF81a1AD1bbD6d",
      USDC: "0xedc0d80E85292fEf5B0946DEc957563Ceb7C8e6c",
      WETH: "0x7235B04963600fA184f6023696870F49d014416d",
    },
  },
};

export default NeonConfig;
