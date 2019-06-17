import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTranslationList } from './store/actions'
import { Redirect } from 'react-router-dom'

class Translation extends Component {
  getList() {
    const { list } = this.props
    return list.map(item => <div key={item.id}>{item.title}</div>)
  }

  render() {
    return this.props.login ? <div>{this.getList()}</div> : <Redirect to="/" />
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

const ExportTranslation = connect(mapState,mapDispatch)(Translation)

ExportTranslation.loadData = store => {
  return store.dispatch(getTranslationList())
}

export default ExportTranslation