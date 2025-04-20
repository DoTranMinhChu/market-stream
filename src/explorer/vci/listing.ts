import { GraphqlHelper } from "../../helper";
import { VCI_CONST } from "./const";
import {
  ICompanyListingInfo,
  IIcbCode,
  ISymbolInfo,
} from "../../types/symbol.type";
import { RestApiHelper } from "../../helper/restApi.helper";
import path from "path";
import { ESymbolGroupCode } from "../../enums";
import { group } from "console";

export class VCIListing {
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
   * const allSymbols = await VCIListing.getAllSymbols();
   * console.log(allSymbols); // Ví dụ: [{ symbol: "VN30", name: "VN30 Index", ... }, ...]
   * ```
   */
  static async getAllSymbols(): Promise<Array<ISymbolInfo>> {
    const url = path.join(VCI_CONST.BASE_URL, "api/price/symbols/getAll");
    return RestApiHelper.get<Array<ISymbolInfo>>(url);
  }

  /**
   * Truy xuất thông tin phân ngành ICB (Industry Classification Benchmark) trên thị trường Việt Nam.
   *
   * Hàm này sử dụng GraphQL để lấy danh sách các mã ICB, bao gồm thông tin về mã ICB, cấp độ,
   * tên tiếng Việt và tiếng Anh của ngành.
   *
   * @returns Một mảng các đối tượng `IIcbCode`, trong đó mỗi đối tượng chứa thông tin về một mã ICB.
   *
   * @example
   * ```typescript
   * const icbCodes = await VCIListing.getIndustriesIcb();
   * console.log(icbCodes); // Ví dụ: [{ icbCode: "1000", level: 1, icbName: "Ngành công nghiệp", enIcbName: "Industrials" }, ...]
   * ```
   */
  static async getIndustriesIcb(): Promise<Array<IIcbCode>> {
    const query = `
      query ListIcbCode {
        ListIcbCode {
          icbCode
          level
          icbName
          enIcbName
        }
      }
    `;

    const data = await GraphqlHelper.fetchGraphQL<{
      ListIcbCode: Array<IIcbCode>;
    }>(VCI_CONST.GRAPHQL_URL, query);
    return data.ListIcbCode;
  }

  /**
   * Truy xuất thông tin niêm yết của các công ty trên thị trường Việt Nam.
   *
   * Hàm này sử dụng GraphQL để lấy thông tin về mã cổ phiếu và các mã ICB tương ứng ở các cấp độ khác nhau.
   *
   * @returns Một mảng các đối tượng `ICompanyListingInfo`, trong đó mỗi đối tượng chứa thông tin niêm yết của một công ty.
   *
   * @example
   * ```typescript
   * const listingInfo = await VCIListing.getCompaniesListingInfo();
   * console.log(listingInfo); // Ví dụ: [{ ticker: "VN30", icbCode1: "1000", icbCode2: "1010", ... }, ...]
   * ```
   */
  static async getCompaniesListingInfo(): Promise<Array<ICompanyListingInfo>> {
    const query = `
      query CompaniesListingInfo {
        CompaniesListingInfo {
          ticker
          icbCode1
          icbCode2
          icbCode3
          icbCode4
        }
      }
    `;
    const data = await GraphqlHelper.fetchGraphQL<{
      CompaniesListingInfo: Array<ICompanyListingInfo>;
    }>(VCI_CONST.GRAPHQL_URL, query);
    return data.CompaniesListingInfo;
  }

  /**
   * Truy xuất danh sách các mã cổ phiếu theo nhóm cụ thể trên thị trường Việt Nam.
   *
   * Hàm này gửi một yêu cầu đến API để lấy thông tin về các mã cổ phiếu thuộc một nhóm nhất định,
   * sau đó trích xuất và trả về danh sách các mã cổ phiếu dưới dạng mảng chuỗi.
   *
   * @param groupCode - Mã nhóm cổ phiếu, thuộc kiểu `ESymbolGroupCode`.
   *                    Ví dụ: `ESymbolGroupCode.HOSE` cho nhóm cổ phiếu trên sàn HOSE.
   *
   * @returns Một mảng các chuỗi (`string[]`), trong đó mỗi chuỗi là mã của một cổ phiếu thuộc nhóm đã cho.
   *
   * @example
   * ```typescript
   * const hoseSymbols = await VCIListing.getAllSymbolsByGroupCode(ESymbolGroupCode.HOSE);
   * console.log(hoseSymbols); // Ví dụ: ["VN30", "VNM", ...]
   * ```
   */
  static async getAllSymbolsByGroupCode(
    groupCode: ESymbolGroupCode
  ): Promise<string[]> {
    const url = path.join(VCI_CONST.BASE_URL, "api/price/symbols/getByGroup");
    const response = await RestApiHelper.get<Array<ISymbolInfo>>(url, {
      query: {
        group: VCI_CONST.GROUP_CODE_MAP[groupCode],
      },
    });
    return response.map((item) => item.symbol);
  }
}
