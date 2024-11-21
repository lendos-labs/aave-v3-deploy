import { rateStrategyStableOne, rateStrategyVolatileOne } from "./../aave/rateStrategies";
import { eContractid, IReserveParams } from "../../helpers/types";

export const strategyWETH: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "6800",
  liquidationThreshold: "7300",
  liquidationBonus: "10700",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false,
  reserveDecimals: "8",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000",
  supplyCap: "1000",
  borrowCap: "700",
  debtCeiling: "50000000",
  borrowableIsolation: true,
};

export const strategySOL: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "6800",
  liquidationThreshold: "7300",
  liquidationBonus: "10700",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false,
  reserveDecimals: "9",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000",
  supplyCap: "10000",
  borrowCap: "7000",
  debtCeiling: "50000000",
  borrowableIsolation: true,
};

export const strategyNEON: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "6800",
  liquidationThreshold: "7300",
  liquidationBonus: "10700",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000",
  supplyCap: "2000000",
  borrowCap: "1700000",
  debtCeiling: "50000000",
  borrowableIsolation: true,
};

export const strategyUSDC: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "7600",
  liquidationThreshold: "7900",
  liquidationBonus: "10500",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false,
  reserveDecimals: "6",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000",
  supplyCap: "5000000",
  borrowCap: "3600000",
  debtCeiling: "300000000",
  borrowableIsolation: true,
};

