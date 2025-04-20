// 1. Định nghĩa interface cho dữ liệu trả về
export interface IIcbCode {
  icbCode: string;
  level: number;
  icbName: string;
  enIcbName: string;
}

export interface ICompanyListingInfo {
  ticker: string;
  icbCode1: string;
  icbCode2: string;
  icbCode3: string;
  icbCode4: string;
}
