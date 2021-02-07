/**
 * 
 * @param {*} vitualDom 
 * @param {*} container 
 * @param {*} oldDom 
 */
import mountElement from './mountElement'
import updataTextNode from './updataTextNode'
export default function diff (vitualDom, container, oldDom) {
    const oldVirtualDom = oldDom && oldDom._virtualDom
    // 判断 oldDom 是否存在
    if (!oldDom) {
        mountElement(vitualDom, container)
    } else if (oldVirtualDom && vitualDom.type === oldVirtualDom.type) {
        if (vitualDom.type === 'text') {
            // 更新文本节点内容
            updataTextNode(vitualDom, oldVirtualDom, oldDom)
        } else {
            // 更新元素节点属性
        }
    }
}