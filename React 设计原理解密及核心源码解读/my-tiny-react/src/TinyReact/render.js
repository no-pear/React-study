/**
 * 普通 VitualDom 对象转化为真实 DOM 对象
 * @param {*} vitualDom 
 * @param {*} container 
 * @param {*} oldDom 
 */

import diff from './diff'
export default function render (vitualDom, container, oldDom = container.firstChild) {
    // 对比
    diff(vitualDom, container, oldDom)
}