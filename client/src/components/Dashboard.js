/*
    
- provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
- there is **NO** need to specify the type of hit (single, double, etc).
- changes recorded on this component should update the information shown by the `Display` component.

*/
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import React, {useState} from 'react';
const Dashboard = props => {
	return (
		<Container>
			<Button onClick={props.striked}>Strike!</Button>
			<Button onClick={props.balled}>Ball!</Button>
			<Button onClick={props.fouled}>Foul</Button>
			<Button onClick={props.hitted}>Hit!</Button>
		</Container>
	);
};

export default Dashboard;
