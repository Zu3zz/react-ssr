import React, { Component } from 'react'
// 同构: 一套react代码在服务器和浏览器端各执行一遍
// const React = require('react');
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
import styles from './style.css'
import withStyles from '../../withStyle'

class Home extends Component {
  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.css.push(styles._getCss())
    }
  }

  getList() {
    const { list } = this.props
    return list.map(item => <div className={styles.item} key={item.id}>{item.title}</div>)
  }

  render() {
    return <div className={styles.container}>{this.getList()}</div>
  }

  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList()
    }
  }
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
const ExportHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Home, styles))

ExportHome.loadData = store => {
  // 负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList())
}
export default ExportHome
// module.exports = {
//   default: Home
// }
