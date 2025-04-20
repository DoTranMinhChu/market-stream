import assert from "assert";
import { VCIListing } from "../../src";
import { ESymbolGroupCode } from "../../src/enums";
describe("VCIListing", function () {
  it("VCI (Get All Symbols)", async function () {
    const allSymbols = await VCIListing.getAllSymbols();
    assert.deepEqual(!!allSymbols?.length, true, "Wrong Results");
  });
  it("VCI (Get All Symbols By Group Code)", async function () {
    const allSymbolsByGroupCode = await VCIListing.getAllSymbolsByGroupCode(
      ESymbolGroupCode.VN30
    );
    assert.deepEqual(!!allSymbolsByGroupCode?.length, true, "Wrong Results");
  });
  it("VCI (Get Companies Listing Info)", async function () {
    const companiesListingInfo = await VCIListing.getCompaniesListingInfo();

    assert.deepEqual(!!companiesListingInfo?.length, true, "Wrong Results");
  });
  it("VCI (Get Icb Codes)", async function () {
    const icbCodes = await VCIListing.getIndustriesIcb();
    assert.deepEqual(!!icbCodes?.length, true, "Wrong Results");
  });
});
