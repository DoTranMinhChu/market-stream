import { VCI_CONST } from "./const";
import { GraphqlHelper } from "../../helper";
import { UtilHelper } from "../../helper/util.helper";
import { VCIExplorerFinance } from "./finance";
import { ICompanyInformationDetail } from "../../types/company.type";

export class VCIExplorerCompany {
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
  static async getCompanyInformationDetail(input: {
    stockTicker: string;
    lang: string;
  }): Promise<ICompanyInformationDetail> {
    const query = `
        query Query($ticker: String!, $lang: String!){
            AnalysisReportFiles(ticker: $ticker, langCode: $lang){ date description link name
            }
            News(ticker: $ticker, langCode: $lang) { id organCode ticker newsTitle newsSubTitle friendlySubTitle newsImageUrl newsSourceLink createdAt publicDate updatedAt langCode newsId newsShortContent newsFullContent closePrice referencePrice floorPrice ceilingPrice percentPriceChange
            }
            TickerPriceInfo(ticker: $ticker) { financialRatio { yearReport lengthReport updateDate revenue revenueGrowth netProfit netProfitGrowth ebitMargin roe roic roa pe pb eps currentRatio cashRatio quickRatio interestCoverage ae fae netProfitMargin grossMargin ev issueShare ps pcf bvps evPerEbitda at fat acp dso dpo epsTTM charterCapital RTQ4 charterCapitalRatio RTQ10 dividend ebitda ebit le de ccc RTQ17 } ticker exchange ev ceilingPrice floorPrice referencePrice openPrice matchPrice closePrice priceChange percentPriceChange highestPrice lowestPrice totalVolume highestPrice1Year lowestPrice1Year percentLowestPriceChange1Year percentHighestPriceChange1Year foreignTotalVolume foreignTotalRoom averageMatchVolume2Week foreignHoldingRoom currentHoldingRatio maxHoldingRatio
            }
            Subsidiary(ticker: $ticker) { id organCode subOrganCode percentage subOrListingInfo { enOrganName organName }
            }
            Affiliate(ticker: $ticker) { id organCode subOrganCode percentage subOrListingInfo { enOrganName organName }
            }
            CompanyListingInfo(ticker: $ticker) { id issueShare en_History history en_CompanyProfile companyProfile icbName3 enIcbName3 icbName2 enIcbName2 icbName4 enIcbName4 financialRatio { id ticker issueShare charterCapital }
            }
            OrganizationManagers(ticker: $ticker) { id ticker fullName positionName positionShortName en_PositionName en_PositionShortName updateDate percentage quantity
            }
            OrganizationShareHolders(ticker: $ticker) { id ticker ownerFullName en_OwnerFullName quantity percentage updateDate
            }
            OrganizationResignedManagers(ticker: $ticker) { id ticker fullName positionName positionShortName en_PositionName en_PositionShortName updateDate percentage quantity
            }
            OrganizationEvents(ticker: $ticker) { id organCode ticker eventTitle en_EventTitle publicDate issueDate sourceUrl eventListCode ratio value recordDate exrightDate eventListName en_EventListName
            }
        }`;

    const variables = {
      ticker: input.stockTicker,
      lang: input.lang,
    };
    const data = await GraphqlHelper.fetchGraphQL<any>(
      VCI_CONST.GRAPHQL_URL,
      query,
      variables
    );

    data.TickerPriceInfo.financialRatio = VCIExplorerFinance.mapRawFinancial(
      data.TickerPriceInfo.financialRatio
    );

    return UtilHelper.deepCamelCase(data);
  }
}
