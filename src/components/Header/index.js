import React, {Fragment, Component} from 'react';
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import {actions} from './store/index'
import styles from './style.css'

class Header extends Component {

  componentWillMount() {
    if (this.props.staticContext){
      this.props.staticContext.css.push(styles._getCss())
    }
  }
  
  render() {
    const { login, handleLogin, handleLogout } = this.props
    return(
    <div className={styles.test}>
      <Link to='/'>Home</Link>
      <br/>
      {login ? <Fragment>
        <Link to='/translation'>翻译列表</Link>
        <br />
        <div to='/login' onClick={handleLogout}>退出</div>
      </Fragment> : <div onClick={handleLogin}>登录</div>
      }
    </div>
  )
  }
}


const mapState = (state) => ({
  login: state.header.login
})

const mapDispatch = (dispatch) => ({
  handleLogin() {
    dispatch(actions.login())
  },
  handleLogout() {
    dispatch(actions.logout())
  }
})


export default connect(mapState, mapDispatch)(Header);
