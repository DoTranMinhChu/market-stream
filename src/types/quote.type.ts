import { EMatchType } from "../enums";

export interface IIntradayData {
  id: number;
  symbol: string;
  truncTimestamp: number;
  matchType: EMatchType;
  matchVolume: number;
  matchPrice: number;
  accumulatedVolume: number;
}
