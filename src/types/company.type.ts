export interface ICompanyInformationDetail {
  /** Mảng chứa các file báo cáo phân tích cổ phiếu */
  analysisReportFiles: IAnalysisReportFile[];
  /** Mảng chứa các bản tin tin tức liên quan đến mã cổ phiếu */
  newsItems: INewsItem[];
  /** Đối tượng chứa thông tin giá hiện tại và các tỷ số tài chính cơ bản */
  tickerPriceInfo: ITickerPriceInfo;
  /** Mảng quan hệ sở hữu công ty con kèm tỷ lệ sở hữu */
  companySubsidiaries: IOrganizationRelation[];
  /** Mảng quan hệ công ty liên kết kèm tỷ lệ sở hữu */
  companyAffiliates: IOrganizationRelation[];
  /** Đối tượng chứa thông tin niêm yết chi tiết của công ty */
  companyListingDetails: ICompanyListingDetails;
  /** Mảng thông tin ban lãnh đạo hiện tại của công ty */
  currentManagers: IOrganizationManager[];
  /** Mảng thông tin cổ đông tổ chức, bao gồm số lượng và tỷ lệ nắm giữ */
  organizationShareHolders: IShareHolder[];
  /** Mảng thông tin ban lãnh đạo đã từ nhiệm */
  resignedManagers: IOrganizationManager[];
  /** Mảng sự kiện doanh nghiệp và thông tin quyền lợi cổ đông */
  organizationEvents: IOrganizationEvent[];
}

/** Thông tin chi tiết của một file báo cáo phân tích */
export interface IAnalysisReportFile {
  /** Ngày phát hành báo cáo (chuỗi ISO 8601) */
  date: string;
  /** Mô tả nội dung chính của báo cáo */
  description: string;
  /** URL để tải file (PDF, Excel, ...) */
  link: string;
  /** Tên file, ví dụ 'VNM_Q1_2025_Report.pdf' */
  name: string;
}

/** Tin tức liên quan đến mã cổ phiếu */
export interface INewsItem {
  /** Định danh nội bộ của bản tin */
  id: number;
  /** Mã tổ chức hoặc cơ quan phát hành bản tin */
  organCode: string;
  /** Mã chứng khoán liên quan */
  ticker: string;
  /** Tiêu đề chính của bản tin */
  newsTitle: string;
  /** Tiêu đề phụ của bản tin (nếu có) */
  newsSubTitle: string;
  /** Dòng phụ ngắn gọn thân thiện với UI */
  friendlySubTitle: string;
  /** URL ảnh đại diện cho bản tin */
  newsImageUrl: string;
  /** URL gốc nguồn tin */
  newsSourceLink: string;
  /** Thời gian tạo bản tin trên hệ thống (chuỗi ISO 8601) */
  createdAt: string;
  /** Ngày công bố bản tin (chuỗi ISO 8601) */
  publicDate: string;
  /** Thời gian cập nhật lần cuối (chuỗi ISO 8601) */
  updatedAt: string;
  /** Mã ngôn ngữ, ví dụ 'vi' hoặc 'en' */
  langCode: string;
  /** Mã bài viết của nguồn, có thể khác trường id */
  newsId: string;
  /** Đoạn tóm tắt ngắn của bản tin */
  newsShortContent: string;
  /** Nội dung đầy đủ của bản tin */
  newsFullContent: string;
  /** Giá đóng cửa phiên giao dịch khi bản tin được tạo */
  closePrice: number;
  /** Giá tham chiếu của phiên trước đó */
  referencePrice: number;
  /** Giá sàn của phiên giao dịch */
  floorPrice: number;
  /** Giá trần của phiên giao dịch */
  ceilingPrice: number;
  /** Phần trăm biến động giá so với referencePrice */
  percentPriceChange: number;
}

/** Thông tin giá cổ phiếu và các tỷ số tài chính */
export interface ITickerPriceInfo {
  /** Mảng các tỷ số tài chính theo kỳ báo cáo */
  financialRatios: IFinancialRatio[];
  /** Mã chứng khoán */
  ticker: string;
  /** Sàn giao dịch niêm yết, ví dụ 'HSX', 'HNX' */
  exchange: string;
  /** Giá trị doanh nghiệp (Enterprise Value) */
  ev: number;
  /** Giá trần của phiên giao dịch */
  ceilingPrice: number;
  /** Giá sàn của phiên giao dịch */
  floorPrice: number;
  /** Giá tham chiếu của phiên giao dịch */
  referencePrice: number;
  /** Giá mở cửa của phiên giao dịch */
  openPrice: number;
  /** Giá khớp lệnh đầu tiên */
  matchPrice: number;
  /** Giá đóng cửa của phiên giao dịch */
  closePrice: number;
  /** Biến động giá tuyệt đối so với referencePrice */
  priceChange: number;
  /** Biến động giá theo phần trăm so với referencePrice */
  percentPriceChange: number;
  /** Giá cao nhất trong phiên */
  highestPrice: number;
  /** Giá thấp nhất trong phiên */
  lowestPrice: number;
  /** Tổng khối lượng giao dịch trong phiên */
  totalVolume: number;
  /** Giá cao nhất trong 1 năm */
  highestPrice1Year: number;
  /** Giá thấp nhất trong 1 năm */
  lowestPrice1Year: number;
  /** Phần trăm biến động từ mức thấp nhất 1 năm */
  percentLowestPriceChange1Year: number;
  /** Phần trăm biến động từ mức cao nhất 1 năm */
  percentHighestPriceChange1Year: number;
  /** Khối lượng mua của nhà đầu tư nước ngoài */
  foreignTotalVolume: number;
  /** Room tối đa cho nhà đầu tư nước ngoài */
  foreignTotalRoom: number;
  /** Khối lượng giao dịch trung bình trong 2 tuần gần nhất */
  averageMatchVolume2Week: number;
  /** Khối lượng nắm giữ hiện tại của nhà đầu tư nước ngoài */
  foreignHoldingRoom: number;
  /** Tỷ lệ nắm giữ của nhà đầu tư nước ngoài hiện tại (%) */
  currentHoldingRatio: number;
  /** Tỷ lệ nắm giữ tối đa của nhà đầu tư nước ngoài (%) */
  maxHoldingRatio: number;
}

