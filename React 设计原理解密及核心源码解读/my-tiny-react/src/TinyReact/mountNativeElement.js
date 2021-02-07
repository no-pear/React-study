import mountElement from "./mountElement"
import createDOMElement from './createDOMElement'

/**
 * 普通 DOM 元素
 * @param {*} vitualDom 
 * @param {*} container 
 */
export default function mountNativeElement(vitualDom, container) {
    let newElement = createDOMElement(vitualDom)

    // 将转换之后的 DOM 对象放置在页面上
    container.appendChild(newElement)
}