import {renderToString} from "react-dom/server"
import {StaticRouter} from 'react-router-dom'
import React from 'react'
import Routes from '../Routes'
import getStore from '../store'
import {Provider} from 'react-redux'

export const render = (req) => {
  
  const content = renderToString((
    <Provider store={getStore()}>
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
