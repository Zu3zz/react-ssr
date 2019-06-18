import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { getTranslationList } from './store/actions'
import styles from './style.css'
import withStyles from '../../withStyle'

class Translation extends Component {
  getList() {
    const { list } = this.props
    return list.map(item => (
      <div className={styles.item} key={item.id}>
        {item.title}
      </div>
    ))
  }

  render() {
    return this.props.login ? (
      <Fragment>
        <Helmet>
          <title>这是3zz的翻译页面 -- 丰富多彩的翻译资讯</title>
          <meta
            name="description"
            content="这是3zz的翻译页面 -- 丰富多彩的翻译资讯"
          />
        </Helmet>
        <div className={styles.container}>{this.getList()}</div>
      </Fragment>
    ) : (
      <Redirect to="/" />
    )
  }

  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getTranslationList()
    }
  }
}

const mapState = state => ({
  list: state.translation.translationList,
  login: state.header.login
})

const mapDispatch = dispatch => ({
  getTranslationList() {
    dispatch(getTranslationList())
  }
})

const ExportTranslation = connect(
  mapState,
  mapDispatch
)(withStyles(Translation, styles))

ExportTranslation.loadData = store => {
  return store.dispatch(getTranslationList())
}

export default ExportTranslation
