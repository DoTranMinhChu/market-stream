export class UtilHelper {
  /**
   * Chuyển đổi một chuỗi sang camelCase.
   * @param key Chuỗi cần chuyển (có thể chứa dấu gạch dưới, gạch ngang hoặc khoảng trắng)
   * @returns Chuỗi sau khi đã chuyển đổi sang camelCase
   */
  private static toCamelCase(key: string): string {
    return key
      .replace(/[\-_ ]+(\w)/g, (_, c) => c.toUpperCase()) // Chuyển separator + ký tự thành ký tự in hoa
      .replace(/^(\w)/, (_, c) => c.toLowerCase()); // Đảm bảo ký tự đầu tiên là chữ thường
  }

  /**
   * Kiểm tra xem giá trị có phải là Object thuần (plain object) không
   * @param value Giá trị bất kỳ
   * @returns true nếu là object thuần, false nếu không
   */
  private static isPlainObject(value: any): value is Record<string, any> {
    return (
      Object.prototype.toString.call(value) === "[object Object]" &&
      !(value instanceof Date) &&
      !(value instanceof RegExp)
    );
  }

  /**
   * Chuyển đổi tất cả keys của object hoặc mảng (và các nested object/array) sang camelCase.
   * @param input Bất kỳ object, array hoặc primitive
   * @returns Giá trị với keys đã được chuyển sang camelCase
   */
  public static deepCamelCase<T>(input: T): any {
    if (Array.isArray(input)) {
      return input.map((item) => UtilHelper.deepCamelCase(item));
    } else if (UtilHelper.isPlainObject(input)) {
      const result: Record<string, any> = {};
      for (const key of Object.keys(input)) {
        const camelKey = UtilHelper.toCamelCase(key);
        result[camelKey] = UtilHelper.deepCamelCase((input as any)[key]);
      }
      return result;
    }
    // Nếu không phải array hoặc plain object, trả về nguyên bản (primitive, Date, RegExp...)
    return input;
  }
}
