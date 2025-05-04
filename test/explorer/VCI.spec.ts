import assert from "assert";
import {
  VCIExplorerCompany,
  VCIExplorerFinance,
  VCIExplorerListing,
  VCIExplorerQuote,
} from "../../src";
import { EPeriod, ESymbolGroupCode, ETimeFrame } from "../../src/enums";
describe("VCI Listing", function () {
  it("VCI (Get All Symbols)", async function () {
    const allSymbols = await VCIExplorerListing.getAllSymbols();
    assert.deepEqual(!!allSymbols?.length, true, "Wrong Results");
  });
  it("VCI (Get All Symbols By Group Code)", async function () {
    const allSymbolsByGroupCode =
      await VCIExplorerListing.getAllSymbolsByGroupCode(ESymbolGroupCode.VN30);
    assert.deepEqual(!!allSymbolsByGroupCode?.length, true, "Wrong Results");
  });
  it("VCI (Get Companies Listing Info)", async function () {
    const companiesListingInfo =
      await VCIExplorerListing.getCompaniesListingInfo();

    assert.deepEqual(!!companiesListingInfo?.length, true, "Wrong Results");
  });
  it("VCI (Get Icb Codes)", async function () {
    const icbCodes = await VCIExplorerListing.getIndustriesIcb();
    assert.deepEqual(!!icbCodes?.length, true, "Wrong Results");
  });
});

describe("VCI Finance", function () {
  it("VCI (Get Company Financial Ratio)", async function () {
    const companyFinancialRatio =
      await VCIExplorerFinance.getCompanyFinancialRatio({
        period: EPeriod.QUARTER,
        stockTicker: "VCI",
      });
    assert.deepEqual(
      !!companyFinancialRatio.ratio?.length,
      true,
      "Wrong Results"
    );
  });
  it("VCI (Get Company Financial Ratio)", async function () {
    const financialRatioDictionary =
      await VCIExplorerFinance.getFinancialRatioDictionary();

    assert.deepEqual(!!financialRatioDictionary.length, true, "Wrong Results");
  });
});
describe("VCI Company", function () {
  it("VCI (Get Company Information Detail)", async function () {
    const financialRatioDictionary =
      await VCIExplorerCompany.getCompanyInformationDetail({
        stockTicker: "VNM",
        lang: "vi",
      });

    assert.deepEqual(!!financialRatioDictionary, true, "Wrong Results");
  });
});
describe("VCI Quote", function () {
  it("VCI (Get Quote)", async function () {
    const financialRatioDictionary = await VCIExplorerQuote.getAllSymbols({
      timeFrame: ETimeFrame.ONE_HOUR,
      symbols: ["VIC", "VNM"],
      fromTimestamp: 1745169473000,
      toTimestamp: 1745687873000,
    });

    assert.deepEqual(!!financialRatioDictionary, true, "Wrong Results");
  });
  it("VCI (Get Intraday)", async function () {
    const dataIntraday = await VCIExplorerQuote.getIntraday({
      symbol: "VIC",
      limit: 10,
      truncTimestamp: null,
    });

    assert.deepEqual(!!dataIntraday?.length, true, "Wrong Results");
  });
});
