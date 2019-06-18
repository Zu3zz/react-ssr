import React, { Component, Fragment } from 'react'
// 同构: 一套react代码在服务器和浏览器端各执行一遍
// const React = require('react');
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
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
    return list.map(item => (
      <div className={styles.item} key={item.id}>
        {item.title}
      </div>
    ))
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>这是3zz的新闻页面 -- 丰富多彩的资讯</title>
          <meta
            name="description"
            content="这是3zz的新闻页面 -- 丰富多彩的资讯"
          />
        </Helmet>
        <div className={styles.container}>{this.getList()}</div>
      </Fragment>
    )
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
