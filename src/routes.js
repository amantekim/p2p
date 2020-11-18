import React from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import MainPage from 'containers/Main'
function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </>
  )
}
export default Routes
