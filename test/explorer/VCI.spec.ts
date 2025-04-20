import assert from "assert";
import { VCIListing } from "../../src";
describe("VCIListing", function () {
  it("VCI (Get Companies Listing Info)", async function () {
    const companiesListingInfo = await VCIListing.getCompaniesListingInfo();

    assert.deepEqual(!!companiesListingInfo?.length, true, "Wrong Results");
  });
  it("VCI (Get Icb Codes)", async function () {
    const icbCodes = await VCIListing.getIcbCodes();
    assert.deepEqual(!!icbCodes?.length, true, "Wrong Results");
  });
});
