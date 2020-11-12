import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { isPC } from '../utils'

import MobileHome from '../pages/mobile/mobileHome'

import PcHome from '../pages/pc/pcHome/'
function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route path='/mobileHome'>
          <MobileHome />
        </Route>
        <Route path='/pcHome'>
          <PcHome />
        </Route>
        <Route path='/' >
          <Redirect from='/' to={isPC() ? '/pcHome' : '/mobileHome'}></Redirect>
        </Route>
      </Switch>
    </Router >
  )
}
export default MyRouter;