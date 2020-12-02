import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';
import Home from './pages/Home';
import List from './pages/List';

// class App extends Component {
// 	render() {
// 		const App = () => (
// 			<div>
// 				<Switch>
// 					<Route exact path='/' component={Home}/>
// 					<Route path='/list' component={List}/>
// 				</Switch>
// 			</div>
// 		)
// 		return (
// 			<Switch>
// 				<App/>
// 			</Switch>
// 		);
// 	}
// }

const App = (props) => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/list' component={List} />
			</Switch>
		</div>
	);
};

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
