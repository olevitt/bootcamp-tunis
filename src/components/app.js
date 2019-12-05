import React from 'react';
import MaListe from './liste';
import Select from './select/select';

const langages = [
	{ value: 1, label: 'Javascript' },
	{ value: 2, label: 'PHP' },
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0, value: '', selected: '' };
	}
	render() {
		const nombres =
			this.state.count > 0
				? new Array(this.state.count).fill(0).map((_, i) => i)
				: [];
		return (
			<>
				{/* <Select options={langages} value={this.state.selected} /> */}
				<button
					onClick={e => {
						e.preventDefault();
						e.stopPropagation(); // et non stopImmediatePropagation
						this.setState({ count: this.state.count + 1 });
						// et surtout pas this.state = {count : ...}
					}}
				>
					One more !
				</button>
				<input
					type="text"
					value={this.state.value}
					onChange={e => {
						this.setState({ value: e.target.value });
					}}
				/>
				<div>{`Vous avez cliqué ${this.state.count} fois.`}</div>
				<MaListe titre={this.state.value} numbers={nombres} />
			</>
		);
	}
}

export default App;
