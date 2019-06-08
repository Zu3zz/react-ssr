import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from "react-router-dom"
import Routes from '../Routes'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const reducer = (state = {name: '3zz'}, action) => {
  return state
}

const store = createStore(reducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {Routes}
      </BrowserRouter>
    </Provider>
  )
}
ReactDom.hydrate(<App/>, document.getElementById('root'))
