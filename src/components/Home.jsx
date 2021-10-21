import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Homepage = () => {
	let history = useHistory();

	const routeToExample1 = () => {
		history.push('/example1');
	};

	const routeToExample2 = () => {
		history.push('/example2');
	};

	const routeToExample3 = () => {
		history.push('/example3');
	};

	return (
		<React.Fragment>
			<div className="exampleBtns">
				<button onClick={routeToExample1}>
					Example #1 ( Basic Grid Example)
				</button>

				<button onClick={routeToExample2}>
					Example #2 ( Nested Divs for Grid )
				</button>

				<button onClick={routeToExample3}>
					Example #3 ( Justify + Align Items )
				</button>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
