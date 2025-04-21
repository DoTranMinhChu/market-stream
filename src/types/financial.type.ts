export interface IFinancial {
  /**
   * Mã chứng khoán
   * Raw field: ticker
   */
  stockSymbol: string;

  /**
   * Năm báo cáo
   * Raw field: yearReport
   */
  reportYear: number;

  /**
   * Kỳ báo cáo (ví dụ: quý, năm)
   * Raw field: lengthReport
   */
  reportPeriod: number;

  /**
   * Ngày cập nhật
   * Raw field: updateDate
   */
  updateDate: number;

  /**
   * Doanh thu
   * Raw field: revenue
   */
  revenue: number;

  /**
   * Tăng trưởng doanh thu
   * Raw field: revenueGrowth
   */
  revenueGrowth: number;

  /**
   * Lợi nhuận ròng
   * Raw field: netProfit
   */
  netIncome: number;

  /**
   * Tăng trưởng lợi nhuận ròng
   * Raw field: netProfitGrowth
   */
  netIncomeGrowth: number;

  /**
   * Tỷ suất EBIT (Lợi nhuận trước lãi vay và thuế / Doanh thu)
   * Raw field: ebitMargin
   */
  ebitMargin: number;

  /**
   * Tỷ suất sinh lời trên vốn chủ sở hữu (Return on Equity)
   * Raw field: roe
   */
  equityReturn: number;

  /**
   * Tỷ suất sinh lời trên vốn đầu tư (Return on Invested Capital)
   * Raw field: roic
   */
  capitalReturn: number;

  /**
   * Tỷ suất sinh lời trên tài sản (Return on Assets)
   * Raw field: roa
   */
  assetReturn: number;

  /**
   * Hệ số giá trên thu nhập (Price to Earnings Ratio)
   * Raw field: pe
   */
  peRatio: number;

  /**
   * Hệ số giá trên giá trị sổ sách (Price to Book Ratio)
   * Raw field: pb
   */
  pbRatio: number;

  /**
   * Thu nhập trên mỗi cổ phiếu (Earnings Per Share)
   * Raw field: eps
   */
  earningsPerShare: number;

  /**
   * Tỷ số thanh toán hiện hành
   * Raw field: currentRatio
   */
  currentRatio: number;

  /**
   * Tỷ số tiền mặt
   * Raw field: cashRatio
   */
  cashRatio: number;

  /**
   * Tỷ số thanh toán nhanh
   * Raw field: quickRatio
   */
  quickRatio: number;

  /**
   * Tỷ số khả năng thanh toán lãi vay
   * Raw field: interestCoverage
   */
  interestCoverage: number;

  /**
   * Tỷ số nợ trên vốn chủ sở hữu (Debt to Equity Ratio)
   * Raw field: ae
   */
  debtToEquity: number;

  /**
   * Tỷ suất lợi nhuận ròng
   * Raw field: netProfitMargin
   */
  netMargin: number;

  /**
   * Tỷ suất lợi nhuận gộp
   * Raw field: grossMargin
   */
  grossMargin: number;

  /**
   * Giá trị doanh nghiệp (Enterprise Value)
   * Raw field: ev
   */
  enterpriseValue: number;

  /**
   * Số lượng cổ phiếu phát hành
   * Raw field: issueShare
   */
  sharesIssued: number;

  /**
   * Hệ số giá trên doanh thu (Price to Sales Ratio)
   * Raw field: ps
   */
  psRatio: number;

  /**
   * Hệ số giá trên lưu chuyển tiền tệ (Price to Cash Flow Ratio)
   * Raw field: pcf
   */
  pcfRatio: number;

  /**
   * Giá trị sổ sách trên mỗi cổ phiếu (Book Value Per Share)
   * Raw field: bvps
   */
  bookValuePerShare: number;

  /**
   * Hệ số EV/EBITDA
   * Raw field: evPerEbitda
   */
  evToEbitda: number;

  /**
   * Tỷ lệ quay vòng tài sản (Asset Turnover)
   * Raw field: at
   */
  assetTurnover: number;

  /**
   * Tỷ lệ quay vòng tài sản cố định (Fixed Asset Turnover)
   * Raw field: fat
   */
  fixedAssetTurnover: number;

  /**
   * Kỳ thu tiền bình quân (Average Collection Period)
   * Raw field: acp
   */
  collectionPeriod: number;

  /**
   * Số ngày tồn kho (Days Sales Outstanding)
   * Raw field: dso
   */
  daysSalesOutstanding: number;

  /**
   * Số ngày phải trả (Days Payable Outstanding)
   * Raw field: dpo
   */
  daysPayableOutstanding: number;

  /**
   * Chu kỳ tiền mặt (Cash Conversion Cycle)
   * Raw field: ccc
   */
  cashCycle: number;

  /**
   * Tỷ số nợ trên vốn chủ sở hữu (Debt to Equity Ratio)
   * Raw field: de
   */
  debtEquityRatio: number;

  /**
   * Tỷ số đòn bẩy (Leverage Ratio)
   * Raw field: le
   */
  leverage: number;

  /**
   * Lợi nhuận trước lãi vay, thuế, khấu hao và Amortization
   * Raw field: ebitda
   */
  ebitda: number;

  /**
   * Lợi nhuận trước lãi vay và thuế (Earnings Before Interest and Taxes)
   * Raw field: ebit
   */
  ebit: number;

  /**
   * Cổ tức
   * Raw field: dividend
   */
  dividend: number;

  /**
   * Thu nhập trên mỗi cổ phiếu trong 12 tháng gần nhất
   * Raw field: epsTTM
   */
  trailingEps: number;

  /**
   * Vốn điều lệ
   * Raw field: charterCapital
   */
  charterCapital: number;

  /**
   * Tổng tài sản
   * Raw field: BSA1
   */
  totalAssets: number;

  /**
   * Tiền và tương đương tiền
   * Raw field: BSA2
   */
  cashEquivalents: number;

  /**
   * Tài sản lưu động
   * Raw field: BSA5
   */
  currentAssets: number;

  /**
   * Các khoản phải thu
   * Raw field: BSA8
   */
  receivables: number;

  /**
   * Hàng tồn kho
   * Raw field: BSA10
   */
  inventory: number;

  /**
   * Chi phí trả trước
   * Raw field: BSA15
   */
  prepaidCosts: number;

  /**
   * Tài sản cố định (Nhà xưởng, thiết bị)
   * Raw field: BSA16
   */
  fixedAssets: number;

  /**
   * Xây dựng dở dang
   * Raw field: BSA18
   */
  constructionInProgress: number;

  /**
   * Tổng nợ phải trả
   * Raw field: BSA22
   */
  totalLiabilities: number;

  /**
   * Nợ ngắn hạn
   * Raw field: BSA23
   */
  shortTermDebt: number;

  /**
   * Nợ dài hạn
   * Raw field: BSA24
   */
  longTermDebt: number;

  /**
   * Vốn chủ sở hữu
   * Raw field: BSA27
   */
  equity: number;

  /**
   * Lợi nhuận giữ lại
   * Raw field: BSA29
   */
  retainedEarnings: number;

  /**
   * Đầu tư ngắn hạn
   * Raw field: BSA30
   */
  shortTermInvestments: number;

  /**
   * Các khoản phải thu dài hạn
   * Raw field: BSA33
   */
  longTermReceivables: number;

  /**
   * Đầu tư dài hạn
   * Raw field: BSA36
   */
  longTermInvestments: number;

  /**
   * Tài sản dài hạn khác
   * Raw field: BSA40
   */
  otherLongTermAssets: number;

  /**
   * Các khoản phải trả thương mại
   * Raw field: BSA43
   */
  tradePayables: number;

  /**
   * Các khoản phải trả ngắn hạn
   * Raw field: BSA44
   */
  shortTermPayables: number;

  /**
   * Tiền ứng trước từ khách hàng
   * Raw field: BSA45
   */
  customerPrepayments: number;

  /**
   * Thuế phải nộp
   * Raw field: BSA46
   */
  taxLiabilities: number;

  /**
   * Chi phí phải trả
   * Raw field: BSA47
   */
  accruedCosts: number;

  /**
   * Dự phòng ngắn hạn
   * Raw field: BSA48
   */
  shortTermProvisions: number;

  /**
   * Nợ ngắn hạn khác
   * Raw field: BSA49
   */
  otherShortTermDebt: number;

  /**
   * Vay dài hạn
   * Raw field: BSA50
   */
  longTermBorrowings: number;

  /**
   * Tổng nguồn vốn
   * Raw field: BSA53
   */
  totalCapital: number;

  /**
   * Tổng nguồn vốn (kiểm tra)
   * Raw field: BSA54
   */
  totalLiabilitiesEquity: number;

  /**
   * Tổng vốn chủ sở hữu
   * Raw field: BSA55
   */
  totalEquity: number;

  /**
   * Vốn cổ phần
   * Raw field: BSA56
   */
  shareCapital: number;

  /**
   * Cổ phiếu quỹ
   * Raw field: BSA58
   */
  treasuryStock: number;

  /**
   * Vốn chủ sở hữu khác
   * Raw field: BSA67
   */
  otherEquity: number;

  /**
   * Lợi ích cổ đông thiểu số
   * Raw field: BSA71
   */
  minorityInterest: number;

  BSA67: "otherEquityItems";
  BSA71: "nonControllingInterest";
  BSA78: "financialAssetsMeasuredAtFVOCI";
  BSA79: "financialAssetsMeasuredAtFVTPL";
  BSA80: "assetsHeldForSale";
  BSA82: "collateralizedAssets";
  BSA84: "leasesLiabilities";

  /**
   * Nợ ngắn hạn khác
   * Raw field: BSA82
   */
  otherCurrentDebt: number;

  /**
   * Tài sản lưu động khác
   * Raw field: BSA84
   */
  otherCurrentAssets: number;

  /**
   * Các khoản phải thu khác
   * Raw field: BSA85
   */
  otherReceivables: number;

  /**
   * Các khoản phải trả khác
   * Raw field: BSA86
   */
  otherPayables: number;

  /**
   * Vay ngắn hạn
   * Raw field: BSA89
   */
  shortTermBorrowings: number;

  /**
   * Các khoản phải trả dài hạn
   * Raw field: BSA92
   */
  longTermPayables: number;

  /**
   * Nợ dài hạn khác
   * Raw field: BSA94
   */
  otherLongTermDebt: number;

  /**
   * Dự phòng dài hạn
   * Raw field: BSA95
   */
  longTermProvisions: number;

  /**
   * Tài sản vô hình
   * Raw field: BSA159
   */
  intangibleAssets: number;

  /**
   * Lợi thế thương mại
   * Raw field: BSA162
   */
  goodwill: number;

  /**
   * Dự phòng
   * Raw field: BSA173
   */
  provisions: number;

  /**
   * Tài sản dài hạn khác
   * Raw field: BSA209
   */
  otherNonCurrentAssets: number;

  /**
   * Tổng tài sản dài hạn
   * Raw field: BSA210
   */
  totalNonCurrentAssets: number;

  /**
   * Lưu chuyển tiền thuần từ hoạt động kinh doanh
   * Raw field: CFA21
   */
  operatingCash: number;

  /**
   * Lưu chuyển tiền thuần từ hoạt động đầu tư
   * Raw field: CFA22
   */
  investingCash: number;

  /**
   * Khấu hao và Amortization
   * Raw field: CFA26
   */
  depreciationAmortization: number;

  /**
   * Thay đổi vốn lưu động
   * Raw field: CFA6
   */
  workingCapitalChange: number;

  /**
   * Lưu chuyển tiền từ hoạt động kinh doanh
   * Raw field: CFA9
   */
  operatingCashFlow: number;

  /**
   * Tiền mặt cuối kỳ
   * Raw field: CFA36
   */
  endingCash: number;

  /**
   * Cổ tức bằng tiền đã chi trả
   * Raw field: CFA34
   */
  dividendsPaid: number;

  /**
   * Chi tiêu vốn
   * Raw field: CFA14
   */
  capitalSpending: number;

  /**
   * Thu từ phát hành cổ phiếu
   * Raw field: CFA29
   */
  shareIssuanceProceeds: number;

  /**
   * Mua lại cổ phiếu quỹ
   * Raw field: CFA30
   */
  treasuryStockPurchases: number;

  /**
   * Lưu chuyển tiền thuần
   * Raw field: CFA1
   */
  netCash: number;

  /**
   * Lợi nhuận trước thuế
   * Raw field: CFA2
   */
  preTaxProfit: number;

  /**
   * Lợi nhuận ròng
   * Raw field: CFA3
   */
  netProfit: number;

  /**
   * Lợi nhuận hoạt động
   * Raw field: CFA4
   */
  operatingProfit: number;

  /**
   * Các khoản không phải tiền mặt
   * Raw field: CFA5
   */
  nonCashItems: number;

  /**
   * Thay đổi các khoản phải thu
   * Raw field: CFA7
   */
  receivablesChange: number;

  /**
   * Thuế đã nộp bằng tiền
   * Raw field: CFA8
   */
  taxesPaid: number;

  /**
   * Lưu chuyển tiền từ hoạt động kinh doanh khác
   * Raw field: CFA10
   */
  otherOperatingCash: number;

  /**
   * Các khoản không phải tiền mặt khác
   * Raw field: CFA11
   */
  otherNonCash: number;

  /**
   * Lưu chuyển tiền từ đầu tư khác
   * Raw field: CFA12
   */
  otherInvestingCash: number;

  /**
   * Thay đổi hàng tồn kho
   * Raw field: CFA13
   */
  inventoryChange: number;

  /**
   * Bán các khoản đầu tư
   * Raw field: CFA15
   */
  investmentSalesProceeds: number;

  /**
   * Trả nợ vay
   * Raw field: CFA16
   */
  debtRepayment: number;

  /**
   * Mua các khoản đầu tư
   * Raw field: CFA17
   */
  investmentPurchases: number;

  /**
   * Lưu chuyển tiền từ tài chính khác
   * Raw field: CFA18
   */
  otherFinancingCash: number;

  /**
   * Lưu chuyển tiền tự do
   * Raw field: CFA19
   */
  freeCash: number;

  /**
   * Thay đổi ròng trong tiền mặt
   * Raw field: CFA20
   */
  cashChange: number;

  /**
   * Thu từ vay nợ
   * Raw field: CFA23
   */
  borrowingProceeds: number;

  /**
   * Ảnh hưởng của thay đổi tỷ giá hối đoái
   * Raw field: CFA24
   */
  exchangeRateImpact: number;

  /**
   * Lưu chuyển tiền khác
   * Raw field: CFA25
   */
  otherCash: number;

  /**
   * Thay đổi các khoản phải trả
   * Raw field: CFA27
   */
  payablesChange: number;

  /**
   * Lưu chuyển tiền từ hoạt động tài chính
   * Raw field: CFA28
   */
  financingCash: number;

  /**
   * Hoạt động tài chính khác
   * Raw field: CFA31
   */
  otherFinancing: number;

  /**
   * Tiền và tương đương tiền đầu kỳ
   * Raw field: CFA32
   */
  beginningCash: number;

  /**
   * Lãi vay đã trả bằng tiền
   * Raw field: CFA33
   */
  interestPaid: number;

  /**
   * Tiền trả lãi vay
   * Raw field: CFA35
   */
  interestPayments: number;

  /**
   * Tiền và tương đương tiền cuối kỳ
   * Raw field: CFA38
   */
  cashEquivalentsEnd: number;

  /**
   * Tổng doanh thu
   * Raw field: ISA1
   */
  totalRevenue: number;

  /**
   * Doanh thu từ hoạt động chính
   * Raw field: ISA2
   */
  primaryRevenue: number;

  /**
   * Doanh thu hoạt động
   * Raw field: ISA3
   */
  operatingRevenue: number;

  /**
   * Chi phí hoạt động
   * Raw field: ISA4
   */
  operatingCosts: number;

  /**
   * Lợi nhuận gộp
   * Raw field: ISA5
   */
  grossProfit: number;

  /**
   * Chi phí bán hàng
   * Raw field: ISA6
   */
  sellingCosts: number;

  /**
   * Chi phí quản lý
   * Raw field: ISA7
   */
  adminCosts: number;

  /**
   * Chi phí nghiên cứu và phát triển
   * Raw field: ISA8
   */
  rdCosts: number;

  /**
   * Thu nhập khác
   * Raw field: ISA9
   */
  otherIncome: number;

  /**
   * Chi phí khác
   * Raw field: ISA10
   */
  otherCosts: number;

  /**
   * Thu nhập tài chính
   * Raw field: ISA11
   */
  financeIncome: number;

  /**
   * Chi phí tài chính
   * Raw field: ISA12
   */
  financeCosts: number;

  /**
   * Chi phí lãi vay
   * Raw field: ISA13
   */
  interestCost: number;

  /**
   * Thu nhập lãi vay
   * Raw field: ISA14
   */
  interestIncome: number;

  /**
   * Chi phí thuế
   * Raw field: ISA15
   */
  taxCost: number;

  /**
   * Lợi nhuận trước thuế
   * Raw field: ISA16
   */
  profitBeforeTax: number;

  /**
   * Lợi nhuận sau thuế
   * Raw field: ISA17
   */
  profitAfterTax: number;

  /**
   * Lợi ích cổ đông thiểu số
   * Raw field: ISA18
   */
  minorityShare: number;

  /**
   * Lợi nhuận ròng thuộc về cổ đông
   * Raw field: ISA19
   */
  shareholderNetProfit: number;

  /**
   * Lợi nhuận ròng
   * Raw field: ISA20
   */
  netEarnings: number;

  /**
   * Thu nhập cơ bản trên mỗi cổ phiếu
   * Raw field: ISA21
   */
  basicEps: number;

  /**
   * Thu nhập pha loãng trên mỗi cổ phiếu
   * Raw field: ISA22
   */
  dilutedEps: number;

  /**
   * Doanh thu bán hàng
   * Raw field: ISA23
   */
  salesRevenue: number;

  /**
   * Giá vốn hàng bán
   * Raw field: ISA102
   */
  cogs: number;

  /**
   * Doanh thu từ dịch vụ
   * Raw field: ISB25
   */
  serviceRevenue: number;

  /**
   * Doanh thu hoạt động khác
   * Raw field: ISB26
   */
  otherOperatingRevenue: number;

  /**
   * Tổng chi phí hoạt động
   * Raw field: ISB27
   */
  totalOperatingCosts: number;

  /**
   * Chi phí khấu hao
   * Raw field: ISB28
   */
  depreciationCost: number;

  /**
   * Chi phí Amortization
   * Raw field: ISB29
   */
  amortizationCost: number;

  /**
   * Lợi nhuận hoạt động
   * Raw field: ISB30
   */
  operatingIncome: number;

  /**
   * Lợi từ thanh lý tài sản
   * Raw field: ISB31
   */
  assetDisposalGains: number;

  /**
   * Lỗ từ thanh lý tài sản
   * Raw field: ISB32
   */
  assetDisposalLosses: number;

  /**
   * Thu nhập tài chính khác
   * Raw field: ISB33
   */
  otherFinanceIncome: number;

  /**
   * Chi phí tài chính khác
   * Raw field: ISB34
   */
  otherFinanceCosts: number;

  /**
   * Thu nhập từ công ty liên kết
   * Raw field: ISB35
   */
  associateIncome: number;

  /**
   * Lợi nhuận trước thuế và lợi ích thiểu số
   * Raw field: ISB36
   */
  profitBeforeMinority: number;

  /**
   * Tổng giá vốn hàng bán
   * Raw field: ISB37
   */
  totalCogs: number;

  /**
   * Lỗ giảm giá tài sản
   * Raw field: ISB38
   */
  impairmentLoss: number;

  /**
   * Chi phí tái cấu trúc
   * Raw field: ISB39
   */
  restructuringCost: number;

  /**
   * Các khoản bất thường
   * Raw field: ISB40
   */
  extraordinaryItems: number;

  /**
   * Thu nhập hoạt động trước khấu hao
   * Raw field: ISB41
   */
  operatingIncomeBeforeDepreciation: number;

  /**
   * Tiền gửi ngân hàng
   * Raw field: BSB97
   */
  bankDeposits: number;

  /**
   * Tương đương tiền khác
   * Raw field: BSB98
   */
  otherCashEquivalents: number;

  /**
   * Tiền bị hạn chế sử dụng
   * Raw field: BSB99
   */
  restrictedCash: number;

  /**
   * Chứng khoán thị trường
   * Raw field: BSB100
   */
  marketableSecurities: number;

  /**
   * Tài sản ngắn hạn khác
   * Raw field: BSB101
   */
  otherShortTermAssets: number;

  /**
   * Tiền ứng trước cho nhà cung cấp
   * Raw field: BSB102
   */
  supplierAdvances: number;

  /**
   * Tài sản thuế hoãn lại
   * Raw field: BSB103
   */
  deferredTaxAssets: number;

  /**
   * Khấu hao lũy kế
   * Raw field: BSB104
   */
  accumulatedDepreciation: number;

  /**
   * Bất động sản đầu tư
   * Raw field: BSB105
   */
  investmentProperty: number;

  /**
   * Tài sản vô hình khác
   * Raw field: BSB106
   */
  otherIntangibles: number;

  /**
   * Chi phí trả trước dài hạn
   * Raw field: BSB107
   */
  longTermPrepaidCosts: number;

  /**
   * Nợ thuế hoãn lại
   * Raw field: BSB108
   */
  deferredTaxLiabilities: number;

  /**
   * Các khoản phải trả dài hạn khác
   * Raw field: BSB109
   */
  otherLongTermPayables: number;

  /**
   * Doanh thu chưa thu
   * Raw field: BSB110
   */
  unearnedRevenue: number;

  /**
   * Dự phòng khác
   * Raw field: BSB111
   */
  otherProvisions: number;

  /**
   * Thặng dư vốn
   * Raw field: BSB112
   */
  capitalSurplus: number;

  /**
   * Quỹ dự trữ khác
   * Raw field: BSB113
   */
  otherReserves: number;

  /**
   * Thu nhập toàn diện lũy kế khác
   * Raw field: BSB114
   */
  comprehensiveIncome: number;

  /**
   * Nợ chuyển đổi
   * Raw field: BSB115
   */
  convertibleDebt: number;

  /**
   * Trái phiếu phải trả
   * Raw field: BSB116
   */
  bondsPayable: number;

  /**
   * Nợ thuê tài chính
   * Raw field: BSB117
   */
  leaseLiabilities: number;

  /**
   * Nợ lương hưu
   * Raw field: BSB118
   */
  pensionLiabilities: number;

  /**
   * Dự trữ vốn chủ sở hữu khác
   * Raw field: BSB121
   */
  equityReserves: number;

  /**
   * Tỷ số nợ trên vốn chủ sở hữu
   * Raw field: RTQ10
   */
  debtEquity: number;

  /**
   * Tỷ suất sinh lời trên tổng tài sản
   * Raw field: RTQ17
   */
  totalAssetReturn: number;

  /**
   * Tỷ lệ vốn điều lệ trên tổng tài sản
   * Raw field: charterCapitalRatio
   */
  charterCapitalRatio: number;

  /**
   * Hiệu quả tài sản cố định
   * Raw field: fae
   */
  fixedAssetEfficiency: number;

  /**
   * Tỷ số khả năng thanh toán lãi vay
   * Raw field: ISI64
   */
  interestCover: number;

  /**
   * Vốn hóa thị trường
   * Raw field: ISS141
   */
  marketCap: number;

  /**
   * Tỷ suất lợi nhuận hoạt động
   * Raw field: ISS146
   */
  operatingMargin: number;

  /**
   * Tỷ suất sinh lời trên vốn sử dụng
   * Raw field: ISS148
   */
  capitalEmployedReturn: number;

  /**
   * Tỷ số nợ trên tổng tài sản
   * Raw field: ISS152
   */
  debtToAssets: number;

  /**
   * Lưu chuyển tiền từ hoạt động kinh doanh
   * Raw field: CFS191
   */
  operationsCash: number;

  /**
   * Lưu chuyển tiền hoạt động trước thay đổi
   * Raw field: CFB64
   */
  preChangeOperatingCash: number;

  /**
   * Lưu chuyển tiền trước thuế
   * Raw field: CFB65
   */
  preTaxCash: number;

  /**
   * Lưu chuyển tiền sau thuế
   * Raw field: CFB80
   */
  postTaxCash: number;
}
