export interface IBaseFinancialStatement {
  /** BSA1: TÀI SẢN NGẮN HẠN — CURRENT ASSETS */
  balanceSheetTotalCurrentAssets: number;
  /** BSA2: Tiền và tương đương tiền — Cash and cash equivalents */
  balanceSheetCashAndCashEquivalents: number;
  /** BSA3: Tiền — Cash */
  balanceSheetCash: number;
  /** BSA4: Các khoản tương đương tiền — Cash equivalents */
  balanceSheetCashEquivalents: number;
  /** BSA5: Đầu tư tài chính ngắn hạn — Short‑term investments */
  balanceSheetShortTermInvestments: number;
  /** BSA6: Chứng khoán kinh doanh — Trading securities */
  balanceSheetTradingSecurities: number;
  /** BSB108: Đầu tư nắm giữ đến ngày đáo hạn — Held‑to‑maturity investments */
  balanceSheetHeldToMaturityInvestmentsST: number;
  /** BSA8: Các khoản phải thu ngắn hạn — Accounts receivable */
  balanceSheetAccountsReceivable: number;
  /** BSA9: Phải thu ngắn hạn của khách hàng — Trade receivables */
  balanceSheetTradeReceivables: number;
  /** BSA10: Trả trước cho người bán ngắn hạn — Prepayments to suppliers (ST) */
  balanceSheetPrepaymentsToSuppliersShortTerm: number;
  /** BSA11: Phải thu nội bộ ngắn hạn — IntercompanyReceivables (ST) */
  balanceSheetIntercompanyReceivablesShortTerm: number;
  /** BSA12: Phải thu theo tiến độ hợp đồng xây dựng — Construction in progress receivables */
  balanceSheetConstructionReceivablesInProgress: number;
  /** BSA159  Phải thu về cho vay ngắn hạn*/
  balanceSheetLoansReceivablesShortTerm: number;
  /** BSI139  Tạm ứng*/
  balanceSheetIntercompanyReceivables: number;
  /** BSI140Phải thu từ hoạt động đầu tư tài chính  */
  balanceSheetReceivableFromTradingStocks: number;

  /** BSA13: Phải thu ngắn hạn khác — Other receivables (ST) */
  balanceSheetOtherReceivablesST: number;
  /** BSA14: Dự phòng phải thu ngắn hạn khó đòi — Provision for doubtful debts (ST) */
  balanceSheetProvisionDoubtfulDebtsST: number;
  /** BSI141: Tài sản thiếu chờ xử lý — Shortage of current assets pending resolution */
  balanceSheetShortageOfCurrentAssetsPendingResolution: number;
  /** BSA15: Hàng tồn kho, ròng — Inventories, Net */
  balanceSheetInventoriesNet: number;
  /** BSA16: Hàng tồn kho — Inventories */
  balanceSheetInventories: number;
  /** BSA17: Dự phòng giảm giá HTK — Provision for decline in inventories */
  balanceSheetProvisionInventoryWriteDown: number;
  /** BSA18: Chi phí trả trước ngắn hạn — Prepayments (ST) */
  balanceSheetPrepaymentsST: number;
  /** BSA19: Tài sản ngắn hạn khác — Other current assets */
  balanceSheetOtherCurrentAssets: number;
  /** BSA20: Chi phí trả trước ngắn hạn — Prepaid expenses (ST) */
  balanceSheetPrepaidExpensesST: number;
  /** BSA21: Thuế GTGT được khấu trừ — VAT to be claimed */
  balanceSheetVatToBeClaimed: number;
  /** BSA160: Thuế và các khoản khác phải thu Nhà nước — Other taxes receivable */
  balanceSheetOtherTaxesReceivable: number;
  /** BSA22: Giao dịch mua bán lại trái phiếu chính phủ — Government bonds purchased for resale (ST) */
  balanceSheetGovBondsPurchasedForResaleST: number;
  /** BSA23: Tài sản ngắn hạn khác — Additional other current assets */
  balanceSheetAdditionalOtherCurrentAssets: number;

  /** BSA24: Tài sản dài hạn — Total long‑term assets */
  balanceSheetTotalLongTermAssets: number;
  /** BSA25: Phải thu dài hạn — Long‑term receivables */
  balanceSheetLongTermTradeReceivables: number;
  /** BSA161: Phải thu khách hàng dài hạn — Long‑term receivables from customers */
  balanceSheetLongTermReceivablesFromCustomers: number;
  /** BSS134: Trả trước người bán dài hạn — Prepayments to suppliers (LT) */
  balanceSheetPrepaymentsToSuppliersLT: number;
  /** BSA26: Vốn kinh doanh tại đơn vị trực thuộc — Paid‑in capital in subsidiaries */
  balanceSheetPaidInCapitalSubsidiaries: number;
  /** BSA162: Phải thu nội bộ dài hạn — IntercompanyReceivables (LT) */
  balanceSheetIntercompanyReceivablesLT: number;
  /** BSA27: Phải thu cho vay dài hạn — Long‑term loans receivable */
  balanceSheetLongTermLoanReceivables: number;
  /** BSA28: Phải thu dài hạn khác — Other long‑term receivables */
  balanceSheetOtherReceivablesLT: number;
  /** BSA29: Dự phòng phải thu dài hạn — Provision for doubtful debts (LT) */
  balanceSheetProvisionDoubtfulDebtsLT: number;
  /** BSA30: Tài sản cố định — Total fixed assets */
  balanceSheetTotalFixedAssets: number;
  /** BSA31: GTCL TSCĐ hữu hình — Tangible fixed assets */
  balanceSheetTangibleFixedAssets: number;
  /** BSA32: Nguyên giá TSCĐ hữu hình — Cost of tangible fixed assets */
  balanceSheetTangibleAssetsCost: number;
  /** BSA33: Khấu hao lũy kế TSCĐ hữu hình — Accumulated depreciation (tangible) */
  balanceSheetAccumulatedDepreciationTangible: number;
  /** BSA34: Tài sản thuê tài chính — Finance lease assets */
  balanceSheetFinanceLeaseAssets: number;
  /** BSA35: Nguyên giá tài sản thuê tài chính — Cost of finance lease assets */
  balanceSheetFinanceLeaseCost: number;
  /** BSA36: Khấu hao lũy kế tài sản thuê tài chính — Accumulated depreciation (finance leases) */
  balanceSheetAccumulatedDepreciationFinanceLeases: number;
  /** BSA37: TSCĐ vô hình — Intangible fixed assets */
  balanceSheetIntangibleFixedAssets: number;
  /** BSA38: Nguyên giá TSCĐ vô hình — Cost of intangible fixed assets */
  balanceSheetIntangibleAssetsCost: number;
  /** BSA39: Khấu hao lũy kế TSCĐ vô hình — Accumulated depreciation (intangible) */
  balanceSheetAccumulatedDepreciationIntangible: number;
  /** BSA40: Xây dựng cơ bản dở dang (trước 2015) — Construction in progress (pre‑2015) */
  balanceSheetConstructionInProgressPre2015: number;
  /** BSA41: Giá trị ròng tài sản đầu tư — Net value of investment properties */
  balanceSheetInvestmentPropertiesNetValue: number;
  /** BSA42: Nguyên giá tài sản đầu tư — Cost of investment properties */
  balanceSheetInvestmentPropertiesCost: number;
  /** BSA163: Khấu hao lũy kế tài sản đầu tư — Accumulated depreciation (investment properties) */
  balanceSheetAccumulatedDepreciationInvestmentProperties: number;
  /** BSA164: Tài sản dở dang dài hạn — Long‑term work in progress */
  balanceSheetLongTermWorkInProgress: number;
  /** BSA188: Chi phí SXKD dở dang dài hạn — Long‑term cost of work in progress */
  balanceSheetLongTermWorkInProgressCost: number;
  /** BSA43: Xây dựng cơ bản dở dang — Construction in progress */
  balanceSheetConstructionInProgress: number;

