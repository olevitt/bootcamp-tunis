import React from 'react';

const MaListe1 = props => (
	<>
		<h2>{props.titre}</h2>
		<ul>
			{props.numbers.map(n => (
				<li key={n}>{`Element ${n}`}</li>
			))}
		</ul>
	</>
);

export default MaListe1;
