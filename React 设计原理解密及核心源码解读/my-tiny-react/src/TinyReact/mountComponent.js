import isFunction from './isFunction'
import isFunctionComponent from './isFunctionComponent'
import mountNativeElement from './mountNativeElement'
export default function mountComponent (vitualDom, container) {
    let nextVirtualDOM = null

    if (isFunctionComponent(vitualDom)) {
        console.log(1)
        // 函数组件
        // console.log('vitualDom', vitualDom)
        // console.log('vitualDom', vitualDom.type())
        nextVirtualDOM = buildFunctionComponent(vitualDom)
    } else {
        console.log(2)
        // 类组件
        nextVirtualDOM = buildClassComponent(vitualDom)
    }

    // 判断函数组件的内部是否嵌套了
    if (isFunction(nextVirtualDOM)) {
        mountComponent(nextVirtualDOM, container)
    } else {
        mountNativeElement(nextVirtualDOM, container)
    }

}

// 
function buildFunctionComponent (vitualDom) {
    return vitualDom.type(vitualDom.props || {})
}

function buildClassComponent (vitualDom) {
    const component = new vitualDom.type(vitualDom.props || {})
    const nextVirtualDOM = component.render()
    return nextVirtualDOM
}