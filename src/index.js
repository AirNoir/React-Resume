import React,{Component} from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise'
import reducers from 'reducers/index'
import App from 'containers/App'
import './css/main.sass'
//import {Router,Route,hashHistory} from 'react-router'


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
let store = createStoreWithMiddleware(reducers)



ReactDom.render(
  <Provider store={store}>
  <App/>
  </Provider>
  ,document.getElementById('root')
)