/** Tỷ số tài chính cho kỳ báo cáo cụ thể */
export interface IFinancialRatio {
  /** Năm báo cáo, ví dụ 2024 */
  financialReportYear: number;
  /** Độ dài kỳ báo cáo (số tháng hoặc số quý) */
  reportPeriodLength: number;
  /** Dấu thời gian (timestamp) lần cuối cập nhật báo cáo */
  reportUpdateTimestamp: number;
  /** Doanh thu thuần của kỳ báo cáo */
  netRevenue: number;
  /** Tốc độ tăng trưởng doanh thu (%) */
  revenueGrowthRate: number;
  /** Tốc độ tăng trưởng lợi nhuận ròng (%) */
  netProfitGrowthRate: number;
  /** Tỷ suất lợi nhuận trên vốn chủ sở hữu (ROE) (%) */
  returnOnEquity: number;
  /** Tỷ suất lợi nhuận trên vốn đầu tư (ROIC) (%) */
  returnOnInvestedCapital: number;
  /** Tỷ suất lợi nhuận trên tổng tài sản (ROA) (%) */
  returnOnAssets: number;
  /** Hệ số P/E (Price to Earnings Ratio) */
  priceToEarningsRatio: number;
  /** Hệ số P/B (Price to Book Ratio) */
  priceToBookRatio: number;
  /** Lợi nhuận trên mỗi cổ phiếu (EPS) */
  earningsPerShare: number;
  /** Hệ số khả năng thanh toán lãi vay (Interest Coverage Ratio) */
  interestCoverageRatio: number;
  /** Tỷ lệ tài sản trên vốn chủ sở hữu (Assets to Equity Ratio) */
  assetsToEquityRatio: number;
  /** Tỷ lệ tài sản cố định trên vốn chủ sở hữu (Fixed Assets to Equity Ratio) */
  fixedAssetsToEquityRatio: number;
  /** Biên lợi nhuận gộp (%) */
  grossProfitMargin: number;
  /** Giá trị doanh nghiệp (Enterprise Value) */
  enterpriseValue: number;
  /** Số cổ phiếu đã phát hành */
  issuedShares: number;
  /** Hệ số P/S (Price to Sales Ratio) */
  priceToSalesRatio: number;
  /** Hệ số P/CF (Price to Cash Flow Ratio) */
  priceToCashFlowRatio: number;
  /** Giá trị sổ sách trên mỗi cổ phiếu (Book Value per Share) */
  bookValuePerShare: number;
  /** Hệ số EV/EBITDA (Enterprise Value to EBITDA Ratio) */
  enterpriseValueToEbitdaRatio: number;
  /** Hệ số vòng quay tài sản (Asset Turnover Ratio) */
  assetTurnoverRatio: number;
  /** Hệ số vòng quay tài sản cố định (Fixed Asset Turnover Ratio) */
  fixedAssetTurnoverRatio: number;
  /** Chu kỳ thu tiền bình quân (Average Collection Period) */
  averageCollectionPeriod: number;
  /** Số ngày thu tiền bình quân (Days Sales Outstanding) */
  daysSalesOutstanding: number;
  /** Số ngày trả tiền bình quân (Days Payable Outstanding) */
  daysPayableOutstanding: number;
  /** EPS theo 12 tháng gần nhất (Earnings per Share TTM) */
  earningsPerShareTTM: number;
  /** Tỷ số nợ trên vốn chủ sở hữu 12 tháng gần nhất (LTDebt/Equity) */
  ratioTrailingTwelveMonthsLTDebtEquity: number;
  /** Tỷ lệ vốn điều lệ trên giá trị sổ sách (Charter Capital to Book Value Ratio) */
  charterCapitalToBookValueRatio: number;
  /** Tỷ số tổng nợ trên vốn chủ sở hữu 12 tháng gần nhất (Total Liabilities to Equity) */
  ratioTrailingTwelveMonthsTotalLiabilitiesEquity: number;
  /** Tỷ suất cổ tức (%) */
  dividendYield: number;
  /** Tỷ lệ đòn bẩy tài chính (Leverage Ratio) */
  leverageRatio: number;
  /** Hệ số nợ trên vốn chủ sở hữu (Debt to Equity Ratio) */
  debtToEquityRatio: number;
  /** Chu kỳ chuyển đổi tiền mặt (Cash Conversion Cycle) */
  cashConversionCycle: number;
  /** Tỷ số vòng quay hàng tồn kho 12 tháng gần nhất (Inventory Turnover Ratio) */
  ratioTrailingTwelveMonthsInventoryTurnoverRatio: number;
}

