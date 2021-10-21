import React, { useState } from 'react';
import './Example3.css';

const Example3 = () => {
	const [count, setCount] = useState(0);

	// useEffect( () => {

	// })
	return (
		<React.Fragment>
			<div className="grid3">
				<div className="box1">Box 1</div>
				<div className="box2">Box 2</div>
				<div className="box3">Box 3</div>
				<div className="box4">Box 4</div>
				<button onClick={() => setCount(count + 1)}>Increase Count</button>
				<p>Count: {count}</p>
				<button onClick={() => setCount(count - 1)}>Desrease Count</button>
			</div>
		</React.Fragment>
	);
};

export default Example3;
