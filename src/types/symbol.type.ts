import { ESymbolType } from "../enums";

// Mã ngành theo ICB
export interface IIcbCode {
  icbCode: string;
  level: number;
  icbName: string;
  enIcbName: string;
}
// Mã doanh nghiệp kèm theo mà ngành ICB
export interface ICompanyListingInfo {
  ticker: string;
  icbCode1: string;
  icbCode2: string;
  icbCode3: string;
  icbCode4: string;
}

//
export interface ISymbolInfo {
  id: number;
  symbol: string;
  type: ESymbolType; // tuỳ API sẽ có thêm các type khác
  board: string;
  enOrganName: string;
  enOrganShortName: string;
  organShortName: string;
  organName: string;
}
