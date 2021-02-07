import isFunction from "./isFunction"

/**
 * 判断是函数组件还是类组件
 * @param {*} vitualDom 
 */
export default function isFunctionComponent (vitualDom) {
    const type = vitualDom.type
    return (
        type && isFunction(vitualDom) && !(type.prototype && type.prototype.render)
    )
}