  /** BSA44: Đầu tư dài hạn — Total long‑term investments */
  balanceSheetTotalLongTermInvestments: number;
  /** BSA45: Đầu tư vào công ty con — Investments in subsidiaries */
  balanceSheetInvestmentsSubsidiaries: number;
  /** BSA46: Đầu tư vào công ty liên kết — Investments in associates */
  balanceSheetInvestmentsAssociates: number;
  /** BSA47: Đầu tư dài hạn khác — Other long‑term investments */
  balanceSheetOtherLongTermInvestments: number;
  /** BSA165: Dự phòng giảm giá đầu tư dài hạn — Provision for long‑term investments */
  balanceSheetProvisionLongTermInvestments: number;
  /** BSA48: Đầu tư nắm giữ đến ngày đáo hạn — Held‑to‑maturity investments (LT) */
  balanceSheetHeldToMaturityInvestmentLT: number;
  /** BSA49: Lợi thế thương mại (trước 2015) — Goodwill (pre‑2015) */
  balanceSheetGoodwillPre2015: number;
  /** BSA50: Tài sản dài hạn khác — Other long‑term assets */
  balanceSheetOtherLongTermAssets: number;
  /** BSA51: Trả trước dài hạn — Prepayments (LT) */
  balanceSheetLongTermPrepayments: number;
  /** BSA166: Tài sản thuế thu nhập hoãn lại — Deferred tax assets */
  balanceSheetDeferredTaxAssets: number;
  /** BSA52: Thiết bị, vật tư, phụ tùng dài hạn — Equipment & spare parts (LT) */
  balanceSheetLongTermEquipmentAndSpareParts: number;
  /** BSA209: Các tài sản dài hạn khác — Additional other long‑term assets */
  balanceSheetAdditionalOtherLongTermAssets: number;
  /** BSA53: Lợi thế thương mại — Goodwill */
  balanceSheetGoodwill: number;
  /** BSA54: Tổng cộng tài sản — Total assets */
  balanceSheetTotalAssets: number;

  /** ISA1: Doanh thu bán hàng và cung cấp dịch vụ — Net revenue from sales and services */
  incomeStatementNetRevenueSalesServices: number;
  /** ISA2: Các khoản giảm trừ doanh thu — Revenue deductions */
  incomeStatementRevenueDeductions: number;
  /** ISA3: Doanh thu thuần về bán hàng và cung cấp dịch vụ — Net revenue from sales and services (after deductions) */
  incomeStatementNetRevenueAfterDeductions: number;
  /** ISA4: Giá vốn hàng bán — Cost of goods sold */
  incomeStatementCostOfGoodsSold: number;
  /** ISA5: Lợi nhuận gộp về bán hàng và cung cấp dịch vụ — Gross profit from sales and services */
  incomeStatementGrossProfitSalesServices: number;
  /** ISA6: Doanh thu hoạt động tài chính — Financial income */
  incomeStatementFinancialIncome: number;
  /** ISA7: Chi phí tài chính — Financial expenses */
  incomeStatementFinancialExpenses: number;
  /** ISA8: Chi phí lãi vay — Interest expenses */
  incomeStatementInterestExpenses: number;
  /** ISA9: Chi phí bán hàng — Selling expenses */
  incomeStatementSellingExpenses: number;
  /** ISA10: Chi phí quản lý doanh nghiệp — General and administrative expenses */
  incomeStatementAdminExpenses: number;
  /** ISA11: Lợi nhuận thuần từ hoạt động kinh doanh — Net profit from operating activities */
  incomeStatementNetProfitOperatingActivities: number;
  /** ISA12: Thu nhập khác — Other income */
  incomeStatementOtherIncome: number;
  /** ISA13: Chi phí khác — Other expenses */
  incomeStatementOtherExpenses: number;
  /** ISA14: Lợi nhuận khác — Other profits */
  incomeStatementOtherProfits: number;
  /** ISA15: Tổng lợi nhuận kế toán trước thuế — Total accounting profit before tax */
  incomeStatementTotalProfitBeforeTax: number;
  /** ISA16: Chi phí thuế thu nhập doanh nghiệp — Corporate income tax expenses */
  incomeStatementCorporateIncomeTax: number;
  /** ISA17: Lợi nhuận sau thuế thu nhập doanh nghiệp — Net profit after tax */
  incomeStatementNetProfitAfterTax: number;
  /** ISA18: Lợi nhuận sau thuế của công ty mẹ — Parent companyProfit after tax */
  incomeStatementParentCompanyProfitAfterTax: number;
  /** ISA19: Lợi nhuận sau thuế của cổ đông không kiểm soát — Minority interest after tax */
  incomeStatementMinorityInterestAfterTax: number;
  /** ISA20: EPS cơ bản — Basic EPS (Earnings Per Share) */
  incomeStatementBasicEarningsPerShare: number;
  /** ISA21: EPS pha loãng — Diluted EPS (Earnings Per Share) */
  incomeStatementDilutedEarningsPerShare: number;
  /** ISA22: Thu nhập tài chính khác — Other financial income */
  incomeStatementOtherFinancialIncome: number;
  /** ISA23: Chi phí tài chính khác — Other financial expenses */
  incomeStatementOtherFinancialExpenses: number;
  /** ISA24: Chi phí thuế khác — Other tax expenses */
  incomeStatementOtherTaxExpenses: number;

