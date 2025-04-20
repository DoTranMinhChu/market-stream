import { FetchHelper } from "../../helper";
import { VCI_CONST } from "./const";
import { ICompanyListingInfo, IIcbCode } from "./type";

export class VCIListing {
  // 4. Hàm 1: Lấy danh sách mã ngành (ICB codes)
  static async getIcbCodes(): Promise<IIcbCode[]> {
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

    const data = await FetchHelper.fetchGraphQL<{ ListIcbCode: IIcbCode[] }>(
      VCI_CONST.GRAPHQL_URL,
      query
    );
    return data.ListIcbCode;
  }

  // 5. Hàm 2: Lấy thông tin công ty & mapping với các mã ngành
  static async getCompaniesListingInfo(): Promise<ICompanyListingInfo[]> {
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
    const data = await FetchHelper.fetchGraphQL<{
      CompaniesListingInfo: ICompanyListingInfo[];
    }>(VCI_CONST.GRAPHQL_URL, query);
    return data.CompaniesListingInfo;
  }
}
