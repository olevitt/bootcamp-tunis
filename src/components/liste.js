import React from 'react';

class MaListe extends React.Component {
	render() {
		const data = this.props.numbers.map(n => <li key={n}>{`Element ${n}`}</li>);
		return (
			<>
				<h2>{this.props.titre}</h2>
				<ul>{data}</ul>
			</>
		);
	}
}

export default MaListe;
