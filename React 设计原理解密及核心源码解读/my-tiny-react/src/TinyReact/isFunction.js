/**
 * 判断是否是组件
 * @param {*} vitualDom 
 */
export default function isFunction (vitualDom) {
    return vitualDom && typeof vitualDom.type === 'function'
}