  /** CFA1: Lãi trước thuế — Net profit/(loss) before tax */
  cashFlowProfitLossBeforeTax: number;
  /** CFA2: Khấu hao TSCĐ — Depreciation and amortisation */
  cashFlowDepreciationAndAmortisation: number;
  /** CFA3: Chi phí dự phòng — Provisions */
  cashFlowProvisions: number;
  /** CFA104: Các khoản điều chỉnh khác — Other adjustments */
  cashFlowOtherAdjustments: number;
  /** CFA4: Lãi/lỗ chênh lệch tỷ giá chưa thực hiện — Unrealised foreign exchange gain/(loss) */
  cashFlowUnrealisedForexGainLoss: number;
  /** CFA5: Lãi/lỗ từ thanh lý tài sản cố định — Profit/(loss) from liquidating fixed assets */
  cashFlowProfitLossFromLiquidatingFixedAssets: number;
  /** CFA6: Lãi/lỗ từ hoạt động đầu tư — Profit/(loss) from investing activities */
  cashFlowProfitLossFromInvestingActivities: number;
  /** CFA7: Chi phí lãi vay — Interest expense */
  cashFlowInterestExpense: number;
  /** CFA8: Thu lãi và cổ tức — Interest income and dividend */
  cashFlowInterestIncomeAndDividend: number;
  /** CFA9: Lãi/lỗ trước những thay đổi vốn lưu động — Operating profit/(loss) before changes in working capital */
  cashFlowOperatingProfitLossBeforeWCChanges: number;
  /** CFA105: (Tăng)/giảm chứng khoán kinh doanh — Increase/(decrease) in trading securities */
  cashFlowChangeInTradingSecurities: number;
  /** CFA10: Tăng/giảm các khoản phải thu — Increase/(decrease) in receivables */
  cashFlowChangeInReceivables: number;
  /** CFA11: Tăng/giảm hàng tồn kho — Increase/(decrease) in inventories */
  cashFlowChangeInInventories: number;
  /** CFA12: Tăng/giảm các khoản phải trả — Increase/(decrease) in payables */
  cashFlowChangeInPayables: number;
  /** CFA13: Tăng/giảm chi phí trả trước — Increase/(decrease) in prepaid expenses */
  cashFlowChangeInPrepaidExpenses: number;
  /** CFA14: Chi phí lãi vay đã trả — Interest paid */
  cashFlowInterestPaid: number;
  /** CFA15: Thuế thu nhập doanh nghiệp đã trả — Business income tax paid */
  cashFlowBusinessIncomeTaxPaid: number;
  /** CFA16: Tiền thu khác từ các hoạt động kinh doanh — Other receipts from operating activities */
  cashFlowOtherReceiptsFromOperatingActivities: number;
  /** CFA17: Tiền chi khác từ các hoạt động kinh doanh — Other payments on operating activities */
  cashFlowOtherPaymentsOnOperatingActivities: number;
  /** CFA18: Lưu chuyển tiền tệ ròng từ các hoạt động sản xuất kinh doanh — Net cash from operating activities */
  cashFlowNetCashFromOperatingActivities: number;
  /** CFA19: Tiền mua tài sản cố định và các tài sản dài hạn khác — Purchases of fixed assets and other long‑term assets */
  cashFlowPurchasesOfFixedAssetsAndOtherLongTermAssets: number;
  /** CFA20: Tiền thu được từ thanh lý tài sản cố định — Proceeds from disposal of fixed assets */
  cashFlowProceedsFromDisposalOfFixedAssets: number;
  /** CFA21: Tiền cho vay hoặc mua công cụ nợ — Loans granted, purchases of debt instruments */
  cashFlowLoansGrantedPurchasesDebtInstruments: number;
  /** CFA22: Tiền thu từ cho vay hoặc thu từ phát hành công cụ nợ — Collection of loans, proceeds from debt instruments */
  cashFlowCollectionOfLoansProceedsFromDebtInstruments: number;
  /** CFA23: Đầu tư vào các doanh nghiệp khác — Investments in other entities */
  cashFlowInvestmentsInOtherEntities: number;
  /** CFA24: Tiền thu từ việc bán các khoản đầu tư vào các doanh nghiệp khác — Proceeds from divestment in other entities */
  cashFlowProceedsFromDivestmentInOtherEntities: number;
  /** CFA25: Cổ tức và tiền lãi nhận được — Dividends and interest received */
  cashFlowDividendsAndInterestReceived: number;
  /** CFA26: Lưu chuyển tiền tệ ròng từ hoạt động đầu tư — Net cash from investing activities */
  cashFlowNetCashFromInvestingActivities: number;
  /** CFA27: Tiền thu từ phát hành cổ phiếu và vốn góp — Proceeds from issue of shares */
  cashFlowProceedsFromIssueOfShares: number;
  /** CFA28: Chi trả cho việc mua lại, trả lại cổ phiếu — Payments for share returns and repurchases */
  cashFlowPaymentsForShareReturnsAndRepurchases: number;
  /** CFA29: Tiền thu được các khoản đi vay — Proceeds from borrowings */
  cashFlowProceedsFromBorrowings: number;
  /** CFA30: Trả các khoản đi vay — Repayment of borrowings */
  cashFlowRepaymentOfBorrowings: number;
  /** CFA31: Thanh toán vốn gốc đi thuê tài chính — Finance lease principal payments */
  cashFlowFinanceLeasePrincipalPayments: number;
  /** CFA32: Cổ tức đã trả — Dividends paid */
  cashFlowDividendsPaid: number;
  /** CFA33: Tiền lãi đã nhận — Interests, dividends, profits received */
  cashFlowInterestsDividendsProfitsReceived: number;
  /** CFA34: Lưu chuyển tiền tệ từ hoạt động tài chính — Net cash from financing activities */
  cashFlowNetCashFromFinancingActivities: number;
  /** CFA35: Lưu chuyển tiền thuần trong kỳ — Net increase in cash and cash equivalents */
  cashFlowNetIncreaseInCashAndCashEquivalents: number;
  /** CFA36: Tiền và tương đương tiền đầu kỳ — Cash and cash equivalents at beginning of period */
  cashFlowCashAndCashEquivalentsAtBeginningOfPeriod: number;
  /** CFA37: Ảnh hưởng của chênh lệch tỷ giá — Effect of foreign exchange differences */
  cashFlowEffectOfForeignExchangeDifferences: number;
  /** CFA38: Tiền và tương đương tiền cuối kỳ — Cash and cash equivalents at end of period */
  cashFlowCashAndCashEquivalentsAtEndOfPeriod: number;
  /** CFA39: Lãi thu từ bán hàng, dịch vụ và thu nhập khác (Trực tiếp) — Gains from sales of goods, services and other gains (Direct) */
  cashFlowGainsFromSalesServicesAndOtherGainsDirect: number;
  /** CFA40: Chi trả cho người cung cấp (Trực tiếp) — Payments to suppliers (Direct) */
  cashFlowPaymentsToSuppliersDirect: number;
  /** CFA41: Chi trả cho người lao động (Trực tiếp) — Payments to employees (Direct) */
  cashFlowPaymentsToEmployeesDirect: number;
  /** CFA42: Chi trả lãi vay (Trực tiếp) — Loan interests paid (Direct) */
  cashFlowLoanInterestsPaidDirect: number;
  /** CFA43: Nộp thuế thu nhập doanh nghiệp (Trực tiếp) — Corporate income tax paid (Direct) */
  cashFlowCorporateIncomeTaxPaidDirect: number;
  /** CFA44: Thu nhập khác (Trực tiếp) — Other gains (Direct) */
  cashFlowOtherGainsDirect: number;
  /** CFA45: Chi disbursements khác (Trực tiếp) — Other disbursements (Direct) */
  cashFlowOtherDisbursementsDirect: number;
  /** CFA103: Phân bổ lợi thế thương mại — Amortisation of goodwill */
  cashFlowAmortisationOfGoodwill: number;

