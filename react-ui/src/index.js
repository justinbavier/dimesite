import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import Fail from './components/Fail'
import Success from './components/Success'

import registerServiceWorker from './registerServiceWorker';


render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/fail" component={Fail} />
    <Route path="/success" component={Success} />
  </Router>
), document.getElementById('app'))
registerServiceWorker();
