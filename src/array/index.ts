/**
 *
 * @description JS Common libraries (Array Articles)
 *
 */
type reduceObject = {
  [key in string | number]: number;
};
const ArrayUtils = {
  /**
   * description：传入数字类型的数组 找出唯一不同的元素
   * description：Pass In An Array Of Numeric Type To Find The Only Different Element
   * @param {Array<number>} AimsArray
   */
  searchArrayDifferent(AimsArray: Array<number>): number {
    let result: number =  -1
    AimsArray.forEach((i:number):void => {
      result = i ^ result;
    });
    return result;
  },
  /**
   * description：传入数字类型的数组 输出当前数组中的重复值
   * description：Pass In An Array Of Numeric Type, Output The Duplicate Values In The Current Array
   * @param {Array<number>} AimsArray
   */
  
  getValueRepeat(AimsArray: Array<number>):Object {
    return AimsArray.reduce((prev:reduceObject, next:number|string):reduceObject => {
      prev[next] = (prev[next] + 1) || 1
      return prev
    },{})
  }


};

export default ArrayUtils;
