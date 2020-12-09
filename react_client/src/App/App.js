import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScriptTag from "react-script-tag"
// import './App.css';
// import "./App/static/css/bootstrap.min"

import Home from './pages/Home';
import Ship from './pages/ShipViewer';
import Login from './pages/Login';

import "bootstrap/dist/css/bootstrap.min.css"

const App = (props) => {
	return (
		<div>
			<ScriptTag defer src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossOrigin="anonymous"></ScriptTag>
			<ScriptTag defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossOrigin="anonymous"></ScriptTag>
			<ScriptTag defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossOrigin="anonymous"></ScriptTag>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/ship' component={Ship} />
				<Route path='/login' component={Login} />
			</Switch>
			
		</div>
	);
};

export default App;