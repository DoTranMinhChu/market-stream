export interface ICompanyFinancialRatio {
  /** ticker: Mã chứng khoán */
  stockTicker: string;

  /** yearReport: Năm báo cáo tài chính */
  financialReportYear: number;

  /** lengthReport: Độ dài kỳ báo cáo (số quý hoặc năm) */
  reportPeriodLength: number;

  /** updateDate: Thời điểm cập nhật báo cáo (timestamp) */
  reportUpdateTimestamp: number;

  /** revenue: Doanh thu thuần */
  netRevenue: number;

  /** revenueGrowth: Tỷ lệ tăng trưởng doanh thu */
  revenueGrowthRate: number;

  /** netProfit: Lợi nhuận ròng */
  netProfit: number;

  /** netProfitGrowth: Tỷ lệ tăng trưởng lợi nhuận ròng */
  netProfitGrowthRate: number;

  /** ebitMargin: Tỷ suất lợi nhuận EBIT */
  ebitMargin: number;

  /** roe: Tỷ suất lợi nhuận trên vốn chủ sở hữu */
  returnOnEquity: number;

  /** roic: Tỷ suất lợi nhuận trên vốn đầu tư */
  returnOnInvestedCapital: number;

  /** roa: Tỷ suất lợi nhuận trên tài sản */
  returnOnAssets: number;

  /** pe: Tỷ số giá trên thu nhập */
  priceToEarningsRatio: number;

  /** pb: Tỷ số giá trên giá trị sổ sách */
  priceToBookRatio: number;

  /** eps: Thu nhập trên mỗi cổ phiếu */
  earningsPerShare: number;

  /** currentRatio: Tỷ số thanh toán hiện hành */
  currentRatio: number;

  /** cashRatio: Tỷ số thanh toán tiền mặt */
  cashRatio: number;

  /** quickRatio: Tỷ số thanh toán nhanh */
  quickRatio: number;

  /** interestCoverage: Tỷ số chi trả lãi vay */
  interestCoverageRatio: number;

  /** ae: Tỷ số tài sản trên vốn chủ sở hữu */
  assetsToEquityRatio: number;

  /** netProfitMargin: Tỷ suất lợi nhuận ròng */
  netProfitMargin: number;

  /** grossMargin: Tỷ suất lợi nhuận gộp */
  grossProfitMargin: number;

  /** ev: Giá trị doanh nghiệp */
  enterpriseValue: number;

  /** issueShare: Số lượng cổ phiếu phát hành */
  issuedShares: number;

  /** ps: Tỷ số giá trên doanh thu */
  priceToSalesRatio: number;

  /** pcf: Tỷ số giá trên dòng tiền */
  priceToCashFlowRatio: number;

  /** bvps: Giá trị sổ sách trên mỗi cổ phiếu */
  bookValuePerShare: number;

  /** evPerEbitda: Tỷ số giá trị doanh nghiệp trên EBITDA */
  enterpriseValueToEbitdaRatio: number;

  /** at: Hệ số vòng quay tài sản */
  assetTurnoverRatio: number;

  /** fat: Hệ số vòng quay tài sản cố định */
  fixedAssetTurnoverRatio: number;

  /** acp: Thời gian thu tiền bình quân */
  averageCollectionPeriod: number | null;

  /** dso: Số ngày thu tiền bình quân */
  daysSalesOutstanding: number;

  /** dpo: Số ngày thanh toán bình quân */
  daysPayableOutstanding: number;

  /** ccc: Chu kỳ tiền mặt */
  cashConversionCycle: number | null;

  /** de: Tỷ số nợ trên vốn chủ sở hữu */
  debtToEquityRatio: number;

  /** le: Tỷ số đòn bẩy tài chính */
  leverageRatio: number;

  /** ebitda: Lợi nhuận trước lãi vay, thuế và khấu hao */
  ebitda: number;

  /** ebit: Lợi nhuận trước lãi vay và thuế */
  ebit: number;

  /** dividend: Tỷ suất cổ tức */
  dividendYield: number;

  /** charterCapitalRatio: Tỷ lệ vốn điều lệ trên giá trị sổ sách */
  charterCapitalToBookValueRatio: number;

  /** epsTTM: Thu nhập trên mỗi cổ phiếu TTM */
  earningsPerShareTTM: number;

  /** charterCapital: Vốn điều lệ */
  charterCapital: number;

  /** fae: Tỷ lệ tài sản cố định trên tổng tài sản */
  fixedAssetsToEquityRatio: number;

  balanceSheetCurrentAssets: number;
  balanceSheetCashAndCashEquivalents: number;
  balanceSheetShortTermInvestmentsNet: number;
  balanceSheetReceivablesTotal: number;
  balanceSheetAdvancesToSuppliers: number;
  balanceSheetShortTermLoansReceivables: number;
  balanceSheetInventoriesGross: number;
  balanceSheetOtherCurrentAssetsDetail: number;
  balanceSheetLongTermAssets: number;
  balanceSheetLongTermReceivablesTotal: number;
  balanceSheetLongTermLoansReceivables: number;
  balanceSheetLongTermOtherReceivables: number;
  balanceSheetFixedAssets: number;
  balanceSheetLongTermInvestments: number;
  balanceSheetOtherLongTermInvestments: number;
  balanceSheetLongTermPrepayments: number;
  balanceSheetGoodwill: number;
  balanceSheetTotalAssets: number;
  balanceSheetLiabilities: number;
  balanceSheetCurrentLiabilities: number;
  balanceSheetShortTermLoans: number;
  balanceSheetAdvancesFromCustomers: number;
  balanceSheetLongTermLiabilities: number;
  balanceSheetLongTermLoans: number;
  balanceSheetConvertibleBonds: number;
  balanceSheetOwnersEquity: number;
  balanceSheetCapitalAndReserves: number;
  balanceSheetPaidInCapital: number;
  balanceSheetCommonShares: number;
  balanceSheetInvestmentAndDevelopmentFunds: number;
  balanceSheetRetainedEarnings: number;
  balanceSheetTotalResources: number;
  cashFlowLoansGrantedPurchasesOfDebtInstruments: number;
  cashFlowCollectionOfLoansProceedsFromSalesOfDebtInstruments: number;
  ratioTrailingTwelveMonthsTotalLiabilitiesEquity: number;
  ratioTrailingTwelveMonthsLTDebtEquity: number;
  ratioTrailingTwelveMonthsInventoryTurnoverRatio: number;
  cashFlowNetCashFlowsFromInvestingActivities: number;
  cashFlowProfitLossFromInvestingActivities: number;
  cashFlowOperatingProfitBeforeChangesInWC: number;
  balanceSheetForeignExchangeDifferences: number;
  cashFlowCashAndCashEquivalentsAtBeginningOfPeriod: number;
  balanceSheetPlacementsAndLoansToOtherCreditInstitutions: number;
  balanceSheetProvisionForTradingSecuritiesDiminution: number;
  balanceSheetOtherFunds: number;
  cashFlowNetCashFlowsFromFinancingActivities: number;
  cashFlowInterestPaid: number;
  incomeStatementOtherIncomeBank: number;
  incomeStatementNetInterestIncome: number;
  incomeStatementBasicEPS: number;
  incomeStatementSellingCosts: number;
  incomeStatementGainLossFromJointVentures: number;
  cashFlowProceedsFromIssueOfShares: number;
  cashFlowIncreaseDecreaseInPayables: number;
  cashFlowPaymentsForShareReturnsAndRepurchases: number;
  balanceSheetOtherCurrentAssets: number;
  balanceSheetDerivativesAndOtherFinancialAssets: number;
  balanceSheetOtherAssets: number;
  balanceSheetHeldToMaturityInvestments: number;
  cashFlowInvestmentsInOtherEntities: number;
  incomeStatementProvisionForCreditLosses: number;
  balanceSheetLoansToCustomersNet: number;
  balanceSheetInvestmentPropertiesNet: number;
  balanceSheetTradingSecuritiesNet: number;
  cashFlowOtherReceiptsFromOperatingActivities: number;
  cashFlowNetCashFlowsFromOperatingActivities: number;
  cashFlowProvisions: number;
  incomeStatementNetFeeAndCommissionIncome: number;
  balanceSheetFinanceLeaseAssetsNet: number;
  incomeStatementFeesAndCommissionExpenses: number;
  cashFlowIncreaseDecreaseInReceivable: number;
  incomeStatementSalesDeductions: number;
  cashFlowProceedsFromDivestmentInOtherEntities: number;
  balanceSheetProvisionForCustomerLoansLosses: number;
  cashFlowEffectOfForeignExchangeDifferences: number;
  incomeStatementRevenueFromFinancialActivities: number;
  balanceSheetMinorityInterestsBefore2015: number;
  cashFlowIncreaseDecreaseInReceivables: number;
  incomeStatementCostOfSales: number;
  balanceSheetOwnersOtherCapital: number;
  cashFlowDividendsAndInterestReceived: number;
  balanceSheetDueToGovernmentAndSBV: number;
  incomeStatementNetSalesFromInsuranceBusiness: number;
  balanceSheetOtherLiabilities: number;
  incomeStatementNetProfitLossAfterTax: number;
  cashFlowPurchasesOfFixedAssetsAndOtherLongTermAssets: number;
  incomeStatementFinancialIncome: number;
  incomeStatementNetSales: number;
  balanceSheetTradingSecurities: number;
  incomeStatementNetGainLossFromForeignCurrencyAndGold: number;
  incomeStatementTotalOperatingIncome: number;
  incomeStatementInterestAndSimilarExpenses: number;
  balanceSheetMinorityInterests: number;
  cashFlowProceedsFromDisposalOfFixedAssets: number;
  cashFlowNetIncreaseInCashAndCashEquivalents: number;
  incomeStatementCurrentBusinessIncomeTax: number;
  incomeStatementInterestExpensesSecurities: number;
  balanceSheetFundsFromGovernmentAndInstitutions: number;
  incomeStatementSellingExpenses: number;
  cashFlowUnrealisedForeignExchangeGainLoss: number;
  incomeStatementFinancialExpenses: number;
  cashFlowProfitLossFromLiquidatingFixedAssets: number;
  incomeStatementAttributableToParentCompany: number;
  cashFlowInterestIncomeAndDividend: number;
  cashFlowInterestsReceived: number;
  cashFlowProceedsFromLoans: number;
  balanceSheetTangibleFixedAssetsNet: number;
  balanceSheetDifferencesUponAssetRevaluation: number;
  balanceSheetInvestmentsInSubsidiaries: number;
  balanceSheetAvailableForSaleSecurities: number;
  incomeStatementDividendsIncome: number;
  incomeStatementInterestExpenses: number;
  balanceSheetProvisionForInvestmentSecuritiesDiminution: number;
  incomeStatementBusinessIncomeTaxExpenses: number;
  incomeStatementNetOtherIncomeExpensesBank: number;
  incomeStatementOtherExpenses: number;
  incomeStatementSales: number;
  balanceSheetCreditInstitutionReserves: number;
  incomeStatementNetOtherIncomeExpenses: number;
  balanceSheetDepositsAndLoansFromOtherCreditInstitutions: number;
  incomeStatementMinorityInterests: number;
  incomeStatementGeneralAndAdminExpenses: number;
  cashFlowIncreaseDecreaseInInventories: number;
  incomeStatementOtherIncome: number;
  balanceSheetInventoriesNet: number;
  balanceSheetLoansToCustomers: number;
  balanceSheetBudgetSourcesAndOtherFunds: number;
  balanceSheetInvestmentSecuritiesNet: number;
  balanceSheetBudgetSources: number;
  incomeStatementDeferredBusinessIncomeTax: number;
  cashFlowOtherPaymentsOnOperatingActivities: number;
  incomeStatementGrossInsuranceOperatingProfit: number;
  balanceSheetDerivativesAndOtherFinancialLiabilities: number;
  incomeStatementIncomeFromInvestmentsInOtherEntities: number;
  balanceSheetValuablePapersIssued: number;
  incomeStatementFeesAndCommissionIncome: number;
  balanceSheetBalancesWithSBV: number;
  cashFlowBusinessIncomeTaxPaid: number;
  incomeStatementOperatingProfitLoss: number;
  incomeStatementNetGainLossFromDisposalOfInvestmentSecurities: number;
  balanceSheetProvisionForLongTermInvestments: number;
  incomeStatementOperatingProfitBeforeProvisionForCreditLosses: number;
  incomeStatementGeneralAndAdminExpensesBank: number;
  cashFlowInterestExpense: number;
  cashFlowIncreaseDecreaseInPrepaidExpenses: number;
  incomeStatementFinancialExpensesSecurities: number;
  incomeStatementInterestAndSimilarIncome: number;
  balanceSheetInvestmentsInAssociates: number;
  balanceSheetCreditInstitutionCapital: number;
  cashFlowNetProfitBeforeTax: number;
  cashFlowProfitFromSalesOfFixedAssetsAndProperties: number;
  incomeStatementOtherExpensesBank: number;
  cashFlowPaymentFromReserves: number;
  cashFlowFinanceLeasePrincipalPayments: number;
  balanceSheetDepositsFromCustomers: number;
  incomeStatementNetGainLossFromTradingSecurities: number;
  incomeStatementNetProfitLossBeforeTax: number;
  cashFlowIncreaseDecreaseInTradePayables: number;
  balanceSheetGoodwillBefore2015: number;
  balanceSheetIntangibleFixedAssetsNet: number;
  incomeStatementNetOperatingProfitFromInsuranceOperation: number;
  cashFlowRepaymentOfLoans: number;
  cashFlowDepreciationAndAmortisation: number;
  cashFlowOtherOperatingIncome: number;
  cashFlowCashAndCashEquivalentsAtEndOfPeriod: number;
  cashFlowDividendsPaid: number;
  incomeStatementGrossProfit: number;
  balanceSheetOtherLongTermAssets: number;
  cashFlowNetCashFlowsFromOperatingActivitiesBeforeBIT: number;
}
export interface ICompanyFinancialRatioData {
  ratio: Array<ICompanyFinancialRatio>;
  period: Array<string>;
}

export interface IFinancialRatioDictionary {
  id: string;
  type: string;
  name: string;
  unit: string;
  isDefault: boolean;
  fieldName: string;
  enType: string;
  enName: string;
  tagName: string;
  comTypeCode: string;
  order: string;
}
