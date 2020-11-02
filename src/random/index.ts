/**
 *
 * @description JS Common libraries (Random Articles)
 *
 */
/**
 * description： 生成指定范围的随机数
 * description： Generate Rrandom Numbers In The Specified Range
 * @param {number} Min
 * @param {number} Max
 * @param {number} Quantity 数量 默认数量为1
 * @param {boolean} Repeat 是否重复 默认重复
 * @param {string} ContainRange 包含范围 默认两边都不包含 值有neither, all , left, right
 */
const randomNumber = (
  Min: number,
  Max: number,
  Quantity: number = 1,
  Repeat: boolean = true,
  ContainRange: string = "all"
): Array<number> | number => {
  if(!Repeat) {
    if(ContainRange === 'neither' && Max - Min <= Quantity) {
      throw new Error('请正确输入')
    } else if((ContainRange === 'left' || ContainRange === 'right') && Max - Min < Quantity) {
      throw new Error('请正确输入')
    }
  }
  const randomObj: { [k: string]: Function } = {
    neither: (): number => Math.ceil(Min + Math.random() * (Max - Min - 1)),
    all: (): number => ~~(Min + Math.round(Math.random() * (Max - Min))),
    left: (): number => ~~(Min + Math.random() * (Max - Min)),
    right: (): number => Math.ceil(1 + Math.random() * (10 - 1)),
  };
  const randomArray:Array<number> = []
  for (let index:number = 0; index < Quantity; index++) {
    if(Repeat) {
      randomArray.push(randomObj[ContainRange]())
    } else { 
      let num:number = randomObj[ContainRange]()
      if(-1 === randomArray.indexOf(num)) {
        randomArray.push(num)
      } else {
        index--
      }
    }
  }
  return randomArray
};
export { randomNumber };
