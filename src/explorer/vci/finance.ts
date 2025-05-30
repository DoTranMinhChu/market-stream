import path from "path";
import { VCI_CONST } from "./const";
import { GraphqlHelper } from "../../helper";
import { MapToBaseFinancialStatement } from "../../types/financialStatement.type";
import { EPeriod } from "../../enums";
import {
  ICompanyFinancialRatioData,
  IFinancialRatioDictionary,
} from "../../types/financial.type";
import { UtilHelper } from "../../helper/util.helper";

export class VCIExplorerFinance {
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
  static async getCompanyFinancialRatio(input: {
    stockTicker: string;
    period: EPeriod;
    rawField?: boolean;
  }): Promise<ICompanyFinancialRatioData> {
    const query = `query Query($ticker: String!, $period: String!) {
  CompanyFinancialRatio(ticker: $ticker, period: $period) {
    ratio { ticker yearReport lengthReport updateDate revenue revenueGrowth netProfit netProfitGrowth ebitMargin roe roic roa pe pb eps currentRatio cashRatio quickRatio interestCoverage ae netProfitMargin grossMargin ev issueShare ps pcf bvps evPerEbitda BSA1 BSA2 BSA5 BSA8 BSA10 BSA159 BSA16 BSA22 BSA23 BSA24 BSA162 BSA27 BSA29 BSA43 BSA46 BSA50 BSA209 BSA53 BSA54 BSA55 BSA56 BSA58 BSA67 BSA71 BSA173 BSA78 BSA79 BSA80 BSA175 BSA86 BSA90 BSA96 CFA21 CFA22 at fat acp dso dpo ccc de le ebitda ebit dividend RTQ10 charterCapitalRatio RTQ4 epsTTM charterCapital fae RTQ17 CFA26 CFA6 CFA9 BSA85 CFA36 BSB98 BSB101 BSA89 CFA34 CFA14 ISB34 ISB27 ISA23 ISS152 ISA102 CFA27 CFA12 CFA28 BSA18 BSB102 BSB110 BSB108 CFA23 ISB41 BSB103 BSA40 BSB99 CFA16 CFA18 CFA3 ISB30 BSA33 ISB29 CFS200 ISA2 CFA24 BSB105 CFA37 ISS141 BSA95 CFA10 ISA4 BSA82 CFA25 BSB111 ISI64 BSB117 ISA20 CFA19 ISA6 ISA3 BSB100 ISB31 ISB38 ISB26 BSA210 CFA20 CFA35 ISA17 ISS148 BSB115 ISA9 CFA4 ISA7 CFA5 ISA22 CFA8 CFA33 CFA29 BSA30 BSA84 BSA44 BSB107 ISB37 ISA8 BSB109 ISA19 ISB36 ISA13 ISA1 BSB121 ISA14 BSB112 ISA21 ISA10 CFA11 ISA12 BSA15 BSB104 BSA92 BSB106 BSA94 ISA18 CFA17 ISI87 BSB114 ISA15 BSB116 ISB28 BSB97 CFA15 ISA11 ISB33 BSA47 ISB40 ISB39 CFA7 CFA13 ISS146 ISB25 BSA45 BSB118 CFA1 CFS191 ISB35 CFB65 CFA31 BSB113 ISB32 ISA16 CFS210 BSA48 BSA36 ISI97 CFA30 CFA2 CFB80 CFA38 CFA32 ISA5 BSA49 CFB64 __typename
    }
    period
    __typename
  }
}
`;

    const variables = {
      ticker: input.stockTicker,
      period: VCI_CONST.FINANCIAL_REPORT_PERIOD_MAP[input.period],
    };
    const { CompanyFinancialRatio } = await GraphqlHelper.fetchGraphQL<any>(
      VCI_CONST.GRAPHQL_URL,
      query,
      variables
    );
    return {
      ratio: input.rawField
        ? CompanyFinancialRatio.ratio
        : CompanyFinancialRatio.ratio.map(this.mapRawFinancial),
      period: CompanyFinancialRatio.period,
    };
  }
  /**
   * Ánh xạ dữ liệu tài chính thô sang các trường có tên dễ hiểu hơn
   * @param raw Đối tượng chứa dữ liệu tài chính thô từ API
   * @returns Đối tượng đã được ánh xạ với các tên trường mới
   */
  static mapRawFinancial(raw: any): any {
    const mapKey: { [key: string]: string } = {
      ticker: "stockTicker",
      yearReport: "financialReportYear",
      lengthReport: "reportPeriodLength",
      updateDate: "reportUpdateTimestamp",
      revenue: "netRevenue",
      revenueGrowth: "revenueGrowthRate",
      netProfit: "netProfit",
      netProfitGrowth: "netProfitGrowthRate",
      ebitMargin: "ebitMargin",
      roe: "returnOnEquity",
      roic: "returnOnInvestedCapital",
      roa: "returnOnAssets",
      pe: "priceToEarningsRatio",
      pb: "priceToBookRatio",
      eps: "earningsPerShare",
      currentRatio: "currentRatio",
      cashRatio: "cashRatio",
      quickRatio: "quickRatio",
      interestCoverage: "interestCoverageRatio",
      ae: "assetsToEquityRatio",
      netProfitMargin: "netProfitMargin",
      grossMargin: "grossProfitMargin",
      ev: "enterpriseValue",
      issueShare: "issuedShares",
      ps: "priceToSalesRatio",
      pcf: "priceToCashFlowRatio",
      bvps: "bookValuePerShare",
      evPerEbitda: "enterpriseValueToEbitdaRatio",
      at: "assetTurnoverRatio",
      fat: "fixedAssetTurnoverRatio",
      acp: "averageCollectionPeriod",
      dso: "daysSalesOutstanding",
      dpo: "daysPayableOutstanding",
      ccc: "cashConversionCycle",
      de: "debtToEquityRatio",
      le: "leverageRatio",
      ebitda: "ebitda",
      ebit: "ebit",
      dividend: "dividendYield",
      charterCapitalRatio: "charterCapitalToBookValueRatio",
      epsTTM: "earningsPerShareTTM",
      charterCapital: "charterCapital",
      fae: "fixedAssetsToEquityRatio",
    };

    for (const key of Object.keys(raw)) {
      // Ưu tiên ánh xạ từ MapToBaseFinancialStatement nếu có
      const newKey: any = MapToBaseFinancialStatement[key];
      if (newKey) {
        raw[newKey] = raw[key];
        delete raw[key];
      } else {
        const newKey: any = mapKey[key];
        if (newKey) {
          raw[newKey] = raw[key];
          delete raw[key];
        }
      }
    }

    return raw;
  }

  /**
   * Lấy từ điển ánh xạ cho tất cả các chỉ số tài chính
   *
   */
  static async getFinancialRatioDictionary(): Promise<
    Array<IFinancialRatioDictionary>
  > {
    const query = `query Query { ListFinancialRatio{ id type name unit isDefault fieldName en_Type en_Name tagName comTypeCode order } }`;

    const { ListFinancialRatio } = await GraphqlHelper.fetchGraphQL<any>(
      VCI_CONST.GRAPHQL_URL,
      query
    );
    return UtilHelper.deepCamelCase(ListFinancialRatio);
  }
}
