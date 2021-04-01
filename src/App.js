import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Commponents/HomePage';
import NavBar from './Commponents/NavBar';

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path='/' component={HomePage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
