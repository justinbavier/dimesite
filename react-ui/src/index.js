import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'


import registerServiceWorker from './registerServiceWorker';


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById('app'))
registerServiceWorker();
