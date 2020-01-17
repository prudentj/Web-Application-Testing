import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import {ExpansionPanelActions} from '@material-ui/core';
import Display from './components/Display';

test('renders App.js', () => {
	render(<App />);
});
test('Results were rendered', () => {
	const container = render(<Display />);
	container.getByText('Ball Count:');
	container.getByText('Strike Count:');
	container.getByText('Out Count:');
});

/*
test('12 strikes result in resest and out')


test('3 strikes result in an out and a reset of strike)

test('foul will not increase if greater than 2',()=>{
  expect (strike =3, fouled()).toBe(strike = 3)
})
*/
