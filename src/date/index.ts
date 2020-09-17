/**
 *
 * @description JS Common libraries (Date Articles) 
 *
 */
const DateUtils = {
  /**
   * description： 格式化日期
   * description： Format Date
   * @param {Date} Time
   * @param {String} type
   */
  FormatTime(Time: Date, type: string = 'yyyy-MM-dd HH:mm:ss'):string {
    let Staging: (number | string)[] = [
      Time.getFullYear(),
      Time.getMonth() + 1,
      Time.getDate(),
      Time.getHours(),
      Time.getMinutes(),
      Time.getSeconds(),
      // "sm": Time.getMilliseconds()
    ]
    let index = 0
    const resYear:RegExp = /([a-zA-Z])\1{3}/g
    const reg:RegExp = /([a-zA-Z])\1/g
    Staging = Staging.map( (item:any):string => {
      if(item < 10) {
        item = `0${item}`
      }
      return String(item)
    })
    
    type = type.replace(resYear,():string => String(Staging[0]))
    type = type.replace(reg,():string => String(Staging[index +=1]))
    return type
  },
  
  /**
   * description：日期计时器
   * description：Date Timer
   */
  // DateTimer(Time: Date):string {
  //   return
  // }

};
console.log(DateUtils.FormatTime(new Date(1599445345411),"YYYY-DD-MM"));
export default DateUtils;