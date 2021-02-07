import TinyReact from './TinyReact'

const app = document.getElementById('app')

const vitualDom = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好")}>点击我</button>
    <h3>这个将会被删除</h3>
    2, 3
    <input type="text" value="13" />
  </div>
)

const modifyDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test123">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <button onClick={() => alert("你好!!!!!")}>点击我</button>
    <input type="text" value="13" />
  </div>
)

TinyReact.render(vitualDom, app)

setTimeout(() => {
  TinyReact.render(modifyDOM, app)
}, 2000)

// console.log('vitualDom', vitualDom)

function Demo () {
  return <div>hello</div>
}

function Heart (props) {
    // return <div>&hearts;</div>
    // return <Demo></Demo>
    return <div>
      { props.title }
      &hearts;
      <Demo></Demo>
    </div>
}
// TinyReact.render(<Heart title='react'></Heart>, app)

class Alert extends TinyReact.Component {
  constructor (props) {
    super(props)
  }

  render () {
    // return <div>Hello React</div>
    return <div>
      {this.props.name}
    </div>
  }
}

TinyReact.render(<Alert name='nopear'></Alert>, app)
