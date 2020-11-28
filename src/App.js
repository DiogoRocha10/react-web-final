import React, { useLayoutEffect, useState } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//telas
import Login from './Pages/Login/index'
import Cadastro from './Pages/Cadastro/index'
import Recado from './Pages/Recado/index'
import Home from './Pages/Home/index'
import ChatBot from './Pages/ChatBot/index'
import Recados from './Pages/RecadosHome/index'
//service
import {firebase} from './backend/firebase'

export default function App() {

  const [user, setUser] = useState(null)

  useLayoutEffect(() => {
    firebase
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
        <Route path="/recado" exact={true} component={Recado} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/chat" component={ChatBot} />
        <PrivateRoute path="/recados" component={Recados} />
      </Switch>

    </HashRouter>
  )
}