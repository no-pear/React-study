/**
 * 创建 VirtualDom 对象
 * @param {string} type 
 * @param {object} props 
 * @param  {...any} children 
 */
export default function createElement (type, props, ...children) {

    const childElements = [].concat(...children).reduce((result, child) => {
        if (child !== false && child !== true && child !== null) {
            if (child instanceof Object) {
                // console.log('true', child)
                // return child
                result.push(child)
            } else {
                // console.log('false', child)
                // return createElement('text', {textContent: child}) 
                result.push(createElement('text', {textContent: child}))
            }
        }
        return result
    }, [])

    return {
        type,
        props: Object.assign({children: childElements}, props),
        children: childElements

    }
}