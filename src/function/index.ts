/**
 *
 * @description JS Common libraries (Function Articles)
 *
 */

/**
 * description：  解决当使用 contenteditable 时出现的光标问题
 * description：  Solve The Cursor Problem When Using Contenteditable
 * 
 * @param {HTMLElement} Element
 */
const CursorPositioning = (Element: HTMLElement) => {
  Element.focus()
  const sel = getSelection()
  sel?.selectAllChildren(Element)
  sel?.collapseToEnd()
}

