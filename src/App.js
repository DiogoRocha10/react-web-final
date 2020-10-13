import React from 'react';

// ==========Pages===============
import Films from './Pages/Films/index'
import Home from './Pages/Home/index'
import Login from './Pages/Login/index'
import People from './Pages/People/index'
import Planets from './Pages/Planets/index'
import Species from './Pages/Species/index'
import Starships from './Pages/Starships/index'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/films" component={Films} />
          <Route path="/login" component={Login} />
          <Route path="/people" component={People} />
          <Route path="/planets" component={Planets} />
          <Route path="/species" component={Species} />
          <Route path="/starships" component={Starships} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
