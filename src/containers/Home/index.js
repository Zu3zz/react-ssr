import React from 'react';
// 同构: 一套react代码在服务器和浏览器端各执行一遍
// const React = require('react');

const Home = () => {
  return(
    <div>
      <div>welcome to 3zz‘s home!</div>
      <button onClick={() => {alert('click')}}>click</button>
    </div>
  )
}

export default Home;
// module.exports = {
//   default: Home
// }