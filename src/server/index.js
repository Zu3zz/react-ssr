import express from 'express'
// const express = require('express');
// const Home = require('./containers/Home')
import Home from '../containers/Home'
// import ReactDom from 'react-dom';
// ReactDom.render(<Home />, document.getElementById('root'))
import { renderToString } from 'react-dom/server'
import React from 'react'

const app = express()
app.use(express.static('public'))

const content = renderToString(<Home/>)

app.get('/', function (req, res) {
  res.send(`
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
          <div id="root">${content}</div>
        <script src='/index.js'></script>
      </body>
    </html>
  `)
})

var server = app.listen(3000)
