/*
- display the count of `balls` and `strikes`
 for the at-bat.
- should be updated when the user records
 activity on the `Dashboard` component.
*/
import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const Display = props => {
	return (
		<div>
			<h2>Ball Count: {props.ball}</h2>
			<h2>Strike Count: {props.strike}</h2>
			<h2>Out Count: {props.out}</h2>
		</div>
	);
};

export default Display;
