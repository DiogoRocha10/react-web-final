import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, HashRouter } from 'react-router-dom';

// ==========Pages===============
import Home from './Pages/Home/index'
import Login from './Pages/Login/index'
import Planets from './Pages/Planets/index'



function App() {

  return (
    <div>
			<HashRouter>
				<Switch>
					<Route path="/" exact={true} component={Home} />
					<Route path="/login" component={Login} />		
					<Route path="/planets" component={Planets} />
					<Route path="*" component={Home} />
				</Switch>
			</HashRouter>
      </div>
  );
}

export default App;
