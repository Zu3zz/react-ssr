import express from 'express'
import proxy from 'express-http-proxy'
import {
  render
} from './utils'
import {
  getStore
} from "../store"
import {
  matchRoutes
} from "react-router-config"
import routes from "../Routes"

const app = express()

app.use(express.static('public'))
app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: function (req) {
    return '/ssr/api' + req.url
  }
}))

app.get('*', function (req, res) {
  const store = getStore(req)
  // // 根据路由的路径，来往store里添加数据
  const matchedRoutes = matchRoutes(routes, req.path)
  // // 让matchRoutes里面所有的组件对应的loadData方法执行一次
  const promises = []
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store)
          .then(resolve)
          .catch(resolve)
      })
      promises.push(promise)
    }
  })
  Promise.all(promises).then(() => {
    const context = {}
    const html = render(store, routes, req, context)
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url)
    } else if (context.NOT_FOUND) {
      res.status(404)
      res.send(html)
    } else {
      res.send(html)
    }
  })
})

var server = app.listen(3000)