import React, { useLayoutEffect, useState } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './Pages/Login/index'
import Cadastro from './Pages/Cadastro/index'
import Home from './Pages/Home/index'

import Firebase from './backend/firebase'

export default function App() {

  const [user, setUser] = useState(null)

  useLayoutEffect(() => {
    Firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user !== null) {
          setUser(user.uid)
        } else {
          setUser(null)
        }
      })
  }, [])

  const PrivateRoute = ({ component: Component }) => {
    return <Route
      render={(props => {
        if (user) {
          return <Component {...props} />
        } else {
          return <Redirect to={{ pathname: "/" }} />
        }
      })}

    />
  }

  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/cadastro" exact={true} component={Cadastro} />
        <PrivateRoute path="/home" component={Home} />

      </Switch>

    </HashRouter>
  )
}