import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './components/Home';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={Homepage} />
			<Route path="/example1" component={Example1} />
			<Route path="/example2" component={Example2} />
			<Route path="/example3" component={Example3} />
		</div>
	);
}

export default App;
