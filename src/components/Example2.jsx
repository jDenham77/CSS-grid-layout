import React from 'react';
import './Example2.css';

const Example2 = () => {
	return (
		<React.Fragment>
			<div className="grid2">
				<div>Lorem ipsum something</div>
				<div>Lorem ipsum something</div>
				<div>Lorem ipsum something</div>
				<div className="nested">
					<div>lorem</div>
					<div>lorem</div>
					<div>lorem</div>
					<div>lorem</div>
					<div>lorem</div>
					<div>lorem</div>
				</div>
				<div>Lorem ipsum something</div>
				<div>Lorem ipsum something</div>
				<div>
					Lorem ipsum somethingLorem ipsum somethingLorem ipsum somethingLorem
					ipsum somethingLorem ipsum somethingLorem ipsum somethingLorem ipsum
					somethingLorem ipsum somethingLorem ipsum somethingLorem ipsum
					somethingLorem ipsum somethingLorem ipsum somethingLorem ipsum
					somethingLorem ipsum somethingLorem ipsum somethingLorem ipsum
					something
				</div>
				<div>Lorem ipsum something</div>
			</div>
		</React.Fragment>
	);
};

export default Example2;
