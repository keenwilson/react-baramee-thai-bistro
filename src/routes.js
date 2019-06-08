import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  )
}
