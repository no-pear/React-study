/**
 * 为 DOM 对象添加属性
 * @param {*} newElement 
 * @param {*} vitualDom 
 */
export default function updateNodeElement (newElement, vitualDom) {
    // 获取节点对应的属性对象
    const newProps = vitualDom.props
    // console.log('newProps', newProps)
    Object.keys(newProps).forEach(propName => {
        // 获取属性值
        const newPropsValue = newProps[propName]
        // 判断属性是否是事件属性 onClick --> click
        if (propName.slice(0,2) === 'on') {
            // 事件名称
            const eventName = propName.toLocaleLowerCase().slice(2)
            // 给元素添加事件
            newElement.addEventListener(eventName, newPropsValue)
        } else if (propName === 'value' || propName === 'checked') {
            newElement[propName] = newPropsValue
        } else if (propName !== 'children') {
            if (propName === 'className') {
                newElement.setAttribute('class', newPropsValue)
            } else {
                newElement.setAttribute(propName, newPropsValue)
            }
        }
    })
}