import React, { Component } from 'react'

// 这个函数是生成高阶组件的函数
// 这个函数 返回一个组件
export default (DecoratedComponent, styles) => {
  return class NewComponent extends Component {
    componentWillMount() {
      if (this.props.staticContext) {
        this.props.staticContext.css.push(styles._getCss())
      }
    }
    render() {
      return <DecoratedComponent {...this.props} />
    }
  }
}