  /** BRC1: I - Tiền mặt, vàng bạc, đá quý | Cash, gold, silver, gemstones */
  bankCurrencyRiskCashAndPreciousAssets: number;
  /** BRC2: II - Tiền gửi tại NHNN | State Bank’s deposits */
  bankCurrencyRiskDepositsAtCentralBank: number;
  /** BRC3: III - Tiền gửi và cho vay các TCTD khác | Deposits and loans to other credit institutions */
  bankCurrencyRiskDepositsLoansToOtherFIs: number;
  /** BRC4: IV - Chứng khoán kinh doanh(*) | Trading securities */
  bankCurrencyRiskTradingSecurities: number;
  /** BRC5: V - Các công cụ tài chính phát sinh và các tài sản tài chính khác(*) | Derivative financial instruments and other financial assets (*) */
  bankCurrencyRiskDerivativesAndOtherFinancialAssets: number;
  /** BRC6: VI - Cho vay khách hàng(*) | Loans to customers */
  bankCurrencyRiskLoansToCustomers: number;
  /** BRC7: VII - Chứng khoán đầu tư(*) | Investment securities */
  bankCurrencyRiskInvestmentSecurities: number;
  /** BRC8: VIII - Góp vốn đầu tư dài hạn(*) | Long-term investments */
  bankCurrencyRiskLongTermInvestments: number;
  /** BRC9: IX - Tài sản cố định và đầu tư bất động sản | Fixed assets and real estate investments */
  bankCurrencyRiskFixedAssetsAndRealEstate: number;
  /** BRC10: X - Tài sản có khác(*) | Other assets (*) */
  bankCurrencyRiskOtherAssets: number;
  /** BRC11: Tổng tài sản | Total assets */
  bankCurrencyRiskTotalAssets: number;
  /** BRC12: Các khoản nợ chính phủ và NHNN | Government and State Bank loans */
  bankCurrencyRiskGovAndCentralBankLoans: number;
  /** BRC13: Tiền gửi và vay các TCTD khác | Other credit institution borrowings */
  bankCurrencyRiskBorrowingsFromOtherFIs: number;
  /** BRC14: Tiền gửi của khách hàng | Customers’ deposits */
  bankCurrencyRiskCustomerDeposits: number;
  /** BRC15: Các công cụ tài chính phát sinh và các khoản nợ tài chính khác | Incurred financial instruments and other financial liabilities */
  bankCurrencyRiskDerivativeLiabilitiesAndOtherDebts: number;
  /** BRC16: Vốn tài trợ, uỷ thác đầu tư, cho vay tổ chức tín dụng chịu rủi ro | Funding, entrusted investment, credit lending under risk */
  bankCurrencyRiskFundingEntrustedInvestments: number;
  /** BRC17: Phát hành giấy tờ có giá | Issuance of valuable papers */
  bankCurrencyRiskIssuanceOfSecurities: number;
  /** BRC18: Các khoản nợ khác | Other debts */
  bankCurrencyRiskOtherDebts: number;
  /** BRC19: Vốn và các quỹ | Capital and funds */
  bankCurrencyRiskCapitalAndFunds: number;
  /** BRC20: Tổng nợ phải trả và vốn chủ sở hữu | Total liabilities and owner's equity */
  bankCurrencyRiskTotalLiabilitiesAndEquity: number;
  /** BRC21: Trạng thái tiền tệ nội bảng | On-balance sheet currency position */
  bankCurrencyRiskOnBalanceCurrencyPosition: number;
  /** BRC22: Trạng thái tiền tệ ngoại bảng | Off-balance sheet currency position */
  bankCurrencyRiskOffBalanceCurrencyPosition: number;
  /** BRC23: Trạng thái tiền tệ nội, ngoại bảng | On- and off-balance currency position */
  bankCurrencyRiskAllCurrencyPosition: number;
  /** BRL1: I - Tiền mặt vàng bạc, đá quý | Cash, gold, silver, gemstones */
  bankLiquidityRiskCashAndPreciousAssets: number;
  /** BRL2: II - Tiền gửi tại NHNN | State Bank’s deposits */
  bankLiquidityRiskDepositsAtCentralBank: number;
  /** BRL3: III - Tiền gửi và cho vay các TCTD khác(*) | Deposits and loans to other credit institutions (*) */
  bankLiquidityRiskDepositsAndLoansToOtherFIs: number;
  /** BRL4: IV - Chứng khoán kinh doanh(*) | Trading securities (*) */
  bankLiquidityRiskTradingSecurities: number;
  /** BRL5: V - Các công cụ tài chính phát sinh và các tài sản tài chính khác(*) | Derivative financial instruments and other financial assets (*) */
  bankLiquidityRiskDerivativesAndOtherFinancialAssets: number;
  /** BRL6: VI - Cho vay khách hàng(*) | Loans to customers (*) */
  bankLiquidityRiskLoansToCustomers: number;
  /** BRL7: VII - Chứng khoán đầu tư(*) | Investment securities (*) */
  bankLiquidityRiskInvestmentSecurities: number;
  /** BRL8: VIII - Góp vốn đầu tư dài hạn(*) | Long-term investments (*) */
  bankLiquidityRiskLongTermInvestments: number;
  /** BRL9: IX - Tài sản cố định và đầu tư bất động sản | Fixed assets and real estate investments */
  bankLiquidityRiskFixedAssetsAndRealEstate: number;
  /** BRL10: X - Tài sản có khác(*) | Other assets (*) */
  bankLiquidityRiskOtherAssets: number;
  /** BRL11: Tổng tài sản | Total assets */
  bankLiquidityRiskTotalAssets: number;
  /** BRL12: Các khoản nợ chính phủ và NHNN | Government and State Bank’s loans */
  bankLiquidityRiskLoansFromGovAndCentralBank: number;
  /** BRL13: Tiền gửi và vay các Tổ chức TD khác | Other credit institutions’ loans */
  bankLiquidityRiskLoansFromOtherFIs: number;
  /** BRL14: Tiền gửi của khách hàng | Customers’ deposits */
  bankLiquidityRiskCustomerDeposits: number;
  /** BRL15: Các công cụ tài chính phát sinh và các khoản nợ tài chính khác | Incurred financial instruments and other financial liabilities */
  bankLiquidityRiskDerivativeAndFinancialLiabilities: number;
  /** BRL16: Vốn tài trợ, ủy thác đầu tư, cho vay tổ chức tín dụng chịu rủi ro | Funding, entrusted investment, lending to credit institutions at risk */
  bankLiquidityRiskEntrustedLoansAtRisk: number;
  /** BRL17: Phát hành giấy tờ có giá | Issuance of valuable papers */
  bankLiquidityRiskIssuanceOfValuablePapers: number;
  /** BRL18: Các khoản nợ khác | Other debt */
  bankLiquidityRiskOtherDebts: number;
  /** BRL19: Tổng nợ phải trả | Total liabilities */
  bankLiquidityRiskTotalLiabilities: number;
  /** BRL20: Mức chênh thanh khoản ròng | Net liquidity gap */
  bankLiquidityRiskNetLiquidityGap: number;

  /** NOC1 - Tiền | Cash and cash equivalents */
  noteCompanyCashAndCashEquivalents: number;

  /** NOC2 - Tiền mặt | Cash on hand */
  noteCompanyCashOnHand: number;

  /** NOC3 - Tiền gửi Ngân hàng | Cash in banks */
  noteCompanyCashInBanks: number;

  /** NOC4 - Tiền đang chuyển | Cash in transit */
  noteCompanyCashInTransit: number;

  /** NOC5 - Tiền và tương đương tiền | Cash equivalents */
  noteCompanyCashEquivalents: number;

  /** NOC6 - Đầu tư tài chính ngắn hạn | Short-term financial investments */
  noteCompanyShortTermFinancialInvestments: number;

  /** NOC7 - Chứng khoán đầu tư ngắn hạn | Short-term securities investments */
  noteCompanyShortTermSecuritiesInvestments: number;

  /** NOC8 - Đầu tư ngắn hạn khác | Other short-term investments */
  noteCompanyOtherShortTermInvestments: number;

  /** NOC9 - Dự phòng giảm giá đầu tư ngắn hạn | Provision for diminution in value of short-term investments */
  noteCompanyProvisionForShortTermInvestmentLoss: number;

  /** NOC10 - Phải thu ngắn hạn khác | Other short-term receivables */
  noteCompanyOtherShortTermReceivables: number;

  /** NOC11 - Phải thu về cổ phần hóa | Receivables from equitization */
  noteCompanyReceivablesFromEquitization: number;

  /** NOC12 - Phải thu về cổ tức và lợi nhuận được chia | Dividend and profit receivables */
  noteCompanyDividendProfitReceivables: number;

  /** NOC13 - Phải thu người lao động | Receivables from employees */
  noteCompanyReceivablesFromEmployees: number;

  /** NOC14 - Phải thu khác | Other receivables */
  noteCompanyOtherReceivables: number;

  /** NOC15 - Hàng tồn kho | Inventories */
  noteCompanyInventories: number;

  /** NOC16 - Hàng mua đang đi đường | Goods in transit */
  noteCompanyGoodsInTransit: number;

  /** NOC17 - Nguyên liệu, vật liệu | Raw materials */
  noteCompanyRawMaterials: number;

  /** NOC18 - Công cụ, dụng cụ | Tools and supplies */
  noteCompanyToolsAndSupplies: number;

  /** NOC19 - Chi phí sản xuất kinh doanh dở dang | Work in progress */
  noteCompanyWorkInProgress: number;

  /** NOC20 - Thành phẩm | Finished goods */
  noteCompanyFinishedGoods: number;

  /** NOC21 - Hàng hóa | Merchandise inventories */
  noteCompanyMerchandiseInventories: number;

  /** NOC22 - Hàng gửi đi bán | Goods on consignment */
  noteCompanyGoodsOnConsignment: number;

  /** NOC23 - Hàng hóa kho bảo thuế | Goods in bonded warehouses */
  noteCompanyGoodsInBondedWarehouses: number;

  /** NOC24 - Hàng hóa bất động sản | Property inventory */
  noteCompanyPropertyInventory: number;

  /** NOC25 - Tài sản ngắn hạn khác | Other current assets */
  noteCompanyOtherCurrentAssets: number;

  /** NOC26 - Tạm ứng | Advances */
  noteCompanyAdvances: number;

  /** NOC27 - Tài sản thiếu chờ xử lý | Lack of assets awaiting handling */
  noteCompanyLackOfAssetsAwaitingHandling: number;

  /** NOC28 - Cầm cố, ký quỹ, ký cược ngắn hạn | Short-term deposits or collateral */
  noteCompanyShortTermDepositsCollateral: number;

  /** NOC29 - Khác | Other */
  noteCompanyOther: number;

  /** NOC30 - Phải thu dài hạn khác | Other long-term receivables */
  noteCompanyOtherLongTermReceivables: number;

  /** NOC31 - Ký quỹ, ký cược dài hạn | Long-term deposits or collateral */
  noteCompanyLongTermDepositsCollateral: number;

  /** NOC32 - Các khoản tiền nhận ủy thác | Sums received in trust */
  noteCompanySumsReceivedInTrust: number;

