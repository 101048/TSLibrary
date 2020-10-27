/**
 *
 * @description JS Common libraries (Array Articles)
 *
 */

type reduceObject = {
  [key in string | number]: number;
};

/**
 * description：传入数字类型的数组 找出唯一不同的元素
 * description：Pass In An Array Of Numeric Type To Find The Only Different Element
 * @param {Array<number>} AimsArray
 */
const searchArrayDifferent = (AimsArray: Array<number>): number => {
  let result: number = -1;
  AimsArray.forEach((i: number): void => {
    result = i ^ result;
  });
  return result;
};
/**
 * description：传入数字类型的数组 输出当前数组中的重复值
 * description：Pass In An Array Of Numeric Type, Output The Duplicate Values In The Current Array
 * @param {Array<number>} AimsArray
 */
const getValueRepeat = (AimsArray: Array<number>): Object => {
  return AimsArray.reduce(
    (prev: reduceObject, next: number | string): reduceObject => {
      prev[next] = prev[next] + 1 || 1;
      return prev;
    },
    {}
  );
};
/**
 * description：数组乱序
 * description：Spot Disorder
 * @param {Array<number>} AimsArray
 */
const scrambled = (AimsArray: Array<number>): Array<number> => {
  return AimsArray.sort(() => Math.random() - 0.5);
};

/**
 * description：获取数组中的最大最小值
 * description：Get The Maximum And Minimum Values In The Array
 * @param {Array<number>} AimsArray
 * all 同时获取,max 最大值,min 最小值
 * @param {String} DesiredValue
 */
const maxAndmin = (AimsArray: Array<number>, DesiredValue: string = "all"): Array<number> | number => {
  const maxAndminObj: {[k: string]: Function} =  {
    all: (): Array<number> => [Math.min(...AimsArray), Math.max(...AimsArray)],
    max: (): number => Math.max(...AimsArray),
    min: (): number => Math.min(...AimsArray),
  };
  return maxAndminObj[DesiredValue]()
};


export { searchArrayDifferent, getValueRepeat, scrambled, maxAndmin };
