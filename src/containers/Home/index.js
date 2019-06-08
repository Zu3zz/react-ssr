import React from 'react';
// 同构: 一套react代码在服务器和浏览器端各执行一遍
// const React = require('react');
import Header from '../../components/Header'
import {connect} from 'react-redux'

const Home = (props) => {
  return(
    <div>
      <Header />
      <div>welcome to {props.name} home!</div>
      <button onClick={() => {alert('click')}}>click</button>
    </div>
  )
}
const mapStateToProps = state => ({
  name: state.name
})
export default connect(mapStateToProps, null)(Home);
// module.exports = {
//   default: Home
// }