  /** NOC33 - Cho vay không có lãi | Interest-free loans */
  noteCompanyInterestFreeLoans: number;

  /** NOC34 - Phải thu dài hạn khác | Other long-term receivables */
  noteCompanyOtherLongTermReceivablesDuplicate: number;

  /** NOC35 - Nguyên giá tài sản cố định hữu hình | Tangible fixed assets - historical cost */
  noteCompanyTangibleFixedAssetsHistoricalCost: number;

  /** NOC36 - Nguyên giá đầu kỳ | Historical cost - opening balance */
  noteCompanyHistoricalCostOpeningBalance: number;

  /** NOC37 - Tăng trong kỳ | Additions during the period */
  noteCompanyAdditionsDuringPeriod: number;

  /** NOC38 - Giảm trong kỳ | Decreases during the period */
  noteCompanyDecreasesDuringPeriod: number;

  /** NOC39 - Hao mòn tài sản cố định hữu hình | Tangible fixed assets - accumulated depreciation */
  noteCompanyTangibleFixedAssetsAccumulatedDepreciation: number;

  /** NOC40 - Hao mòn đầu kỳ | Accumulated depreciation - opening balance */
  noteCompanyAccumulatedDepreciationOpeningBalance: number;

  /** NOC41 - Tăng hao mòn trong kỳ | Depreciation increase during the period */
  noteCompanyDepreciationIncreaseDuringPeriod: number;

  /** NOC42 - Giảm hao mòn trong kỳ | Depreciation decrease during the period */
  noteCompanyDepreciationDecreaseDuringPeriod: number;

  /** NOC43 - Nguyên giá tài sản cố định thuê tài chính | Finance lease assets - historical cost */
  noteCompanyFinanceLeaseAssetsHistoricalCost: number;

  /** NOC44 - Nguyên giá đầu kỳ tài sản thuê tài chính | Finance lease assets - opening balance */
  noteCompanyFinanceLeaseAssetsOpeningBalance: number;

  /** NOC45 - Tăng tài sản thuê tài chính trong kỳ | Finance lease assets - additions during period */
  noteCompanyFinanceLeaseAssetsAdditionsDuringPeriod: number;

  /** NOC46 - Giảm tài sản thuê tài chính trong kỳ | Finance lease assets - decreases during period */
  noteCompanyFinanceLeaseAssetsDecreasesDuringPeriod: number;

  /** NOC47 - Hao mòn tài sản thuê tài chính | Finance lease assets - accumulated depreciation */
  noteCompanyFinanceLeaseAssetsAccumulatedDepreciation: number;

  /** NOC67: Vay dài hạn đến hạn trả | Long-term liabilities falling due */
  noteCompanyLongTermLiabilitiesDue: number;

  /** NOC68: Các khoản phải trả về Thuế | Taxes payable */
  noteCompanyTaxesPayable: number;

  /** NOC69: Thuế GTGT | Value added tax */
  noteCompanyValueAddedTax: number;

  /** NOC70: Thuế TTĐB | Special Sales Tax (SST) */
  noteCompanySpecialSalesTax70: number;

  /** NOC71: Thuế XNK | Import-Export tax */
  noteCompanyImportExportTax: number;

  /** NOC72: Thuế TNDN | Corporate income tax */
  noteCompanyCorporateIncomeTax: number;

  /** NOC73: Thuế TNCN | Personal income tax */
  noteCompanyPersonalIncomeTax: number;

  /** NOC74: Thuế Tài nguyên | Natural resources tax */
  noteCompanyNaturalResourcesTax: number;

  /** NOC75: Thuế nhà đất và tiền thuê đất | Housing and land tax, and land rental */
  noteCompanyLandAndHousingTax: number;

  /** NOC76: Các loại thuế khác | Other taxes */
  noteCompanyOtherTaxes: number;

  /** NOC77: Các khoản phí, lệ phí khác | Other fees, charges */
  noteCompanyOtherFeesAndCharges: number;

  /** NOC78: Chi phí phải trả | Expenses payable */
  noteCompanyAccruedExpenses: number;

  /** NOC79: Trích trước chi phí lương nghỉ phép | Advances on salary during leave */
  noteCompanyAdvanceSalaryDuringLeave: number;

  /** NOC80: Chi phí sửa chữa lớn TSCĐ | Major repair expenses for fixed assets */
  noteCompanyMajorRepairFixedAssets: number;

  /** NOC81: Chi phí trong thời gian ngừng kinh doanh | Expenses during business suspension */
  noteCompanyBusinessSuspensionExpenses: number;

  /** NOC82: Khác | Others */
  noteCompanyOtherPayableExpenses: number;

  /** NOC83: Phải trả phải nộp khác | Other payables */
  noteCompanyOtherPayables: number;

  /** NOC84: Tài sản thừa chờ xử lý | Surplus assets awaiting handling */
  noteCompanySurplusAssetsAwaitingHandling: number;

  /** NOC85: Kinh phí công đoàn | Trade union fees */
  noteCompanyTradeUnionFees: number;

  /** NOC86: BHXH | Social insurance */
  noteCompanySocialInsurance: number;

  /** NOC87: BHYT | Health insurance */
  noteCompanyHealthInsurance: number;

  /** NOC88: Bảo hiểm thất nghiệp | Unemployment insurance */
  noteCompanyUnemploymentInsurance: number;

  /** NOC89: Phải trả về cổ phần hóa | Payables regarding equitization */
  noteCompanyEquitizationPayables: number;

  /** NOC90: Nhận ký quỹ, ký cược ngắn hạn | Receipt of short-term deposits or collateral */
  noteCompanyReceivedShortTermDepositsCollateral: number;

  /** NOC91: Doanh thu chưa thực hiện | Unrealized revenue */
  noteCompanyUnrealizedRevenue: number;

  /** NOC92: Khác | Others */
  noteCompanyOtherLiabilities: number;

  /** NOC93: Vay dài hạn | Long-term loans */
  noteCompanyLongTermLoans: number;

  /** NOC94: Vay ngân hàng | Bank loans */
  noteCompanyBankLoans: number;

  /** NOC95: Vay đối tượng khác | Loans from other lenders */
  noteCompanyLoansFromOtherLenders: number;

  /** NOC96: Trái phiếu phát hành | Issued bonds */
  noteCompanyIssuedBonds: number;

  /** NOC97: Thuê tài chính | Finance lease liabilities */
  noteCompanyFinanceLeaseLiabilities: number;

  /** NOC98: Nợ dài hạn khác | Other long-term liabilities */
  noteCompanyOtherLongTermLiabilities: number;

  /** NOC99: Vốn chủ sở hữu | Owner's equity */
  noteCompanyOwnersEquity: number;

  /** NOC100: Vốn góp của nhà nước | Capital contributed by the State */
  noteCompanyCapitalContributedByState: number;

  /** NOC101: Vốn đầu tư của đối tượng khác | Capital contributed by other entities */
  noteCompanyCapitalContributedByOthers: number;

  /** NOC102: Doanh thu | Net sales */
  noteCompanyNetSales: number;

  /** NOC103: Doanh thu bán hàng | Sales of merchandise goods */
  noteCompanySalesOfMerchandise: number;

  /** NOC104: Doanh thu cung cấp dịch vụ | Revenue from service provision */
  noteCompanyServiceRevenue: number;

  /** NOC105: Doanh thu hợp đồng xây dựng | Revenue from construction contracts */
  noteCompanyConstructionContractRevenue: number;

  // NOC106: Giảm trừ doanh thu
  noteCompanySalesOfMerchandiseGoods: number;

  // NOC107: Chiết khấu thương mại
  noteCompanyTradeDiscounts: number;

  // NOC108: Giảm giá hàng bán
  noteCompanyReductionsInPricesOfGoodsSold: number;

  // NOC109: Hàng bán bị trả lại
  noteCompanySalesReturns: number;

  // NOC110: Thuế GTGT phải nộp
  noteCompanyVatPayable: number;

  // NOC111: Thuế tiêu thụ đặc biệt
  noteCompanySpecialSalesTax111: number;

