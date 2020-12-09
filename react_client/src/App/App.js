import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';
// import "./App/static/css/bootstrap.min"

import Home from './pages/Home';
import List from './pages/List';
import Guests from './pages/Guests';
import Login from './pages/Login';
import MainNavbar from './components/Navbar';

import "bootstrap/dist/css/bootstrap.min.css"

const App = (props) => {
	return (
		<div>
			<MainNavbar activeKey="list"></MainNavbar>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/list' component={List} />
				<Route path='/guests' component={Guests} />
				<Route path='/login' component={Login} />
			</Switch>
		</div>
	);
};

export default App;