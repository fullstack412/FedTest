import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Welcome from '../container/Welcome'
export default function MainRoute() {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
    </Switch>
  )
}