  // NOC112: Thuế xuất khẩu
  noteCompanyExportDuty: number;

  // NOC113: Giá vốn
  noteCompanyCostOfSales: number;

  // NOC114: Giá vốn hàng hóa đã bán
  noteCompanyMerchandiseGoodsSold: number;

  // NOC115: Giá vốn thành phẩm đã bán
  noteCompanyFinishedGoodsSold: number;

  // NOC116: Giá vốn của dịch vụ cung cấp
  noteCompanyCostOfOtherServicesProvided: number;

  // NOC117: Giá trị còn lại, chi phí nhượng bán, thanh lý BĐS đầu tư đã bán
  noteCompanyRealEstateServicesProvided: number;

  // NOC118: Chi phí kinh doanh BĐS đầu tư
  noteCompanyTradeExpensesOfInvestedProperties: number;

  // NOC119: Hao hụt, mất mát hàng tồn kho
  noteCompanyInventoriesDeficiencies: number;

  // NOC120: Các khoản chi phí vượt mức bình thường
  noteCompanyExpensesInExcessOfNormalValue: number;

  // NOC121: Dự phòng
  noteCompanyProvisionForDeclineInInventoryValue: number;

  // NOC122: Doanh thu tài chính
  noteCompanyFinancialIncome: number;

  // NOC123: Lãi tiền gửi, tiền cho vay
  noteCompanyInterestIncomeOnLoansAndDeposits: number;

  // NOC124: Lãi đầu tư trái phiếu, kỳ phiếu, tín phiếu
  noteCompanyGainOnDisposalOfSecurities: number;

  // NOC125: Cổ tức, lợi nhuận được chia
  noteCompanyDividendsIncome: number;

  // NOC126: Lãi bán ngoại tệ
  noteCompanyGainsFromSaleOfForeignCurrency: number;

  // NOC127: Lãi chênh lệch tỷ giá đã thực hiện
  noteCompanyRealizedForeignExchangeGains: number;

  // NOC128: Lãi chênh lệch tỷ giá chưa thực hiện
  noteCompanyUnrealizedForeignExchangeGains: number;

  // NOC129: Lãi bán hàng trả chậm
  noteCompanyGainsFromSaleOfDeferredPaymentsGoods: number;

  // NOC130: Doanh thu hoạt động tài chính khác
  noteCompanyOtherFinancialIncome: number;

  // NOC131: Chi phí tài chính
  noteCompanyFinancialExpenses: number;

  // NOC132: Lãi tiền vay
  noteCompanyInterestExpensesOnLoans: number;

  // NOC133: Chiết khấu thanh toán, lãi bán hàng trả chậm
  noteCompanyPaymentsDiscountAndGainsFromSaleOfDeferredPaymentsGoods: number;

  // NOC134: Lỗ do thanh lý các khoản đầu tư ngắn hạn, dài hạn
  noteCompanyLossFromDisposalOfShortTermOrLongTermInvestments: number;

  // NOC135: Lỗ bán ngoại tệ
  noteCompanyLossFromSaleOfForeignCurrency: number;

  // NOC136: Lỗ chênh lệch tỷ giá đã thực hiện
  noteCompanyRealizedForeignExchangeLosses: number;

  // NOC137: Lỗ chênh lệch tỷ giá chưa thực hiện
  noteCompanyUnrealizedForeignExchangeLosses: number;

  // NOC138: Dự phòng giảm giá các khoản đầu tư ngắn hạn, dài hạn
  noteCompanyProvisionForReductionInPriceOfInvestments: number;

  // NOC139: Chi phí tài chính khác
  noteCompanyOtherFinancialExpenses: number;

  // NOC140: Chi phí sản xuất theo yếu tố
  noteCompanyCostOfGoodsManufacturedByFactors: number;

  // NOC141: Chi phí nguyên liệu, vật liệu
  noteCompanyRawMaterialsCosts: number;

  // NOC142: Chi phí nhân công
  noteCompanyLabourCosts: number;

  // NOC143: Chi phí khấu hao tài sản cố định
  noteCompanyDepreciationExpense: number;

  // NOC144: Chi phí dịch vụ mua ngoài
  noteCompanyOutsideServiceExpenses: number;

  // NOC145: Chi phí khác bằng tiền
  noteCompanyOtherCashExpenses: number;

  // NOC146: Những thông tin khác
  noteCompanyOtherInformation: string;

  // NOC147: Giá gốc Lợi thế thương mại
  noteCompanyGoodwillHistoricalCost: number;

  // NOC148: Số dư đầu kỳ
  noteCompanyOpeningBalance: number;

  // NOC149: Tăng trong kỳ
  noteCompanyAdditions: number;

  // NOC150: Giảm trong kỳ
  noteCompanyDecreases: number;

  // NOC151: Phân bổ Lũy kế
  noteCompanyGoodwillAccumulatedDepreciation: number;

  // NOC152: Số dư đầu kỳ
  noteCompanyOpeningBalanceForInvestment: number;

  // NOC153: Tăng trong kỳ
  noteCompanyAdditionsForInvestment: number;

  // NOC154: Giảm trong kỳ
  noteCompanyDecreasesForInvestment: number;

  // NOC155: Lãi từ bán, thanh lý các khoản đầu tư
  noteCompanyGainFromDisposalOfInvestments: number;

  // NOC156: Đầu tư nắm giữ đến ngày đáo hạn
  noteCompanyHeldToMaturityInvestment: number;

  // NOC157: Ngắn hạn
  noteCompanyShortTermInvestments: number;

  // NOC158: Dài hạn
  noteCompanyLongTermInvestments: number;

  // NOC159: Nguyên giá BĐS Đầu tư
  noteCompanyInvestmentPropertiesHistoricalCost: number;

  // NOC160: Đầu kỳ
  noteCompanyOpeningBalanceForInvestmentProperties: number;

  // NOC161: Tăng trong kỳ
  noteCompanyAdditionsForInvestmentProperties: number;

  // NOC162: Giảm trong kỳ
  noteCompanyDecreasesForInvestmentProperties: number;

  // NOC163: Hao mòn BĐS Đầu tư
  noteCompanyInvestmentPropertiesAccumulatedDepreciation: number;

  // NOC164: Đầu kỳ
  noteCompanyOpeningBalanceForRealEstate: number;

  // NOC165: Tăng trong kỳ
  noteCompanyAdditionsForRealEstate: number;

