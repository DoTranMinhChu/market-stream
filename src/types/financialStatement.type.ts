export interface IBaseFinancialStatement {
  /** BSA1  TÀI SẢN NGẮN HẠN */
  balanceSheetCurrentAssets: number;
  /** BSA2:  Tiền và tương đương tiền */
  balanceSheetCashAndCashEquivalents: number;
  /** BSA3:  Tiền */
  balanceSheetCash: number;
  /** BSA4:  Các khoản tương đương tiền */
  balanceSheetCashEquivalents: number;
  /** BSA5:  Giá trị thuần đầu tư ngắn hạn */
  balanceSheetShortTermInvestmentsNet: number;
  /** BSA6:  Đầu tư ngắn hạn */
  balanceSheetShortTermInvestmentsGross: number;
  /** BSA7:  Dự phòng đầu tư ngắn hạn */
  balanceSheetShortTermInvestmentsProvision: number;
  /** BSA8:  Các khoản phải thu */
  balanceSheetReceivablesTotal: number;
  /** BSA9:  Phải thu khách hàng */
  balanceSheetTradeReceivables: number;
  /** BSA10:  Trả trước người bán */
  balanceSheetAdvancesToSuppliers: number;
  /** BSA11:  Phải thu nội bộ */
  balanceSheetIntercompanyReceivables: number;
  /** BSA12:  Phải thu về XDCB */
  balanceSheetConstructionContractReceivables: number;
  /** BSA13:  Phải thu khác */
  balanceSheetOtherReceivables: number;
  /** BSA14:  Dự phòng nợ khó đòi */
  balanceSheetProvisionForDoubtfulDebts: number;
  /** BSA15:  Hàng tồn kho, ròng */
  balanceSheetInventoriesNet: number;
  /** BSA16:  Hàng tồn kho */
  balanceSheetInventoriesGross: number;
  /** BSA17:  Dự phòng giảm giá HTK */
  balanceSheetProvisionForInventoryDecline: number;
  /** BSA18:  Tài sản lưu động khác */
  balanceSheetOtherCurrentAssets: number;
  /** BSA19:  Trả trước ngắn hạn */
  balanceSheetShortTermPrepayments: number;
  /** BSA20:  Thuế VAT phải thu */
  balanceSheetVATReceivable: number;
  /** BSA21:  Phải thu thuế khác */
  balanceSheetOtherTaxesReceivable: number;
  /** BSA22:  Tài sản lưu động khác */
  balanceSheetOtherCurrentAssetsDetail: number;
  /** BSA23:  TÀI SẢN DÀI HẠN */
  balanceSheetLongTermAssets: number;
  /** BSA24:  Phải thu dài hạn */
  balanceSheetLongTermReceivablesTotal: number;
  /** BSA25:  Phải thu khách hàng dài hạn */
  balanceSheetLongTermTradeReceivables: number;
  /** BSA26:  Phải thu nội bộ dài hạn */
  balanceSheetLongTermIntercompanyReceivables: number;
  /** BSA27:  Phải thu dài hạn khác */
  balanceSheetLongTermOtherReceivables: number;
  /** BSA28:  Dự phòng phải thu dài hạn */
  balanceSheetProvisionForLongTermReceivables: number;
  /** BSA29:  Tài sản cố định */
  balanceSheetFixedAssets: number;
  /** BSA30:  GTCL TSCĐ hữu hình */
  balanceSheetTangibleFixedAssetsNet: number;
  /** BSA31:  Nguyên giá TSCĐ hữu hình */
  balanceSheetTangibleFixedAssetsCost: number;
  /** BSA32:  Khấu hao lũy kế TSCĐ hữu hình */
  balanceSheetTangibleFixedAssetsAccumulatedDepreciation: number;
  /** BSA33:  GTCL Tài sản thuê tài chính */
  balanceSheetFinanceLeaseAssetsNet: number;
  /** BSA34:  Nguyên giá tài sản thuê tài chính */
  balanceSheetFinanceLeaseAssetsCost: number;
  /** BSA35:  Khấu hao lũy kế tài sản thuê tài chính */
  balanceSheetFinanceLeaseAssetsAccumulatedDepreciation: number;
  /** BSA36:  GTCL tài sản cố định vô hình */
  balanceSheetIntangibleFixedAssetsNet: number;
  /** BSA37:  Nguyên giá TSCĐ vô hình */
  balanceSheetIntangibleFixedAssetsCost: number;
  /** BSA38:  Khấu khao lũy kế TSCĐ vô hình */
  balanceSheetIntangibleFixedAssetsAccumulatedAmortization: number;
  /** BSA39:  Xây dựng cơ bản dở dang */
  balanceSheetConstructionInProgressBefore2015: number;
  /** BSA40:  Giá trị ròng tài sản đầu tư */
  balanceSheetInvestmentPropertiesNet: number;
  /** BSA41:  Nguyên giá tài sản đầu tư */
  balanceSheetInvestmentPropertiesCost: number;
  /** BSA42:  Khấu hao lũy kế tài sản đầu tư */
  balanceSheetInvestmentPropertiesAccumulatedDepreciation: number;
  /** BSA43:  Đầu tư dài hạn */
  balanceSheetLongTermInvestments: number;
  /** BSA44:  Đầu tư vào các công ty con */
  balanceSheetInvestmentsInSubsidiaries: number;
  /** BSA45:  Đầu tư vào các công ty liên kết */
  balanceSheetInvestmentsInAssociates: number;
  /** BSA46:  Đầu tư dài hạn khác */
  balanceSheetOtherLongTermInvestments: number;
  /** BSA47:  Dự phòng giảm giá đầu tư dài hạn */
  balanceSheetProvisionForLongTermInvestments: number;
  /** BSA48:  Lợi thế thương mại */
  balanceSheetGoodwillBefore2015: number;
  /** BSA49:  Tài sản dài hạn khác */
  balanceSheetOtherLongTermAssets: number;
  /** BSA50:  Trả trước dài hạn */
  balanceSheetLongTermPrepayments: number;
  /** BSA51:  Thuế thu nhập hoãn lại phải thu */
  balanceSheetDeferredIncomeTaxAssets: number;
  /** BSA52:  Các tài sản dài hạn khác */
  balanceSheetOtherLongTermAssetsDetail: number;
  /** BSA53:  TỔNG CỘNG TÀI SẢN */
  balanceSheetTotalAssets: number;
  /** BSA54:  NỢ PHẢI TRẢ */
  balanceSheetLiabilities: number;
  /** BSA55:  Nợ ngắn hạn */
  balanceSheetCurrentLiabilities: number;
  /** BSA56:  Vay ngắn hạn */
  balanceSheetShortTermLoans: number;
  /** BSA57:  Phải trả người bán */
  balanceSheetTradeAccountsPayable: number;
  /** BSA58:  Người mua trả tiền trước */
  balanceSheetAdvancesFromCustomers: number;
  /** BSA59:  Thuế và các khoản phải trả Nhà nước */
  balanceSheetTaxesAndPayablesToState: number;
  /** BSA60:  Phải trả người lao động */
  balanceSheetPayablesToEmployees: number;
  /** BSA61:  Chi phí phải trả */
  balanceSheetAccruedExpenses: number;
  /** BSA62:  Phải trả nội bộ */
  balanceSheetIntercompanyPayables: number;
  /** BSA63:  Phải trả về xây dựng cơ bản */
  balanceSheetConstructionContractPayables: number;
  /** BSA64:  Phải trả khác */
  balanceSheetOtherPayables: number;
  /** BSA65:  Dự phòng các khoản phải trả ngắn hạn */
  balanceSheetProvisionForShortTermLiabilities: number;
  /** BSA66:  Quỹ khen thưởng, phúc lợi */
  balanceSheetBonusAndWelfareFunds: number;
  /** BSA67:  Nợ dài hạn */
  balanceSheetLongTermLiabilities: number;
  /** BSA68:  Phải trả nhà cung cấp dài hạn */
  balanceSheetLongTermTradePayables: number;
  /** BSA69:  Phải trả nội bộ dài hạn */
  balanceSheetLongTermIntercompanyPayables: number;
  /** BSA70:  Phải trả dài hạn khác */
  balanceSheetOtherLongTermPayables: number;
  /** BSA71:  Vay dài hạn */
  balanceSheetLongTermLoans: number;
  /** BSA72:  Thuế thu nhập hoãn lại phải trả */
  balanceSheetDeferredIncomeTaxLiabilities: number;
  /** BSA73:  Dự phòng trợ cấp thôi việc */
  balanceSheetProvisionForSeveranceAllowances: number;
  /** BSA74:  Dự phòng các khoản công nợ dài hạn */
  balanceSheetProvisionForLongTermLiabilities: number;
  /** BSA75:  Dự phòng nghiệp vụ (áp dụng cho Cty Bảo hiểm) */
  balanceSheetReservesBefore2014: number;
  /** BSA76:  Doanh thu chưa thực hiện */
  balanceSheetDeferredRevenue: number;
  /** BSA77:  Quỹ phát triển khoa học công nghệ */
  balanceSheetTechnologyScienceDevelopmentFund: number;
  /** BSA78:  VỐN CHỦ SỞ HỮU */
  balanceSheetOwnersEquity: number;
  /** BSA79:  Vốn và các quỹ */
  balanceSheetCapitalAndReserves: number;
  /** BSA80:  Vốn góp */
  balanceSheetPaidInCapital: number;
  /** BSA81:  Thặng dư vốn cổ phần */
  balanceSheetCapitalSurplus: number;
  /** BSA82:  Vốn khác */
  balanceSheetOwnersOtherCapital: number;
  /** BSA83:  Cổ phiếu quỹ */
  balanceSheetTreasuryShares: number;
  /** BSA84:  Chênh lệch đánh giá lại tài sản */
  balanceSheetDifferencesUponAssetRevaluation: number;
  /** BSA85:  Chênh lệch tỷ giá */
  balanceSheetForeignExchangeDifferences: number;
  /** BSA86:  Quỹ đầu tư và phát triển */
  balanceSheetInvestmentAndDevelopmentFunds: number;
  /** BSA87:  Quỹ dự phòng tài chính */
  balanceSheetFinancialReserveFunds: number;
  /** BSA88:  Quỹ dự trữ bắt buộc (Cty bảo hiểm) */
  balanceSheetStatutoryReserve: number;
  /** BSA89:  Quỹ quỹ khác */
  balanceSheetOtherFunds: number;
  /** BSA90:  Lãi chưa phân phối */
  balanceSheetRetainedEarnings: number;
  /** BSA91:  Quỹ hỗ trợ sắp xếp doanh nghiệp */
  balanceSheetEnterpriseArrangementFund: number;
  /** BSA92:  Vốn Ngân sách nhà nước và quỹ khác */
  balanceSheetBudgetSourcesAndOtherFunds: number;
  /** BSA93:  Quỹ khen thưởng, phúc lợi (trước 2010) */
  balanceSheetBonusAndWelfareFundsBefore2010: number;
  /** BSA94:  Vốn ngân sách nhà nước */
  balanceSheetBudgetSources: number;
  /** BSA95:  LỢI ÍCH CỦA CỔ ĐÔNG THIỂU SỐ */
  balanceSheetMinorityInterestsBefore2015: number;
  /** BSA96:  TỔNG CỘNG NGUỒN VỐN */
  balanceSheetTotalResources: number;
  /** BSB97:  Tiền gửi tại ngân hàng nhà nước Việt Nam */
  balanceSheetBalancesWithSBV: number;
  /** BSB98:  Tiền gửi tại các TCTD khác và cho vay các TCTD khác */
  balanceSheetPlacementsAndLoansToOtherCreditInstitutions: number;
  /** BSB99:  Chứng khoán kinh doanh */
  balanceSheetTradingSecuritiesNet: number;
  /** BSB100:  Chứng khoán kinh doanh */
  balanceSheetTradingSecurities: number;
  /** BSB101:  Dự phòng giảm giá chứng khoán kinh doanh */
  balanceSheetProvisionForTradingSecuritiesDiminution: number;
  /** BSB102:  Các công cụ tài chính phái sinh và các tài sản tài chính khác */
  balanceSheetDerivativesAndOtherFinancialAssets: number;
  /** BSB103:  Cho vay khách hàng */
  balanceSheetLoansToCustomersNet: number;
  /** BSB104:  Cho vay khách hàng */
  balanceSheetLoansToCustomers: number;
  /** BSB105:  Dự phòng rủi ro cho vay khách hàng */
  balanceSheetProvisionForCustomerLoansLosses: number;
  /** BSB106:  Chứng khoán đầu tư */
  balanceSheetInvestmentSecuritiesNet: number;
  /** BSB107:  Chứng khoán đầu tư sẵn sàng để bán */
  balanceSheetAvailableForSaleSecurities: number;
  /** BSB108:  Chứng khoán đầu tư giữ đến ngày đáo hạn */
  balanceSheetHeldToMaturityInvestments: number;
  /** BSB109:  Dự phòng giảm giá chứng khoán đầu tư */
  balanceSheetProvisionForInvestmentSecuritiesDiminution: number;
  /** BSB110:  Tài sản Có khác */
  balanceSheetOtherAssets: number;
  /** BSB111:  Các khoản nợ chính phủ và NHNN Việt Nam */
  balanceSheetDueToGovernmentAndSBV: number;
  /** BSB112:  Tiền gửi và vay các Tổ chức tín dụng khác */
  balanceSheetDepositsAndLoansFromOtherCreditInstitutions: number;
  /** BSB113:  Tiền gửi của khách hàng */
  balanceSheetDepositsFromCustomers: number;
  /** BSB114:  Các công cụ tài chính phái sinh và các khoản nợ tài chính khác */
  balanceSheetDerivativesAndOtherFinancialLiabilities: number;
  /** BSB115:  Vốn tài trợ, ủy thác đầu tư của Chính phủ và các tổ chức tín dụng khác */
  balanceSheetFundsFromGovernmentAndInstitutions: number;
  /** BSB116:  Phát hành giấy tờ có giá */
  balanceSheetValuablePapersIssued: number;
  /** BSB117:  Các khoản nợ khác */
  balanceSheetOtherLiabilities: number;
  /** BSB118:  Vốn của tổ chức tín dụng */
  balanceSheetCreditInstitutionCapital: number;
  /** BSB119:  Vốn đầu tư XDCB */
  balanceSheetFundForBasicConstruction: number;
  /** BSB120:  Cổ phiếu ưu đãi */
  balanceSheetPreferredSharesBank: number;
  /** BSB121:  Quỹ của tổ chức tín dụng */
  balanceSheetCreditInstitutionReserves: number;
  /** BSB122:  Thư tín dụng */
  balanceSheetLettersOfCredit: number;
  /** BSB123:  Thư tín dụng trả ngay */
  balanceSheetLettersOfCreditAtSight: number;
  /** BSB124:  Thư tín dụng trả chậm */
  balanceSheetDeferredLettersOfCredit: number;
  /** BSB125:  Khác */
  balanceSheetOtherCreditCommitments: number;
  /** BSB126:  Bảo lãnh tín dụng */
  balanceSheetCreditGuarantees: number;
  /** BSB127:  Bảo lãnh thanh toán */
  balanceSheetPaymentGuarantees: number;
  /** BSB128:  Bảo lãnh thực hiện hợp đồng */
  balanceSheetPerformanceGuarantees: number;
  /** BSB129:  Bảo lãnh dự thầu */
  balanceSheetTenderGuarantees: number;
  /** BSB130:  Bảo lãnh xuất khẩu */
  balanceSheetExportGuarantees: number;
  /** BSB131:  Khác */
  balanceSheetOtherGuarantees: number;
  /** BSB132:  Cam kết tín dụng */
  balanceSheetCreditCommitments: number;
  /** BSS133:  Phải thu về hoạt động giao dịch chứng khoán */
  balanceSheetReceivablesFromSecuritiesTrading: number;
  /** BSS134:  Vốn kinh doanh ở các đơn vị trực thuộc */
  balanceSheetCapitalInWhollyOwnedSubsidiaries: number;
  /** BSS135:  Phải trả hoạt động giao dịch chứng khoán */
  balanceSheetPayablesToSecuritiesTrading: number;
  /** BSS136:  Phải trả cổ tức, gốc và lãi trái phiếu */
  balanceSheetDividendPrincipalAndInterestPayables: number;
  /** BSS137:  Phải trả tổ chức phát hành chứng khoán */
  balanceSheetPayablesToSecuritiesIssuers: number;
  /** BSS138:  Dự phòng bồi thường thiệt hại cho nhà đầu tư */
  balanceSheetProvisionForInvestorCompensation: number;
  /** BSI139:  Tạm ứng */
  balanceSheetIntercompanyReceivablesInsurance: number;
  /** BSI140:  Phải thu từ hoạt động đầu tư tài chính */
  balanceSheetReceivablesFromFinancialInvestments: number;
  /** BSI141:  Tài sản thiếu chờ xử lý */
  balanceSheetShortageOfAssetsPendingResolution: number;
  /** BSI142:  Các khoản cầm cố, ký cược, ký quỹ ngắn hạn */
  balanceSheetShortTermMarginDeposits: number;
  /** BSI143:  CHO VAY VÀ ỨNG TRƯỚC CHO KHÁCH HÀNG */
  balanceSheetLoansAndAdvancesToCustomersTotal: number;
  /** BSI144:  Cho vay và ứng trước cho khách hàng */
  balanceSheetLoansAndAdvancesToCustomers: number;
  /** BSI145:  Dự phòng rủi ro tín dụng */
  balanceSheetProvisionForCreditLoss: number;
  /** BSI146:  Tài sản ký quỹ dài hạn */
  balanceSheetLongTermDeposits: number;
  /** BSI147:  Tiền gửi của khách hàng và các tổ chức tín dụng khác */
  balanceSheetAmountDueToCustomers: number;
  /** BSI148:  Tiền gửi của tổ chức tín dụng */
  balanceSheetDepositsFromCommercialBanks: number;
  /** BSI149:  Tiền gửi của khách hàng */
  balanceSheetDepositsFromCustomersInsurance: number;
  /** BSI150:  Ký quỹ, ký cược dài hạn */
  balanceSheetLongTermMarginDeposits: number;
  /** BSI151:  Dự phòng phí chưa được hưởng */
  balanceSheetUnearnedPremiumReserveBefore2014: number;
  /** BSI152:  Dự phòng toán học */
  balanceSheetTechnicalReserveBefore2014: number;
  /** BSI153:  Dự phòng bồi thường */
  balanceSheetClaimReserveBefore2014: number;
  /** BSI154:  Dự phòng dao động lớn */
  balanceSheetCatastropheReserveBefore2014: number;
  /** BSI155:  Dự phòng chia lãi */
  balanceSheetDividendReserveBefore2014: number;
  /** BSI156:  Dự phòng đảm bảo cân đối */
  balanceSheetEqualizationReserveBefore2014: number;
  /** BSB157:  Nợ tiềm tàng và các cam kết tín dụng */
  balanceSheetContingentLiabilities: number;
  /** BSB158:  Bảo lãnh vay vốn */
  balanceSheetLoanGuarantees: number;
  /** BSA159:  Phải thu về cho vay ngắn hạn */
  balanceSheetShortTermLoansReceivables: number;
  /** BSA160:  Giao dịch mua bán lại trái phiếu chính phủ */
  balanceSheetGovernmentBondsPurchasedForResaleAssets: number;
  /** BSA161:  Trả trước người bán dài hạn */
  balanceSheetLongTermPrepaymentsToSuppliers: number;
  /** BSA162:  Phải thu về cho vay dài hạn */
  balanceSheetLongTermLoansReceivables: number;
  /** BSA163:  Tài sản dở dang dài hạn */
  balanceSheetLongTermIncompleteAssets: number;
  /** BSA164:  Chi phí sản xuất, kinh doanh dở dang dài hạn */
  balanceSheetLongTermCostOfWorkInProgress: number;
  /** BSA165:  Đầu tư nắm giữ đến ngày đáo hạn */
  balanceSheetHeldToMaturityInvestmentsAdditional: number;
  /** BSA166:  Thiết bị, vật tư, phụ tùng thay thế dài hạn */
  balanceSheetLongTermEquipmentAndSpareParts: number;
  /** BSA167:  Doanh thu chưa thực hiện ngắn hạn */
  balanceSheetShortTermUnrealizedRevenue: number;
  /** BSA168:  Quỹ bình ổn giá */
  balanceSheetPriceStabilizationFund: number;
  /** BSA169:  Giao dịch mua bán lại trái phiếu chính phủ */
  balanceSheetGovernmentBondsPurchasedForResaleLiabilities: number;
  /** BSA170:  Người mua trả tiền trước dài hạn */
  balanceSheetLongTermAdvancesFromCustomers: number;
  /** BSA171:  Chi phí phải trả dài hạn */
  balanceSheetLongTermAccruedExpenses: number;
  /** BSA172:  Phải trả nội bộ về vốn kinh doanh */
  balanceSheetIntraCompanyPayablesForOperatingCapital: number;
  /** BSA173:  Trái phiếu chuyển đổi */
  balanceSheetConvertibleBonds: number;
  /** BSA174:  Cổ phiếu ưu đãi */
  balanceSheetPreferredShares: number;
  /** BSA175:  Cổ phiếu phổ thông */
  balanceSheetCommonShares: number;
  /** BSA176:  Quyền chọn chuyển đổi trái phiếu */
  balanceSheetConversionOptionsOnConvertibleBonds: number;
  /** BSA177:  LNST chưa phân phối lũy kế đến cuối kỳ trước */
  balanceSheetBeginningAccumulatedUndistributedEarnings: number;
  /** BSA178:  LNST chưa phân phối kỳ này */
  balanceSheetCurrentPeriodUndistributedEarnings: number;
  /** BSB179:  Cam kết giao dịch hối đoái */
  balanceSheetForeignExchangeTransactionCommitments: number;
  /** BSB180:  Cam kết mua ngoại tệ */
  balanceSheetForeignExchangeBuyingCommitments: number;
  /** BSB181:  Cam kết bán ngoại tệ */
  balanceSheetForeignExchangeSellingCommitments: number;
  /** BSB182:  Cam kết giao dịch hoán đổi */
  balanceSheetSwapCommitments: number;
  /** BSB183:  Cam kết giao dịch tương lai */
  balanceSheetFutureCommitments: number;
  /** BSB184:  Cam kết cho vay không hủy ngang */
  balanceSheetIrrevocableLoanCommitments: number;
  /** BSB185:  Cam kết trong nghiệp vụ L/C */
  balanceSheetLettersOfCreditCommitments: number;
  /** BSB186:  Cam kết khác */
  balanceSheetOtherCommitments: number;
  /** BSS187:  Tiền gửi của nhà đầu tư về giao dịch chứng khoán */
  balanceSheetInvestorDepositsForSecuritiesTrading: number;
  /** BSA188:  Xây dựng cơ bản dở dang */
  balanceSheetConstructionInProgress: number;
  /** BSS189:  Đầu tư chứng khoán dài hạn */
  balanceSheetLongTermSecuritiesInvestment: number;
  /** BSI190:  Chi phí hoa hồng chưa phân bổ */
  balanceSheetUndistributedCommissionExpenses: number;
  /** BSI191:  Chi phí trả trước ngắn hạn khác */
  balanceSheetOtherShortTermPrepayments: number;
  /** BSI192:  Tài sản tái bảo hiểm */
  balanceSheetReinsuranceAssets: number;
  /** BSI193:  Dự phòng phí nhượng tái bảo hiểm */
  balanceSheetProvisionForPremiumOutwardReinsurance: number;
  /** BSI194:  Dự phòng bồi thường nhượng tái bảo hiểm */
  balanceSheetProvisionForClaimsFromOutwardReinsurance: number;
  /** BSI195:  Ký quỹ bảo hiểm */
  balanceSheetInsuranceDeposits: number;
  /** BSI196:  Phải thu dài hạn khác */
  balanceSheetOtherLongTermReceivablesAdditional: number;
  /** BSI197:  Doanh thu hoa hồng chưa được hưởng */
  balanceSheetUnearnedCommissionIncome: number;
  /** BSI198:  Phải thu về hợp đồng bảo hiểm */
  balanceSheetReceivablesFromInsuranceContracts: number;
  /** BSI199:  Phải thu khác của khách hàng */
  balanceSheetOtherReceivablesFromCustomers: number;
  /** BSI200:  Phải trả về hợp đồng bảo hiểm */
  balanceSheetPayablesFromInsuranceContracts: number;
  /** BSI201:  Phải trả khác cho người bán */
  balanceSheetOtherPayablesToSuppliers: number;
  /** BSI202:  Dự phòng nghiệp vụ bảo hiểm */
  balanceSheetInsuranceReserve: number;
  /** BSI203:  Dự phòng phí chưa được hưởng */
  balanceSheetUnearnedPremiumReserve: number;
  /** BSI204:  Dự phòng toán học */
  balanceSheetMathematicalReserve: number;
  /** BSI205:  Dự phòng bồi thường */
  balanceSheetClaimReserve: number;
  /** BSI206:  Dự phòng dao động lớn */
  balanceSheetCatastropheReserve: number;
  /** BSI207:  Dự phòng chia lãi */
  balanceSheetDividendReserves: number;
  /** BSI208:  Dự phòng đảm bảo cân đối */
  balanceSheetEqualizationReserves: number;
  /** BSA209:  Lợi thế thương mại */
  balanceSheetGoodwill: number;
  /** BSA210:  Lợi ích cổ đông không kiểm soát */
  balanceSheetMinorityInterests: number;
  /** BSA211:  Nguồn kinh phí đã hình thành TSCĐ */
  balanceSheetFundsUsedForFixedAssetAcquisitions: number;
  /** BSS212:  Tiền chi nộp quỹ hỗ trợ thanh toán */
  balanceSheetPaymentsToSettlementAssistanceFund: number;
  /** BSS213:  Chứng khoán sẵn sàng để bán */
  balanceSheetAvailableForSaleSecuritiesSecurities: number;
  /** BSS214:  Tài sản tài chính ngắn hạn */
  balanceSheetShortTermFinancialAssets: number;
  /** BSS215:  Các khoản cho vay */
  balanceSheetLoans: number;
  /** BSS216:  Các khoản tài chính sẵn sàng để bán (AFS) */
  balanceSheetAvailableForSaleAssets: number;
  /** BSS217:  Các khoản phải thu (từ 2016) */
  balanceSheetReceivablesFrom2016: number;
  /** BSS218:  Phải thu bán các tài sản tài chính */
  balanceSheetAccountReceivables: number;
  /** BSS219:  Phải thu và sự thu cổ tức, tiền lãi các tài sản tài chính */
  balanceSheetReceivablesAndAccruedDividendInterest: number;
  /** BSS220:  Phải thu cổ tức, tiền lãi đến ngày nhận */
  balanceSheetDueOrOverdueReceivablesOnDividendInterest: number;
  /** BSS221:  Trong đó: phải thu khó đòi về cổ tức, tiền lãi đến ngày nhận nhưng chưa nhận được */
  balanceSheetDoubtfulDebtsOnOverdueDividendInterest: number;
  /** BSS222:  Dự thu cổ tức, tiền lãi chưa đến ngày nhận */
  balanceSheetUndueAccruedDividendInterest: number;
  /** BSS223:  Thuế giá trị gia tăng được khấu trừ */
  balanceSheetDeductibleValueAddedTax: number;
  /** BSS224:  Phải thu các dịch vụ CTCK cung cấp */
  balanceSheetReceivablesFromStockCompanyServices: number;
  /** BSS225:  Phải thu về lỗi giao dịch CK */
  balanceSheetReceivablesFromTransactionErrors: number;
  /** BSS226:  Dự phòng suy giảm giá trị các khoản phải thu */
  balanceSheetProvisionForShortTermReceivables: number;
  /** BSS227:  Tạm ứng */
  balanceSheetAdvances: number;
  /** BSS228:  Vật tư văn phòng, công cụ, dụng cụ */
  balanceSheetToolsAndEquipment: number;
  /** BSS229:  Cầm cố, thế chấp, ký quỹ, ký cược ngắn hạn */
  balanceSheetShortTermCollaterals: number;
  /** BSS230:  Dự phòng suy giảm giá trị TSNH khác */
  balanceSheetProvisionForOtherCurrentAssets: number;
  /** BSS231:  Tài sản tài chính dài hạn */
  balanceSheetLongTermFinancialAssets: number;
  /** BSS232:  Đánh giá TSCĐHH theo giá trị hợp lý */
  balanceSheetRevaluationOfTangibleFixedAssets: number;
  /** BSS233:  Đánh giá TSCĐTTC theo giá trị hợp lý */
  balanceSheetRevaluationOfFinanceLeaseAssets: number;
  /** BSS234:  Đánh giá TSCĐVH theo giá trị hợp lý */
  balanceSheetRevaluationOfIntangibleFixedAssets: number;
  /** BSS235:  Đánh giá BĐSĐT theo giá trị hợp lý */
  balanceSheetRevaluationOfInvestmentProperty: number;
  /** BSS236:  Cầm cố, thế chấp, ký quỹ, ký cược dài hạn */
  balanceSheetLongTermCollaterals: number;
  /** BSS237:  Dự phòng suy giảm giá trị tài sản dài hạn */
  balanceSheetProvisionForLongTermAssets: number;
  /** BSS238:  Vay ngắn hạn */
  balanceSheetShortTermLoansSecurities: number;
  /** BSS239:  Nợ thuê tài sản tài chính ngắn hạn */
  balanceSheetShortTermFinanceLease: number;
  /** BSS240:  Vay tài sản tài chính ngắn hạn */
  balanceSheetShortTermFinancialAssetsLoans: number;
  /** BSS241:  Trái phiếu chuyển đổi ngắn hạn */
  balanceSheetShortTermConvertibleBonds: number;
  /** BSS242:  Trái phiếu phát hành ngắn hạn */
  balanceSheetShortTermBondsIssued: number;
  /** BSS243:  Vay quỹ hỗ trợ thanh toán */
  balanceSheetLoansFromPayableAssistanceFund: number;
  /** BSS244:  Phải trả về lỗi giao dịch các tài sản tài chính */
  balanceSheetPayablesFromTransactionErrors: number;
  /** BSS245:  Các khoản trích nộp phúc lợi nhân viên */
  balanceSheetEmployeesWelfarePayable: number;
  /** BSS246:  Nhận ký quỹ, ký cược ngắn hạn */
  balanceSheetShortTermCollateralsReceived: number;
  /** BSS247:  Vay dài hạn */
  balanceSheetLongTermLoansSecurities: number;
  /** BSS248:  Nợ thuê tài chính dài hạn */
  balanceSheetLongTermFinancialLease: number;
  /** BSS249:  Vay tài sản tài chính dài hạn */
  balanceSheetLongTermFinancialAssetsLoans: number;
  /** BSS250:  Trái phiếu phát hành dài hạn */
  balanceSheetLongTermBondsIssued: number;
  /** BSS251:  Nhận ký quỹ, ký cược dài hạn */
  balanceSheetLongTermCollateralsReceived: number;
  /** BSS252:  Vốn đầu tư của chủ sở hữu */
  balanceSheetShareholdersEquity: number;
  /** BSS253:  Quỹ dự trữ điều lệ */
  balanceSheetCharterReserve: number;
  /** BSS254:  Lợi nhuận đã thực hiện */
  balanceSheetRealizedGain: number;
  /** BSS255:  Lợi nhuận chưa thực hiện */
  balanceSheetUnrealizedGain: number;
  /** BSS256:  LỢI NHUẬN ĐÃ PHÂN PHỐI CHO NHÀ ĐẦU TƯ */
  balanceSheetDistributedProfitToInvestors: number;
  /** BSS257:  Lợi nhuận đã phân phối cho Nhà đầu tư trong năm */
  balanceSheetDistributedProfitToInvestorsDuringYear: number;
  /** BSB258:  Tiền gửi tại các TCTD khác */
  balanceSheetPlacementsWithOtherCreditInstitutions: number;
  /** BSB259:  Cho vay các TCTD khác */
  balanceSheetLoansToOtherCreditInstitutions: number;
  /** BSB260:  Dự phòng rủi ro */
  balanceSheetProvisionForLossesOnLoansToCreditInstitutions: number;
  /** BSB261:  Hoạt động mua nợ */
  balanceSheetDebtBuyingActivities: number;
  /** BSB262:  Mua nợ */
  balanceSheetDebtBuying: number;
  /** BSB263:  Dự phòng rủi ro hoạt động mua nợ */
  balanceSheetProvisionForDebtBuyingLosses: number;
  /** BSB264:  Các khoản phải thu */
  balanceSheetOtherReceivablesBank: number;
  /** BSB265:  Các khoản lãi và phí phải thu */
  balanceSheetAccruedInterestAndFeeReceivables: number;
  /** BSB266:  Tài sản thuế TNDN hoãn lại */
  balanceSheetDeferredTaxAssetsBank: number;
  /** BSB267:  Tài sản Có khác */
  balanceSheetOtherAssetsBank: number;
  /** BSB268:  Trong đó: Lợi thế thương mại */
  balanceSheetGoodwillBank: number;
  /** BSB269:  Dự phòng rủi ro cho các tài sản Có nội bảng khác */
  balanceSheetProvisionForOtherAssetsBank: number;
  /** BSB270:  Tiền gửi của các tổ chức tín dụng khác */
  balanceSheetDepositsFromOtherCreditInstitutions: number;
  /** BSB271:  Vay các tổ chức tín dụng khác */
  balanceSheetLoansFromOtherCreditInstitutions: number;
  /** BSB272:  Các khoản lãi, phí phải trả */
  balanceSheetAccruedInterestAndFeePayables: number;
  /** BSB273:  Thuế TNDN hoãn lại phải trả */
  balanceSheetTaxPayables: number;
  /** BSB274:  Các khoản phải trả và công nợ khác */
  balanceSheetOtherLiabilitiesBank: number;
  /** BSB275:  Dự phòng rủi ro khác */
  balanceSheetProvisionsForOffBalanceSheetCommitments: number;
  /** BSA276:  Vốn Góp liên doanh */
  balanceSheetInvestmentsInJointVenture: number;
  /** BSA277:  Đầu tư vào công ty liên kết */
  balanceSheetInvestmentsInAssociatesAdditional: number;
  /** BSA278:  Nguồn vốn đầu tư XDCB */
  balanceSheetConstructionInvestmentFund: number;
  /** BSI279:  Tài sản thuê ngoài */
  balanceSheetOperatingLeaseAssets: number;
  /** BSI280:  Vật tư, hàng hóa nhận giữ hộ, nhận gia công */
  balanceSheetGoodsHeldUnderTrustOrProcessing: number;
  /** BSI281:  Nợ khó đòi đã xử lý */
  balanceSheetBadDebtWrittenOff: number;
  /** BSI282:  Hợp đồng bảo hiểm chưa phát sinh trách nhiệm */
  balanceSheetInsuranceContractsNotYetResponsible: number;
  /** BSI283:  Ngoại tệ các loại */
  balanceSheetForeignCurrencies: number;
  /** BSI284:  Đô la Mỹ (USD) */
  balanceSheetUSD: number;
  /** BSI285:  Đồng Euro (EUR) */
  balanceSheetEUR: number;
  /** BSI286:  Đồng Yên Nhật (JPY) */
  balanceSheetJPY: number;
  /** BSI287:  Ngoại tệ khác */
  balanceSheetOtherCurrencies: number;

  /** ISA1:  Doanh số */
  incomeStatementSales: number;
  /** ISA2:  Các khoản giảm trừ */
  incomeStatementSalesDeductions: number;
  /** ISA3:  Doanh số thuần */
  incomeStatementNetSales: number;
  /** ISA4:  Giá vốn hàng bán */
  incomeStatementCostOfSales: number;
  /** ISA5:  Lãi gộp */
  incomeStatementGrossProfit: number;
  /** ISA6:  Thu nhập tài chính */
  incomeStatementFinancialIncome: number;
  /** ISA7:  Chi phí tài chính */
  incomeStatementFinancialExpenses: number;
  /** ISA8:  Chi phí tiền lãi */
  incomeStatementInterestExpenses: number;
  /** ISA9:  Chi phí bán hàng */
  incomeStatementSellingExpenses: number;
  /** ISA10:  Chi phí quản lý doanh nghiệp */
  incomeStatementGeneralAndAdminExpenses: number;
  /** ISA11:  Lãi/(lỗ) từ hoạt động kinh doanh */
  incomeStatementOperatingProfitLoss: number;
  /** ISA12:  Thu nhập khác */
  incomeStatementOtherIncome: number;
  /** ISA13:  Chi phí khác */
  incomeStatementOtherExpenses: number;
  /** ISA14:  Thu nhập khác, ròng */
  incomeStatementNetOtherIncomeExpenses: number;
  /** ISA15:  Lãi/(lỗ) từ công ty liên doanh */
  incomeStatementIncomeFromInvestmentsInOtherEntities: number;
  /** ISA16:  Lãi/(lỗ) ròng trước thuế */
  incomeStatementNetProfitLossBeforeTax: number;
  /** ISA17:  Thuế thu nhập doanh nghiệp – hiện thời */
  incomeStatementCurrentBusinessIncomeTax: number;
  /** ISA18:  Thuế thu nhập doanh nghiệp – hoãn lại */
  incomeStatementDeferredBusinessIncomeTax: number;
  /** ISA19:  Chi phí thuế thu nhập doanh nghiệp */
  incomeStatementBusinessIncomeTaxExpenses: number;
  /** ISA20:  Lãi/(lỗ) thuần sau thuế */
  incomeStatementNetProfitLossAfterTax: number;
  /** ISA21:  Lợi ích của cổ đông thiểu số */
  incomeStatementMinorityInterests: number;
  /** ISA22:  Cổ đông của Công ty mẹ */
  incomeStatementAttributableToParentCompany: number;
  /** ISA23:  Lãi cơ bản trên cổ phiếu */
  incomeStatementBasicEPS: number;
  /** ISA24:  Lãi trên cổ phiếu pha loãng */
  incomeStatementDilutedEPS: number;
  /** ISB25:  Thu nhập lãi và các khoản thu nhập tương tự */
  incomeStatementInterestAndSimilarIncome: number;
  /** ISB26:  Chi phí lãi và các chi phí tương tự */
  incomeStatementInterestAndSimilarExpenses: number;
  /** ISB27:  Thu nhập lãi thuần */
  incomeStatementNetInterestIncome: number;
  /** ISB28:  Thu nhập từ hoạt động dịch vụ */
  incomeStatementFeesAndCommissionIncome: number;
  /** ISB29:  Chi phí hoạt động dịch vụ */
  incomeStatementFeesAndCommissionExpenses: number;
  /** ISB30:  Lãi thuần từ hoạt động dịch vụ */
  incomeStatementNetFeeAndCommissionIncome: number;
  /** ISB31:  Lãi/lỗ thuần từ hoạt động kinh doanh ngoại hối và vàng */
  incomeStatementNetGainLossFromForeignCurrencyAndGold: number;
  /** ISB32:  Lãi/lỗ thuần từ mua bán chứng khoán kinh doanh */
  incomeStatementNetGainLossFromTradingSecurities: number;
  /** ISB33:  Lãi/lỗ thuần từ mua bán chứng khoán đầu tư */
  incomeStatementNetGainLossFromDisposalOfInvestmentSecurities: number;
  /** ISB34:  Thu nhập từ hoạt động khác */
  incomeStatementOtherIncomeBank: number;
  /** ISB35:  Chi phí hoạt động khác */
  incomeStatementOtherExpensesBank: number;
  /** ISB36:  Lãi/lỗ thuần từ hoạt động khác */
  incomeStatementNetOtherIncomeExpensesBank: number;
  /** ISB37:  Thu nhập từ góp vốn, mua cổ phần */
  incomeStatementDividendsIncome: number;
  /** ISB38:  Tổng thu nhập hoạt động */
  incomeStatementTotalOperatingIncome: number;
  /** ISB39:  Chi phí hoạt động */
  incomeStatementGeneralAndAdminExpensesBank: number;
  /** ISB40:  LN thuần từ hoạt động kinh doanh trước CF dự phòng rủi ro tín dụng */
  incomeStatementOperatingProfitBeforeProvisionForCreditLosses: number;
  /** ISB41:  Chi phí dự phòng rủi ro tín dụng */
  incomeStatementProvisionForCreditLosses: number;
  /** ISS42:  Doanh thu hoạt động môi giới chứng khoán */
  incomeStatementRevenueInBrokerageServices: number;
  /** ISS43:  Doanh thu hoạt động đầu tư chứng khoán, góp vốn */
  incomeStatementRevenueInSecuritiesInvestmentAndOtherActivities: number;
  /** ISS44:  Doanh thu bảo lãnh phát hành chứng khoán */
  incomeStatementRevenueInUnderwritingServices: number;
  /** ISS45:  Doanh thu đại lý phát hành chứng khoán */
  incomeStatementRevenueInIssuanceAgencyServices: number;
  /** ISS46:  Doanh thu hoạt động tư vấn */
  incomeStatementRevenueInStockInvestmentAdvisoryServices: number;
  /** ISS47:  Doanh thu lưu ký chứng khoán */
  incomeStatementRevenueInSecuritiesCustodyServices: number;
  /** ISS48:  Doanh thu hoạt động ủy thác đấu giá */
  incomeStatementRevenueInAuctionTrustServices: number;
  /** ISS49:  Thu cho thuê sử dụng tài sản */
  incomeStatementRentalIncomeFromInvestmentProperty: number;
  /** ISS50:  Doanh thu khác */
  incomeStatementOtherRevenue: number;
  /** ISI51:  Thu phí bảo hiểm */
  incomeStatementGrossWrittenPremium: number;
  /** ISI52:  Thu phí nhận tái bảo hiểm */
  incomeStatementReinsurancePremiumAssumed: number;
  /** ISI53:  Các khoản giảm trừ doanh thu */
  incomeStatementDeductions: number;
  /** ISI54:  Chuyển phí nhượng tái bảo hiểm */
  incomeStatementReinsurancePremiumCeded: number;
  /** ISI55:  Giảm phí */
  incomeStatementPremiumDeductions: number;
  /** ISI56:  Hoàn phí */
  incomeStatementPremiumReturns: number;
  /** ISI57:  Các khoản giảm trừ khác */
  incomeStatementOtherDeductions: number;
  /** ISI58:  Tăng do dự phòng phí chưa được hưởng và dự phòng toán học */
  incomeStatementIncreaseInUnearnedPremiumAndTechnicalReserve: number;
  /** ISI59:  Thu hoa hồng nhượng tái bảo hiểm */
  incomeStatementCommissionOnReinsuranceCeded: number;
  /** ISI60:  Thu nhập khác hoạt động kinh doanh bảo hiểm */
  incomeStatementOtherIncomeInsurance: number;
  /** ISI61:  Thu khác nhận tái bảo hiểm */
  incomeStatementIncomeOnReinsuranceAssumed: number;
  /** ISI62:  Thu khác nhượng tái bảo hiểm */
  incomeStatementIncomeOnReinsuranceCeded: number;
  /** ISI63:  Thu hoạt động khác */
  incomeStatementIncomeFromOtherActivities: number;
  /** ISI64:  Doanh thu thuần từ hoạt động kinh doanh bảo hiểm */
  incomeStatementNetSalesFromInsuranceBusiness: number;
  /** ISI65:  Chi bồi thường bảo hiểm gốc và chi trả đáo hạn */
  incomeStatementClaimAndMaturityPaymentExpenses: number;
  /** ISI66:  Chi bồi thường nhận tái bảo hiểm */
  incomeStatementClaimExpensesForReinsuranceAssumed: number;
  /** ISI67:  Các khoản giảm trừ chi phí */
  incomeStatementDeductionsExpenses: number;
  /** ISI68:  Thu bồi thường nhượng tái bảo hiểm */
  incomeStatementRecoveriesFromReinsuranceCeded: number;
  /** ISI69:  Thu đòi người thứ ba */
  incomeStatementSubrogationRecoveries: number;
  /** ISI70:  Thu xử lý hàng bồi thường 100% */
  incomeStatementSalvages: number;
  /** ISI71:  Bồi thường thuộc trách nhiệm giữ lại */
  incomeStatementClaimExpensesOnRetainedRisks: number;
  /** ISI72:  Chi bồi thường từ quỹ dao động lớn */
  incomeStatementClaimExpensesUsingCatastropheReserve: number;
  /** ISI73:  Tăng/(giảm) dự phòng bồi thường */
  incomeStatementIncreaseDecreaseInClaimReserve: number;
  /** ISI74:  Trích dự phòng dao động lớn */
  incomeStatementProvisionForCatastropheReserve: number;
  /** ISI75:  Chi khác hoạt động kinh doanh bảo hiểm */
  incomeStatementOtherInsuranceOperatingExpenses: number;
  /** ISI76:  Chi khác hoạt động bảo hiểm gốc */
  incomeStatementOtherUnderwritingExpenses: number;
  /** ISI77:  Chi hoa hồng bảo hiểm gốc */
  incomeStatementCommissions: number;
  /** ISI78:  Chi đòi người thứ 3 */
  incomeStatementExpenseOfRecourseAgainstThirdParty: number;
  /** ISI79:  Chi xử lý hàng bồi thường 100% */
  incomeStatementExpenseOfHandlingFullyIndemnifiedGoods: number;
  /** ISI80:  Chi đề phòng hạn chế tổn thất */
  incomeStatementRiskMinimizationExpenses: number;
  /** ISI81:  Chi giám định, chi đánh giá rủi ro đối tượng được bảo hiểm, chi khác */
  incomeStatementLossAdjustingFeeAndRiskAssessment: number;
  /** ISI82:  Chi khác */
  incomeStatementOtherExpensesInsurance: number;
  /** ISI83:  Chi khác nhận tái bảo hiểm khác */
  incomeStatementOtherReinsuranceAssumedExpenses: number;
  /** ISI84:  Chi nhượng tái bảo hiểm */
  incomeStatementOtherReinsuranceCededExpenses: number;
  /** ISI85:  Chi phí trực tiếp kinh doanh hoạt động khác */
  incomeStatementOtherDirectInsuranceOperatingExpenses: number;
  /** ISI86:  Tổng chi trực tiếp hoạt động kinh doanh bảo hiểm */
  incomeStatementTotalDirectInsuranceOperatingExpenses: number;
  /** ISI87:  Lợi nhuận gộp hoạt động kinh doanh bảo hiểm */
  incomeStatementGrossInsuranceOperatingProfit: number;
  /** ISI88:  Thu nhập từ hoạt động ngân hàng */
  incomeStatementIncomeFromBankingActivities: number;
  /** ISI89:  Chi phí của hoạt động ngân hàng */
  incomeStatementExpensesFromBankingActivities: number;
  /** ISI90:  Thu nhập thuần từ hoạt động ngân hàng */
  incomeStatementNetOperatingIncomeFromBankingActivities: number;
  /** ISI91:  Thu nhập từ hoạt động khác */
  incomeStatementRevenueFromOtherActivities: number;
  /** ISI92:  Chi phí hoạt động khác */
  incomeStatementExpensesFromOtherActivities: number;
  /** ISI93:  Thu nhập thuần từ các hoạt động khác */
  incomeStatementNetOperatingIncomeFromOtherActivities: number;
  /** ISI94:  Chi phí quản lý doanh nghiệp liên quan trực tiếp đến hoạt động bảo hiểm */
  incomeStatementGeneralAndAdministrativeExpensesOfInsuranceOperation: number;
  /** ISI95:  Chi phí quản lý liên quan trực tiếp đến hoạt động ngân hàng */
  incomeStatementGeneralAndAdministrativeExpensesOfBankingOperation: number;
  /** ISI96:  Chi phí quản lý doanh nghiệp liên quan đến các lĩnh vực khác */
  incomeStatementGeneralAndAdministrativeExpensesOfOtherOperations: number;
  /** ISI97:  Lợi nhuận thuần hoạt động kinh doanh bảo hiểm */
  incomeStatementNetOperatingProfitFromInsuranceOperation: number;
  /** ISI98:  Lợi nhuận thuần hoạt động ngân hàng */
  incomeStatementNetProfitFromBankOperation: number;
  /** ISI99:  Lợi nhuận thuần từ các hoạt động khác */
  incomeStatementNetProfitFromOtherOperations: number;
  /** ISI100:  Lợi nhuận hoạt động tài chính */
  incomeStatementProfitFromFinancialActivities: number;
  /** ISI101:  Dự phòng đảm bảo cân đối */
  incomeStatementEqualizationReserve: number;
  /** ISA102:  Lãi/(lỗ) từ công ty liên doanh */
  incomeStatementGainLossFromJointVentures: number;
  /** ISI103:  Doanh thu phí bảo hiểm */
  incomeStatementRevenueFromInsurancePremium: number;
  /** ISI104:  Tăng/giảm dự phòng phí bảo hiểm gốc và nhận tái bảo hiểm */
  incomeStatementIncreaseDecreaseInUnearnedPremiumReserveForDirectAndOutwardReinsurance: number;
  /** ISI105:  Doanh thu phí bảo hiểm thuần */
  incomeStatementNetRevenueOfInsurancePremium: number;
  /** ISI106:  Hoa hồng nhượng tái bảo hiểm và doanh thu khác HĐKD Bảo hiểm */
  incomeStatementCommissionIncomeFromOutwardReinsuranceAndOtherIncomeFromInsuranceActivities: number;
  /** ISI107:  Thu bồi thường nhượng tái bảo hiểm */
  incomeStatementClaimRecoveriesFromOutwardReinsurance: number;
  /** ISI108:  Tăng/giảm dự phòng toán học */
  incomeStatementIncreaseDecreaseInMathematicalReserves: number;
  /** ISI109:  Tăng/giảm dự phòng bồi thường bảo hiểm gốc và nhận tái bảo hiểm */
  incomeStatementIncreaseDecreaseInClaimReserveForDirectAndInwardInsurance: number;
  /** ISI110:  Tăng/giảm dự phòng bồi thường nhượng tái bảo hiểm */
  incomeStatementIncreaseDecreaseInClaimReserveForOutwardInsurance: number;
  /** ISI111:  Tổng chi bồi thường bảo hiểm */
  incomeStatementTotalInsuranceClaimSettlementExpenses: number;
  /** ISI112:  Chi bán hàng */
  incomeStatementSellingExpensesInsurance: number;
  /** ISI113:  Lỗ thuần từ hoạt động bảo hiểm nhân thọ */
  incomeStatementLossFromLifeInsurance: number;
  /** ISI114:  Lãi thuần từ hoạt động bảo hiểm phi nhân thọ */
  incomeStatementNetProfitFromNonLifeInsurance: number;
  /** ISS115:  Lãi từ các tài sản tài chính ghi nhận thông qua lãi/lỗ (FVTPL) */
  incomeStatementIncomeFromFVTPLFinancialAssets: number;
  /** ISS116:  Lãi bán các tài sản tài chính PVTPL */
  incomeStatementIncomeFromSellingFVTPLFinancialAssets: number;
  /** ISS117:  Chênh lệch tăng đánh giá lại các TSTC thông qua lãi/lỗ */
  incomeStatementFVTPLRevaluationGain: number;
  /** ISS118:  Cổ tức, tiền lãi phát sinh từ tài sản tài chính PVTPL */
  incomeStatementDividendInterestFromFVTPLFinancialAssets: number;
  /** ISS119:  Lãi từ các khoản đầu tư nắm giữ đến ngày đáo hạn */
  incomeStatementIncomeFromHTMInvestments: number;
  /** ISS120:  Lãi từ các khoản cho vay và phải thu */
  incomeStatementIncomeFromLoansAndReceivables: number;
  /** ISS121:  Lãi từ các tài sản tài chính sẵn sàng để bán */
  incomeStatementIncomeFromAFSAssets: number;
  /** ISS122:  Lãi từ các công cụ phát sinh phòng ngừa rủi ro */
  incomeStatementIncomeFromDerivatives: number;
  /** ISS123:  Doanh thu hoạt động tư vấn tài chính */
  incomeStatementRevenueInFinancialAdvisoryServices: number;
  /** ISS124:  Lỗ các tài sản tài chính ghi nhận thông qua lãi lỗ (FVTPL) */
  incomeStatementLossFromFVTPLFinancialAssets: number;
  /** ISS125:  Lỗ bán các tài sản tài chính */
  incomeStatementLossFromSellingFVTPLFinancialAssets: number;
  /** ISS126:  Chênh lệch giảm đánh giá lại các TSTC thông qua lãi/lỗ */
  incomeStatementFVTPLRevaluationLoss: number;
  /** ISS127:  Chi phí giao dịch mua các tài sản tài chính FVTPL */
  incomeStatementFVTPLPurchaseTransactionCosts: number;
  /** ISS128:  Lỗ các khoản đầu tư nắm giữ đến ngày đáo hạn (HTM) */
  incomeStatementLossFromHTMInvestments: number;
  /** ISS129:  Chi phí lãi vay, lỗ từ các khoản cho vay và phải thu */
  incomeStatementInterestCostAndLossFromLoansAndReceivables: number;
  /** ISS130:  Lỗ bán các tài sản tài chính sẵn sàng để bán (AFS) */
  incomeStatementLossFromAFSAssets: number;
  /** ISS168:  Chi phí dự phòng TSTC, xử lý tổn thất các khoản phải thu khó đòi là lỗ suy giảm TSTC và chi phí đi vay */
  incomeStatementProvisionForLossesFromMortgageAssetsUncollectibleReceivablesAndLoanExpenses: number;
  /** ISS131:  Lỗ từ các tài sản tài chính phái sinh phòng ngừa rủi ro */
  incomeStatementLossFromDerivatives: number;
  /** ISS132:  Chi phí hoạt động tự doanh */
  incomeStatementProprietaryTradingServicesExpenses: number;
  /** ISS133:  Chi phí môi giới chứng khoán */
  incomeStatementBrokerageExpenses: number;
  /** ISS134:  Chi phí hoạt động bảo lãnh, đại lý phát hành chứng khoán */
  incomeStatementUnderwritingAndSecuritiesIssuanceExpenses: number;
  /** ISS135:  Chi phí tư vấn đầu tư chứng khoán */
  incomeStatementExpensesForSecuritiesAdvisory: number;
  /** ISS136:  Chí phí hoạt động đấu giá, ủy thác */
  incomeStatementBiddingAgentServiceExpenses: number;
  /** ISS137:  Chi phí lưu ký chứng khoán */
  incomeStatementInvestorSecuritiesDepositoryExpenses: number;
  /** ISS138:  Chi phí hoạt động tư vấn tài chính */
  incomeStatementExpensesForFinancialAdvisoryActivities: number;
  /** ISS139:  Chi phí khác */
  incomeStatementOtherExpensesSecurities: number;
  /** ISS140:  Chi phí sửa lỗi giao dịch chứng khoán, lỗi khác */
  incomeStatementExpensesFromSecuritiesTransactionErrorsAndOtherErrors: number;
  /** ISS141:  DOANH THU HOẠT ĐỘNG TÀI CHÍNH */
  incomeStatementRevenueFromFinancialActivities: number;
  /** ISS142:  Chênh lệch lãi tỷ giá hối đoái đã và chưa thực hiện */
  incomeStatementRealizedAndUnrealizedForeignExchangeGain: number;
  /** ISS143:  Doanh thu, dự thu cổ tức, lãi tiền gửi không cố định phát sinh trong kỳ */
  incomeStatementIncomeFromNonFixedAccruedDividendAndInterest: number;
  /** ISS144:  Lãi bán, thanh lý các khoản đầu tư vào công ty con, liên kết, liên doanh */
  incomeStatementGainFromDisposalsOrSalesOfInvestmentsInSubsidiariesAssociatesJointVentures: number;
  /** ISS145:  Doanh thu khác về đầu tư */
  incomeStatementOtherRevenueFromInvestments: number;
  /** ISS146:  CHI PHÍ TÀI CHÍNH */
  incomeStatementFinancialExpensesSecurities: number;
  /** ISS147:  Chênh lệch lỗ tỷ giá hối đoái đã và chưa thực hiện */
  incomeStatementRealizedAndUnrealizedForeignExchangeLoss: number;
  /** ISS148:  Chi phí lãi vay */
  incomeStatementInterestExpensesSecurities: number;
  /** ISS149:  Lỗ bán, thanh lý các khoản đầu tư vào công ty con, liên kết, liên doanh */
  incomeStatementLossFromDisposalsOrSalesOfInvestmentsInSubsidiariesAssociatesJointVentures: number;
  /** ISS150:  Chi phí dự phòng suy giảm giá trị các khoản đầu tư tài chính dài hạn */
  incomeStatementProvisionForLossesOnLongTermFinancialInvestment: number;
  /** ISS151:  Chi phí đầu tư khác */
  incomeStatementOtherInvestmentExpenses: number;
  /** ISS152:  CHI BÁN HÀNG */
  incomeStatementSellingCosts: number;
  /** ISS153:  Lợi nhuận đã thực hiện */
  incomeStatementRealizedGain: number;
  /** ISS154:  Lợi nhuận chưa thực hiện */
  incomeStatementUnrealizedGain: number;
  /** ISS155:  Lợi nhuận sau thuế trích các Quỹ dự trữ điều lệ, Quỹ Dự phòng tài chính và rủi ro nghề nghiệp theo quy định của Điều lệ Công ty */
  incomeStatementProfitAfterTaxDeductedOfFunds: number;
  /** ISS156:  Lãi/(Lỗ) từ đánh giá lại các khoản đầu tư giữ đến ngày đáo hạn */
  incomeStatementGainLossFromRevaluationOfHTMInvestments: number;
  /** ISS157:  Lãi/(Lỗ) từ đánh giá lại các tài sản tài chính sẵn sàng để bán */
  incomeStatementGainLossFromRevaluationOfAFSFinancialAssets: number;
  /** ISS158:  Lãi (lỗ) toàn diện khác được chia từ hoạt động đầu tư vào công ty con, đầu tư liên kết, liên doanh */
  incomeStatementGainLossDistributedFromInvestmentsInSubsidiariesAssociatesJointVentures: number;
  /** ISS159:  Lãi/(Lỗ) từ đánh giá lại các công cụ tài chính phái sinh */
  incomeStatementGainLossFromRevaluationOfDerivatives: number;
  /** ISS160:  Lãi/(lỗ) chênh lệch tỷ giá của hoạt động tại nước ngoài */
  incomeStatementGainLossFromForeignExchangeDifferenceOfOverseasOperations: number;
  /** ISS161:  Lãi, lỗ từ các khoản đầu tư vào công ty con. Công ty liên kết, liên doanh chưa chia */
  incomeStatementPreDistributedGainLossFromInvestmentsInSubsidiariesAssociatesJointVentures: number;
  /** ISS162:  Lãi, lỗ đánh giá công cụ phái sinh */
  incomeStatementGainLossFromRevaluationOfDerivativesAdditional: number;
  /** ISS163:  Lãi, lỗ đánh giá lại tài sản cố định theo mô hình giá trị hợp lý */
  incomeStatementGainLossFromRevaluationOfFixedAssetsUsingFairValueModel: number;
  /** ISS164:  Tổng thu nhập toàn diện */
  incomeStatementTotalComprehensiveIncome: number;
  /** ISS165:  Thu nhập toàn diện phân bổ cho chủ sở hữu */
  incomeStatementComprehensiveIncomeDistributedToShareholders: number;
  /** ISS166:  Thu nhập toàn diện phân bổ cho cổ đông không nắm quyền kiểm soát */
  incomeStatementComprehensiveIncomeDistributedToUncontrolledShareholders: number;
  /** ISS167:  THU NHẬP THUẦN TRÊN CỔ PHIẾU PHỔ THÔNG */
  incomeStatementNetIncomeToCommonShare: number;
  /** ISI175:  Tăng (giảm) dự phòng phí nhượng tái bảo hiểm */
  incomeStatementIncreaseDecreaseInReinsurancePremiumCeded: number;
  /** ISI176:  Chi bồi thường */
  incomeStatementCompensation: number;
  /** ISI177:  Tổng chi bồi thường */
  incomeStatementTotalCompensation: number;
  /** ISI178:  Lợi nhuận từ hoạt động đầu tư bất động sản */
  incomeStatementRealEstateInvestmentsProfits: number;
  /** ISI179:  Doanh thu kinh doanh bất động sản đầu tư */
  incomeStatementRevenueFromRealEstateInvestments: number;
  /** ISI180:  Giá vốn bất động sản đầu tư */
  incomeStatementCostOfRealEstateInvestments: number;
  /** ISS174:  Tổng thu nhập toàn diện khác */
  incomeStatementTotalOtherComprehensiveIncome: number;

  /** CFA1:  Lãi trước thuế - Net profit/(loss) before tax (Indirect) */
  cashFlowNetProfitBeforeTax: number;
  /** CFA2:  Khấu hao TSCĐ - Depreciation and amortisation (Indirect) */
  cashFlowDepreciationAndAmortisation: number;
  /** CFA3:  Chi phí dự phòng - Provisions (Indirect) */
  cashFlowProvisions: number;
  /** CFA4:  Lãi/(lỗ) chênh lệch tỷ giá chưa thực hiện - Unrealised foreign exchange gain/(loss) (Indirect) */
  cashFlowUnrealisedForeignExchangeGainLoss: number;
  /** CFA5:  Lãi/(lỗ) từ thanh lý tài sản cố định - Profit/(loss) from liquidating fixed assets (Indirect) */
  cashFlowProfitLossFromLiquidatingFixedAssets: number;
  /** CFA6:  Lãi/(lỗ) từ hoạt động đầu tư - Profit/(loss) from investing activities (Indirect) */
  cashFlowProfitLossFromInvestingActivities: number;
  /** CFA7:  Chi phí lãi vay - Interest expense (Indirect) */
  cashFlowInterestExpense: number;
  /** CFA8:  Thu lãi và cổ tức - Interest income and dividend (Indirect) */
  cashFlowInterestIncomeAndDividend: number;
  /** CFA9:  Lãi/(lỗ) trước những thay đổi vốn lưu động - Operating profit/(loss) before changes in WC (Indirect) */
  cashFlowOperatingProfitBeforeChangesInWC: number;
  /** CFA10:  (Tăng)/giảm các khoản phải thu - Increase/(decrease) in receivables (Indirect) */
  cashFlowIncreaseDecreaseInReceivables: number;
  /** CFA11:  (Tăng)/giảm hàng tồn kho - Increase/(decrease) in inventories (Indirect) */
  cashFlowIncreaseDecreaseInInventories: number;
  /** CFA12:  Tăng/(giảm) các khoản phải trả - (Increase)/decrease in payables (Indirect) */
  cashFlowIncreaseDecreaseInPayables: number;
  /** CFA13:  (Tăng)/giảm chi phí trả trước - Increase/(decrease) in prepaid expenses (Indirect) */
  cashFlowIncreaseDecreaseInPrepaidExpenses: number;
  /** CFA14:  Chi phí lãi vay đã trả - Interest paid (Indirect) */
  cashFlowInterestPaid: number;
  /** CFA15:  Thuế thu nhập doanh nghiệp đã trả - Business Income Tax paid (Indirect) */
  cashFlowBusinessIncomeTaxPaid: number;
  /** CFA16:  Tiền thu khác từ các hoạt động kinh doanh - Other receipts from operating activities (Indirect) */
  cashFlowOtherReceiptsFromOperatingActivities: number;
  /** CFA17:  Tiền chi khác từ các hoạt động kinh doanh - Other payments on operating activities (Indirect) */
  cashFlowOtherPaymentsOnOperatingActivities: number;
  /** CFA18:  Lưu chuyển tiền tệ ròng từ các hoạt động sản xuất kinh doanh - Net cash inflows/(outflows) from operating activities (Indirect) */
  cashFlowNetCashFlowsFromOperatingActivities: number;
  /** CFA19:  Tiền mua tài sản cố định và các tài sản dài hạn khác - Purchases of fixed assets and other long term assets (Indirect) */
  cashFlowPurchasesOfFixedAssetsAndOtherLongTermAssets: number;
  /** CFA20:  Tiền thu được từ thanh lý tài sản cố định - Proceeds from disposal of fixed assets (Indirect) */
  cashFlowProceedsFromDisposalOfFixedAssets: number;
  /** CFA21:  Tiền cho vay hoặc mua công cụ nợ - Loans granted, purchases of debt instruments (Indirect) */
  cashFlowLoansGrantedPurchasesOfDebtInstruments: number;
  /** CFA22:  Tiền thu từ cho vay hoặc thu từ phát hành công cụ nợ - Collection of loans, proceeds from sales of debt instruments (Indirect) */
  cashFlowCollectionOfLoansProceedsFromSalesOfDebtInstruments: number;
  /** CFA23:  Đầu tư vào các doanh nghiệp khác - Investments in other entities (Indirect) */
  cashFlowInvestmentsInOtherEntities: number;
  /** CFA24:  Tiền thu từ việc bán các khoản đầu tư vào các doanh nghiệp khác - Proceeds from divestment in other entities (Indirect) */
  cashFlowProceedsFromDivestmentInOtherEntities: number;
  /** CFA25:  Cổ tức và tiền lãi nhận được - Dividends and interest received (Indirect) */
  cashFlowDividendsAndInterestReceived: number;
  /** CFA26:  Lưu chuyển tiền tệ ròng từ hoạt động đầu tư - Net cash inflows/(outflows) from investing activities (Indirect) */
  cashFlowNetCashFlowsFromInvestingActivities: number;
  /** CFA27:  Tiền thu từ phát hành cổ phiếu và vốn góp - Proceeds from issue of shares (Indirect) */
  cashFlowProceedsFromIssueOfShares: number;
  /** CFA28:  Chi trả cho việc mua lại, trả lại cổ phiếu - Payments for share returns and repurchases (Indirect) */
  cashFlowPaymentsForShareReturnsAndRepurchases: number;
  /** CFA29:  Tiền thu được các khoản đi vay - Proceeds from loans (Indirect) */
  cashFlowProceedsFromLoans: number;
  /** CFA30:  Tiền trả các khoản đi vay - Repayment of loans (Indirect) */
  cashFlowRepaymentOfLoans: number;
  /** CFA31:  Tiền thanh toán vốn gốc đi thuê tài chính - Finance lease principal payments (Indirect) */
  cashFlowFinanceLeasePrincipalPayments: number;
  /** CFA32:  Cổ tức đã trả - Dividends paid (Indirect) */
  cashFlowDividendsPaid: number;
  /** CFA33:  Tiền lãi đã nhận - Interests, dividends, profits received (Indirect) */
  cashFlowInterestsReceived: number;
  /** CFA34:  Lưu chuyển tiền tệ từ hoạt động tài chính - Net cash inflows/(outflows) from financing activities (Indirect) */
  cashFlowNetCashFlowsFromFinancingActivities: number;
  /** CFA35:  Lưu chuyển tiền thuần trong kỳ - Net increase in cash and cash equivalents (Indirect) */
  cashFlowNetIncreaseInCashAndCashEquivalents: number;
  /** CFA36:  Tiền và tương đương tiền đầu kỳ - Cash and cash equivalents at the beginning of period (Indirect) */
  cashFlowCashAndCashEquivalentsAtBeginningOfPeriod: number;
  /** CFA37:  Ảnh hưởng của chênh lệch tỷ giá - Effect of foreign exchange differences (Indirect) */
  cashFlowEffectOfForeignExchangeDifferences: number;
  /** CFA38:  Tiền và tương đương tiền cuối kỳ - Cash and cash equivalents at the end of period (Indirect) */
  cashFlowCashAndCashEquivalentsAtEndOfPeriod: number;
  /** CFA39:  Tiền thu từ bán hàng, Cung cấp dịch vụ và DT khác - Gains from sales of goods and service provisions and other gains (Direct) */
  cashFlowGainsFromSalesOfGoodsAndServiceProvisionsAndOtherGains: number;
  /** CFA40:  Tiền chi trả cho người cung cấp HH và dịch vụ - Payments to suppliers (Direct) */
  cashFlowPaymentsToSuppliers: number;
  /** CFA41:  Tiền chi trả cho người lao động - Payments to employees (Direct) */
  cashFlowPaymentsToEmployees: number;
  /** CFA42:  Tiền chi trả lãi vay - Loan interests already paid (Direct) */
  cashFlowLoanInterestsAlreadyPaid: number;
  /** CFA43:  Tiền chi nộp thuế thu nhập doanh nghiệp - Payments for corporate income tax (Direct) */
  cashFlowPaymentsForCorporateIncomeTax: number;
  /** CFA44:  Tiền thu từ hoạt động kinh doanh - Other gains (Direct) */
  cashFlowOtherReceiptsDirect: number;
  /** CFA45:  Tiền chi khác cho hoạt động kinh doanh - Other disbursements (Direct) */
  cashFlowOtherDisbursements: number;
  /** CFB46:  Lãi/lỗ do bán/thanh lý bất động sản đầu tư - Gain/(loss) in disposal of investment properties (Indirect) */
  cashFlowGainLossInDisposalOfInvestmentProperties: number;
  /** CFB47:  Các điều chỉnh khác - Other adjustments (Indirect) */
  cashFlowOtherAdjustments: number;
  /** CFB48:  Tiền gửi tại NHNN - Increase/(decrease) in compulsory reserves with the SBV (Direct) */
  cashFlowIncreaseDecreaseInCompulsoryReservesWithSBV: number;
  /** CFB49:  Tăng/Giảm các khoản tiền gửi và cho vay các tổ chức tín dụng khác - Increase/(decrease) in placements with and loans to other credit institutions (Direct) */
  cashFlowIncreaseDecreaseInPlacementsWithAndLoansToOtherCreditInstitutions: number;
  /** CFB50:  Tăng/giảm các khoản về kinh doanh chứng khoán - Increase/(decrease) in trading securities (Direct) */
  cashFlowIncreaseDecreaseInTradingSecuritiesDirect: number;
  /** CFB51:  Tăng/Giảm các công cụ tài chính phái sinh và các tài sản tài chính khác - Increase/(decrease) in derivatives and other financial assets (Direct) */
  cashFlowIncreaseDecreaseInDerivativesAndOtherFinancialAssets: number;
  /** CFB52:  Tăng/Giảm các khoản cho vay khách hàng - Increase/(decrease) in loans and advances to customers (Direct) */
  cashFlowIncreaseDecreaseInLoansAndAdvancesToCustomers: number;
  /** CFB53:  Tăng/Giảm lãi, phí phải thu - Increase/(decrease) in interest receivable (Direct) */
  cashFlowIncreaseDecreaseInInterestReceivable: number;
  /** CFB54:  Tăng/Giảm nguồn dự phòng để bù đắp tổn thất các khoản - Increase/(decrease) in provision for loan losses (Direct) */
  cashFlowIncreaseDecreaseInProvisionForLoanLosses: number;
  /** CFB55:  Tăng/Giảm khác về tài sản hoạt động - Increase/(decrease) in other operating assets (Direct) */
  cashFlowIncreaseDecreaseInOtherOperatingAssets: number;
  /** CFB56:  Tăng/Giảm các khoản nợ chính phủ và NHNN - Increase/(decrease) in loans from the State and SBV (Direct) */
  cashFlowIncreaseDecreaseInLoansFromStateAndSBV: number;
  /** CFB57:  Tăng/Giảm các khoản tiền gửi và vay các TCTD khác - Increase/(decrease) in placements and loans from other credit institutions (Direct) */
  cashFlowIncreaseDecreaseInPlacementsAndLoansFromOtherCreditInstitutions: number;
  /** CFB58:  Tăng/Giảm tiền gửi của khách hàng - Increase/(decrease) in deposits from customers (Direct) */
  cashFlowIncreaseDecreaseInDepositsFromCustomers: number;
  /** CFB59:  Tăng/Giảm các công cụ tài chính phái sinh và các khoản nợ tài chính khác - Increase/(decrease) in derivatives and other financial liabilities (Direct) */
  cashFlowIncreaseDecreaseInDerivativesAndOtherFinancialLiabilities: number;
  /** CFB60:  Tăng/Giảm vốn tài trợ, uỷ thác đầu tư của chính phủ và các TCTD khác - Increase/(decrease) in funds received from Gov, international and other institutions (Direct) */
  cashFlowIncreaseDecreaseInFundsReceivedFromGovInternationalAndOtherInstitutions: number;
  /** CFB61:  Tăng/Giảm phát hành giấy tờ có giá - Increase/(decrease) in valuable papers issued (Direct) */
  cashFlowIncreaseDecreaseInValuablePapersIssued: number;
  /** CFB62:  Tăng/Giảm lãi, phí phải trả - Increase/(decrease) in accrued interest expenses (Direct) */
  cashFlowIncreaseDecreaseInAccruedInterestExpenses: number;
  /** CFB63:  Tăng/Giảm khác về công nợ hoạt động - Increase/(decrease) in other operating liabilities (Direct) */
  cashFlowIncreaseDecreaseInOtherOperatingLiabilities: number;
  /** CFB64:  Lưu chuyển tiền thuần từ hoạt động kinh doanh trước thuế thu nhập DN - Net cash flows from operating activities before BIT (Direct) */
  cashFlowNetCashFlowsFromOperatingActivitiesBeforeBIT: number;
  /** CFB65:  Chi từ các quỹ của TCTD - Payment from reserves (Direct) */
  cashFlowPaymentFromReserves: number;
  /** CFB66:  Thu được từ nợ khó đòi - Bad debt recoveries (Direct) */
  cashFlowBadDebtRecoveries: number;
  /** CFB67:  Tiền chi từ thanh lý, nhượng bán TSCĐ - Payments on disposal of fixed assets (Indirect) */
  cashFlowPaymentsOnDisposalOfFixedAssets: number;
  /** CFB68:  Mua sắm Bất động sản đầu tư - Purchases of investment properties (Indirect) */
  cashFlowPurchasesOfInvestmentProperties: number;
  /** CFB69:  Tiền thu từ bán, thanh lý bất động sản đầu tư - Proceeds from disposal of investment properties (Indirect) */
  cashFlowProceedsFromDisposalOfInvestmentProperties: number;
  /** CFB70:  Tiền chi ra do bán, thanh lý bất động sản đầu tư - Payments on disposal of investment properties (Indirect) */
  cashFlowPaymentsOnDisposalOfInvestmentProperties: number;
  /** CFB71:  Tiền thu từ phát hành giấy tờ có giá dài hạn đủ điều kiện tính vào vốn tự có và các khoản vốn vay dài hạn khác - Proceeds from issuance of convertible bonds (Indirect) */
  cashFlowProceedsFromIssuanceOfConvertibleBonds: number;
  /** CFB72:  Tiền chi thanh toán giấy tờ có giá dài hạn đủ điều kiện tính vào vốn tự có và các khoản vốn vay dài hạn khác - Payments for redemption of convertible bonds (Indirect) */
  cashFlowPaymentsForRedemptionOfConvertibleBonds: number;
  /** CFB73:  Tiền chi ra mua cổ phiếu quỹ - Purchase of treasury shares (Indirect) */
  cashFlowPurchaseOfTreasuryShares: number;
  /** CFB74:  Tiền thu được do bán cổ phiếu quỹ - Proceeds from selling of treasury shares (Indirect) */
  cashFlowProceedsFromSellingOfTreasuryShares: number;
  /** CFB75:  Thu nhập lãi và các khoản tương đương - Interest and similar receipts (Direct) */
  cashFlowInterestAndSimilarReceipts: number;
  /** CFB76:  Chi phí lãi và các khoản tương đương - Interest and similar payments (Direct) */
  cashFlowInterestAndSimilarPayments: number;
  /** CFB77:  Thu nhập từ hoạt động dịch vụ nhận được - Fees and commission income received (Direct) */
  cashFlowFeesAndCommissionIncomeReceived: number;
  /** CFB78:  Thu nhập thuần từ hoạt động kinh doanh ngoại hối và vàng - Net receipts from dealing of foreign currencies, gold (Direct) */
  cashFlowNetReceiptsFromDealingOfForeignCurrenciesGold: number;
  /** CFB79:  Thu nhập từ hoạt động kinh doanh chứng khoán - Net receipts from dealing of securities (Direct) */
  cashFlowNetReceiptsFromDealingOfSecurities: number;
  /** CFB80:  Thu nhập khác - Other operating income (Direct) */
  cashFlowOtherOperatingIncome: number;
  /** CFB81:  Thanh toán cho nhân viên và nhà cung cấp - Payments to employees and other operating expenses (Direct) */
  cashFlowPaymentsToEmployeesAndOtherOperatingExpenses: number;
  /** CFS82:  Tiền thu từ hoạt động kinh doanh - Receipts from operating activities (Direct) */
  cashFlowReceiptsFromOperatingActivitiesDirect: number;
  /** CFS83:  Tiền chi hoạt động kinh doanh - Payments to operating activities (Direct) */
  cashFlowPaymentsToOperatingActivitiesDirect: number;
  /** CFS84:  Tiền chi nộp Quỹ hỗ trợ thanh toán - Payments to Settlement Assistance Fund (Direct) */
  cashFlowPaymentsToSettlementAssistanceFund: number;
  /** CFS85:  Tiền thu giao dịch chứng khoán khách hàng - Receipts from securities trading of customers (Direct) */
  cashFlowReceiptsFromSecuritiesTradingOfCustomers: number;
  /** CFS86:  Tiền chi trả giao dịch chứng khoán khách hàng - Payments to securities trading of customers (Direct) */
  cashFlowPaymentsToSecuritiesTradingOfCustomers: number;
  /** CFS87:  Tiền thu bán chứng khoán phát hành - Receipts from listed securities trading (Direct) */
  cashFlowReceiptsFromListedSecuritiesTrading: number;
  /** CFS88:  Tiền chi trả tổ chức phát hành chứng khoán - Payments to securities issuers (Direct) */
  cashFlowPaymentsToSecuritiesIssuers: number;
  /** CFI89:  Phải thu hoạt động BH gốc - Gross written premium receivables (Indirect) */
  cashFlowGrossWrittenPremiumReceivables: number;
  /** CFI90:  Phải thu hoạt động BH Nhận Tái - Reinsurance assumed receivables (Indirect) */
  cashFlowReinsuranceAssumedReceivables: number;
  /** CFI91:  Phải thu hoạt động BH Nhượng tái - Reinsurance ceded receivables (Indirect) */
  cashFlowReinsuranceCededReceivables: number;
  /** CFI92:  Phải thu hoạt động khác - Other receivables from insurance activities (Indirect) */
  cashFlowOtherReceivablesFromInsuranceActivities: number;
  /** CFI93:  Phải thu/trả đơn vị nội bộ - Inter-company receivables/payables (Indirect) */
  cashFlowInterCompanyReceivablesPayables: number;
  /** CFI94:  Phải trả hoạt động BH gốc - Gross written premium payables (Indirect) */
  cashFlowGrossWrittenPremiumPayables: number;
  /** CFI95:  Phải trả hoạt động BH Nhận Tái - Reinsurance assumed payables (Indirect) */
  cashFlowReinsuranceAssumedPayables: number;
  /** CFI96:  Phải trả hoạt động BH Nhượng tái - Reinsurance ceded payables (Indirect) */
  cashFlowReinsuranceCededPayables: number;
  /** CFI97:  Phải trả hoạt động khác - Other payables from insurance activities (Indirect) */
  cashFlowOtherPayablesFromInsuranceActivities: number;
  /** CFI98:  Phải trả CBCNV - Payables to employees (Indirect) */
  cashFlowPayablesToEmployeesInsurance: number;
  /** CFI99:  Tiền thu phí bảo hiểm và thu lãi - Premium received and interest income received (Direct) */
  cashFlowPremiumReceivedAndInterestIncomeReceived: number;
  /** CFI100:  Tiền ủy thác đầu tư - Sums received in Trust (Direct) */
  cashFlowSumsReceivedInTrust: number;
  /** CFI101:  Tiền rút vốn ủy thác đầu tư - Cash withdrawal from entrusted investment (Direct) */
  cashFlowCashWithdrawalFromEntrustedInvestment: number;
  /** CFI102:  Tiền trả lại các nhà đầu tư và chuyển trả Bộ tài chính về thặng dư vốn thu từ cổ phần hóa - Cash returned for investors and MOF from Additional paid in capital (Direct) */
  cashFlowCashReturnedForInvestorsAndMOFFromAdditionalPaidInCapital: number;
  /** CFA103:  Phân bổ lợi thế thương mại - Amortisation of goodwill (Indirect) */
  cashFlowAmortisationOfGoodwill: number;
  /** CFA104:  Các khoản điều chỉnh khác - Other adjustments (Indirect) */
  cashFlowOtherAdjustmentsAdditional: number;
  /** CFA105:  (Tăng)/giảm chứng khoán kinh doanh - Increase/(decrease) in trading securities (Indirect) */
  cashFlowIncreaseDecreaseInTradingSecurities: number;
  /** CFB106:  Tiền thu các khoản nợ đã được xử lý, xóa, bù đắp bằng nguồn rủi ro - Receipts from debts written off or paid off by risk fund (Direct) */
  cashFlowReceiptsFromDebtsWrittenOffOrPaidOffByRiskFund: number;
  /** CFS107:  Tiền đã chi mua các tài sản tài chính - Cash outflow for purchasing financial assets (Direct) */
  cashFlowCashOutflowForPurchasingFinancialAssets: number;
  /** CFS108:  Tiền đã thu từ bán các tài sản tài chính - Cash inflow from selling financial assets (Direct) */
  cashFlowCashInflowFromSellingFinancialAssets: number;
  /** CFS109:  Cổ tức đã nhận - Dividend received (Direct) */
  cashFlowDividendReceived: number;
  /** CFS110:  Tiền lãi đã thu - Interests received (Direct) */
  cashFlowInterestsReceivedAdditional: number;
  /** CFS111:  Tiền chi trả Tổ chức cung cấp dịch vụ cho CTCK - Cash outflow for organizations providing services to the Securities company (Direct) */
  cashFlowCashOutflowForOrganizationsProvidingServicesToSecuritiesCompany: number;
  /** CFS112:  Tiền chi thanh toán các chi phí cho hoạt động mua, bán các tài sản tài chính (chi phí giao dịch, phí chuyển tiền) - Cash outflow for buying, selling financial assets (trading, money transferring expense) (Direct) */
  cashFlowCashOutflowForBuyingSellingFinancialAssets: number;
  /** CFS113:  Tiền vay Quỹ Hỗ trợ thanh toán - Loans from settlement assistance fund received (Direct) */
  cashFlowLoansFromSettlementAssistanceFundReceived: number;
  /** CFS114:  Tiền vay khác - Other loans received (Direct) */
  cashFlowOtherLoansReceived: number;
  /** CFS115:  Tiền chi trả gốc vay Quỹ Hỗ trợ thanh toán - Loans principal repaid to settlement assistance fund (Direct) */
  cashFlowLoansPrincipalRepaidToSettlementAssistanceFund: number;
  /** CFS116:  Tiền chi trả nợ gốc vay tài sản tài chính - Financial assets loans principal repaid (Direct) */
  cashFlowFinancialAssetsLoansPrincipalRepaid: number;
  /** CFS117:  Tiền chi trả gốc nợ vay khác - Other loans principal repaid (Direct) */
  cashFlowOtherLoansPrincipalRepaid: number;
  /** CFS118:  Tiền mặt, tiền gửi ngân hàng đầu kỳ - Cash and bank deposit at the beginning of the period (Direct) */
  cashFlowCashAndBankDepositAtBeginningOfPeriod: number;
  /** CFS119:  Tiền gửi ngân hàng cho hoạt động CTCK - Bank deposit for the Securities company activities (Direct) */
  cashFlowBankDepositForSecuritiesCompanyActivitiesBeginning: number;
  /** CFS120:  Các khoản tiền tương đương - Cash Equivalents (Direct) */
  cashFlowCashEquivalentsBeginning: number;
  /** CFS121:  Tiền mặt, tiền gửi ngân hàng kỳ - Cash and bank deposit during the period (Direct) */
  cashFlowCashAndBankDepositDuringPeriod: number;
  /** CFS122:  Tiền gửi ngân hàng cho hoạt động CTCK - Bank deposit for the Securities company activities (Direct) */
  cashFlowBankDepositForSecuritiesCompanyActivitiesDuring: number;
  /** CFS123:  Các khoản tiền tương đương - Cash Equivalents (Direct) */
  cashFlowCashEquivalentsDuring: number;
  /** CFS124:  Ảnh hưởng của thay đổi tỷ giá hối đoái quy đổi ngoại tệ - Effect of changes in foreign currency exchange rates (Direct) */
  cashFlowEffectOfChangesInForeignCurrencyExchangeRates: number;
  /** CFS125:  Tiền thu bán chứng khoán môi giới cho khách hàng - Cash inflow from securities sales broking (Direct Customer) */
  cashFlowCashInflowFromSecuritiesSalesBroking: number;
  /** CFS126:  Tiền chi mua chứng khoán môi giới cho khách hàng - Cash outflow from securities purchase broking (Direct Customer) */
  cashFlowCashOutflowFromSecuritiesPurchaseBroking: number;
  /** CFS127:  Tiền thu bán chứng khoán ủy thác của khách hàng - Cash inflow from mandated securities sales (Direct Customer) */
  cashFlowCashInflowFromMandatedSecuritiesSales: number;
  /** CFS128:  Tiền chi bán chứng khoán ủy thác của khách hàng - Cash outflow from mandated securities sales (Direct Customer) */
  cashFlowCashOutflowFromMandatedSecuritiesSales: number;
  /** CFS129:  Thu tiền từ tài khoản vãng lai của khách hàng - Cash inflow from current account of clients (Direct Customer) */
  cashFlowCashInflowFromCurrentAccountOfClients: number;
  /** CFS130:  Chi tiền từ tài khoản vãng lai của khách hàng - Cash outflow from current account of clients (Direct Customer) */
  cashFlowCashOutflowFromCurrentAccountOfClients: number;
  /** CFS131:  Thu vay Quỹ Hỗ trợ thanh toán - Cash inflow on loan from Settlement Assistance Fund (Direct Customer) */
  cashFlowCashInflowOnLoanFromSettlementAssistanceFund: number;
  /** CFS132:  Chi trả vay Quỹ Hỗ trợ thanh toán - Cash outflow on repaying loans from Settlement Assistance Fund (Direct Customer) */
  cashFlowCashOutflowOnRepayingLoansFromSettlementAssistanceFund: number;
  /** CFS133:  Nhận tiền gửi để thanh toán giao dịch chứng khoán của khách hàng - Cash received for the purpose of transaction of clients (Direct Customer) */
  cashFlowCashReceivedForTransactionOfClients: number;
  /** CFS134:  Nhận tiền gửi của Nhà đầu tư cho hoạt động ủy thác đầu tư của khách hàng - Cash received for the purpose of mandated investment of clients (Direct Customer) */
  cashFlowCashReceivedForMandatedInvestmentOfClients: number;
  /** CFS135:  Chi trả phí lưu ký chứng khoán của khách hàng - Cash paid for depository fee of clients (Direct Customer) */
  cashFlowCashPaidForDepositoryFeeOfClients: number;
  /** CFS136:  Thu lỗi giao dịch chứng khoán - Cash received on securities transactions errors (Direct Customer) */
  cashFlowCashReceivedOnSecuritiesTransactionsErrors: number;
  /** CFS137:  Chi lỗi giao dịch chứng khoán - Cash paid on securities transaction errors (Direct Customer) */
  cashFlowCashPaidOnSecuritiesTransactionErrors: number;
  /** CFS138:  Tiền thu của Tổ chức phát hành chứng khoán - Cash received from issuing organizations (Direct Customer) */
  cashFlowCashReceivedFromIssuingOrganizations: number;
  /** CFS139:  Tiền chi trả Tổ chức phát hành chứng khoán - Cash paid to issuing organizations (Direct Customer) */
  cashFlowCashPaidToIssuingOrganizations: number;
  /** CFS140:  Tăng/giảm tiền thuần trong kỳ - Net increase/decrease of cash and cash equivalents in the period (Direct Customer) */
  cashFlowNetIncreaseDecreaseOfCashAndCashEquivalentsInPeriod: number;
  /** CFS141:  Tiền và các khoản tương đương tiền đầu kỳ của khách hàng - Cash and cash equivalents of clients at the beginning of the period (Direct Customer) */
  cashFlowCashAndCashEquivalentsOfClientsAtBeginningOfPeriod: number;
  /** CFS142:  Tiền gửi ngân hàng đầu kỳ - Cash and cash equivalent at the beginning of investor (Direct Customer) */
  cashFlowCashAndCashEquivalentAtBeginningOfInvestor: number;
  /** CFS143:  Tiền gửi của Nhà đầu tư về giao dịch chứng khoán theo phương thức CTCK quản lý - Investor deposit for securities transaction by Securities company method (Direct Customer) */
  cashFlowInvestorDepositForSecuritiesTransactionBySecuritiesCompanyMethod: number;
  /** CFS144:  Trong đó: có kỳ hạn - In which: amounts which have specific term (Direct Customer) */
  cashFlowAmountsWhichHaveSpecificTermSecuritiesCompany: number;
  /** CFS145:  Tiền gửi của Nhà đầu tư về giao dịch chứng khoán theo phương thức Ngân hàng thương mại quản lý - Investor deposit for securities transaction by commercial bank method (Direct Customer) */
  cashFlowInvestorDepositForSecuritiesTransactionByCommercialBankMethod: number;
  /** CFS146:  Trong đó: có kỳ hạn - In which: amounts which have specific term (Direct Customer) */
  cashFlowAmountsWhichHaveSpecificTermCommercialBank: number;
  /** CFS147:  Tiền gửi bù trừ và thanh toán giao dịch chứng khoán - Deposit for securities clearing (Direct Customer) */
  cashFlowDepositForSecuritiesClearing: number;
  /** CFS148:  Tiền gửi tổng hợp giao dịch chứng khoán cho khách hàng - Customers general deposit for securities transactions (Direct Customer) */
  cashFlowCustomersGeneralDepositForSecuritiesTransactions: number;
  /** CFS149:  Tiền gửi của tổ chức phát hành - Issuing organization's deposit (Direct Customer) */
  cashFlowIssuingOrganizationDeposit: number;
  /** CFS150:  Trong đó: có kỳ hạn - In which: amounts which have specific term (Direct Customer) */
  cashFlowAmountsWhichHaveSpecificTermIssuingOrganization: number;
  /** CFS151:  Các khoản tương đương tiền - Cash Equivalent (Direct Customer) */
  cashFlowCashEquivalentBeginningCustomer: number;
  /** CFS152:  Ảnh hưởng của thay đổi tỷ giá hối đoái quy đổi ngoại tệ - Effect of changes in foreign currency exchange rates (Direct Customer) */
  cashFlowEffectOfChangesInForeignCurrencyExchangeRatesCustomer: number;
  /** CFS153:  Tiền và các khoản tương đương tiền cuối kỳ của khách hàng - Cash and cash equivalent at the end of the year (Direct Customer) */
  cashFlowCashAndCashEquivalentAtEndOfYear: number;
  /** CFS154:  Tiền gửi ngân hàng cuối kỳ - Cash at bank at the end of the period (Direct Customer) */
  cashFlowCashAtBankAtEndOfPeriod: number;
  /** CFS155:  Tiền gửi của Nhà đầu tư về giao dịch chứng khoán theo phương thức CTCK quản lý - Investor deposit for securities transaction by Securities company method (Direct Customer) */
  cashFlowInvestorDepositForSecuritiesTransactionBySecuritiesCompanyMethodEnd: number;
  /** CFS156:  Trong đó: có kỳ hạn - In which: amounts which have specific term (Direct Customer) */
  cashFlowAmountsWhichHaveSpecificTermSecuritiesCompanyEnd: number;
  /** CFS157:  Tiền gửi của Nhà đầu tư về giao dịch chứng khoán theo phương thức Ngân hàng thương mại quản lý - Investor deposit for securities transaction by commercial bank method (Direct Customer) */
  cashFlowInvestorDepositForSecuritiesTransactionByCommercialBankMethodEnd: number;
  /** CFS158:  Trong đó: có kỳ hạn - In which: amounts which have specific term (Direct Customer) */
  cashFlowAmountsWhichHaveSpecificTermCommercialBankEnd: number;
  /** CFS159:  Tiền gửi tổng hợp giao dịch chứng khoán cho khách hàng - Customers general deposit for securities transactions (Direct Customer) */
  cashFlowCustomersGeneralDepositForSecuritiesTransactionsEnd: number;
  /** CFS160:  Tiền gửi bù trừ và thanh toán giao dịch chứng khoán - Deposit for securities clearing (Direct Customer) */
  cashFlowDepositForSecuritiesClearingEnd: number;
  /** CFS161:  Tiền gửi của tổ chức phát hành - Issuing organization's deposit (Direct Customer) */
  cashFlowIssuingOrganizationDepositEnd: number;
  /** CFS162:  Trong đó: có kỳ hạn - In which: amounts which have specific term (Direct Customer) */
  cashFlowAmountsWhichHaveSpecificTermIssuingOrganizationEnd: number;
  /** CFS163:  Các khoản tương đương tiền - Cash Equivalent (Direct Customer) */
  cashFlowCashEquivalentEnd: number;
  /** CFS164:  Ảnh hưởng của thay đổi tỷ giá hối đoái quy đổi ngoại tệ - Effect of changes in foreign currency exchange rates (Direct Customer) */
  cashFlowEffectOfChangesInForeignCurrencyExchangeRatesEnd: number;
  /** CFS165:  Điều chỉnh cho các khoản - Adjustment (Indirect) */
  cashFlowAdjustment: number;
  /** CFS166:  Chi phí phải trả, chi phí trả trước - Accrued expenses (Indirect) */
  cashFlowAccruedExpenses: number;
  /** CFS167:  Tăng các chi phí tiền tệ - Increase in non-cash expense (Indirect) */
  cashFlowIncreaseInNonCashExpense: number;
  /** CFS168:  Lỗ đánh giá giá trị các tài sản tài chính ghi nhận thông qua KQKD - Loss on valuation of fair value through profit/loss financial assets (Indirect) */
  cashFlowLossOnValuationOfFVTPLFinancialAssets: number;
  /** CFS169:  Lỗ đánh giá giá trị các công nợ tài chính ghi nhận thông qua KQKD - Loss from financial assets sales (Indirect) */
  cashFlowLossFromFinancialAssetsSales: number;
  /** CFS170:  Lỗ đánh giá giá trị các công cụ tài chính phái sinh - Loss from derivatives (Indirect) */
  cashFlowLossFromDerivatives: number;
  /** CFS171:  Lỗ từ thanh lý các tài sản tài chính sẵn sàng để bán - Loss on valuation of available for sale financial assets (Indirect) */
  cashFlowLossOnValuationOfAvailableForSaleFinancialAssets: number;
  /** CFS172:  Suy giảm giá trị của các tài sản tài chính sẵn sàng để bán - The decrease in value of available sales assets (Indirect) */
  cashFlowDecreaseInValueOfAvailableSalesAssets: number;
  /** CFS173:  Lỗ suy giảm giá trị các khoản đầu tư nắm giữ đến ngày đáo hạn - Loss on valuation of held to maturity investments (Indirect) */
  cashFlowLossOnValuationOfHeldToMaturityInvestments: number;
  /** CFS174:  Lỗ suy giảm giá trị các khoản cho vay - Loss on the decrease in value of loans given (Indirect) */
  cashFlowLossOnTheDecreaseInValueOfLoansGiven: number;
  /** CFS175:  Lỗ về ghi nhận chệnh lệch đánh giá theo giá trị hợp lý tài sản tài chính sẵn sàng để bán AFS khi phân loại lại - Loss from revaluation by fair value of AFS when reclassification (Indirect) */
  cashFlowLossFromRevaluationByFairValueOfAFSWhenReclassification: number;
  /** CFS176:  Lỗ đánh giá giá các công cụ tài chính phát sinh cho mục đích phòng ngừa rủi ro - Loss from derivatives (Indirect) */
  cashFlowLossFromDerivativesAdditional: number;
  /** CFS177:  Lỗ từ thanh lý TSCĐ - Loss from sales of fixed assets (Indirect) */
  cashFlowLossFromSalesOfFixedAssets: number;
  /** CFS178:  Suy giảm giá trị của các tài sản cố định - Decrease in value of fixed assets (Indirect) */
  cashFlowDecreaseInValueOfFixedAssets: number;
  /** CFS179:  Chi phí dự phòng suy giảm giá trị các khoản đầu tư tài chính dài hạn - Provision for decrease in value of long term financial investments (Indirect) */
  cashFlowProvisionForDecreaseInValueOfLongTermFinancialInvestments: number;
  /** CFS180:  Lỗ từ thanh lý các khoản đầu tư vào công ty con và công ty liên doanh, liên kết - Loss from sales of investments in subsidiaries, associates and joint ventures (Indirect) */
  cashFlowLossFromSalesOfInvestmentsInSubsidiariesAssociatesJointVentures: number;
  /** CFS181:  Lỗ khác - Other loss (Indirect) */
  cashFlowOtherLoss: number;
  /** CFS182:  Giảm các doanh thu phi tiền tệ - Decrease in non-cash revenue (Indirect) */
  cashFlowDecreaseInNonCashRevenue: number;
  /** CFS183:  Lãi đánh giá giá trị các tài sản chính ghi nhận thông qua KQKD - Profit from revaluation of fair value through profit and loss financial assets (Indirect) */
  cashFlowProfitFromRevaluationOfFVTPLFinancialAssets: number;
  /** CFS184:  Lãi đánh giá giá trị các công nợ tài chính thông qua kết quả kinh doanh - Profit from revaluation of fair value through profit and loss financial debts (Indirect) */
  cashFlowProfitFromRevaluationOfFVTPLFinancialDebts: number;
  /** CFS185:  Lãi từ thanh lý các tài sản tài chính sẵn sàng để bán - Profit from sales of available for sale assets (Indirect) */
  cashFlowProfitFromSalesOfAvailableForSaleAssets: number;
  /** CFS186:  Hoàn nhập suy giảm giá trị của các tài sản tài chính sẵn sàng để bán - Reversal of loss from available for sale assets (Indirect) */
  cashFlowReversalOfLossFromAvailableForSaleAssets: number;
  /** CFS187:  Lãi về ghi nhận chệnh lệch đánh giá theo giá trị hợp lý tài sản tài chính sẵn sàng để bán AFS khi phân loại lại - Profit from revaluation by fair value of AFS when reclassification (Indirect) */
  cashFlowProfitFromRevaluationByFairValueOfAFSWhenReclassification: number;
  /** CFS188:  Lãi đánh giá giá trị các công cụ tài chính phái sinh cho mục đích phòng ngừa - Profit from derivatives (Indirect) */
  cashFlowProfitFromDerivatives: number;
  /** CFS189:  Lãi từ thanh lý các khoản cho vay và phải thu - Profit from the decrease in value of loans given (Indirect) */
  cashFlowProfitFromTheDecreaseInValueOfLoansGiven: number;
  /** CFS190:  Hoàn nhập chi phí dự phòng - Reversal of provision (Indirect) */
  cashFlowReversalOfProvision: number;
  /** CFS191:  Lãi từ thanh lý tài sản cố định, BĐSĐT - Profit from sales of fixed assets and properties (Indirect) */
  cashFlowProfitFromSalesOfFixedAssetsAndProperties: number;
  /** CFS192:  Lãi từ thanh lý các khoản đầu tư vào công ty con và công ty liên doanh, liên kết - Profit from sales of investments in subsidiaries, associates and joint ventures (Indirect) */
  cashFlowProfitFromSalesOfInvestmentsInSubsidiariesAssociatesJointVentures: number;
  /** CFS193:  Lãi khác - Other profit (Indirect) */
  cashFlowOtherProfit: number;
  /** CFS194:  Thay đổi tài sản và nợ phải trả hoạt động - Change in assets and operating liabilities (Indirect) */
  cashFlowChangeInAssetsAndOperatingLiabilities: number;
  /** CFS195:  Tăng (giảm) tài sản tài chính ghi nhận thông qua lãi lỗ - Increase (decrease) in fair value through profit and loss financial assets (Indirect) */
  cashFlowIncreaseDecreaseInFVTPLFinancialAssets: number;
  /** CFS196:  Tăng (giảm) các khoản đầu tư giữ đến ngày đáo hạn - Increase (decrease) in held to maturity investments (Indirect) */
  cashFlowIncreaseDecreaseInHeldToMaturityInvestments: number;
  /** CFS197:  Tăng (giảm) các khoản cho vay - Increase (decrease) in loans given (Indirect) */
  cashFlowIncreaseDecreaseInLoansGiven: number;
  /** CFS198:  Tăng (giảm) tài sản tài chính sẵn sàng để bán - Increase (decrease) in available-for-sale financial assets (Indirect) */
  cashFlowIncreaseDecreaseInAvailableForSaleFinancialAssets: number;
  /** CFS199:  Tăng (giảm) các tài sản khác - Increase (decrease) in other assets (Indirect) */
  cashFlowIncreaseDecreaseInOtherAssets: number;
  /** CFS200:  Tăng (giảm) các khoản phải thu - Increase (decrease) in receivable (Indirect) */
  cashFlowIncreaseDecreaseInReceivable: number;
  /** CFS201:  Tăng (giảm) vay và nợ thuê tài sản tài chính - Increase (decrease) in financial asset loans and financial lease (Indirect) */
  cashFlowIncreaseDecreaseInFinancialAssetLoansAndFinancialLease: number;
  /** CFS202:  Tăng (giảm) vay tài sản tài chính - Increase (decrease) in financial asset loans (Indirect) */
  cashFlowIncreaseDecreaseInFinancialAssetLoans: number;
  /** CFS203:  Tăng (giảm) Trái phiếu chuyển đổi - Cấu phần nợ - Increase (decrease) in convertible bond-equity portion (Indirect) */
  cashFlowIncreaseDecreaseInConvertibleBondEquityPortion: number;
  /** CFS204:  Tăng (giảm) Trái phiếu phát hành - Increase (decrease) in issued bond (Indirect) */
  cashFlowIncreaseDecreaseInIssuedBond: number;
  /** CFS205:  Tăng (giảm) vay Quỹ Hỗ trợ thanh toán - Increase (decrease) in loan from Settlement Assistance Fund (Indirect) */
  cashFlowIncreaseDecreaseInLoanFromSettlementAssistanceFund: number;
  /** CFS206:  (-) Tăng, (+) giảm phải thu bán các tài sản tài chính - Increase (decrease) in receivable from selling financial assets (Indirect) */
  cashFlowIncreaseDecreaseInReceivableFromSellingFinancialAssets: number;
  /** CFS207:  (-) Tăng, (+) giảm phải thu tiền lãi các tài sản tài chính - Increase (decrease) in receivable from interest of financial assets (Indirect) */
  cashFlowIncreaseDecreaseInReceivableFromInterestOfFinancialAssets: number;
  /** CFS208:  (-) Tăng, (+) giảm các khoản phải thu các dịch vụ CTCK cung cấp - Increase (decrease) in receivable from services rendered (Indirect) */
  cashFlowIncreaseDecreaseInReceivableFromServicesRendered: number;
  /** CFS209:  (-) Tăng, (+) giảm các khoản phải thu về lỗi giao dịch CK - Increase (decrease) in receivable from transaction errors (Indirect) */
  cashFlowIncreaseDecreaseInReceivableFromTransactionErrors: number;
  /** CFS210:  (+) Tăng, (-) giảm phải trả cho người bán - Increase (decrease) in trade payables (Indirect) */
  cashFlowIncreaseDecreaseInTradePayables: number;
  /** CFS211:  (+) Tăng, (-) giảm phải trả Tổ chức phát hành chứng khoán - Increase (decrease) in payables to securities issuers (Indirect) */
  cashFlowIncreaseDecreaseInPayablesToSecuritiesIssuers: number;
  /** CFS212:  (+) Tăng, (-) giảm các khoản trích nộp phúc lợi nhân viên - Increase (decrease) in contribution to employees' welfare (Indirect) */
  cashFlowIncreaseDecreaseInContributionToEmployeesWelfare: number;
  /** CFS213:  (+) Tăng, (-) giảm thuế và các khoản phải nộp Nhà nước - Increase (decrease) in tax and payables to authority (Indirect) */
  cashFlowIncreaseDecreaseInTaxAndPayablesToAuthority: number;
  /** CFS214:  (+) Tăng, (-) giảm phải trả người lao động - Increase (decrease) in payables to employees (Indirect) */
  cashFlowIncreaseDecreaseInPayablesToEmployees: number;
  /** CFS215:  (+) Tăng, (-) giảm phải trả về lỗi giao dịch các tài sản tài chính - Increase (decrease) in payable arise from financial asset transaction error (Indirect) */
  cashFlowIncreaseDecreaseInPayableAriseFromFinancialAssetTransactionError: number;
  /** CFS216:  Tiền lãi đã thu - Interest received (Indirect) */
  cashFlowInterestReceivedAdditional: number;
  /** CFS217:  Tiền thu khác - Other receivables (Indirect) */
  cashFlowOtherReceivables: number;
  /** CFS218:  Lãi vay đã trả - Interest paid (Indirect) */
  cashFlowInterestPaidAdditional: number;
  /** CFS219:  Thuế TNDN đã nộp - Corporate income tax paid (Indirect) */
  cashFlowCorporateIncomeTaxPaidAdditional: number;
  /** CFS220:  Các khoản chi khác - Other expenses (Indirect) */
  cashFlowOtherExpenses: number;
  /** CFB221:  Chênh lệch số tiền thực thu/thực chi từ hoạt động kinh doanh - Differences cash basis from operating activities (Direct) */
  cashFlowDifferencesCashBasisFromOperatingActivities: number;
  /** CFS222:  Tiền chi nộp thuế liên quan đến hoạt động CTCK - Payments to taxes (Direct) */
  cashFlowPaymentsToTaxes: number;
  /** CFS223:  (-) Tăng, (+) giảm chi phí phải trả (không bao gồm chi phí lãi vay) - Increase/(decrease) in payable expenses (excluding interest expenses) (Indirect) */
  cashFlowIncreaseDecreaseInPayableExpensesExcludingInterestExpenses: number;
  /** CFS224:  Chi trả thanh toán giao dịch chứng khoán của khách hàng - Cash paid for the purpose of transaction of clients (Direct Customer) */
  cashFlowCashPaidForTransactionOfClients: number;
  /** CFS225:  Chi trả cho hoạt động ủy thác đầu tư của khách hàng - Cash paid for the purpose of mandated investment of clients (Direct Customer) */
  cashFlowCashPaidForMandatedInvestmentOfClients: number;

  /** BRC1:  I-Tiền mặt, vàng bạc, đá quý - I- Cash, gold, silver, gemstones */
  bankCurrencyRiskCashGoldSilverGemstones: number;
  /** BRC2:  II- Tiền gửi tại NHNN - II- State Bank's deposits */
  bankCurrencyRiskStateBankDeposits: number;
  /** BRC3:  III- Tiền gửi tại và cho vay các TCTD khác(*) - III- Deposits at and loans to other credit institutions (*) */
  bankCurrencyRiskDepositsAtAndLoansToOtherCreditInstitutions: number;
  /** BRC4:  IV- Chứng khoán kinh doanh(*) - IV- Trading securities (*) */
  bankCurrencyRiskTradingSecurities: number;
  /** BRC5:  V- Các công cụ tài chính phát sinh và các tài sản chính khác(*) - V- Derivative financial instruments and other financial assets (*) */
  bankCurrencyRiskDerivativeFinancialInstrumentsAndOtherFinancialAssets: number;
  /** BRC6:  VI- Cho vay khách hàng(*) - VI- Loans to customers (*) */
  bankCurrencyRiskLoansToCustomers: number;
  /** BRC7:  VII- Chứng khoán đầu tư(*) - VII- Investment securities (*) */
  bankCurrencyRiskInvestmentSecurities: number;
  /** BRC8:  VIII- Góp vốn đầu tư dài hạn(*) - VIII- Long-term investments (*) */
  bankCurrencyRiskLongTermInvestments: number;
  /** BRC9:  IX- Tài sản cố định và đầu tư bất động sản - IX- Fixed assets and real estate investment */
  bankCurrencyRiskFixedAssetsAndRealEstateInvestment: number;
  /** BRC10:  X- Tài sản có khác(*) - X- Other assets (*) */
  bankCurrencyRiskOtherAssets: number;
  /** BRC11:  Tổng tài sản - Total asset */
  bankCurrencyRiskTotalAssets: number;
  /** BRC12:  Các khoản nợ chính phủ và NHNN - Government and State Bank's loans */
  bankCurrencyRiskGovernmentAndStateBankLoans: number;
  /** BRC13:  Tiền gửi và vay các Tổ chức TD khác - Other credit institutions' loans */
  bankCurrencyRiskOtherCreditInstitutionsLoans: number;
  /** BRC14:  Tiền gửi của khách hàng - Customers' deposits */
  bankCurrencyRiskCustomersDeposits: number;
  /** BRC15:  Các công cụ tài chính phát sinh và các khoản nợ tài chính khác - Incurred financial instruments and other financial liabilities */
  bankCurrencyRiskIncurredFinancialInstrumentsAndOtherFinancialLiabilities: number;
  /** BRC16:  Vốn tài trợ, ủy thác đầu tư, cho vay tổ chức tín dụng chịu rủi ro - Funding, entrusted investment, lending to credit institutions at risk */
  bankCurrencyRiskFundingEntrustedInvestmentLendingToCreditInstitutionsAtRisk: number;
  /** BRC17:  Phát hành giấy tờ có giá - Issuance of valuable papers */
  bankCurrencyRiskIssuanceOfValuablePapers: number;
  /** BRC18:  Các khoản nợ khác - Other debt */
  bankCurrencyRiskOtherDebt: number;
  /** BRC19:  Vốn và các quỹ - Capital and funds */
  bankCurrencyRiskCapitalAndFunds: number;
  /** BRC20:  Tổng nợ phải trả và vốn chủ sở hữu - Total liabilities and equity */
  bankCurrencyRiskTotalLiabilitiesAndEquity: number;
  /** BRC21:  Trạng thái tiền tệ nội bảng - On-balance sheet currency position */
  bankCurrencyRiskOnBalanceSheetCurrencyPosition: number;
  /** BRC22:  Trạng thái tiền tệ ngoại bảng - Off-balance sheet currency position */
  bankCurrencyRiskOffBalanceSheetCurrencyPosition: number;
  /** BRC23:  Trạng thái tiền tệ nội, ngoại bảng - On- and off-balance sheet currency position */
  bankCurrencyRiskOnAndOffBalanceSheetCurrencyPosition: number;

  /** BRL1:  I- Tiền mặt vàng bạc, đá quý - I- Cash, gold, silver, gemstones */
  bankLiquidityRiskCashGoldSilverGemstones: number;
  /** BRL2:  II-Tiền gửi tại NHNN - II- State Bank's deposits */
  bankLiquidityRiskStateBankDeposits: number;
  /** BRL3:  III- Tiền gửi tại và cho vay các TCTD khác(*) - III- Deposits at and loans to other credit institutions (*) */
  bankLiquidityRiskDepositsAtAndLoansToOtherCreditInstitutions: number;
  /** BRL4:  IV-Chứng khoán kinh doanh(*) - IV- Trading securities (*) */
  bankLiquidityRiskTradingSecurities: number;
  /** BRL5:  V- Các công cụ tài chính phát sinh và các tài sản chính khác(*) - V- Derivative financial instruments and other financial assets (*) */
  bankLiquidityRiskDerivativeFinancialInstrumentsAndOtherFinancialAssets: number;
  /** BRL6:  VI- Cho vay khách hàng(*) - VI- Loans to customers (*) */
  bankLiquidityRiskLoansToCustomers: number;
  /** BRL7:  VII-Chứng khoán đầu tư(*) - VII- Investment securities (*) */
  bankLiquidityRiskInvestmentSecurities: number;
  /** BRL8:  VIII- Góp vốn đầu tư dài hạn(*) - VIII- Long-term investments (*) */
  bankLiquidityRiskLongTermInvestments: number;
  /** BRL9:  IX- Tài sản cố định và đầu tư bất động sản - IX- Fixed assets and real estate investment */
  bankLiquidityRiskFixedAssetsAndRealEstateInvestment: number;
  /** BRL10:  X- Tài sản có khác(*) - X- Other assets (*) */
  bankLiquidityRiskOtherAssets: number;
  /** BRL11:  Tổng tài sản - Total asset */
  bankLiquidityRiskTotalAssets: number;
  /** BRL12:  Các khoản nợ chính phủ và NHNN - Government and State Bank's loans */
  bankLiquidityRiskGovernmentAndStateBankLoans: number;
  /** BRL13:  Tiền gửi và vay các Tổ chức TD khác - Other credit institutions' loans */
  bankLiquidityRiskOtherCreditInstitutionsLoans: number;
  /** BRL14:  Tiền gửi của khách hàng - Customers' deposits */
  bankLiquidityRiskCustomersDeposits: number;
  /** BRL15:  Các công cụ tài chính phát sinh và các khoản nợ tài chính khác - Incurred financial instruments and other financial liabilities */
  bankLiquidityRiskIncurredFinancialInstrumentsAndOtherFinancialLiabilities: number;
  /** BRL16:  Vốn tài trợ, ủy thác đầu tư, cho vay tổ chức tín dụng chịu rủi ro - Funding, entrusted investment, lending to credit institutions at risk */
  bankLiquidityRiskFundingEntrustedInvestmentLendingToCreditInstitutionsAtRisk: number;
  /** BRL17:  Phát hành giấy tờ có giá - Issuance of valuable papers */
  bankLiquidityRiskIssuanceOfValuablePapers: number;
  /** BRL18:  Các khoản nợ khác - Other debt */
  bankLiquidityRiskOtherDebt: number;
  /** BRL19:  Tổng nợ phải trả - Total debt */
  bankLiquidityRiskTotalDebt: number;
  /** BRL20:  Mức chênh thanh khoản ròng - Net liquidity gap */
  bankLiquidityRiskNetLiquidityGap: number;

  /** BRR1:  I - Tiền mặt vàng bạc, đá quý - I- Cash, gold, silver, gemstones */
  bankRateRiskCashGoldSilverGemstones: number;
  /** BRR2:  II- Tiền gủi tại NHNN - II- State Bank's deposits */
  bankRateRiskStateBankDeposits: number;
  /** BRR3:  III- Tiền gủi tại và cho vay các TCTD khác - III- Deposits at and loans to other credit institutions (*) */
  bankRateRiskDepositsAtAndLoansToOtherCreditInstitutions: number;
  /** BRR4:  IV- Chứng khoán kinh doanh - IV- Trading securities (*) */
  bankRateRiskTradingSecurities: number;
  /** BRR5:  V- Các công cụ tài chính phát sinh và các tài sản chính khác - V- Incurred financial instruments and other financial liabilities (*) */
  bankRateRiskIncurredFinancialInstrumentsAndOtherFinancialLiabilities: number;
  /** BRR6:  VI- Cho vay khách hàng - VI- Loans to customers (*) */
  bankRateRiskLoansToCustomers: number;
  /** BRR7:  VII- Chứng khoán đầu tư - VII- Investment securities (*) */
  bankRateRiskInvestmentSecurities: number;
  /** BRR8:  VIII- Góp vốn đầu tư dài hạn - VIII- Long-term investments (*) */
  bankRateRiskLongTermInvestments: number;
  /** BRR9:  IX- Tài sản cố định và đầu tư bất động sản - IX- Fixed assets and real estate investment */
  bankRateRiskFixedAssetsAndRealEstateInvestment: number;
  /** BRR10:  X- Tài sản có khác - X- Other assets (*) */
  bankRateRiskOtherAssets: number;
  /** BRR11:  Tổng tài sản Có - Total asset */
  bankRateRiskTotalAssets: number;
  /** BRR12:  Các khoản nợ chính phủ và NHNN - Government and State Bank's loans */
  bankRateRiskGovernmentAndStateBankLoans: number;
  /** BRR13:  Tiền gửi và vay các Tổ chức TD khác - Other credit institutions' loans */
  bankRateRiskOtherCreditInstitutionsLoans: number;
  /** BRR14:  Tiền gủi của khách hàng - Customers' deposits */
  bankRateRiskCustomersDeposits: number;
  /** BRR15:  ICác công cụ tài chính phát sinh và các khoản nợ tài chính khác - Incurred financial instruments and other financial liabilities */
  bankRateRiskIncurredFinancialInstrumentsAndOtherFinancialLiabilitiesAdditional: number;
  /** BRR16:  Vốn tài trợ, ủy thác đầu tư, cho vay tổ chức tín dụng chịu rủi ro - Funding, entrusted investment, lending to credit institutions at risk */
  bankRateRiskFundingEntrustedInvestmentLendingToCreditInstitutionsAtRisk: number;
  /** BRR17:  Phát hành giấy tờ có giá - Issuance of valuable papers */
  bankRateRiskIssuanceOfValuablePapers: number;
  /** BRR18:  Các khoản nợ khác - Other debt */
  bankRateRiskOtherDebt: number;
  /** BRR19:  Tổng nợ phải trả - Total debt */
  bankRateRiskTotalDebt: number;
  /** BRR20:  Mức chênh lệch nhạy cảm với lãi suất nội bảng - On-balance sheet interest rate sensitivity gap */
  bankRateRiskOnBalanceSheetInterestRateSensitivityGap: number;
  /** BRR21:  Mức chênh lệch nhạy cảm với lãi suất ngoại bảng - Off-balance sheet interest rate sensitivity gap */
  bankRateRiskOffBalanceSheetInterestRateSensitivityGap: number;
  /** BRR22:  Lũy kế chênh lệch nhạy cảm với lãi suất - Cumulative interest rate sensitivity gap */
  bankRateRiskCumulativeInterestRateSensitivityGap: number;

  /** RTQ1:  Tỷ suất thanh toán tiền mặt - Cash Ratio */
  ratioTrailingTwelveMonthsCashRatio: number;
  /** RTQ2:  Tỷ suất thanh toán nhanh - Quick Ratio */
  ratioTrailingTwelveMonthsQuickRatio: number;
  /** RTQ3:  Tỷ suất thanh toán hiện thời - Current Ratio */
  ratioTrailingTwelveMonthsCurrentRatio: number;
  /** RTQ4:  Vốn vay dài hạn/Vốn CSH - LT Debt/Equity */
  ratioTrailingTwelveMonthsLTDebtEquity: number;
  /** RTQ5:  Vốn vay dài hạn/Tổng Tài sản - LT Debt/Total Assets */
  ratioTrailingTwelveMonthsLTDebtTotalAssets: number;
  /** RTQ6:  Vốn vay ngắn dài hạn/Vốn CSH - Debt/Equity */
  ratioTrailingTwelveMonthsDebtEquity: number;
  /** RTQ7:  Vốn vay ngắn dài hạn/Tổng Tài sản - Debt/Total Assets */
  ratioTrailingTwelveMonthsDebtTotalAssets: number;
  /** RTQ8:  Công nợ ngắn hạn/Vốn CSH - ST Liabilities/Equity */
  ratioTrailingTwelveMonthsSTLiabilitiesEquity: number;
  /** RTQ9:  Công nợ ngắn hạn/Tổng Tài sản - ST Liabilities/Total Assets */
  ratioTrailingTwelveMonthsSTLiabilitiesTotalAssets: number;
  /** RTQ10:  Tổng công nợ/Vốn CSH - Total Liabilities/Equity */
  ratioTrailingTwelveMonthsTotalLiabilitiesEquity: number;
  /** RTQ11:  Tổng công nợ/Tổng Tài sản - Total Liabilities/Total Assets */
  ratioTrailingTwelveMonthsTotalLiabilitiesTotalAssets: number;
  /** RTQ12:  ROE % - ROE % */
  ratioTrailingTwelveMonthsROE: number;
  /** RTQ13:  ROCE % - ROCE % */
  ratioTrailingTwelveMonthsROCE: number;
  /** RTQ14:  ROA % - ROA % */
  ratioTrailingTwelveMonthsROA: number;
  /** RTQ15:  Hệ số quay vòng phải thu khách hàng - Account Receivable Turnover */
  ratioTrailingTwelveMonthsAccountReceivableTurnover: number;
  /** RTQ16:  Thời gian trung bình thu tiền khách hàng - Turnover Ratio */
  ratioTrailingTwelveMonthsTurnoverRatio: number;
  /** RTQ17:  Hệ số quay vòng HTK - Inventory Turnover Ratio */
  ratioTrailingTwelveMonthsInventoryTurnoverRatio: number;
  /** RTQ18:  Thời gian trung bình xử lý HTK - Inventory Turn-days */
  ratioTrailingTwelveMonthsInventoryTurnDays: number;
  /** RTQ19:  Hệ số quay vòng phải trả nhà cung cấp - Payment Period Turnover Ratio */
  ratioTrailingTwelveMonthsPaymentPeriodTurnoverRatio: number;
  /** RTQ20:  Thời gian trung bình thanh toán cho nhà cung cấp - Average Payment Period */
  ratioTrailingTwelveMonthsAveragePaymentPeriod: number;
  /** RTQ21:  Doanh số tính trên đầu người - Sales per Employee */
  ratioTrailingTwelveMonthsSalesPerEmployee: number;
  /** RTQ22:  Lợi nhuận thuần tính trên đầu người - Net Income per Employee */
  ratioTrailingTwelveMonthsNetIncomePerEmployee: number;
  /** RTQ23:  Năng lực tạo tiền - The ability to make money */
  ratioTrailingTwelveMonthsAbilityToMakeMoney: number;
  /** RTQ24:  Tỷ suất lợi nhuận không thường xuyên - Irregular profit margin */
  ratioTrailingTwelveMonthsIrregularProfitMargin: number;
  /** RTQ25:  Tỷ suất lợi nhuận gộp % - Gross profit margin */
  ratioTrailingTwelveMonthsGrossProfitMargin: number;
  /** RTQ26:  Tỷ suất EBITDA % - EBITDA % */
  ratioTrailingTwelveMonthsEBITDAMargin: number;
  /** RTQ27:  Tỷ suất EBIT % - EBIT % */
  ratioTrailingTwelveMonthsEBITMargin: number;
  /** RTQ28:  Tỷ suất lợi nhuận trước thuế % - Pre-tax profit margin % */
  ratioTrailingTwelveMonthsPreTaxProfitMargin: number;
  /** RTQ29:  Tỷ suất lợi nhuận thuần % - Net profit margin % */
  ratioTrailingTwelveMonthsNetProfitMargin: number;
  /** RTQ30:  Tỷ lệ doanh số/vốn hóa (lần) - Sales/Capitalization Ratio (times) */
  ratioTrailingTwelveMonthsSalesCapitalizationRatio: number;
  /** RTQ31:  Hệ số vòng quay tài sản (lần) - Asset Turnover Ratio */
  ratioTrailingTwelveMonthsAssetTurnoverRatio: number;
  /** RTQ32:  Hệ số vòng quay vốn CSH (lần) - Equity Turnover Ratio */
  ratioTrailingTwelveMonthsEquityTurnoverRatio: number;
  /** RTQ33:  Tỷ suất thuế TNDN thực tế (%) - Actual CIT rate (%) */
  ratioTrailingTwelveMonthsActualCITRate: number;
  /** RTQ34:  Tốc độ tăng trưởng doanh số thuần - Net sales growth rate */
  ratioTrailingTwelveMonthsNetSalesGrowthRate: number;
  /** RTQ35:  Tốc độ tăng trưởng lãi gộp - Gross profit growth rate */
  ratioTrailingTwelveMonthsGrossProfitGrowthRate: number;
  /** RTQ36:  Tốc độ tăng trưởng EBITDA - EBITDA growth rate */
  ratioTrailingTwelveMonthsEBITDAGrowthRate: number;
  /** RTQ37:  Tốc độ tăng trưởng EBIT - EBIT Growth Rate */
  ratioTrailingTwelveMonthsEBITGrowthRate: number;
  /** RTQ38:  Tốc độ tăng trưởng lãi trước thuế - Pre-tax profit growth rate */
  ratioTrailingTwelveMonthsPreTaxProfitGrowthRate: number;
  /** RTQ39:  Tốc độ tăng trưởng lãi thuần - Net Profit growth (Y-O-Y) */
  ratioTrailingTwelveMonthsNetProfitGrowthYoY: number;
  /** RTQ40:  Tăng trưởng Chi phí đầu tư tài sản cố đinh (CAPEX) (ttm) - Growth Fixed Asset Investment Cost (CAPEX) (ttm) */
  ratioTrailingTwelveMonthsGrowthFixedAssetInvestmentCostTTM: number;
  /** RTQ41:  Tốc độ tăng trưởng tổng tài sản - Total asset growth rate */
  ratioTrailingTwelveMonthsTotalAssetGrowthRate: number;
  /** RTQ42:  Tốc độ tăng trưởng Vốn CSH - Equity growth rate */
  ratioTrailingTwelveMonthsEquityGrowthRate: number;
  /** RTQ43:  Tốc độ tăng trưởng vốn điều lệ - Charter capital growth rate */
  ratioTrailingTwelveMonthsCharterCapitalGrowthRate: number;
  /** RTQ44:  Net Interest Margin (NIM) - Net Interest Margin */
  ratioTrailingTwelveMonthsNetInterestMargin: number;
  /** RTQ45:  Average Yield on Earning Assets (YOEA) - Average Yield on Earning Assets (YOEA) */
  ratioTrailingTwelveMonthsAverageYieldOnEarningAssets: number;
  /** RTQ46:  Average Cost of Financing (COF) - Average Cost of Financing (COF) */
  ratioTrailingTwelveMonthsAverageCostOfFinancing: number;
  /** RTQ47:  Non-interest income/ Net Interest Income - Non-interest income/ Net Interest Income */
  ratioTrailingTwelveMonthsNonInterestIncomeNetInterestIncome: number;
  /** RTQ48:  Cost-to-Income Ratio - Cost-Income Ratio */
  ratioTrailingTwelveMonthsCostIncomeRatio: number;
  /** RTQ49:  Preprovision ROA % - Preprovision ROA */
  ratioTrailingTwelveMonthsPreprovisionROA: number;
  /** RTQ50:  Average Loans Growth % - Average Loans Growth % */
  ratioTrailingTwelveMonthsAverageLoansGrowth: number;
  /** RTQ51:  Aver Deposit Growth % - Aver Deposit Growth % */
  ratioTrailingTwelveMonthsAverageDepositGrowth: number;
  /** RTQ52:  CAR - Tier 1 (not used) - CAR - Tier 1 (not used) */
  ratioTrailingTwelveMonthsCARTier1: number;
  /** RTQ53:  CAR - Tier 2 (not used) - CAR - Tier 2 (not used) */
  ratioTrailingTwelveMonthsCARTier2: number;
  /** RTQ54:  Equity/Liabilities - Equity/Liabilities */
  ratioTrailingTwelveMonthsEquityLiabilities: number;
  /** RTQ55:  Equity/Loans - Equity/Loans */
  ratioTrailingTwelveMonthsEquityLoans: number;
  /** RTQ56:  Equity/Assets - Equity/Assets */
  ratioTrailingTwelveMonthsEquityAssets: number;
  /** RTQ57:  Loans/Deposit Ratio - Loan-deposit Ratio */
  ratioTrailingTwelveMonthsLoanDepositRatio: number;
  /** RTQ58:  NPLs/Loans Ratio (đổi tên thành NPL) - NPL Ratio */
  ratioTrailingTwelveMonthsNPLRatio: number;
  /** RTQ59:  Loan-loss reserves/NPLs - Loan-loss reserves/NPLs */
  ratioTrailingTwelveMonthsLoanLossReservesNPLs: number;
  /** RTQ60:  Loan-loss reserves/Loans - Loan-loss reserves/Loans */
  ratioTrailingTwelveMonthsLoanLossReservesLoans: number;
  /** RTQ61:  Provision Charges/Loans - Provision Charges/Loans */
  ratioTrailingTwelveMonthsProvisionChargesLoans: number;
  /** RTQ62:  Tài sản sinh lãi - Profitable assets */
  ratioTrailingTwelveMonthsProfitableAssets: number;
  /** RTQ63:  Nợ chịu lãi - Interest-bearing debt */
  ratioTrailingTwelveMonthsInterestBearingDebt: number;
  /** RTQ64:  ROE (trước dự phòng) - ROE (before fallback) */
  ratioTrailingTwelveMonthsROEBeforeFallback: number;
  /** RTQ65:  Tăng trưởng chi phí hoạt động - Operating expense growth */
  ratioTrailingTwelveMonthsOperatingExpenseGrowth: number;
  /** RTQ66:  Tăng trưởng lợi nhuận trước dự phòng - Pre-provision operating profit */
  ratioTrailingTwelveMonthsPreProvisionOperatingProfit: number;
  /** RTQ67:  Tăng trưởng thu nhập lãi thuần - Net Interest Income growth */
  ratioTrailingTwelveMonthsNetInterestIncomeGrowth: number;
  /** RTQ68:  Tăng trưởng thu nhập ngoài lãi - Non-interest income growth */
  ratioTrailingTwelveMonthsNonInterestIncomeGrowth: number;
  /** RTQ69:  Nợ xấu - Bad debt */
  ratioTrailingTwelveMonthsBadDebt: number;
  /** RTQ70:  Tổng tài sản/Vốn Chủ sở hữu - Total assets/Equity */
  ratioTrailingTwelveMonthsTotalAssetsEquity: number;
  /** RTQ71:  Tỷ trọng tài sản vô hình/Tổng Tài sản - Ratio of intangible assets/Total assets */
  ratioTrailingTwelveMonthsIntangibleAssetsTotalAssets: number;
  /** RTQ72:  Ebit - EBIT */
  ratioTrailingTwelveMonthsEBIT: number;
  /** RTQ73:  Ebitda - EBITDA */
  ratioTrailingTwelveMonthsEBITDA: number;
  /** RTQ74:  Tỷ suất lãi hoạt động kinh doanh - Operating profit margin */
  ratioTrailingTwelveMonthsOperatingProfitMargin: number;
  /** RTQ75:  EBITDA/(Nợ vay ngắn hạn+Tiền lãi vay) - EBITDA/(Short-term debt+Loan interest) */
  ratioTrailingTwelveMonthsEBITDAShortTermDebtLoanInterest: number;
  /** RTQ76:  ROIC - ROIC */
  ratioTrailingTwelveMonthsROIC: number;
  /** RTQ77:  Khả năng chi trả lãi vay - Ability to pay interest */
  ratioTrailingTwelveMonthsAbilityToPayInterest: number;
  /** RTQ78:  Tốc độ tăng trưởng doanh số thuần - Net Sale growth (YoY) */
  ratioTrailingTwelveMonthsNetSaleGrowthYoY: number;
  /** RTQ79:  Tốc độ tăng trưởng lãi gộp - Gross Profit growth (YoY) */
  ratioTrailingTwelveMonthsGrossProfitGrowthYoY: number;
  /** RTQ80:  Tốc độ tăng trưởng EBITDA - EBITDA growth (YoY) */
  ratioTrailingTwelveMonthsEBITDAGrowthYoY: number;
  /** RTQ81:  Tốc độ tăng trưởng EBIT - EBIT growth (YoY) */
  ratioTrailingTwelveMonthsEBITGrowthYoY: number;
  /** RTQ82:  Tốc độ tăng trưởng lãi trước thuế - Net Profit before tax growth (YoY) */
  ratioTrailingTwelveMonthsNetProfitBeforeTaxGrowthYoY: number;
  /** RTQ83:  Tốc độ tăng trưởng lãi thuần - Net Profit growth (YoY) */
  ratioTrailingTwelveMonthsNetProfitGrowthYoY83: number;
  /** RTQ84:  Tăng trưởng Chi phí đầu tư tài sản cố đinh (CAPEX) (yoy) - Growth Fixed Asset Investment Cost (CAPEX) (yoy) */
  ratioTrailingTwelveMonthsGrowthFixedAssetInvestmentCostYoY: number;
  /** RTQ85:  Tốc độ tăng trưởng tổng tài sản - Total Assets growth (YoY) */
  ratioTrailingTwelveMonthsTotalAssetsGrowthYoY: number;
  /** RTQ86:  Tốc độ tăng trưởng Vốn CSH - Owner's Equity growth (YoY) */
  ratioTrailingTwelveMonthsOwnersEquityGrowthYoY: number;
  /** RTQ87:  Tốc độ tăng trưởng vốn điều lệ - Charter Capital growth (YoY) */
  ratioTrailingTwelveMonthsCharterCapitalGrowthYoY: number;
  /** RTQ88:  Operating cycle - Operating cycle */
  ratioTrailingTwelveMonthsOperatingCycle: number;
  /** RTQ89:  Cash operating cycle - Cash operating cycle */
  ratioTrailingTwelveMonthsCashOperatingCycle: number;
  /** RTQ90:  Working capital turnover - Working capital turnover */
  ratioTrailingTwelveMonthsWorkingCapitalTurnover: number;
  /** RTQ91:  Fixed asset turnover - Fixed asset turnover */
  ratioTrailingTwelveMonthsFixedAssetTurnover: number;
  /** RTQ92:  Free cash flow/ revenue - Free cash flow/ revenue */
  ratioTrailingTwelveMonthsFreeCashFlowRevenue: number;
  /** RTQ93:  Free cash flow/operating income - Free cash flow/operating income */
  ratioTrailingTwelveMonthsFreeCashFlowOperatingIncome: number;
  /** RTQ94:  Total debt/EBITDA - Total debt/EBITDA */
  ratioTrailingTwelveMonthsTotalDebtEBITDA: number;
  /** RTQ95:  Free cash flow/ debt - Free cash flow/ debt */
  ratioTrailingTwelveMonthsFreeCashFlowDebt: number;
  /** RTQ96:  Financial leverage - Financial leverage */
  ratioTrailingTwelveMonthsFinancialLeverage: number;
  /** RTQ97:  Sales/Asset - Sales/Asset */
  ratioTrailingTwelveMonthsSalesAsset: number;
  /** RTQ98:  CPEX/sales - CPEX/sales */
  ratioTrailingTwelveMonthsCPEXSales: number;
  /** RTQ99:  Operating ROA - Operating ROA */
  ratioTrailingTwelveMonthsOperatingROA: number;
  /** RTQ100:  Retention rate b - Retention rate b */
  ratioTrailingTwelveMonthsRetentionRateB: number;
  /** RTQ101:  EBITDA interest coverage - EBITDA interest coverage */
  ratioTrailingTwelveMonthsEBITDAInterestCoverage: number;
  /** RTQ102:  Free operating cash flows to total debt - Free operating cash flows to total debt */
  ratioTrailingTwelveMonthsFreeOperatingCashFlowsToTotalDebt: number;
  /** RTQ103:  Total debt to EBITDA - Total debt to EBITDA */
  ratioTrailingTwelveMonthsTotalDebtToEBITDA: number;
  /** RTQ104:  Tốc độ tăng trưởng SPS - Growth rate of SPS */
  ratioTrailingTwelveMonthsGrowthRateOfSPS: number;
  /** RTQ105:  Tốc độ tăng trưởng Interest expense - Interest expense growth rate */
  ratioTrailingTwelveMonthsInterestExpenseGrowthRate: number;
  /** RTQ106:  Tốc độ tăng trưởng NPM - NPM growth rate */
  ratioTrailingTwelveMonthsNPMGrowthRate: number;
  /** RTQ107:  Tốc độ tăng trưởng Accounts receivable - Accounts receivable growth rate */
  ratioTrailingTwelveMonthsAccountsReceivableGrowthRate: number;
  /** RTQ108:  Tốc độ tăng trưởngNet Inventories - Growth RateNet Inventories */
  ratioTrailingTwelveMonthsGrowthRateNetInventories: number;
  /** RTQ109:  Tốc độ tăng trưởng Short-term borrowings - Short-term borrowings . growth rate */
  ratioTrailingTwelveMonthsShortTermBorrowingsGrowthRate: number;
  /** RTQ110:  Tốc độ tăng trưởng Long-term borrowings - Long-term borrowings . growth rate */
  ratioTrailingTwelveMonthsLongTermBorrowingsGrowthRate: number;
  /** RTQ111:  Lãi suất đầu vào bình quân - Average input interest rate */
  ratioTrailingTwelveMonthsAverageInputInterestRate: number;
  /** RTQ112:  Lãi suất đầu ra bình quân - Average output interest rate */
  ratioTrailingTwelveMonthsAverageOutputInterestRate: number;
  /** RTQ113:  Chênh lệch lãi ròng - Net profit difference */
  ratioTrailingTwelveMonthsNetProfitDifference: number;
  /** RTQ114:  TS sinh lời/TTS - Profitable TS/TTS */
  ratioTrailingTwelveMonthsProfitableTSTTS: number;
  /** RTQ115:  Not use - Not use */
  ratioTrailingTwelveMonthsNotUse115: number;
  /** RTQ116:  Chi phí hoạt động/ Tổng tài sản sinh lãi - Operating expenses/Total profitable assets */
  ratioTrailingTwelveMonthsOperatingExpensesTotalProfitableAssets: number;
  /** RTQ117:  Thu nhập lãi ròng/ Tổng thu nhập - Net interest income/Total income */
  ratioTrailingTwelveMonthsNetInterestIncomeTotalIncome: number;
  /** RTQ118:  CIR - CIR */
  ratioTrailingTwelveMonthsCIR: number;
  /** RTQ119:  Tài sản thanh khoản/ Tổng tiền gửi - Liquid assets/Total deposits */
  ratioTrailingTwelveMonthsLiquidAssetsTotalDeposits: number;
  /** RTQ120:  TS thanh khoản/TTS - Liquidity TS/TTS */
  ratioTrailingTwelveMonthsLiquidityTSTTS: number;
  /** RTQ121:  Tiền gửi KH/TTS - Customer/TTS deposit */
  ratioTrailingTwelveMonthsCustomerTTSDeposit: number;
  /** RTQ122:  Dư nợ/TTS - Outstanding loans/ Total Asset */
  ratioTrailingTwelveMonthsOutstandingLoansTotalAsset: number;
  /** RTQ123:  Dư nợ/(Tổng tiền gửi + Giấy tờ có giá) - Outstanding loans/ Total Deposit and Valuable papers */
  ratioTrailingTwelveMonthsOutstandingLoansTotalDepositAndValuablePapers: number;
  /** RTQ124:  Tỷ lệ vốn tín dụng so với vốn lưu động (LDR) - Credit to Working Capital Ratio (LDR) */
  ratioTrailingTwelveMonthsCreditToWorkingCapitalRatio: number;
  /** RTQ125:  Tổng tài sản rủi ro - Total at-risk assets */
  ratioTrailingTwelveMonthsTotalAtRiskAssets: number;
  /** RTQ126:  Tier 1 Capital - Tier 1 Capital */
  ratioTrailingTwelveMonthsTier1Capital: number;
  /** RTQ127:  Tier 1 CAR - Tier 1 CAR */
  ratioTrailingTwelveMonthsTier1CAR: number;
  /** RTQ128:  VCSH/TTS - Equity/TTS */
  ratioTrailingTwelveMonthsEquityTTS: number;
  /** RTQ129:  VCSH/Dư nợ - Equity/Debt balance */
  ratioTrailingTwelveMonthsEquityDebtBalance: number;
  /** RTQ130:  Nợ đủ tiêu chuẩn - Eligible debt */
  ratioTrailingTwelveMonthsEligibleDebt: number;
  /** RTQ131:  Nợ cần chú ý - Debt notes */
  ratioTrailingTwelveMonthsDebtNotes: number;
  /** RTQ132:  Nợ dưới tiêu chuẩn - Subprime debt */
  ratioTrailingTwelveMonthsSubprimeDebt: number;
  /** RTQ133:  Nợ nghi ngờ - Doubtful debt */
  ratioTrailingTwelveMonthsDoubtfulDebt: number;
  /** RTQ134:  Nợ xấu có khả năng mất vốn - Bad debt is likely to lose capital */
  ratioTrailingTwelveMonthsBadDebtLikelyToLoseCapital: number;
  /** RTQ135:  Tổng dư nợ - total loans */
  ratioTrailingTwelveMonthsTotalLoans: number;
  /** RTQ136:  Nợ xấu (3-5)/Tổng dư nợ - NPLs (3-5)/Total outstanding loans */
  ratioTrailingTwelveMonthsNPLs35TotalOutstandingLoans: number;
  /** RTQ137:  Nợ xấu (3-5)/Vốn CSH - NPLs (3-5)/Equity */
  ratioTrailingTwelveMonthsNPLs35Equity: number;
  /** RTQ138:  Nợ xấu (2-5)/Tổng dư nợ - NPLs (2-5)/Total outstanding loans */
  ratioTrailingTwelveMonthsNPLs25TotalOutstandingLoans: number;
  /** RTQ139:  Nợ xấu (2-5)/Vốn CSH - NPLs (2-5)/Equity */
  ratioTrailingTwelveMonthsNPLs25Equity: number;
  /** RTQ140:  DPRRTD/Nợ xấu (3-5) - Credit loss provision/ NPLs (3-5) */
  ratioTrailingTwelveMonthsCreditLossProvisionNPLs35: number;
  /** RTQ141:  DPRRTD/Nợ xấu (2-5) - Credit loss provision/ NPLs (2-5) */
  ratioTrailingTwelveMonthsCreditLossProvisionNPLs25: number;
  /** RTQ142:  DPRR/Dư nợ - Provision/Outstanding loans */
  ratioTrailingTwelveMonthsProvisionOutstandingLoans: number;
  /** RTQ143:  Net Current Asset - Net Current Asset */
  ratioTrailingTwelveMonthsNetCurrentAsset: number;
  /** RTQ144:  Tangible Book - Tangible Book */
  ratioTrailingTwelveMonthsTangibleBook: number;
  /** RTQ145:  Intrinsic Value (DCF) - Intrinsic Value (DCF) */
  ratioTrailingTwelveMonthsIntrinsicValueDCF: number;
  /** IntegratedDate:  Ngày để join giữa 2 bảng TTM và TTMDaily - Date to join between 2 tables TTM and TTMDaily */
  integratedDate: Date;
  /** RTQ146:  Not use - Not use */
  ratioTrailingTwelveMonthsNotUse146: number;
  /** RTQ147:  Not use - Not use */
  ratioTrailingTwelveMonthsNotUse147: number;
  /** RTQ148:  Doanh thu/Tổng tài sản - Revenue/Total Assets */
  ratioTrailingTwelveMonthsRevenueTotalAssets: number;
  /** RTQ149:  % Doanh thu kế hoạch - % Planned revenue */
  ratioTrailingTwelveMonthsPlannedRevenuePercentage: number;
  /** RTQ150:  % LNTT kế hoạch - % PBT of the plan */
  ratioTrailingTwelveMonthsPBTPlanPercentage: number;
  /** RTQ151:  % LNST kế hoạch - % of NPAT of the plan */
  ratioTrailingTwelveMonthsNPATPlanPercentage: number;
  /** RTQ152:  Tốc độ tăng trưởng doanh số thuần (6m-o-6m) - Net sales growth rate (6m-o-6m) */
  ratioTrailingTwelveMonthsNetSalesGrowthRate6mO6m: number;
  /** RTQ153:  Tốc độ tăng trưởng lãi gộp (6m-o-6m) - Gross profit growth rate (6m-o-6m) */
  ratioTrailingTwelveMonthsGrossProfitGrowthRate6mO6m: number;
  /** RTQ154:  Tốc độ tăng trưởng lãi trước thuế (6m-o-6m) - Pre-tax profit growth rate (6m-o-6m) */
  ratioTrailingTwelveMonthsPreTaxProfitGrowthRate6mO6m: number;
  /** RTQ155:  Tốc độ tăng trưởng lãi thuần (6m-o-6m) - Net profit growth rate (6m-o-6m) */
  ratioTrailingTwelveMonthsNetProfitGrowthRate6mO6m: number;
  /** RTQ156:  Tốc độ tăng trưởng doanh số thuần (9m-o-9m) - Net sales growth rate (9m-o-9m) */
  ratioTrailingTwelveMonthsNetSalesGrowthRate9mO9m: number;
  /** RTQ157:  Tốc độ tăng trưởng lãi gộp (9m-o-9m) - Gross profit growth rate (9m-o-9m) */
  ratioTrailingTwelveMonthsGrossProfitGrowthRate9mO9m: number;
  /** RTQ158:  Tốc độ tăng trưởng lãi trước thuế (9m-o-9m) - Pre-tax profit growth rate (9m-o-9m) */
  ratioTrailingTwelveMonthsPreTaxProfitGrowthRate9mO9m: number;
  /** RTQ159:  Tốc độ tăng trưởng lãi thuần (9m-o-9m) - Net profit growth rate (9m-o-9m) */
  ratioTrailingTwelveMonthsNetProfitGrowthRate9mO9m: number;
  /** RTQ160:  Tăng trưởng Doanh thu thuần 3 năm - CARG - 3-Year Net Revenue Growth - CARG */
  ratioTrailingTwelveMonthsThreeYearNetRevenueGrowthCARG: number;
  /** RTQ161:  Tăng trưởng Doanh thu thuần 5 năm - CARG - 5 Year Net Revenue Growth - CARG */
  ratioTrailingTwelveMonthsFiveYearNetRevenueGrowthCARG: number;
  /** RTQ162:  Tăng trưởng LN gộp 3 năm - CARG - 3-year gross profit growth - CARG */
  ratioTrailingTwelveMonthsThreeYearGrossProfitGrowthCARG: number;
  /** RTQ163:  Tăng trưởng LN gộp 5 năm - CARG - 5 year gross profit growth - CARG */
  ratioTrailingTwelveMonthsFiveYearGrossProfitGrowthCARG: number;
  /** RTQ164:  Tăng trưởng LNTT 3 năm - CARG - 3-year EBT growth - CARG */
  ratioTrailingTwelveMonthsThreeYearEBTGrowthCARG: number;
  /** RTQ165:  Tăng trưởng LNTT 5 năm - CARG - 5-year EBT growth - CARG */
  ratioTrailingTwelveMonthsFiveYearEBTGrowthCARG: number;
  /** RTQ166:  Tăng trưởng LN ròng 3 năm - CARG - 3-year net profit growth - CARG */
  ratioTrailingTwelveMonthsThreeYearNetProfitGrowthCARG: number;
  /** RTQ167:  Tăng trưởng LN ròng 5 năm - CARG - 5 year net profit growth - CARG */
  ratioTrailingTwelveMonthsFiveYearNetProfitGrowthCARG: number;
  /** RTQ168:  Tăng trưởng EBIT 3 năm - CARG - 3-Year EBIT Growth - CARG */
  ratioTrailingTwelveMonthsThreeYearEBITGrowthCARG: number;
  /** RTQ169:  Tăng trưởng EBIT 5 năm - CARG - 5 year EBIT growth - CARG */
  ratioTrailingTwelveMonthsFiveYearEBITGrowthCARG: number;
  /** RTQ170:  Tăng trưởng EBITDA 3 năm - CARG - 3-Year EBITDA Growth - CARG */
  ratioTrailingTwelveMonthsThreeYearEBITDAGrowthCARG: number;
  /** RTQ171:  Tăng trưởng EBITDA 5 năm - CARG - 5 year EBITDA growth - CARG */
  ratioTrailingTwelveMonthsFiveYearEBITDAGrowthCARG: number;
  /** RTQ172:  Tăng trưởng Tổng Tài sản 3 năm - CARG - 3-year Total Asset Growth - CARG */
  ratioTrailingTwelveMonthsThreeYearTotalAssetGrowthCARG: number;
  /** RTQ173:  Tăng trưởng Tổng Tài sản 5 năm - CARG - 5 year Total Asset Growth - CARG */
  ratioTrailingTwelveMonthsFiveYearTotalAssetGrowthCARG: number;
  /** RTQ174:  Tăng trưởng VCSH 3 năm - CARG - 3 year equity growth - CARG */
  ratioTrailingTwelveMonthsThreeYearEquityGrowthCARG: number;
  /** RTQ175:  Tăng trưởng VCSH 5 năm - CARG - 5 year equity growth - CARG */
  ratioTrailingTwelveMonthsFiveYearEquityGrowthCARG: number;
  /** RTQ176:  Tăng trưởng VĐL 3 năm - CARG - 3-year charter capital growth - CARG */
  ratioTrailingTwelveMonthsThreeYearCharterCapitalGrowthCARG: number;
  /** RTQ177:  Tăng trưởng VĐL 5 năm - CARG - 5 year chartered capital growth - CARG */
  ratioTrailingTwelveMonthsFiveYearCharterCapitalGrowthCARG: number;
  /** RTQ178:  Tăng trưởng Chi phí đầu tư tài sản cố đinh (CAPEX) 3 năm - CARG - Growth in Fixed Asset Investment Expenses (CAPEX) 3 years - CARG */
  ratioTrailingTwelveMonthsThreeYearCAPEXGrowthCARG: number;
  /** RTQ179:  Tăng trưởng Chi phí đầu tư tài sản cố đinh (CAPEX) 5 năm - CARG - Growth in Fixed Asset Investment Expenses (CAPEX) 5 years - CARG */
  ratioTrailingTwelveMonthsFiveYearCAPEXGrowthCARG: number;
}
export const MapToBaseFinancialStatement: {
  [key: string]: keyof IBaseFinancialStatement;
} = {
  BSA1: "balanceSheetCurrentAssets",
  BSA2: "balanceSheetCashAndCashEquivalents",
  BSA3: "balanceSheetCash",
  BSA4: "balanceSheetCashEquivalents",
  BSA5: "balanceSheetShortTermInvestmentsNet",
  BSA6: "balanceSheetShortTermInvestmentsGross",
  BSA7: "balanceSheetShortTermInvestmentsProvision",
  BSA8: "balanceSheetReceivablesTotal",
  BSA9: "balanceSheetTradeReceivables",
  BSA10: "balanceSheetAdvancesToSuppliers",
  BSA11: "balanceSheetIntercompanyReceivables",
  BSA12: "balanceSheetConstructionContractReceivables",
  BSA13: "balanceSheetOtherReceivables",
  BSA14: "balanceSheetProvisionForDoubtfulDebts",
  BSA15: "balanceSheetInventoriesNet",
  BSA16: "balanceSheetInventoriesGross",
  BSA17: "balanceSheetProvisionForInventoryDecline",
  BSA18: "balanceSheetOtherCurrentAssets",
  BSA19: "balanceSheetShortTermPrepayments",
  BSA20: "balanceSheetVATReceivable",
  BSA21: "balanceSheetOtherTaxesReceivable",
  BSA22: "balanceSheetOtherCurrentAssetsDetail",
  BSA23: "balanceSheetLongTermAssets",
  BSA24: "balanceSheetLongTermReceivablesTotal",
  BSA25: "balanceSheetLongTermTradeReceivables",
  BSA26: "balanceSheetLongTermIntercompanyReceivables",
  BSA27: "balanceSheetLongTermOtherReceivables",
  BSA28: "balanceSheetProvisionForLongTermReceivables",
  BSA29: "balanceSheetFixedAssets",
  BSA30: "balanceSheetTangibleFixedAssetsNet",
  BSA31: "balanceSheetTangibleFixedAssetsCost",
  BSA32: "balanceSheetTangibleFixedAssetsAccumulatedDepreciation",
  BSA33: "balanceSheetFinanceLeaseAssetsNet",
  BSA34: "balanceSheetFinanceLeaseAssetsCost",
  BSA35: "balanceSheetFinanceLeaseAssetsAccumulatedDepreciation",
  BSA36: "balanceSheetIntangibleFixedAssetsNet",
  BSA37: "balanceSheetIntangibleFixedAssetsCost",
  BSA38: "balanceSheetIntangibleFixedAssetsAccumulatedAmortization",
  BSA39: "balanceSheetConstructionInProgressBefore2015",
  BSA40: "balanceSheetInvestmentPropertiesNet",
  BSA41: "balanceSheetInvestmentPropertiesCost",
  BSA42: "balanceSheetInvestmentPropertiesAccumulatedDepreciation",
  BSA43: "balanceSheetLongTermInvestments",
  BSA44: "balanceSheetInvestmentsInSubsidiaries",
  BSA45: "balanceSheetInvestmentsInAssociates",
  BSA46: "balanceSheetOtherLongTermInvestments",
  BSA47: "balanceSheetProvisionForLongTermInvestments",
  BSA48: "balanceSheetGoodwillBefore2015",
  BSA49: "balanceSheetOtherLongTermAssets",
  BSA50: "balanceSheetLongTermPrepayments",
  BSA51: "balanceSheetDeferredIncomeTaxAssets",
  BSA52: "balanceSheetOtherLongTermAssetsDetail",
  BSA53: "balanceSheetTotalAssets",
  BSA54: "balanceSheetLiabilities",
  BSA55: "balanceSheetCurrentLiabilities",
  BSA56: "balanceSheetShortTermLoans",
  BSA57: "balanceSheetTradeAccountsPayable",
  BSA58: "balanceSheetAdvancesFromCustomers",
  BSA59: "balanceSheetTaxesAndPayablesToState",
  BSA60: "balanceSheetPayablesToEmployees",
  BSA61: "balanceSheetAccruedExpenses",
  BSA62: "balanceSheetIntercompanyPayables",
  BSA63: "balanceSheetConstructionContractPayables",
  BSA64: "balanceSheetOtherPayables",
  BSA65: "balanceSheetProvisionForShortTermLiabilities",
  BSA66: "balanceSheetBonusAndWelfareFunds",
  BSA67: "balanceSheetLongTermLiabilities",
  BSA68: "balanceSheetLongTermTradePayables",
  BSA69: "balanceSheetLongTermIntercompanyPayables",
  BSA70: "balanceSheetOtherLongTermPayables",
  BSA71: "balanceSheetLongTermLoans",
  BSA72: "balanceSheetDeferredIncomeTaxLiabilities",
  BSA73: "balanceSheetProvisionForSeveranceAllowances",
  BSA74: "balanceSheetProvisionForLongTermLiabilities",
  BSA75: "balanceSheetReservesBefore2014",
  BSA76: "balanceSheetDeferredRevenue",
  BSA77: "balanceSheetTechnologyScienceDevelopmentFund",
  BSA78: "balanceSheetOwnersEquity",
  BSA79: "balanceSheetCapitalAndReserves",
  BSA80: "balanceSheetPaidInCapital",
  BSA81: "balanceSheetCapitalSurplus",
  BSA82: "balanceSheetOwnersOtherCapital",
  BSA83: "balanceSheetTreasuryShares",
  BSA84: "balanceSheetDifferencesUponAssetRevaluation",
  BSA85: "balanceSheetForeignExchangeDifferences",
  BSA86: "balanceSheetInvestmentAndDevelopmentFunds",
  BSA87: "balanceSheetFinancialReserveFunds",
  BSA88: "balanceSheetStatutoryReserve",
  BSA89: "balanceSheetOtherFunds",
  BSA90: "balanceSheetRetainedEarnings",
  BSA91: "balanceSheetEnterpriseArrangementFund",
  BSA92: "balanceSheetBudgetSourcesAndOtherFunds",
  BSA93: "balanceSheetBonusAndWelfareFundsBefore2010",
  BSA94: "balanceSheetBudgetSources",
  BSA95: "balanceSheetMinorityInterestsBefore2015",
  BSA96: "balanceSheetTotalResources",
  BSB97: "balanceSheetBalancesWithSBV",
  BSB98: "balanceSheetPlacementsAndLoansToOtherCreditInstitutions",
  BSB99: "balanceSheetTradingSecuritiesNet",
  BSB100: "balanceSheetTradingSecurities",
  BSB101: "balanceSheetProvisionForTradingSecuritiesDiminution",
  BSB102: "balanceSheetDerivativesAndOtherFinancialAssets",
  BSB103: "balanceSheetLoansToCustomersNet",
  BSB104: "balanceSheetLoansToCustomers",
  BSB105: "balanceSheetProvisionForCustomerLoansLosses",
  BSB106: "balanceSheetInvestmentSecuritiesNet",
  BSB107: "balanceSheetAvailableForSaleSecurities",
  BSB108: "balanceSheetHeldToMaturityInvestments",
  BSB109: "balanceSheetProvisionForInvestmentSecuritiesDiminution",
  BSB110: "balanceSheetOtherAssets",
  BSB111: "balanceSheetDueToGovernmentAndSBV",
  BSB112: "balanceSheetDepositsAndLoansFromOtherCreditInstitutions",
  BSB113: "balanceSheetDepositsFromCustomers",
  BSB114: "balanceSheetDerivativesAndOtherFinancialLiabilities",
  BSB115: "balanceSheetFundsFromGovernmentAndInstitutions",
  BSB116: "balanceSheetValuablePapersIssued",
  BSB117: "balanceSheetOtherLiabilities",
  BSB118: "balanceSheetCreditInstitutionCapital",
  BSB119: "balanceSheetFundForBasicConstruction",
  BSB120: "balanceSheetPreferredSharesBank",
  BSB121: "balanceSheetCreditInstitutionReserves",
  BSB122: "balanceSheetLettersOfCredit",
  BSB123: "balanceSheetLettersOfCreditAtSight",
  BSB124: "balanceSheetDeferredLettersOfCredit",
  BSB125: "balanceSheetOtherCreditCommitments",
  BSB126: "balanceSheetCreditGuarantees",
  BSB127: "balanceSheetPaymentGuarantees",
  BSB128: "balanceSheetPerformanceGuarantees",
  BSB129: "balanceSheetTenderGuarantees",
  BSB130: "balanceSheetExportGuarantees",
  BSB131: "balanceSheetOtherGuarantees",
  BSB132: "balanceSheetCreditCommitments",
  BSS133: "balanceSheetReceivablesFromSecuritiesTrading",
  BSS134: "balanceSheetCapitalInWhollyOwnedSubsidiaries",
  BSS135: "balanceSheetPayablesToSecuritiesTrading",
  BSS136: "balanceSheetDividendPrincipalAndInterestPayables",
  BSS137: "balanceSheetPayablesToSecuritiesIssuers",
  BSS138: "balanceSheetProvisionForInvestorCompensation",
  BSI139: "balanceSheetIntercompanyReceivablesInsurance",
  BSI140: "balanceSheetReceivablesFromFinancialInvestments",
  BSI141: "balanceSheetShortageOfAssetsPendingResolution",
  BSI142: "balanceSheetShortTermMarginDeposits",
  BSI143: "balanceSheetLoansAndAdvancesToCustomersTotal",
  BSI144: "balanceSheetLoansAndAdvancesToCustomers",
  BSI145: "balanceSheetProvisionForCreditLoss",
  BSI146: "balanceSheetLongTermDeposits",
  BSI147: "balanceSheetAmountDueToCustomers",
  BSI148: "balanceSheetDepositsFromCommercialBanks",
  BSI149: "balanceSheetDepositsFromCustomersInsurance",
  BSI150: "balanceSheetLongTermMarginDeposits",
  BSI151: "balanceSheetUnearnedPremiumReserveBefore2014",
  BSI152: "balanceSheetTechnicalReserveBefore2014",
  BSI153: "balanceSheetClaimReserveBefore2014",
  BSI154: "balanceSheetCatastropheReserveBefore2014",
  BSI155: "balanceSheetDividendReserveBefore2014",
  BSI156: "balanceSheetEqualizationReserveBefore2014",
  BSB157: "balanceSheetContingentLiabilities",
  BSB158: "balanceSheetLoanGuarantees",
  BSA159: "balanceSheetShortTermLoansReceivables",
  BSA160: "balanceSheetGovernmentBondsPurchasedForResaleAssets",
  BSA161: "balanceSheetLongTermPrepaymentsToSuppliers",
  BSA162: "balanceSheetLongTermLoansReceivables",
  BSA163: "balanceSheetLongTermIncompleteAssets",
  BSA164: "balanceSheetLongTermCostOfWorkInProgress",
  BSA165: "balanceSheetHeldToMaturityInvestmentsAdditional",
  BSA166: "balanceSheetLongTermEquipmentAndSpareParts",
  BSA167: "balanceSheetShortTermUnrealizedRevenue",
  BSA168: "balanceSheetPriceStabilizationFund",
  BSA169: "balanceSheetGovernmentBondsPurchasedForResaleLiabilities",
  BSA170: "balanceSheetLongTermAdvancesFromCustomers",
  BSA171: "balanceSheetLongTermAccruedExpenses",
  BSA172: "balanceSheetIntraCompanyPayablesForOperatingCapital",
  BSA173: "balanceSheetConvertibleBonds",
  BSA174: "balanceSheetPreferredShares",
  BSA175: "balanceSheetCommonShares",
  BSA176: "balanceSheetConversionOptionsOnConvertibleBonds",
  BSA177: "balanceSheetBeginningAccumulatedUndistributedEarnings",
  BSA178: "balanceSheetCurrentPeriodUndistributedEarnings",
  BSB179: "balanceSheetForeignExchangeTransactionCommitments",
  BSB180: "balanceSheetForeignExchangeBuyingCommitments",
  BSB181: "balanceSheetForeignExchangeSellingCommitments",
  BSB182: "balanceSheetSwapCommitments",
  BSB183: "balanceSheetFutureCommitments",
  BSB184: "balanceSheetIrrevocableLoanCommitments",
  BSB185: "balanceSheetLettersOfCreditCommitments",
  BSB186: "balanceSheetOtherCommitments",
  BSS187: "balanceSheetInvestorDepositsForSecuritiesTrading",
  BSA188: "balanceSheetConstructionInProgress",
  BSS189: "balanceSheetLongTermSecuritiesInvestment",
  BSI190: "balanceSheetUndistributedCommissionExpenses",
  BSI191: "balanceSheetOtherShortTermPrepayments",
  BSI192: "balanceSheetReinsuranceAssets",
  BSI193: "balanceSheetProvisionForPremiumOutwardReinsurance",
  BSI194: "balanceSheetProvisionForClaimsFromOutwardReinsurance",
  BSI195: "balanceSheetInsuranceDeposits",
  BSI196: "balanceSheetOtherLongTermReceivablesAdditional",
  BSI197: "balanceSheetUnearnedCommissionIncome",
  BSI198: "balanceSheetReceivablesFromInsuranceContracts",
  BSI199: "balanceSheetOtherReceivablesFromCustomers",
  BSI200: "balanceSheetPayablesFromInsuranceContracts",
  BSI201: "balanceSheetOtherPayablesToSuppliers",
  BSI202: "balanceSheetInsuranceReserve",
  BSI203: "balanceSheetUnearnedPremiumReserve",
  BSI204: "balanceSheetMathematicalReserve",
  BSI205: "balanceSheetClaimReserve",
  BSI206: "balanceSheetCatastropheReserve",
  BSI207: "balanceSheetDividendReserves",
  BSI208: "balanceSheetEqualizationReserves",
  BSA209: "balanceSheetGoodwill",
  BSA210: "balanceSheetMinorityInterests",
  BSA211: "balanceSheetFundsUsedForFixedAssetAcquisitions",
  BSS212: "balanceSheetPaymentsToSettlementAssistanceFund",
  BSS213: "balanceSheetAvailableForSaleSecuritiesSecurities",
  BSS214: "balanceSheetShortTermFinancialAssets",
  BSS215: "balanceSheetLoans",
  BSS216: "balanceSheetAvailableForSaleAssets",
  BSS217: "balanceSheetReceivablesFrom2016",
  BSS218: "balanceSheetAccountReceivables",
  BSS219: "balanceSheetReceivablesAndAccruedDividendInterest",
  BSS220: "balanceSheetDueOrOverdueReceivablesOnDividendInterest",
  BSS221: "balanceSheetDoubtfulDebtsOnOverdueDividendInterest",
  BSS222: "balanceSheetUndueAccruedDividendInterest",
  BSS223: "balanceSheetDeductibleValueAddedTax",
  BSS224: "balanceSheetReceivablesFromStockCompanyServices",
  BSS225: "balanceSheetReceivablesFromTransactionErrors",
  BSS226: "balanceSheetProvisionForShortTermReceivables",
  BSS227: "balanceSheetAdvances",
  BSS228: "balanceSheetToolsAndEquipment",
  BSS229: "balanceSheetShortTermCollaterals",
  BSS230: "balanceSheetProvisionForOtherCurrentAssets",
  BSS231: "balanceSheetLongTermFinancialAssets",
  BSS232: "balanceSheetRevaluationOfTangibleFixedAssets",
  BSS233: "balanceSheetRevaluationOfFinanceLeaseAssets",
  BSS234: "balanceSheetRevaluationOfIntangibleFixedAssets",
  BSS235: "balanceSheetRevaluationOfInvestmentProperty",
  BSS236: "balanceSheetLongTermCollaterals",
  BSS237: "balanceSheetProvisionForLongTermAssets",
  BSS238: "balanceSheetShortTermLoansSecurities",
  BSS239: "balanceSheetShortTermFinanceLease",
  BSS240: "balanceSheetShortTermFinancialAssetsLoans",
  BSS241: "balanceSheetShortTermConvertibleBonds",
  BSS242: "balanceSheetShortTermBondsIssued",
  BSS243: "balanceSheetLoansFromPayableAssistanceFund",
  BSS244: "balanceSheetPayablesFromTransactionErrors",
  BSS245: "balanceSheetEmployeesWelfarePayable",
  BSS246: "balanceSheetShortTermCollateralsReceived",
  BSS247: "balanceSheetLongTermLoansSecurities",
  BSS248: "balanceSheetLongTermFinancialLease",
  BSS249: "balanceSheetLongTermFinancialAssetsLoans",
  BSS250: "balanceSheetLongTermBondsIssued",
  BSS251: "balanceSheetLongTermCollateralsReceived",
  BSS252: "balanceSheetShareholdersEquity",
  BSS253: "balanceSheetCharterReserve",
  BSS254: "balanceSheetRealizedGain",
  BSS255: "balanceSheetUnrealizedGain",
  BSS256: "balanceSheetDistributedProfitToInvestors",
  BSS257: "balanceSheetDistributedProfitToInvestorsDuringYear",
  BSB258: "balanceSheetPlacementsWithOtherCreditInstitutions",
  BSB259: "balanceSheetLoansToOtherCreditInstitutions",
  BSB260: "balanceSheetProvisionForLossesOnLoansToCreditInstitutions",
  BSB261: "balanceSheetDebtBuyingActivities",
  BSB262: "balanceSheetDebtBuying",
  BSB263: "balanceSheetProvisionForDebtBuyingLosses",
  BSB264: "balanceSheetOtherReceivablesBank",
  BSB265: "balanceSheetAccruedInterestAndFeeReceivables",
  BSB266: "balanceSheetDeferredTaxAssetsBank",
  BSB267: "balanceSheetOtherAssetsBank",
  BSB268: "balanceSheetGoodwillBank",
  BSB269: "balanceSheetProvisionForOtherAssetsBank",
  BSB270: "balanceSheetDepositsFromOtherCreditInstitutions",
  BSB271: "balanceSheetLoansFromOtherCreditInstitutions",
  BSB272: "balanceSheetAccruedInterestAndFeePayables",
  BSB273: "balanceSheetTaxPayables",
  BSB274: "balanceSheetOtherLiabilitiesBank",
  BSB275: "balanceSheetProvisionsForOffBalanceSheetCommitments",
  BSA276: "balanceSheetInvestmentsInJointVenture",
  BSA277: "balanceSheetInvestmentsInAssociatesAdditional",
  BSA278: "balanceSheetConstructionInvestmentFund",
  BSI279: "balanceSheetOperatingLeaseAssets",
  BSI280: "balanceSheetGoodsHeldUnderTrustOrProcessing",
  BSI281: "balanceSheetBadDebtWrittenOff",
  BSI282: "balanceSheetInsuranceContractsNotYetResponsible",
  BSI283: "balanceSheetForeignCurrencies",
  BSI284: "balanceSheetUSD",
  BSI285: "balanceSheetEUR",
  BSI286: "balanceSheetJPY",
  BSI287: "balanceSheetOtherCurrencies",
  ISA1: "incomeStatementSales",
  ISA2: "incomeStatementSalesDeductions",
  ISA3: "incomeStatementNetSales",
  ISA4: "incomeStatementCostOfSales",
  ISA5: "incomeStatementGrossProfit",
  ISA6: "incomeStatementFinancialIncome",
  ISA7: "incomeStatementFinancialExpenses",
  ISA8: "incomeStatementInterestExpenses",
  ISA9: "incomeStatementSellingExpenses",
  ISA10: "incomeStatementGeneralAndAdminExpenses",
  ISA11: "incomeStatementOperatingProfitLoss",
  ISA12: "incomeStatementOtherIncome",
  ISA13: "incomeStatementOtherExpenses",
  ISA14: "incomeStatementNetOtherIncomeExpenses",
  ISA15: "incomeStatementIncomeFromInvestmentsInOtherEntities",
  ISA16: "incomeStatementNetProfitLossBeforeTax",
  ISA17: "incomeStatementCurrentBusinessIncomeTax",
  ISA18: "incomeStatementDeferredBusinessIncomeTax",
  ISA19: "incomeStatementBusinessIncomeTaxExpenses",
  ISA20: "incomeStatementNetProfitLossAfterTax",
  ISA21: "incomeStatementMinorityInterests",
  ISA22: "incomeStatementAttributableToParentCompany",
  ISA23: "incomeStatementBasicEPS",
  ISA24: "incomeStatementDilutedEPS",
  ISB25: "incomeStatementInterestAndSimilarIncome",
  ISB26: "incomeStatementInterestAndSimilarExpenses",
  ISB27: "incomeStatementNetInterestIncome",
  ISB28: "incomeStatementFeesAndCommissionIncome",
  ISB29: "incomeStatementFeesAndCommissionExpenses",
  ISB30: "incomeStatementNetFeeAndCommissionIncome",
  ISB31: "incomeStatementNetGainLossFromForeignCurrencyAndGold",
  ISB32: "incomeStatementNetGainLossFromTradingSecurities",
  ISB33: "incomeStatementNetGainLossFromDisposalOfInvestmentSecurities",
  ISB34: "incomeStatementOtherIncomeBank",
  ISB35: "incomeStatementOtherExpensesBank",
  ISB36: "incomeStatementNetOtherIncomeExpensesBank",
  ISB37: "incomeStatementDividendsIncome",
  ISB38: "incomeStatementTotalOperatingIncome",
  ISB39: "incomeStatementGeneralAndAdminExpensesBank",
  ISB40: "incomeStatementOperatingProfitBeforeProvisionForCreditLosses",
  ISB41: "incomeStatementProvisionForCreditLosses",
  ISS42: "incomeStatementRevenueInBrokerageServices",
  ISS43: "incomeStatementRevenueInSecuritiesInvestmentAndOtherActivities",
  ISS44: "incomeStatementRevenueInUnderwritingServices",
  ISS45: "incomeStatementRevenueInIssuanceAgencyServices",
  ISS46: "incomeStatementRevenueInStockInvestmentAdvisoryServices",
  ISS47: "incomeStatementRevenueInSecuritiesCustodyServices",
  ISS48: "incomeStatementRevenueInAuctionTrustServices",
  ISS49: "incomeStatementRentalIncomeFromInvestmentProperty",
  ISS50: "incomeStatementOtherRevenue",
  ISI51: "incomeStatementGrossWrittenPremium",
  ISI52: "incomeStatementReinsurancePremiumAssumed",
  ISI53: "incomeStatementDeductions",
  ISI54: "incomeStatementReinsurancePremiumCeded",
  ISI55: "incomeStatementPremiumDeductions",
  ISI56: "incomeStatementPremiumReturns",
  ISI57: "incomeStatementOtherDeductions",
  ISI58: "incomeStatementIncreaseInUnearnedPremiumAndTechnicalReserve",
  ISI59: "incomeStatementCommissionOnReinsuranceCeded",
  ISI60: "incomeStatementOtherIncomeInsurance",
  ISI61: "incomeStatementIncomeOnReinsuranceAssumed",
  ISI62: "incomeStatementIncomeOnReinsuranceCeded",
  ISI63: "incomeStatementIncomeFromOtherActivities",
  ISI64: "incomeStatementNetSalesFromInsuranceBusiness",
  ISI65: "incomeStatementClaimAndMaturityPaymentExpenses",
  ISI66: "incomeStatementClaimExpensesForReinsuranceAssumed",
  ISI67: "incomeStatementDeductionsExpenses",
  ISI68: "incomeStatementRecoveriesFromReinsuranceCeded",
  ISI69: "incomeStatementSubrogationRecoveries",
  ISI70: "incomeStatementSalvages",
  ISI71: "incomeStatementClaimExpensesOnRetainedRisks",
  ISI72: "incomeStatementClaimExpensesUsingCatastropheReserve",
  ISI73: "incomeStatementIncreaseDecreaseInClaimReserve",
  ISI74: "incomeStatementProvisionForCatastropheReserve",
  ISI75: "incomeStatementOtherInsuranceOperatingExpenses",
  ISI76: "incomeStatementOtherUnderwritingExpenses",
  ISI77: "incomeStatementCommissions",
  ISI78: "incomeStatementExpenseOfRecourseAgainstThirdParty",
  ISI79: "incomeStatementExpenseOfHandlingFullyIndemnifiedGoods",
  ISI80: "incomeStatementRiskMinimizationExpenses",
  ISI81: "incomeStatementLossAdjustingFeeAndRiskAssessment",
  ISI82: "incomeStatementOtherExpensesInsurance",
  ISI83: "incomeStatementOtherReinsuranceAssumedExpenses",
  ISI84: "incomeStatementOtherReinsuranceCededExpenses",
  ISI85: "incomeStatementOtherDirectInsuranceOperatingExpenses",
  ISI86: "incomeStatementTotalDirectInsuranceOperatingExpenses",
  ISI87: "incomeStatementGrossInsuranceOperatingProfit",
  ISI88: "incomeStatementIncomeFromBankingActivities",
  ISI89: "incomeStatementExpensesFromBankingActivities",
  ISI90: "incomeStatementNetOperatingIncomeFromBankingActivities",
  ISI91: "incomeStatementRevenueFromOtherActivities",
  ISI92: "incomeStatementExpensesFromOtherActivities",
  ISI93: "incomeStatementNetOperatingIncomeFromOtherActivities",
  ISI94: "incomeStatementGeneralAndAdministrativeExpensesOfInsuranceOperation",
  ISI95: "incomeStatementGeneralAndAdministrativeExpensesOfBankingOperation",
  ISI96: "incomeStatementGeneralAndAdministrativeExpensesOfOtherOperations",
  ISI97: "incomeStatementNetOperatingProfitFromInsuranceOperation",
  ISI98: "incomeStatementNetProfitFromBankOperation",
  ISI99: "incomeStatementNetProfitFromOtherOperations",
  ISI100: "incomeStatementProfitFromFinancialActivities",
  ISI101: "incomeStatementEqualizationReserve",
  ISA102: "incomeStatementGainLossFromJointVentures",
  ISI103: "incomeStatementRevenueFromInsurancePremium",
  ISI104:
    "incomeStatementIncreaseDecreaseInUnearnedPremiumReserveForDirectAndOutwardReinsurance",
  ISI105: "incomeStatementNetRevenueOfInsurancePremium",
  ISI106:
    "incomeStatementCommissionIncomeFromOutwardReinsuranceAndOtherIncomeFromInsuranceActivities",
  ISI107: "incomeStatementClaimRecoveriesFromOutwardReinsurance",
  ISI108: "incomeStatementIncreaseDecreaseInMathematicalReserves",
  ISI109:
    "incomeStatementIncreaseDecreaseInClaimReserveForDirectAndInwardInsurance",
  ISI110: "incomeStatementIncreaseDecreaseInClaimReserveForOutwardInsurance",
  ISI111: "incomeStatementTotalInsuranceClaimSettlementExpenses",
  ISI112: "incomeStatementSellingExpensesInsurance",
  ISI113: "incomeStatementLossFromLifeInsurance",
  ISI114: "incomeStatementNetProfitFromNonLifeInsurance",
  ISS115: "incomeStatementIncomeFromFVTPLFinancialAssets",
  ISS116: "incomeStatementIncomeFromSellingFVTPLFinancialAssets",
  ISS117: "incomeStatementFVTPLRevaluationGain",
  ISS118: "incomeStatementDividendInterestFromFVTPLFinancialAssets",
  ISS119: "incomeStatementIncomeFromHTMInvestments",
  ISS120: "incomeStatementIncomeFromLoansAndReceivables",
  ISS121: "incomeStatementIncomeFromAFSAssets",
  ISS122: "incomeStatementIncomeFromDerivatives",
  ISS123: "incomeStatementRevenueInFinancialAdvisoryServices",
  ISS124: "incomeStatementLossFromFVTPLFinancialAssets",
  ISS125: "incomeStatementLossFromSellingFVTPLFinancialAssets",
  ISS126: "incomeStatementFVTPLRevaluationLoss",
  ISS127: "incomeStatementFVTPLPurchaseTransactionCosts",
  ISS128: "incomeStatementLossFromHTMInvestments",
  ISS129: "incomeStatementInterestCostAndLossFromLoansAndReceivables",
  ISS130: "incomeStatementLossFromAFSAssets",
  ISS168:
    "incomeStatementProvisionForLossesFromMortgageAssetsUncollectibleReceivablesAndLoanExpenses",
  ISS131: "incomeStatementLossFromDerivatives",
  ISS132: "incomeStatementProprietaryTradingServicesExpenses",
  ISS133: "incomeStatementBrokerageExpenses",
  ISS134: "incomeStatementUnderwritingAndSecuritiesIssuanceExpenses",
  ISS135: "incomeStatementExpensesForSecuritiesAdvisory",
  ISS136: "incomeStatementBiddingAgentServiceExpenses",
  ISS137: "incomeStatementInvestorSecuritiesDepositoryExpenses",
  ISS138: "incomeStatementExpensesForFinancialAdvisoryActivities",
  ISS139: "incomeStatementOtherExpensesSecurities",
  ISS140:
    "incomeStatementExpensesFromSecuritiesTransactionErrorsAndOtherErrors",
  ISS141: "incomeStatementRevenueFromFinancialActivities",
  ISS142: "incomeStatementRealizedAndUnrealizedForeignExchangeGain",
  ISS143: "incomeStatementIncomeFromNonFixedAccruedDividendAndInterest",
  ISS144:
    "incomeStatementGainFromDisposalsOrSalesOfInvestmentsInSubsidiariesAssociatesJointVentures",
  ISS145: "incomeStatementOtherRevenueFromInvestments",
  ISS146: "incomeStatementFinancialExpensesSecurities",
  ISS147: "incomeStatementRealizedAndUnrealizedForeignExchangeLoss",
  ISS148: "incomeStatementInterestExpensesSecurities",
  ISS149:
    "incomeStatementLossFromDisposalsOrSalesOfInvestmentsInSubsidiariesAssociatesJointVentures",
  ISS150: "incomeStatementProvisionForLossesOnLongTermFinancialInvestment",
  ISS151: "incomeStatementOtherInvestmentExpenses",
  ISS152: "incomeStatementSellingCosts",
  ISS153: "incomeStatementRealizedGain",
  ISS154: "incomeStatementUnrealizedGain",
  ISS155: "incomeStatementProfitAfterTaxDeductedOfFunds",
  ISS156: "incomeStatementGainLossFromRevaluationOfHTMInvestments",
  ISS157: "incomeStatementGainLossFromRevaluationOfAFSFinancialAssets",
  ISS158:
    "incomeStatementGainLossDistributedFromInvestmentsInSubsidiariesAssociatesJointVentures",
  ISS159: "incomeStatementGainLossFromRevaluationOfDerivatives",
  ISS160:
    "incomeStatementGainLossFromForeignExchangeDifferenceOfOverseasOperations",
  ISS161:
    "incomeStatementPreDistributedGainLossFromInvestmentsInSubsidiariesAssociatesJointVentures",
  ISS162: "incomeStatementGainLossFromRevaluationOfDerivativesAdditional",
  ISS163:
    "incomeStatementGainLossFromRevaluationOfFixedAssetsUsingFairValueModel",
  ISS164: "incomeStatementTotalComprehensiveIncome",
  ISS165: "incomeStatementComprehensiveIncomeDistributedToShareholders",
  ISS166:
    "incomeStatementComprehensiveIncomeDistributedToUncontrolledShareholders",
  ISS167: "incomeStatementNetIncomeToCommonShare",
  ISI175: "incomeStatementIncreaseDecreaseInReinsurancePremiumCeded",
  ISI176: "incomeStatementCompensation",
  ISI177: "incomeStatementTotalCompensation",
  ISI178: "incomeStatementRealEstateInvestmentsProfits",
  ISI179: "incomeStatementRevenueFromRealEstateInvestments",
  ISI180: "incomeStatementCostOfRealEstateInvestments",
  ISS174: "incomeStatementTotalOtherComprehensiveIncome",
  CFA1: "cashFlowNetProfitBeforeTax",
  CFA2: "cashFlowDepreciationAndAmortisation",
  CFA3: "cashFlowProvisions",
  CFA4: "cashFlowUnrealisedForeignExchangeGainLoss",
  CFA5: "cashFlowProfitLossFromLiquidatingFixedAssets",
  CFA6: "cashFlowProfitLossFromInvestingActivities",
  CFA7: "cashFlowInterestExpense",
  CFA8: "cashFlowInterestIncomeAndDividend",
  CFA9: "cashFlowOperatingProfitBeforeChangesInWC",
  CFA10: "cashFlowIncreaseDecreaseInReceivables",
  CFA11: "cashFlowIncreaseDecreaseInInventories",
  CFA12: "cashFlowIncreaseDecreaseInPayables",
  CFA13: "cashFlowIncreaseDecreaseInPrepaidExpenses",
  CFA14: "cashFlowInterestPaid",
  CFA15: "cashFlowBusinessIncomeTaxPaid",
  CFA16: "cashFlowOtherReceiptsFromOperatingActivities",
  CFA17: "cashFlowOtherPaymentsOnOperatingActivities",
  CFA18: "cashFlowNetCashFlowsFromOperatingActivities",
  CFA19: "cashFlowPurchasesOfFixedAssetsAndOtherLongTermAssets",
  CFA20: "cashFlowProceedsFromDisposalOfFixedAssets",
  CFA21: "cashFlowLoansGrantedPurchasesOfDebtInstruments",
  CFA22: "cashFlowCollectionOfLoansProceedsFromSalesOfDebtInstruments",
  CFA23: "cashFlowInvestmentsInOtherEntities",
  CFA24: "cashFlowProceedsFromDivestmentInOtherEntities",
  CFA25: "cashFlowDividendsAndInterestReceived",
  CFA26: "cashFlowNetCashFlowsFromInvestingActivities",
  CFA27: "cashFlowProceedsFromIssueOfShares",
  CFA28: "cashFlowPaymentsForShareReturnsAndRepurchases",
  CFA29: "cashFlowProceedsFromLoans",
  CFA30: "cashFlowRepaymentOfLoans",
  CFA31: "cashFlowFinanceLeasePrincipalPayments",
  CFA32: "cashFlowDividendsPaid",
  CFA33: "cashFlowInterestsReceived",
  CFA34: "cashFlowNetCashFlowsFromFinancingActivities",
  CFA35: "cashFlowNetIncreaseInCashAndCashEquivalents",
  CFA36: "cashFlowCashAndCashEquivalentsAtBeginningOfPeriod",
  CFA37: "cashFlowEffectOfForeignExchangeDifferences",
  CFA38: "cashFlowCashAndCashEquivalentsAtEndOfPeriod",
  CFA39: "cashFlowGainsFromSalesOfGoodsAndServiceProvisionsAndOtherGains",
  CFA40: "cashFlowPaymentsToSuppliers",
  CFA41: "cashFlowPaymentsToEmployees",
  CFA42: "cashFlowLoanInterestsAlreadyPaid",
  CFA43: "cashFlowPaymentsForCorporateIncomeTax",
  CFA44: "cashFlowOtherReceiptsDirect",
  CFA45: "cashFlowOtherDisbursements",
  CFB46: "cashFlowGainLossInDisposalOfInvestmentProperties",
  CFB47: "cashFlowOtherAdjustments",
  CFB48: "cashFlowIncreaseDecreaseInCompulsoryReservesWithSBV",
  CFB49:
    "cashFlowIncreaseDecreaseInPlacementsWithAndLoansToOtherCreditInstitutions",
  CFB50: "cashFlowIncreaseDecreaseInTradingSecuritiesDirect",
  CFB51: "cashFlowIncreaseDecreaseInDerivativesAndOtherFinancialAssets",
  CFB52: "cashFlowIncreaseDecreaseInLoansAndAdvancesToCustomers",
  CFB53: "cashFlowIncreaseDecreaseInInterestReceivable",
  CFB54: "cashFlowIncreaseDecreaseInProvisionForLoanLosses",
  CFB55: "cashFlowIncreaseDecreaseInOtherOperatingAssets",
  CFB56: "cashFlowIncreaseDecreaseInLoansFromStateAndSBV",
  CFB57:
    "cashFlowIncreaseDecreaseInPlacementsAndLoansFromOtherCreditInstitutions",
  CFB58: "cashFlowIncreaseDecreaseInDepositsFromCustomers",
  CFB59: "cashFlowIncreaseDecreaseInDerivativesAndOtherFinancialLiabilities",
  CFB60:
    "cashFlowIncreaseDecreaseInFundsReceivedFromGovInternationalAndOtherInstitutions",
  CFB61: "cashFlowIncreaseDecreaseInValuablePapersIssued",
  CFB62: "cashFlowIncreaseDecreaseInAccruedInterestExpenses",
  CFB63: "cashFlowIncreaseDecreaseInOtherOperatingLiabilities",
  CFB64: "cashFlowNetCashFlowsFromOperatingActivitiesBeforeBIT",
  CFB65: "cashFlowPaymentFromReserves",
  CFB66: "cashFlowBadDebtRecoveries",
  CFB67: "cashFlowPaymentsOnDisposalOfFixedAssets",
  CFB68: "cashFlowPurchasesOfInvestmentProperties",
  CFB69: "cashFlowProceedsFromDisposalOfInvestmentProperties",
  CFB70: "cashFlowPaymentsOnDisposalOfInvestmentProperties",
  CFB71: "cashFlowProceedsFromIssuanceOfConvertibleBonds",
  CFB72: "cashFlowPaymentsForRedemptionOfConvertibleBonds",
  CFB73: "cashFlowPurchaseOfTreasuryShares",
  CFB74: "cashFlowProceedsFromSellingOfTreasuryShares",
  CFB75: "cashFlowInterestAndSimilarReceipts",
  CFB76: "cashFlowInterestAndSimilarPayments",
  CFB77: "cashFlowFeesAndCommissionIncomeReceived",
  CFB78: "cashFlowNetReceiptsFromDealingOfForeignCurrenciesGold",
  CFB79: "cashFlowNetReceiptsFromDealingOfSecurities",
  CFB80: "cashFlowOtherOperatingIncome",
  CFB81: "cashFlowPaymentsToEmployeesAndOtherOperatingExpenses",
  CFS82: "cashFlowReceiptsFromOperatingActivitiesDirect",
  CFS83: "cashFlowPaymentsToOperatingActivitiesDirect",
  CFS84: "cashFlowPaymentsToSettlementAssistanceFund",
  CFS85: "cashFlowReceiptsFromSecuritiesTradingOfCustomers",
  CFS86: "cashFlowPaymentsToSecuritiesTradingOfCustomers",
  CFS87: "cashFlowReceiptsFromListedSecuritiesTrading",
  CFS88: "cashFlowPaymentsToSecuritiesIssuers",
  CFI89: "cashFlowGrossWrittenPremiumReceivables",
  CFI90: "cashFlowReinsuranceAssumedReceivables",
  CFI91: "cashFlowReinsuranceCededReceivables",
  CFI92: "cashFlowOtherReceivablesFromInsuranceActivities",
  CFI93: "cashFlowInterCompanyReceivablesPayables",
  CFI94: "cashFlowGrossWrittenPremiumPayables",
  CFI95: "cashFlowReinsuranceAssumedPayables",
  CFI96: "cashFlowReinsuranceCededPayables",
  CFI97: "cashFlowOtherPayablesFromInsuranceActivities",
  CFI98: "cashFlowPayablesToEmployeesInsurance",
  CFI99: "cashFlowPremiumReceivedAndInterestIncomeReceived",
  CFI100: "cashFlowSumsReceivedInTrust",
  CFI101: "cashFlowCashWithdrawalFromEntrustedInvestment",
  CFI102: "cashFlowCashReturnedForInvestorsAndMOFFromAdditionalPaidInCapital",
  CFA103: "cashFlowAmortisationOfGoodwill",
  CFA104: "cashFlowOtherAdjustmentsAdditional",
  CFA105: "cashFlowIncreaseDecreaseInTradingSecurities",
  CFB106: "cashFlowReceiptsFromDebtsWrittenOffOrPaidOffByRiskFund",
  CFS107: "cashFlowCashOutflowForPurchasingFinancialAssets",
  CFS108: "cashFlowCashInflowFromSellingFinancialAssets",
  CFS109: "cashFlowDividendReceived",
  CFS110: "cashFlowInterestsReceivedAdditional",
  CFS111:
    "cashFlowCashOutflowForOrganizationsProvidingServicesToSecuritiesCompany",
  CFS112: "cashFlowCashOutflowForBuyingSellingFinancialAssets",
  CFS113: "cashFlowLoansFromSettlementAssistanceFundReceived",
  CFS114: "cashFlowOtherLoansReceived",
  CFS115: "cashFlowLoansPrincipalRepaidToSettlementAssistanceFund",
  CFS116: "cashFlowFinancialAssetsLoansPrincipalRepaid",
  CFS117: "cashFlowOtherLoansPrincipalRepaid",
  CFS118: "cashFlowCashAndBankDepositAtBeginningOfPeriod",
  CFS119: "cashFlowBankDepositForSecuritiesCompanyActivitiesBeginning",
  CFS120: "cashFlowCashEquivalentsBeginning",
  CFS121: "cashFlowCashAndBankDepositDuringPeriod",
  CFS122: "cashFlowBankDepositForSecuritiesCompanyActivitiesDuring",
  CFS123: "cashFlowCashEquivalentsDuring",
  CFS124: "cashFlowEffectOfChangesInForeignCurrencyExchangeRates",
  CFS125: "cashFlowCashInflowFromSecuritiesSalesBroking",
  CFS126: "cashFlowCashOutflowFromSecuritiesPurchaseBroking",
  CFS127: "cashFlowCashInflowFromMandatedSecuritiesSales",
  CFS128: "cashFlowCashOutflowFromMandatedSecuritiesSales",
  CFS129: "cashFlowCashInflowFromCurrentAccountOfClients",
  CFS130: "cashFlowCashOutflowFromCurrentAccountOfClients",
  CFS131: "cashFlowCashInflowOnLoanFromSettlementAssistanceFund",
  CFS132: "cashFlowCashOutflowOnRepayingLoansFromSettlementAssistanceFund",
  CFS133: "cashFlowCashReceivedForTransactionOfClients",
  CFS134: "cashFlowCashReceivedForMandatedInvestmentOfClients",
  CFS135: "cashFlowCashPaidForDepositoryFeeOfClients",
  CFS136: "cashFlowCashReceivedOnSecuritiesTransactionsErrors",
  CFS137: "cashFlowCashPaidOnSecuritiesTransactionErrors",
  CFS138: "cashFlowCashReceivedFromIssuingOrganizations",
  CFS139: "cashFlowCashPaidToIssuingOrganizations",
  CFS140: "cashFlowNetIncreaseDecreaseOfCashAndCashEquivalentsInPeriod",
  CFS141: "cashFlowCashAndCashEquivalentsOfClientsAtBeginningOfPeriod",
  CFS142: "cashFlowCashAndCashEquivalentAtBeginningOfInvestor",
  CFS143:
    "cashFlowInvestorDepositForSecuritiesTransactionBySecuritiesCompanyMethod",
  CFS144: "cashFlowAmountsWhichHaveSpecificTermSecuritiesCompany",
  CFS145:
    "cashFlowInvestorDepositForSecuritiesTransactionByCommercialBankMethod",
  CFS146: "cashFlowAmountsWhichHaveSpecificTermCommercialBank",
  CFS147: "cashFlowDepositForSecuritiesClearing",
  CFS148: "cashFlowCustomersGeneralDepositForSecuritiesTransactions",
  CFS149: "cashFlowIssuingOrganizationDeposit",
  CFS150: "cashFlowAmountsWhichHaveSpecificTermIssuingOrganization",
  CFS151: "cashFlowCashEquivalentBeginningCustomer",
  CFS152: "cashFlowEffectOfChangesInForeignCurrencyExchangeRatesCustomer",
  CFS153: "cashFlowCashAndCashEquivalentAtEndOfYear",
  CFS154: "cashFlowCashAtBankAtEndOfPeriod",
  CFS155:
    "cashFlowInvestorDepositForSecuritiesTransactionBySecuritiesCompanyMethodEnd",
  CFS156: "cashFlowAmountsWhichHaveSpecificTermSecuritiesCompanyEnd",
  CFS157:
    "cashFlowInvestorDepositForSecuritiesTransactionByCommercialBankMethodEnd",
  CFS158: "cashFlowAmountsWhichHaveSpecificTermCommercialBankEnd",
  CFS159: "cashFlowCustomersGeneralDepositForSecuritiesTransactionsEnd",
  CFS160: "cashFlowDepositForSecuritiesClearingEnd",
  CFS161: "cashFlowIssuingOrganizationDepositEnd",
  CFS162: "cashFlowAmountsWhichHaveSpecificTermIssuingOrganizationEnd",
  CFS163: "cashFlowCashEquivalentEnd",
  CFS164: "cashFlowEffectOfChangesInForeignCurrencyExchangeRatesEnd",
  CFS165: "cashFlowAdjustment",
  CFS166: "cashFlowAccruedExpenses",
  CFS167: "cashFlowIncreaseInNonCashExpense",
  CFS168: "cashFlowLossOnValuationOfFVTPLFinancialAssets",
  CFS169: "cashFlowLossFromFinancialAssetsSales",
  CFS170: "cashFlowLossFromDerivatives",
  CFS171: "cashFlowLossOnValuationOfAvailableForSaleFinancialAssets",
  CFS172: "cashFlowDecreaseInValueOfAvailableSalesAssets",
  CFS173: "cashFlowLossOnValuationOfHeldToMaturityInvestments",
  CFS174: "cashFlowLossOnTheDecreaseInValueOfLoansGiven",
  CFS175: "cashFlowLossFromRevaluationByFairValueOfAFSWhenReclassification",
  CFS176: "cashFlowLossFromDerivativesAdditional",
  CFS177: "cashFlowLossFromSalesOfFixedAssets",
  CFS178: "cashFlowDecreaseInValueOfFixedAssets",
  CFS179: "cashFlowProvisionForDecreaseInValueOfLongTermFinancialInvestments",
  CFS180:
    "cashFlowLossFromSalesOfInvestmentsInSubsidiariesAssociatesJointVentures",
  CFS181: "cashFlowOtherLoss",
  CFS182: "cashFlowDecreaseInNonCashRevenue",
  CFS183: "cashFlowProfitFromRevaluationOfFVTPLFinancialAssets",
  CFS184: "cashFlowProfitFromRevaluationOfFVTPLFinancialDebts",
  CFS185: "cashFlowProfitFromSalesOfAvailableForSaleAssets",
  CFS186: "cashFlowReversalOfLossFromAvailableForSaleAssets",
  CFS187: "cashFlowProfitFromRevaluationByFairValueOfAFSWhenReclassification",
  CFS188: "cashFlowProfitFromDerivatives",
  CFS189: "cashFlowProfitFromTheDecreaseInValueOfLoansGiven",
  CFS190: "cashFlowReversalOfProvision",
  CFS191: "cashFlowProfitFromSalesOfFixedAssetsAndProperties",
  CFS192:
    "cashFlowProfitFromSalesOfInvestmentsInSubsidiariesAssociatesJointVentures",
  CFS193: "cashFlowOtherProfit",
  CFS194: "cashFlowChangeInAssetsAndOperatingLiabilities",
  CFS195: "cashFlowIncreaseDecreaseInFVTPLFinancialAssets",
  CFS196: "cashFlowIncreaseDecreaseInHeldToMaturityInvestments",
  CFS197: "cashFlowIncreaseDecreaseInLoansGiven",
  CFS198: "cashFlowIncreaseDecreaseInAvailableForSaleFinancialAssets",
  CFS199: "cashFlowIncreaseDecreaseInOtherAssets",
  CFS200: "cashFlowIncreaseDecreaseInReceivable",
  CFS201: "cashFlowIncreaseDecreaseInFinancialAssetLoansAndFinancialLease",
  CFS202: "cashFlowIncreaseDecreaseInFinancialAssetLoans",
  CFS203: "cashFlowIncreaseDecreaseInConvertibleBondEquityPortion",
  CFS204: "cashFlowIncreaseDecreaseInIssuedBond",
  CFS205: "cashFlowIncreaseDecreaseInLoanFromSettlementAssistanceFund",
  CFS206: "cashFlowIncreaseDecreaseInReceivableFromSellingFinancialAssets",
  CFS207: "cashFlowIncreaseDecreaseInReceivableFromInterestOfFinancialAssets",
  CFS208: "cashFlowIncreaseDecreaseInReceivableFromServicesRendered",
  CFS209: "cashFlowIncreaseDecreaseInReceivableFromTransactionErrors",
  CFS210: "cashFlowIncreaseDecreaseInTradePayables",
  CFS211: "cashFlowIncreaseDecreaseInPayablesToSecuritiesIssuers",
  CFS212: "cashFlowIncreaseDecreaseInContributionToEmployeesWelfare",
  CFS213: "cashFlowIncreaseDecreaseInTaxAndPayablesToAuthority",
  CFS214: "cashFlowIncreaseDecreaseInPayablesToEmployees",
  CFS215:
    "cashFlowIncreaseDecreaseInPayableAriseFromFinancialAssetTransactionError",
  CFS216: "cashFlowInterestReceivedAdditional",
  CFS217: "cashFlowOtherReceivables",
  CFS218: "cashFlowInterestPaidAdditional",
  CFS219: "cashFlowCorporateIncomeTaxPaidAdditional",
  CFS220: "cashFlowOtherExpenses",
  CFB221: "cashFlowDifferencesCashBasisFromOperatingActivities",
  CFS222: "cashFlowPaymentsToTaxes",
  CFS223: "cashFlowIncreaseDecreaseInPayableExpensesExcludingInterestExpenses",
  CFS224: "cashFlowCashPaidForTransactionOfClients",
  CFS225: "cashFlowCashPaidForMandatedInvestmentOfClients",
  BRC1: "bankCurrencyRiskCashGoldSilverGemstones",
  BRC2: "bankCurrencyRiskStateBankDeposits",
  BRC3: "bankCurrencyRiskDepositsAtAndLoansToOtherCreditInstitutions",
  BRC4: "bankCurrencyRiskTradingSecurities",
  BRC5: "bankCurrencyRiskDerivativeFinancialInstrumentsAndOtherFinancialAssets",
  BRC6: "bankCurrencyRiskLoansToCustomers",
  BRC7: "bankCurrencyRiskInvestmentSecurities",
  BRC8: "bankCurrencyRiskLongTermInvestments",
  BRC9: "bankCurrencyRiskFixedAssetsAndRealEstateInvestment",
  BRC10: "bankCurrencyRiskOtherAssets",
  BRC11: "bankCurrencyRiskTotalAssets",
  BRC12: "bankCurrencyRiskGovernmentAndStateBankLoans",
  BRC13: "bankCurrencyRiskOtherCreditInstitutionsLoans",
  BRC14: "bankCurrencyRiskCustomersDeposits",
  BRC15:
    "bankCurrencyRiskIncurredFinancialInstrumentsAndOtherFinancialLiabilities",
  BRC16:
    "bankCurrencyRiskFundingEntrustedInvestmentLendingToCreditInstitutionsAtRisk",
  BRC17: "bankCurrencyRiskIssuanceOfValuablePapers",
  BRC18: "bankCurrencyRiskOtherDebt",
  BRC19: "bankCurrencyRiskCapitalAndFunds",
  BRC20: "bankCurrencyRiskTotalLiabilitiesAndEquity",
  BRC21: "bankCurrencyRiskOnBalanceSheetCurrencyPosition",
  BRC22: "bankCurrencyRiskOffBalanceSheetCurrencyPosition",
  BRC23: "bankCurrencyRiskOnAndOffBalanceSheetCurrencyPosition",
  BRL1: "bankLiquidityRiskCashGoldSilverGemstones",
  BRL2: "bankLiquidityRiskStateBankDeposits",
  BRL3: "bankLiquidityRiskDepositsAtAndLoansToOtherCreditInstitutions",
  BRL4: "bankLiquidityRiskTradingSecurities",
  BRL5: "bankLiquidityRiskDerivativeFinancialInstrumentsAndOtherFinancialAssets",
  BRL6: "bankLiquidityRiskLoansToCustomers",
  BRL7: "bankLiquidityRiskInvestmentSecurities",
  BRL8: "bankLiquidityRiskLongTermInvestments",
  BRL9: "bankLiquidityRiskFixedAssetsAndRealEstateInvestment",
  BRL10: "bankLiquidityRiskOtherAssets",
  BRL11: "bankLiquidityRiskTotalAssets",
  BRL12: "bankLiquidityRiskGovernmentAndStateBankLoans",
  BRL13: "bankLiquidityRiskOtherCreditInstitutionsLoans",
  BRL14: "bankLiquidityRiskCustomersDeposits",
  BRL15:
    "bankLiquidityRiskIncurredFinancialInstrumentsAndOtherFinancialLiabilities",
  BRL16:
    "bankLiquidityRiskFundingEntrustedInvestmentLendingToCreditInstitutionsAtRisk",
  BRL17: "bankLiquidityRiskIssuanceOfValuablePapers",
  BRL18: "bankLiquidityRiskOtherDebt",
  BRL19: "bankLiquidityRiskTotalDebt",
  BRL20: "bankLiquidityRiskNetLiquidityGap",
  BRR1: "bankRateRiskCashGoldSilverGemstones",
  BRR2: "bankRateRiskStateBankDeposits",
  BRR3: "bankRateRiskDepositsAtAndLoansToOtherCreditInstitutions",
  BRR4: "bankRateRiskTradingSecurities",
  BRR5: "bankRateRiskIncurredFinancialInstrumentsAndOtherFinancialLiabilities",
  BRR6: "bankRateRiskLoansToCustomers",
  BRR7: "bankRateRiskInvestmentSecurities",
  BRR8: "bankRateRiskLongTermInvestments",
  BRR9: "bankRateRiskFixedAssetsAndRealEstateInvestment",
  BRR10: "bankRateRiskOtherAssets",
  BRR11: "bankRateRiskTotalAssets",
  BRR12: "bankRateRiskGovernmentAndStateBankLoans",
  BRR13: "bankRateRiskOtherCreditInstitutionsLoans",
  BRR14: "bankRateRiskCustomersDeposits",
  BRR15:
    "bankRateRiskIncurredFinancialInstrumentsAndOtherFinancialLiabilitiesAdditional",
  BRR16:
    "bankRateRiskFundingEntrustedInvestmentLendingToCreditInstitutionsAtRisk",
  BRR17: "bankRateRiskIssuanceOfValuablePapers",
  BRR18: "bankRateRiskOtherDebt",
  BRR19: "bankRateRiskTotalDebt",
  BRR20: "bankRateRiskOnBalanceSheetInterestRateSensitivityGap",
  BRR21: "bankRateRiskOffBalanceSheetInterestRateSensitivityGap",
  BRR22: "bankRateRiskCumulativeInterestRateSensitivityGap",
  RTQ1: "ratioTrailingTwelveMonthsCashRatio",
  RTQ2: "ratioTrailingTwelveMonthsQuickRatio",
  RTQ3: "ratioTrailingTwelveMonthsCurrentRatio",
  RTQ4: "ratioTrailingTwelveMonthsLTDebtEquity",
  RTQ5: "ratioTrailingTwelveMonthsLTDebtTotalAssets",
  RTQ6: "ratioTrailingTwelveMonthsDebtEquity",
  RTQ7: "ratioTrailingTwelveMonthsDebtTotalAssets",
  RTQ8: "ratioTrailingTwelveMonthsSTLiabilitiesEquity",
  RTQ9: "ratioTrailingTwelveMonthsSTLiabilitiesTotalAssets",
  RTQ10: "ratioTrailingTwelveMonthsTotalLiabilitiesEquity",
  RTQ11: "ratioTrailingTwelveMonthsTotalLiabilitiesTotalAssets",
  RTQ12: "ratioTrailingTwelveMonthsROE",
  RTQ13: "ratioTrailingTwelveMonthsROCE",
  RTQ14: "ratioTrailingTwelveMonthsROA",
  RTQ15: "ratioTrailingTwelveMonthsAccountReceivableTurnover",
  RTQ16: "ratioTrailingTwelveMonthsTurnoverRatio",
  RTQ17: "ratioTrailingTwelveMonthsInventoryTurnoverRatio",
  RTQ18: "ratioTrailingTwelveMonthsInventoryTurnDays",
  RTQ19: "ratioTrailingTwelveMonthsPaymentPeriodTurnoverRatio",
  RTQ20: "ratioTrailingTwelveMonthsAveragePaymentPeriod",
  RTQ21: "ratioTrailingTwelveMonthsSalesPerEmployee",
  RTQ22: "ratioTrailingTwelveMonthsNetIncomePerEmployee",
  RTQ23: "ratioTrailingTwelveMonthsAbilityToMakeMoney",
  RTQ24: "ratioTrailingTwelveMonthsIrregularProfitMargin",
  RTQ25: "ratioTrailingTwelveMonthsGrossProfitMargin",
  RTQ26: "ratioTrailingTwelveMonthsEBITDAMargin",
  RTQ27: "ratioTrailingTwelveMonthsEBITMargin",
  RTQ28: "ratioTrailingTwelveMonthsPreTaxProfitMargin",
  RTQ29: "ratioTrailingTwelveMonthsNetProfitMargin",
  RTQ30: "ratioTrailingTwelveMonthsSalesCapitalizationRatio",
  RTQ31: "ratioTrailingTwelveMonthsAssetTurnoverRatio",
  RTQ32: "ratioTrailingTwelveMonthsEquityTurnoverRatio",
  RTQ33: "ratioTrailingTwelveMonthsActualCITRate",
  RTQ34: "ratioTrailingTwelveMonthsNetSalesGrowthRate",
  RTQ35: "ratioTrailingTwelveMonthsGrossProfitGrowthRate",
  RTQ36: "ratioTrailingTwelveMonthsEBITDAGrowthRate",
  RTQ37: "ratioTrailingTwelveMonthsEBITGrowthRate",
  RTQ38: "ratioTrailingTwelveMonthsPreTaxProfitGrowthRate",
  RTQ39: "ratioTrailingTwelveMonthsNetProfitGrowthYoY",
  RTQ40: "ratioTrailingTwelveMonthsGrowthFixedAssetInvestmentCostTTM",
  RTQ41: "ratioTrailingTwelveMonthsTotalAssetGrowthRate",
  RTQ42: "ratioTrailingTwelveMonthsEquityGrowthRate",
  RTQ43: "ratioTrailingTwelveMonthsCharterCapitalGrowthRate",
  RTQ44: "ratioTrailingTwelveMonthsNetInterestMargin",
  RTQ45: "ratioTrailingTwelveMonthsAverageYieldOnEarningAssets",
  RTQ46: "ratioTrailingTwelveMonthsAverageCostOfFinancing",
  RTQ47: "ratioTrailingTwelveMonthsNonInterestIncomeNetInterestIncome",
  RTQ48: "ratioTrailingTwelveMonthsCostIncomeRatio",
  RTQ49: "ratioTrailingTwelveMonthsPreprovisionROA",
  RTQ50: "ratioTrailingTwelveMonthsAverageLoansGrowth",
  RTQ51: "ratioTrailingTwelveMonthsAverageDepositGrowth",
  RTQ52: "ratioTrailingTwelveMonthsCARTier1",
  RTQ53: "ratioTrailingTwelveMonthsCARTier2",
  RTQ54: "ratioTrailingTwelveMonthsEquityLiabilities",
  RTQ55: "ratioTrailingTwelveMonthsEquityLoans",
  RTQ56: "ratioTrailingTwelveMonthsEquityAssets",
  RTQ57: "ratioTrailingTwelveMonthsLoanDepositRatio",
  RTQ58: "ratioTrailingTwelveMonthsNPLRatio",
  RTQ59: "ratioTrailingTwelveMonthsLoanLossReservesNPLs",
  RTQ60: "ratioTrailingTwelveMonthsLoanLossReservesLoans",
  RTQ61: "ratioTrailingTwelveMonthsProvisionChargesLoans",
  RTQ62: "ratioTrailingTwelveMonthsProfitableAssets",
  RTQ63: "ratioTrailingTwelveMonthsInterestBearingDebt",
  RTQ64: "ratioTrailingTwelveMonthsROEBeforeFallback",
  RTQ65: "ratioTrailingTwelveMonthsOperatingExpenseGrowth",
  RTQ66: "ratioTrailingTwelveMonthsPreProvisionOperatingProfit",
  RTQ67: "ratioTrailingTwelveMonthsNetInterestIncomeGrowth",
  RTQ68: "ratioTrailingTwelveMonthsNonInterestIncomeGrowth",
  RTQ69: "ratioTrailingTwelveMonthsBadDebt",
  RTQ70: "ratioTrailingTwelveMonthsTotalAssetsEquity",
  RTQ71: "ratioTrailingTwelveMonthsIntangibleAssetsTotalAssets",
  RTQ72: "ratioTrailingTwelveMonthsEBIT",
  RTQ73: "ratioTrailingTwelveMonthsEBITDA",
  RTQ74: "ratioTrailingTwelveMonthsOperatingProfitMargin",
  RTQ75: "ratioTrailingTwelveMonthsEBITDAShortTermDebtLoanInterest",
  RTQ76: "ratioTrailingTwelveMonthsROIC",
  RTQ77: "ratioTrailingTwelveMonthsAbilityToPayInterest",
  RTQ78: "ratioTrailingTwelveMonthsNetSaleGrowthYoY",
  RTQ79: "ratioTrailingTwelveMonthsGrossProfitGrowthYoY",
  RTQ80: "ratioTrailingTwelveMonthsEBITDAGrowthYoY",
  RTQ81: "ratioTrailingTwelveMonthsEBITGrowthYoY",
  RTQ82: "ratioTrailingTwelveMonthsNetProfitBeforeTaxGrowthYoY",
  RTQ83: "ratioTrailingTwelveMonthsNetProfitGrowthYoY83",
  RTQ84: "ratioTrailingTwelveMonthsGrowthFixedAssetInvestmentCostYoY",
  RTQ85: "ratioTrailingTwelveMonthsTotalAssetsGrowthYoY",
  RTQ86: "ratioTrailingTwelveMonthsOwnersEquityGrowthYoY",
  RTQ87: "ratioTrailingTwelveMonthsCharterCapitalGrowthYoY",
  RTQ88: "ratioTrailingTwelveMonthsOperatingCycle",
  RTQ89: "ratioTrailingTwelveMonthsCashOperatingCycle",
  RTQ90: "ratioTrailingTwelveMonthsWorkingCapitalTurnover",
  RTQ91: "ratioTrailingTwelveMonthsFixedAssetTurnover",
  RTQ92: "ratioTrailingTwelveMonthsFreeCashFlowRevenue",
  RTQ93: "ratioTrailingTwelveMonthsFreeCashFlowOperatingIncome",
  RTQ94: "ratioTrailingTwelveMonthsTotalDebtEBITDA",
  RTQ95: "ratioTrailingTwelveMonthsFreeCashFlowDebt",
  RTQ96: "ratioTrailingTwelveMonthsFinancialLeverage",
  RTQ97: "ratioTrailingTwelveMonthsSalesAsset",
  RTQ98: "ratioTrailingTwelveMonthsCPEXSales",
  RTQ99: "ratioTrailingTwelveMonthsOperatingROA",
  RTQ100: "ratioTrailingTwelveMonthsRetentionRateB",
  RTQ101: "ratioTrailingTwelveMonthsEBITDAInterestCoverage",
  RTQ102: "ratioTrailingTwelveMonthsFreeOperatingCashFlowsToTotalDebt",
  RTQ103: "ratioTrailingTwelveMonthsTotalDebtToEBITDA",
  RTQ104: "ratioTrailingTwelveMonthsGrowthRateOfSPS",
  RTQ105: "ratioTrailingTwelveMonthsInterestExpenseGrowthRate",
  RTQ106: "ratioTrailingTwelveMonthsNPMGrowthRate",
  RTQ107: "ratioTrailingTwelveMonthsAccountsReceivableGrowthRate",
  RTQ108: "ratioTrailingTwelveMonthsGrowthRateNetInventories",
  RTQ109: "ratioTrailingTwelveMonthsShortTermBorrowingsGrowthRate",
  RTQ110: "ratioTrailingTwelveMonthsLongTermBorrowingsGrowthRate",
  RTQ111: "ratioTrailingTwelveMonthsAverageInputInterestRate",
  RTQ112: "ratioTrailingTwelveMonthsAverageOutputInterestRate",
  RTQ113: "ratioTrailingTwelveMonthsNetProfitDifference",
  RTQ114: "ratioTrailingTwelveMonthsProfitableTSTTS",
  RTQ115: "ratioTrailingTwelveMonthsNotUse115",
  RTQ116: "ratioTrailingTwelveMonthsOperatingExpensesTotalProfitableAssets",
  RTQ117: "ratioTrailingTwelveMonthsNetInterestIncomeTotalIncome",
  RTQ118: "ratioTrailingTwelveMonthsCIR",
  RTQ119: "ratioTrailingTwelveMonthsLiquidAssetsTotalDeposits",
  RTQ120: "ratioTrailingTwelveMonthsLiquidityTSTTS",
  RTQ121: "ratioTrailingTwelveMonthsCustomerTTSDeposit",
  RTQ122: "ratioTrailingTwelveMonthsOutstandingLoansTotalAsset",
  RTQ123:
    "ratioTrailingTwelveMonthsOutstandingLoansTotalDepositAndValuablePapers",
  RTQ124: "ratioTrailingTwelveMonthsCreditToWorkingCapitalRatio",
  RTQ125: "ratioTrailingTwelveMonthsTotalAtRiskAssets",
  RTQ126: "ratioTrailingTwelveMonthsTier1Capital",
  RTQ127: "ratioTrailingTwelveMonthsTier1CAR",
  RTQ128: "ratioTrailingTwelveMonthsEquityTTS",
  RTQ129: "ratioTrailingTwelveMonthsEquityDebtBalance",
  RTQ130: "ratioTrailingTwelveMonthsEligibleDebt",
  RTQ131: "ratioTrailingTwelveMonthsDebtNotes",
  RTQ132: "ratioTrailingTwelveMonthsSubprimeDebt",
  RTQ133: "ratioTrailingTwelveMonthsDoubtfulDebt",
  RTQ134: "ratioTrailingTwelveMonthsBadDebtLikelyToLoseCapital",
  RTQ135: "ratioTrailingTwelveMonthsTotalLoans",
  RTQ136: "ratioTrailingTwelveMonthsNPLs35TotalOutstandingLoans",
  RTQ137: "ratioTrailingTwelveMonthsNPLs35Equity",
  RTQ138: "ratioTrailingTwelveMonthsNPLs25TotalOutstandingLoans",
  RTQ139: "ratioTrailingTwelveMonthsNPLs25Equity",
  RTQ140: "ratioTrailingTwelveMonthsCreditLossProvisionNPLs35",
  RTQ141: "ratioTrailingTwelveMonthsCreditLossProvisionNPLs25",
  RTQ142: "ratioTrailingTwelveMonthsProvisionOutstandingLoans",
  RTQ143: "ratioTrailingTwelveMonthsNetCurrentAsset",
  RTQ144: "ratioTrailingTwelveMonthsTangibleBook",
  RTQ145: "ratioTrailingTwelveMonthsIntrinsicValueDCF",
  RTQ146: "ratioTrailingTwelveMonthsNotUse146",
  RTQ147: "ratioTrailingTwelveMonthsNotUse147",
  RTQ148: "ratioTrailingTwelveMonthsRevenueTotalAssets",
  RTQ149: "ratioTrailingTwelveMonthsPlannedRevenuePercentage",
  RTQ150: "ratioTrailingTwelveMonthsPBTPlanPercentage",
  RTQ151: "ratioTrailingTwelveMonthsNPATPlanPercentage",
  RTQ152: "ratioTrailingTwelveMonthsNetSalesGrowthRate6mO6m",
  RTQ153: "ratioTrailingTwelveMonthsGrossProfitGrowthRate6mO6m",
  RTQ154: "ratioTrailingTwelveMonthsPreTaxProfitGrowthRate6mO6m",
  RTQ155: "ratioTrailingTwelveMonthsNetProfitGrowthRate6mO6m",
  RTQ156: "ratioTrailingTwelveMonthsNetSalesGrowthRate9mO9m",
  RTQ157: "ratioTrailingTwelveMonthsGrossProfitGrowthRate9mO9m",
  RTQ158: "ratioTrailingTwelveMonthsPreTaxProfitGrowthRate9mO9m",
  RTQ159: "ratioTrailingTwelveMonthsNetProfitGrowthRate9mO9m",
  RTQ160: "ratioTrailingTwelveMonthsThreeYearNetRevenueGrowthCARG",
  RTQ161: "ratioTrailingTwelveMonthsFiveYearNetRevenueGrowthCARG",
  RTQ162: "ratioTrailingTwelveMonthsThreeYearGrossProfitGrowthCARG",
  RTQ163: "ratioTrailingTwelveMonthsFiveYearGrossProfitGrowthCARG",
  RTQ164: "ratioTrailingTwelveMonthsThreeYearEBTGrowthCARG",
  RTQ165: "ratioTrailingTwelveMonthsFiveYearEBTGrowthCARG",
  RTQ166: "ratioTrailingTwelveMonthsThreeYearNetProfitGrowthCARG",
  RTQ167: "ratioTrailingTwelveMonthsFiveYearNetProfitGrowthCARG",
  RTQ168: "ratioTrailingTwelveMonthsThreeYearEBITGrowthCARG",
  RTQ169: "ratioTrailingTwelveMonthsFiveYearEBITGrowthCARG",
  RTQ170: "ratioTrailingTwelveMonthsThreeYearEBITDAGrowthCARG",
  RTQ171: "ratioTrailingTwelveMonthsFiveYearEBITDAGrowthCARG",
  RTQ172: "ratioTrailingTwelveMonthsThreeYearTotalAssetGrowthCARG",
  RTQ173: "ratioTrailingTwelveMonthsFiveYearTotalAssetGrowthCARG",
  RTQ174: "ratioTrailingTwelveMonthsThreeYearEquityGrowthCARG",
  RTQ175: "ratioTrailingTwelveMonthsFiveYearEquityGrowthCARG",
  RTQ176: "ratioTrailingTwelveMonthsThreeYearCharterCapitalGrowthCARG",
  RTQ177: "ratioTrailingTwelveMonthsFiveYearCharterCapitalGrowthCARG",
  RTQ178: "ratioTrailingTwelveMonthsThreeYearCAPEXGrowthCARG",
  RTQ179: "ratioTrailingTwelveMonthsFiveYearCAPEXGrowthCARG",
};
