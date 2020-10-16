import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, HashRouter } from 'react-router-dom';

// ==========Pages===============
import Home from './Pages/Home/index'
import Films from './Pages/Films/index'
import Login from './Pages/Login/index'
import People from './Pages/People/index'
import Planets from './Pages/Planets/index'
import Species from './Pages/Species/index'
import Starships from './Pages/Starships/index'


function App() {

  return (
    <div>
			<HashRouter>
				<Switch>
					<Route path="/" exact={true} component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/films" component={Films} />
					<Route path="/people" component={People} />
					<Route path="/planets" component={Planets} />
					<Route path="/species" component={Species} />
					<Route path="/starships" component={Starships} />
					<Route path="*" component={Home} />
				</Switch>
			</HashRouter>
      </div>
  );
}

export default App;
