import assert from "assert";
import {
  VCIExplorerCompany,
  VCIExplorerFinance,
  VCIExplorerListing,
} from "../../src";
import { EPeriod, ESymbolGroupCode } from "../../src/enums";
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
