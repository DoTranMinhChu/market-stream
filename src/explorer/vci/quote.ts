import path from "path";
import { VCI_CONST } from "./const";
import { RestApiHelper } from "../../helper/restApi.helper";
import { ETimeFrame } from "../../enums";
import { UtilHelper } from "../../helper/util.helper";

export class VCIExplorerQuote {
  /**
   * Truy xuất thông tin chi tiết của tất cả các mã cổ phiếu trên thị trường Việt Nam.
   *
   * Hàm này gửi một yêu cầu đến API để lấy thông tin đầy đủ về tất cả các mã cổ phiếu hiện có,
   * bao gồm các thuộc tính như mã cổ phiếu, tên công ty, và các thông tin khác.
   *
   * @returns Một mảng các đối tượng `ISymbolInfo`, trong đó mỗi đối tượng chứa thông tin chi tiết của một mã cổ phiếu.
   *
   * @example
   * ```typescript
   * const allSymbols = await VCIExplorerListing.getAllSymbols();
   * console.log(allSymbols); // Ví dụ: [{ symbol: "VN30", name: "VN30 Index", ... }, ...]
   * ```
   */
  static async getAllSymbols(input: {
    timeFrame: ETimeFrame;
    symbols: Array<string>;
    fromTimestamp: number;
    toTimestamp: number;
  }): Promise<any> {
    const url = UtilHelper.joinUrl(
      VCI_CONST.TRADING_URL,
      "/api/chart/OHLCChart/gap"
    );

    const res = await RestApiHelper.post<any>(url, {
      timeFrame: input.timeFrame,
      symbols: input.symbols,
      from: input.fromTimestamp / 1000,
      to: input.toTimestamp / 1000,
    });

    return this.mapToOHLCVT(res);
  }

  private static mapToOHLCVT(response: any[]) {
    return response.map(
      ({ symbol, o, h, l, c, v, t, accumulatedVolume, accumulatedValue }) => ({
        symbol,
        data: t.map((ts: number, i: number) => ({
          time: new Date(Number(ts) * 1000), // chuyển về Date
          timestamp: Number(ts) * 1000,
          open: o[i],
          high: h[i],
          low: l[i],
          close: c[i],
          volume: v[i],
          accumulatedVolume: accumulatedVolume[i],
          accumulatedValue: accumulatedValue[i],
        })),
      })
    );
  }
}
