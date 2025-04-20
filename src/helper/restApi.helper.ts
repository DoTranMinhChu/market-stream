// src/api/RestHelper.ts

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface RequestOptions {
  method?: HttpMethod;
  /** query string params, sẽ được serialize */
  query?: Record<string, string | number | boolean>;
  /** body sẽ được JSON.stringify nếu là object */
  body?: any;
  /** custom headers (mặc định có "Content-Type": "application/json") */
  headers?: Record<string, string>;
  /** timeout tính theo ms (mặc định no timeout) */
  timeoutMs?: number;
}

export class RestApiHelper {
  private static buildUrl(
    url: string,
    query?: RequestOptions["query"]
  ): string {
    if (!query) return url;
    const qs = new URLSearchParams();
    Object.entries(query).forEach(([k, v]) => {
      if (v !== undefined && v !== null) {
        qs.append(k, String(v));
      }
    });
    const sep = url.includes("?") ? "&" : "?";
    return url + sep + qs.toString();
  }

  private static async fetchWithTimeout(
    input: RequestInfo,
    init: RequestInit,
    timeoutMs?: number
  ): Promise<Response> {
    if (!timeoutMs) {
      return fetch(input, init);
    }
    return Promise.race([
      fetch(input, init),
      new Promise<Response>((_, rej) =>
        setTimeout(() => rej(new Error("Request timed out")), timeoutMs)
      ),
    ]) as Promise<Response>;
  }

  static async request<T = any>(
    url: string,
    opts: RequestOptions = {}
  ): Promise<T> {
    const { method = "GET", query, body, headers = {}, timeoutMs } = opts;

    const finalUrl = this.buildUrl(url, query);

    const defaultHeaders: Record<string, string> = {
      "Content-Type": "application/json",
    };

    const init: RequestInit = {
      method,
      headers: { ...defaultHeaders, ...headers },
      body:
        body !== undefined && method !== "GET" && method !== "DELETE"
          ? JSON.stringify(body)
          : undefined,
    };

    const resp = await this.fetchWithTimeout(finalUrl, init, timeoutMs);
    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      throw new Error(`HTTP ${resp.status} ${resp.statusText}: ${text}`);
    }

    // Nếu response không có content-type JSON, bạn có thể điều chỉnh
    return (await resp.json()) as T;
  }

  // Shorthand cho các method hay dùng
  static get<T = any>(
    url: string,
    opts: Omit<RequestOptions, "method" | "body"> = {}
  ) {
    return this.request<T>(url, { ...opts, method: "GET" });
  }

  static post<T = any>(
    url: string,
    body?: any,
    opts: Omit<RequestOptions, "method" | "body"> = {}
  ) {
    return this.request<T>(url, { ...opts, method: "POST", body });
  }

  static put<T = any>(
    url: string,
    body?: any,
    opts: Omit<RequestOptions, "method" | "body"> = {}
  ) {
    return this.request<T>(url, { ...opts, method: "PUT", body });
  }

  static patch<T = any>(
    url: string,
    body?: any,
    opts: Omit<RequestOptions, "method" | "body"> = {}
  ) {
    return this.request<T>(url, { ...opts, method: "PATCH", body });
  }

  static delete<T = any>(
    url: string,
    opts: Omit<RequestOptions, "method" | "body"> = {}
  ) {
    return this.request<T>(url, { ...opts, method: "DELETE" });
  }
}