  // NOC166: Giảm trong kỳ
  noteCompanyDecreasesForRealEstate: number;
}
export const MapToBaseFinancialStatement: {
  [key: string]: keyof IBaseFinancialStatement;
} = {
  BSA1: "balanceSheetTotalCurrentAssets",
  BSA2: "balanceSheetCashAndCashEquivalents",
  BSA3: "balanceSheetCash",
  BSA4: "balanceSheetCashEquivalents",
  BSA5: "balanceSheetShortTermInvestments",
  BSA6: "balanceSheetTradingSecurities",
  BSB108: "balanceSheetHeldToMaturityInvestmentsST",
  BSA8: "balanceSheetAccountsReceivable",
  BSA9: "balanceSheetTradeReceivables",
  BSA10: "balanceSheetPrepaymentsToSuppliersShortTerm",
  BSA11: "balanceSheetIntercompanyReceivablesShortTerm",
  BSA12: "balanceSheetConstructionReceivablesInProgress",
  BSA13: "balanceSheetOtherReceivablesST",
  BSA14: "balanceSheetProvisionDoubtfulDebtsST",
  BSI141: "balanceSheetShortageOfCurrentAssetsPendingResolution",
  BSA15: "balanceSheetInventoriesNet",
  BSA16: "balanceSheetInventories",
  BSA17: "balanceSheetProvisionInventoryWriteDown",
  BSA18: "balanceSheetPrepaymentsST",
  BSA19: "balanceSheetOtherCurrentAssets",
  BSA20: "balanceSheetPrepaidExpensesST",
  BSA21: "balanceSheetVatToBeClaimed",
  BSA160: "balanceSheetOtherTaxesReceivable",
  BSA22: "balanceSheetGovBondsPurchasedForResaleST",
  BSA23: "balanceSheetAdditionalOtherCurrentAssets",
  BSA24: "balanceSheetTotalLongTermAssets",
  BSA25: "balanceSheetLongTermTradeReceivables",
  BSA161: "balanceSheetLongTermReceivablesFromCustomers",
  BSS134: "balanceSheetPrepaymentsToSuppliersLT",
  BSA26: "balanceSheetPaidInCapitalSubsidiaries",
  BSA162: "balanceSheetIntercompanyReceivablesLT",
  BSA27: "balanceSheetLongTermLoanReceivables",
  BSA28: "balanceSheetOtherReceivablesLT",
  BSA29: "balanceSheetProvisionDoubtfulDebtsLT",
  BSA30: "balanceSheetTotalFixedAssets",
  BSA31: "balanceSheetTangibleFixedAssets",
  BSA32: "balanceSheetTangibleAssetsCost",
  BSA33: "balanceSheetAccumulatedDepreciationTangible",
  BSA34: "balanceSheetFinanceLeaseAssets",
  BSA35: "balanceSheetFinanceLeaseCost",
  BSA36: "balanceSheetAccumulatedDepreciationFinanceLeases",
  BSA37: "balanceSheetIntangibleFixedAssets",
  BSA38: "balanceSheetIntangibleAssetsCost",
  BSA39: "balanceSheetAccumulatedDepreciationIntangible",
  BSA40: "balanceSheetConstructionInProgressPre2015",
  BSA41: "balanceSheetInvestmentPropertiesNetValue",
  BSA42: "balanceSheetInvestmentPropertiesCost",
  BSA163: "balanceSheetAccumulatedDepreciationInvestmentProperties",
  BSA164: "balanceSheetLongTermWorkInProgress",
  BSA188: "balanceSheetLongTermWorkInProgressCost",
  BSA43: "balanceSheetConstructionInProgress",
  BSA44: "balanceSheetTotalLongTermInvestments",
  BSA45: "balanceSheetInvestmentsSubsidiaries",
  BSA46: "balanceSheetInvestmentsAssociates",
  BSA47: "balanceSheetOtherLongTermInvestments",
  BSA165: "balanceSheetProvisionLongTermInvestments",
  BSA48: "balanceSheetHeldToMaturityInvestmentLT",
  BSA49: "balanceSheetGoodwillPre2015",
  BSA50: "balanceSheetOtherLongTermAssets",
  BSA51: "balanceSheetLongTermPrepayments",
  BSA166: "balanceSheetDeferredTaxAssets",
  BSA52: "balanceSheetLongTermEquipmentAndSpareParts",
  BSA209: "balanceSheetAdditionalOtherLongTermAssets",
  BSA53: "balanceSheetGoodwill",
  BSA54: "balanceSheetTotalAssets",
  ISA1: "incomeStatementNetRevenueSalesServices",
  ISA2: "incomeStatementRevenueDeductions",
  ISA3: "incomeStatementNetRevenueAfterDeductions",
  ISA4: "incomeStatementCostOfGoodsSold",
  ISA5: "incomeStatementGrossProfitSalesServices",
  ISA6: "incomeStatementFinancialIncome",
  ISA7: "incomeStatementFinancialExpenses",
  ISA8: "incomeStatementInterestExpenses",
  ISA9: "incomeStatementSellingExpenses",
  ISA10: "incomeStatementAdminExpenses",
  ISA11: "incomeStatementNetProfitOperatingActivities",
  ISA12: "incomeStatementOtherIncome",
  ISA13: "incomeStatementOtherExpenses",
  ISA14: "incomeStatementOtherProfits",
  ISA15: "incomeStatementTotalProfitBeforeTax",
  ISA16: "incomeStatementCorporateIncomeTax",
  ISA17: "incomeStatementNetProfitAfterTax",
  ISA18: "incomeStatementParentCompanyProfitAfterTax",
  ISA19: "incomeStatementMinorityInterestAfterTax",
  ISA20: "incomeStatementBasicEarningsPerShare",
  ISA21: "incomeStatementDilutedEarningsPerShare",
  ISA22: "incomeStatementOtherFinancialIncome",
  ISA23: "incomeStatementOtherFinancialExpenses",
  ISA24: "incomeStatementOtherTaxExpenses",
  CFA1: "cashFlowProfitLossBeforeTax",
  CFA2: "cashFlowDepreciationAndAmortisation",
  CFA3: "cashFlowProvisions",
  CFA104: "cashFlowOtherAdjustments",
  CFA4: "cashFlowUnrealisedForexGainLoss",
  CFA5: "cashFlowProfitLossFromLiquidatingFixedAssets",
  CFA6: "cashFlowProfitLossFromInvestingActivities",
  CFA7: "cashFlowInterestExpense",
  CFA8: "cashFlowInterestIncomeAndDividend",
  CFA9: "cashFlowOperatingProfitLossBeforeWCChanges",
  CFA105: "cashFlowChangeInTradingSecurities",
  CFA10: "cashFlowChangeInReceivables",
  CFA11: "cashFlowChangeInInventories",
  CFA12: "cashFlowChangeInPayables",
  CFA13: "cashFlowChangeInPrepaidExpenses",
  CFA14: "cashFlowInterestPaid",
  CFA15: "cashFlowBusinessIncomeTaxPaid",
  CFA16: "cashFlowOtherReceiptsFromOperatingActivities",
  CFA17: "cashFlowOtherPaymentsOnOperatingActivities",
  CFA18: "cashFlowNetCashFromOperatingActivities",
  CFA19: "cashFlowPurchasesOfFixedAssetsAndOtherLongTermAssets",
  CFA20: "cashFlowProceedsFromDisposalOfFixedAssets",
  CFA21: "cashFlowLoansGrantedPurchasesDebtInstruments",
  CFA22: "cashFlowCollectionOfLoansProceedsFromDebtInstruments",
  CFA23: "cashFlowInvestmentsInOtherEntities",
  CFA24: "cashFlowProceedsFromDivestmentInOtherEntities",
  CFA25: "cashFlowDividendsAndInterestReceived",
  CFA26: "cashFlowNetCashFromInvestingActivities",
  CFA27: "cashFlowProceedsFromIssueOfShares",
  CFA28: "cashFlowPaymentsForShareReturnsAndRepurchases",
  CFA29: "cashFlowProceedsFromBorrowings",
  CFA30: "cashFlowRepaymentOfBorrowings",
  CFA31: "cashFlowFinanceLeasePrincipalPayments",
  CFA32: "cashFlowDividendsPaid",
  CFA33: "cashFlowInterestsDividendsProfitsReceived",
  CFA34: "cashFlowNetCashFromFinancingActivities",
  CFA35: "cashFlowNetIncreaseInCashAndCashEquivalents",
  CFA36: "cashFlowCashAndCashEquivalentsAtBeginningOfPeriod",
  CFA37: "cashFlowEffectOfForeignExchangeDifferences",
  CFA38: "cashFlowCashAndCashEquivalentsAtEndOfPeriod",
  CFA39: "cashFlowGainsFromSalesServicesAndOtherGainsDirect",
  CFA40: "cashFlowPaymentsToSuppliersDirect",
  CFA41: "cashFlowPaymentsToEmployeesDirect",
  CFA42: "cashFlowLoanInterestsPaidDirect",
  CFA43: "cashFlowCorporateIncomeTaxPaidDirect",
  CFA44: "cashFlowOtherGainsDirect",
  CFA45: "cashFlowOtherDisbursementsDirect",
  CFA103: "cashFlowAmortisationOfGoodwill",
  BRC1: "bankCurrencyRiskCashAndPreciousAssets",
  BRC2: "bankCurrencyRiskDepositsAtCentralBank",
  BRC3: "bankCurrencyRiskDepositsLoansToOtherFIs",
  BRC4: "bankCurrencyRiskTradingSecurities",
  BRC5: "bankCurrencyRiskDerivativesAndOtherFinancialAssets",
  BRC6: "bankCurrencyRiskLoansToCustomers",
  BRC7: "bankCurrencyRiskInvestmentSecurities",
  BRC8: "bankCurrencyRiskLongTermInvestments",
  BRC9: "bankCurrencyRiskFixedAssetsAndRealEstate",
  BRC10: "bankCurrencyRiskOtherAssets",
  BRC11: "bankCurrencyRiskTotalAssets",
  BRC12: "bankCurrencyRiskGovAndCentralBankLoans",
  BRC13: "bankCurrencyRiskBorrowingsFromOtherFIs",
  BRC14: "bankCurrencyRiskCustomerDeposits",
  BRC15: "bankCurrencyRiskDerivativeLiabilitiesAndOtherDebts",
  BRC16: "bankCurrencyRiskFundingEntrustedInvestments",
  BRC17: "bankCurrencyRiskIssuanceOfSecurities",
  BRC18: "bankCurrencyRiskOtherDebts",
  BRC19: "bankCurrencyRiskCapitalAndFunds",
  BRC20: "bankCurrencyRiskTotalLiabilitiesAndEquity",
  BRC21: "bankCurrencyRiskOnBalanceCurrencyPosition",
  BRC22: "bankCurrencyRiskOffBalanceCurrencyPosition",
  BRC23: "bankCurrencyRiskAllCurrencyPosition",
  BRL1: "bankLiquidityRiskCashAndPreciousAssets",
  BRL2: "bankLiquidityRiskDepositsAtCentralBank",
  BRL3: "bankLiquidityRiskDepositsAndLoansToOtherFIs",
  BRL4: "bankLiquidityRiskTradingSecurities",
  BRL5: "bankLiquidityRiskDerivativesAndOtherFinancialAssets",
  BRL6: "bankLiquidityRiskLoansToCustomers",
  BRL7: "bankLiquidityRiskInvestmentSecurities",
  BRL8: "bankLiquidityRiskLongTermInvestments",
  BRL9: "bankLiquidityRiskFixedAssetsAndRealEstate",
  BRL10: "bankLiquidityRiskOtherAssets",
  BRL11: "bankLiquidityRiskTotalAssets",
  BRL12: "bankLiquidityRiskLoansFromGovAndCentralBank",
  BRL13: "bankLiquidityRiskLoansFromOtherFIs",
  BRL14: "bankLiquidityRiskCustomerDeposits",
  BRL15: "bankLiquidityRiskDerivativeAndFinancialLiabilities",
  BRL16: "bankLiquidityRiskEntrustedLoansAtRisk",
  BRL17: "bankLiquidityRiskIssuanceOfValuablePapers",
  BRL18: "bankLiquidityRiskOtherDebts",
  BRL19: "bankLiquidityRiskTotalLiabilities",
  BRL20: "bankLiquidityRiskNetLiquidityGap",
  NOC1: "noteCompanyCashAndCashEquivalents",
  NOC2: "noteCompanyCashOnHand",
  NOC3: "noteCompanyCashInBanks",
  NOC4: "noteCompanyCashInTransit",
  NOC5: "noteCompanyCashEquivalents",
  NOC6: "noteCompanyShortTermFinancialInvestments",
  NOC7: "noteCompanyShortTermSecuritiesInvestments",
  NOC8: "noteCompanyOtherShortTermInvestments",
  NOC9: "noteCompanyProvisionForShortTermInvestmentLoss",
  NOC10: "noteCompanyOtherShortTermReceivables",
  NOC11: "noteCompanyReceivablesFromEquitization",
  NOC12: "noteCompanyDividendProfitReceivables",
  NOC13: "noteCompanyReceivablesFromEmployees",
  NOC14: "noteCompanyOtherReceivables",
  NOC15: "noteCompanyInventories",
  NOC16: "noteCompanyGoodsInTransit",
  NOC17: "noteCompanyRawMaterials",
  NOC18: "noteCompanyToolsAndSupplies",
  NOC19: "noteCompanyWorkInProgress",
  NOC20: "noteCompanyFinishedGoods",
  NOC21: "noteCompanyMerchandiseInventories",
  NOC22: "noteCompanyGoodsOnConsignment",
  NOC23: "noteCompanyGoodsInBondedWarehouses",
  NOC24: "noteCompanyPropertyInventory",
  NOC25: "noteCompanyOtherCurrentAssets",
  NOC26: "noteCompanyAdvances",
  NOC27: "noteCompanyLackOfAssetsAwaitingHandling",
  NOC28: "noteCompanyShortTermDepositsCollateral",
  NOC29: "noteCompanyOther",
  NOC30: "noteCompanyOtherLongTermReceivables",
  NOC31: "noteCompanyLongTermDepositsCollateral",
  NOC32: "noteCompanySumsReceivedInTrust",
  NOC33: "noteCompanyInterestFreeLoans",
  NOC34: "noteCompanyOtherLongTermReceivablesDuplicate",
  NOC35: "noteCompanyTangibleFixedAssetsHistoricalCost",
  NOC36: "noteCompanyHistoricalCostOpeningBalance",
  NOC37: "noteCompanyAdditionsDuringPeriod",
  NOC38: "noteCompanyDecreasesDuringPeriod",
  NOC39: "noteCompanyTangibleFixedAssetsAccumulatedDepreciation",
  NOC40: "noteCompanyAccumulatedDepreciationOpeningBalance",
  NOC41: "noteCompanyDepreciationIncreaseDuringPeriod",
  NOC42: "noteCompanyDepreciationDecreaseDuringPeriod",
  NOC43: "noteCompanyFinanceLeaseAssetsHistoricalCost",
  NOC44: "noteCompanyFinanceLeaseAssetsOpeningBalance",
  NOC45: "noteCompanyFinanceLeaseAssetsAdditionsDuringPeriod",
  NOC46: "noteCompanyFinanceLeaseAssetsDecreasesDuringPeriod",
  NOC47: "noteCompanyFinanceLeaseAssetsAccumulatedDepreciation",
  NOC67: "noteCompanyLongTermLiabilitiesDue",
  NOC68: "noteCompanyTaxesPayable",
  NOC69: "noteCompanyValueAddedTax",
  NOC70: "noteCompanySpecialSalesTax70",
  NOC71: "noteCompanyImportExportTax",
  NOC72: "noteCompanyCorporateIncomeTax",
  NOC73: "noteCompanyPersonalIncomeTax",
  NOC74: "noteCompanyNaturalResourcesTax",
  NOC75: "noteCompanyLandAndHousingTax",
  NOC76: "noteCompanyOtherTaxes",
  NOC77: "noteCompanyOtherFeesAndCharges",
  NOC78: "noteCompanyAccruedExpenses",
  NOC79: "noteCompanyAdvanceSalaryDuringLeave",
  NOC80: "noteCompanyMajorRepairFixedAssets",
  NOC81: "noteCompanyBusinessSuspensionExpenses",
  NOC82: "noteCompanyOtherPayableExpenses",
  NOC83: "noteCompanyOtherPayables",
  NOC84: "noteCompanySurplusAssetsAwaitingHandling",
  NOC85: "noteCompanyTradeUnionFees",
  NOC86: "noteCompanySocialInsurance",
  NOC87: "noteCompanyHealthInsurance",
  NOC88: "noteCompanyUnemploymentInsurance",
  NOC89: "noteCompanyEquitizationPayables",
  NOC90: "noteCompanyReceivedShortTermDepositsCollateral",
  NOC91: "noteCompanyUnrealizedRevenue",
  NOC92: "noteCompanyOtherLiabilities",
  NOC93: "noteCompanyLongTermLoans",
  NOC94: "noteCompanyBankLoans",
  NOC95: "noteCompanyLoansFromOtherLenders",
  NOC96: "noteCompanyIssuedBonds",
  NOC97: "noteCompanyFinanceLeaseLiabilities",
  NOC98: "noteCompanyOtherLongTermLiabilities",
  NOC99: "noteCompanyOwnersEquity",
  NOC100: "noteCompanyCapitalContributedByState",
  NOC101: "noteCompanyCapitalContributedByOthers",
  NOC102: "noteCompanyNetSales",
  NOC103: "noteCompanySalesOfMerchandise",
  NOC104: "noteCompanyServiceRevenue",
  NOC105: "noteCompanyConstructionContractRevenue",
};
