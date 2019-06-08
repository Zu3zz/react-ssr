import {renderToString} from "react-dom/server"
import {StaticRouter} from 'react-router-dom'
import React from 'react'
import Routes from '../Routes'
import {createStore, applyMiddleware} from "redux"
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

export const render = (req) => {
  
  const reducer = (state = {name: '3zz'}, action) => {
    return state
  }
  
  const store = createStore(reducer, applyMiddleware(thunk))
  
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
      </StaticRouter>
    </Provider>
  ))
  
  return `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
          <div id="root">${content}</div>
        <script src='/index.js'></script>
      </body>
    </html>
  `
}
