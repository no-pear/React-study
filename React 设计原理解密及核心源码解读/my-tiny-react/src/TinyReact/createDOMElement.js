import mountElement from './mountElement'
import updateNodeElement from './updateNodeElement'

/**
 * 创建 DOM 节点
 * @param {*} vitualDom 
 */
export default function createDOMElement (vitualDom) {
    let newElement = null

    if (vitualDom.type === 'text') {
        // 文本节点
        newElement = document.createTextNode(vitualDom.props.textContent)
    } else {
        // 元素节点
        newElement = document.createElement(vitualDom.type)
        // 为 DOM 对象添加属性
        updateNodeElement(newElement, vitualDom)
    }

    // 给创建的真实 DOM 身上增加一个属性存储 virtualDom 
    newElement._virtualDom = vitualDom

    // 递归创建子节点
    vitualDom.children.forEach(child => {
        mountElement(child, newElement)
    })

    return newElement
}