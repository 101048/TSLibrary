/**
 *
 * @description JS Common libraries (Date Articles)
 *
 */

/**
 * description： 格式化日期
 * description： Format Date
 * @param {Date} Time   时间
 * @param {String} Type 格式类型
 */
const FormatTime = (
  Time: Date,
  Type: string = "yyyy-MM-dd HH:mm:ss"
): string => {
  let Staging: (number | string)[] = [
    Time.getFullYear(),
    Time.getMonth() + 1,
    Time.getDate(),
    Time.getHours(),
    Time.getMinutes(),
    Time.getSeconds(),
    // "sm": Time.getMilliseconds()
  ];
  let index = 0;
  const resYear: RegExp = /([a-zA-Z])\1{3}/g;
  const reg: RegExp = /([a-zA-Z])\1/g;
  Staging = Staging.map((item: string | number): string => {
    if (item < 10) {
      item = `0${item}`;
    }
    return String(item);
  });
  Type = Type.replace(resYear, (): string => String(Staging[0]));
  Type = Type.replace(reg, (): string => String(Staging[(index += 1)]));
  return Type;
}

export {
  FormatTime
}
