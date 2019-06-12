import React, { Component } from 'react';
// 同构: 一套react代码在服务器和浏览器端各执行一遍
// const React = require('react');
import {connect} from 'react-redux'
import { getHomeList } from './store/actions'

class Home extends Component {
  
  getList() {
    const {list} = this.props
    return list.map(item => <div key={item.docid}>{item.title}</div>)
  }
  
  render() {
    return(
      <div>
        <div>welcome to {this.props.name} home!</div>
        {this.getList()}
        <button onClick={() => {alert('click')}}>click</button>
      </div>
    )
  }
  
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList(false)
    }
  }
}
Home.loadData = (store) => {
  // 负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList(true))
}

const mapStateToProps = state => ({
  list: state.home.newsList,
  name: state.home.name
})
const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// module.exports = {
//   default: Home
// }
