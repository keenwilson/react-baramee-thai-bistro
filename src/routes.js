import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ResponsiveHome from './page/responsiveHome'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={ResponsiveHome} />
      <Route path="/react-baramee-thai-bistro" component={ResponsiveHome} />
    </Switch>
  )
}
