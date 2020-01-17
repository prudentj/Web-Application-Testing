import React, {useState} from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
	const [strike, setStrike] = useState(0);
	const [ball, setBall] = useState(0);
	const [hit, setHit] = useState(0);
	const [out, setOut] = useState(0);

	const fouled = () => {
		if (strike < 2) {
			setStrike(strike + 1);
		}
	};
	const striked = () => {
		if (strike >= 2) {
			setOut(out + 1);
			setStrike(0);
		} else {
			setStrike(strike + 1);
		}
	};

	const hitted = () => {
		setHit(hit + 1);
		setStrike(0);
		setBall(0);
	};

	const balled = () => {
		if (ball >= 3) {
			setOut(out + 1);
			setBall(0);
		} else {
			setBall(ball + 1);
		}
	};

	return (
		<div className="App">
			<Dashboard
				fouled={fouled}
				striked={striked}
				hitted={hitted}
				balled={balled}
			/>
			<Display strike={strike} ball={ball} out={out} />
		</div>
	);
}

export default App;
