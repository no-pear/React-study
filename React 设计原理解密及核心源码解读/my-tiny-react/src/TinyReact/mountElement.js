import mountNativeElement from './mountNativeElement'
import isFunction from './isFunction'
import mountComponent from './mountComponent'

/**
 * 
 * @param {*} vitualDom 
 * @param {*} container 
 */
export default function mountElement(vitualDom, container) {
    if (isFunction(vitualDom)) {
        // Components 
        mountComponent(vitualDom, container)
    } else {
        // NativeElement
        mountNativeElement(vitualDom, container)

    }
}