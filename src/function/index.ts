/**
 *
 * @description JS Common libraries (Function Articles)
 *
 */

/**
 * description：  解决当使用 contenteditable 时光标一直在最前面的问题
 * description：  Solve The Cursor Problem When Using Contenteditable
 *
 * @param {HTMLElement} Element
 */
const CursorPositioning = (Element: HTMLElement) => {
  // 该方法用于设置焦点，如果被指定的元素可以获取到焦点，焦点就回被设置到该元素上
  Element.focus();
  // 表示用户选择的文本范围或光标的当前位置。
  const sel = getSelection();
  // 把指定元素的所有子元素设为选中区域，并取消之前的选中区域
  sel?.selectAllChildren(Element);
  // 将选择折叠到选择中最后一个范围的末尾。如果所选内容集中并且可编辑，则插入符号将在此处闪烁。
  sel?.collapseToEnd();
};

/**
 * description:  函数节流（n 秒内回调函数只会被执行一次，先执行后计算）
 * @param {Function} fn
 * @param {number} delay
 */
const throttle = (fn: Function, delay: number): Function => {
  // 每次重新进来赋值为null 
  let timer: unknown = null;
  return function (this: unknown , options: Array<unknown>):void {
    if(!timer) {
      timer = setTimeout( ():void => {
        timer = null
        fn.apply(this, options)
      },delay)
    }
  }
};

export {
  CursorPositioning,
  throttle
}


