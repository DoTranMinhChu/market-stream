import UserAgent from "user-agents";

type DataSource = "SSI" | "VND" | "TCBS" | "VCI" | "MSN" | "FMARKET" | "SJC";

const DEFAULT_HEADERS: Record<string, string> = {
  Accept: "application/json, text/plain, */*",
  "Accept-Language": "vi",
  Connection: "keep-alive",
  "Content-Type": "application/json",
  "Cache-Control": "no-cache",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-site",
  DNT: "1",
  Pragma: "no-cache",
  "sec-ch-ua-platform": '"Windows"',
  "sec-ch-ua-mobile": "?0",
};

const HEADERS_MAPPING_SOURCE: Record<DataSource, Record<string, string>> = {
  SSI: {
    Referer: "https://iboard.ssi.com.vn",
    Origin: "https://iboard.ssi.com.vn",
  },
  VND: {
    Referer: "https://dchart.vndirect.com.vn",
    Origin: "https://dchart.vndirect.com.vn",
  },
  TCBS: {
    Referer: "https://tcinvest.tcbs.com.vn/",
    Origin: "https://tcinvest.tcbs.com.vn/",
  },
  VCI: {
    Referer: "https://trading.vietcap.com.vn/",
    Origin: "https://trading.vietcap.com.vn/",
  },
  MSN: { Referer: "https://www.msn.com/", Origin: "https://www.msn.com/" },
  FMARKET: { Referer: "https://fmarket.vn/", Origin: "https://fmarket.vn/" },
  SJC: {
    Referer: "https://sjc.com.vn/bieu-do-gia-vang",
    Origin: "https://sjc.com.vn",
  },
};

export class ExplorerHelper {
  static getHeaders(
    dataSource: string = "SSI",
    randomAgent: boolean = true
  ): Record<string, string> {
    const source = dataSource.toUpperCase() as DataSource;
    const headers = { ...DEFAULT_HEADERS };
    const userAgent = new UserAgent();

    headers["User-Agent"] = randomAgent
      ? userAgent.random().toString()
      : userAgent.data?.userAgent || "Mozilla/5.0";

    const customHeaders = HEADERS_MAPPING_SOURCE[source];
    if (customHeaders) {
      Object.assign(headers, customHeaders);
    }

    return headers;
  }
}
