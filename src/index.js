import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.js'
import './index.scss'
import { AppContainer } from 'react-hot-loader'
import * as firebase from 'firebase';
import { config } from '../process.env';

firebase.initializeApp(config);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('main')
  )
}



render(App)
if (module.hot) {
  module.hot.accept('./components/app', () => { render(App) })
}