/** Mối quan hệ sở hữu công ty (công ty con hoặc liên kết) */
export interface IOrganizationRelation {
  /** Định danh bản ghi quan hệ */
  id: number;
  /** Mã tổ chức cha */
  organCode: string;
  /** Mã tổ chức con hoặc liên kết */
  subOrganCode: string;
  /** Tỷ lệ sở hữu (%) */
  percentage: number;
  /** Thông tin chi tiết tên tổ chức */
  listingInfo: IListingInfo;
}

/** Tên tổ chức bằng tiếng Anh và tiếng Việt */
export interface IListingInfo {
  /** Tên tổ chức (tiếng Anh) */
  enName: string;
  /** Tên tổ chức (tiếng Việt hoặc ngôn ngữ bản địa) */
  nativeName: string;
}

/** Thông tin niêm yết công ty */
export interface ICompanyListingDetails {
  /** Định danh bản ghi */
  id: number;
  /** Tổng số cổ phiếu đã phát hành */
  issuedShares: number;
  /** Lịch sử công ty (tiếng Anh) */
  historyEn: string;
  /** Lịch sử công ty (tiếng Việt) */
  historyNative: string;
  /** Hồ sơ công ty (tiếng Anh) */
  profileEn: string;
  /** Hồ sơ công ty (tiếng Việt) */
  profileNative: string;
  /** ICB cấp độ 2 */
  icbLevel2: string;
  /** ICB cấp độ 2 (tiếng Anh) */
  icbLevel2En: string;
  /** ICB cấp độ 3 */
  icbLevel3: string;
  /** ICB cấp độ 3 (tiếng Anh) */
  icbLevel3En: string;
  /** ICB cấp độ 4 */
  icbLevel4: string;
  /** ICB cấp độ 4 (tiếng Anh) */
  icbLevel4En: string;
  /** Tỷ số tài chính cơ bản trong thông tin niêm yết */
  listingRatios: IListingFinancialRatio;
}

/** Tỷ số tài chính cơ bản trong thông tin niêm yết */
export interface IListingFinancialRatio {
  /** Định danh bản ghi */
  id: number;
  /** Mã chứng khoán */
  ticker: string;
  /** Tổng số cổ phiếu đã phát hành */
  issuedShares: number;
  charterCapital: number;
}

/** Thông tin thành viên ban lãnh đạo */
export interface IOrganizationManager {
  id: number;
  ticker: string;
  fullName: string; // họ và tên
  positionNative: string; // chức danh (tiếng Việt)
  positionNativeShort: string; // chức danh ngắn
  positionEn: string; // chức danh (tiếng Anh)
  positionEnShort: string; // chức danh ngắn (tiếng Anh)
  updatedAt: string; // thời gian cập nhật (ISO 8601)
  equityPercentage: number; // tỷ lệ cổ phần nắm giữ (%)
  shareQuantity: number; // số lượng cổ phiếu nắm giữ
}

/** Cổ đông tổ chức */
export interface IShareHolder {
  id: number;
  ticker: string;
  holderNameNative: string; // tên cổ đông (tiếng Việt)
  holderNameEn: string; // tên cổ đông (tiếng Anh)
  shareQuantity: number; // số lượng cổ phiếu
  ownershipPercentage: number; // tỷ lệ nắm giữ (%)
  updatedAt: string; // thời gian cập nhật (ISO 8601)
}

/** Sự kiện doanh nghiệp và thông tin quyền lợi */
export interface IOrganizationEvent {
  id: number;
  organCode: string;
  ticker: string;
  eventTitleNative: string; // tiêu đề sự kiện (tiếng Việt)
  eventTitleEn: string; // tiêu đề sự kiện (tiếng Anh)
  publicDate: string; // ngày công bố (ISO 8601)
  issueDate: string; // ngày phát hành tài liệu (ISO 8601)
  sourceUrl: string; // URL nguồn tin
  eventTypeCode: string; // mã loại sự kiện
  ratio: number; // tỷ lệ liên quan, ví dụ cổ tức (%)
  value: number; // giá trị tiền mặt hoặc số lượng
  recordDate: string; // ngày ghi nhận quyền (ISO 8601)
  exrightDate: string; // ngày không hưởng quyền (ISO 8601)
  eventTypeNameNative: string; // tên loại sự kiện (tiếng Việt)
  eventTypeNameEn: string; // tên loại sự kiện (tiếng Anh)
}
