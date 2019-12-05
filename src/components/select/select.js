import React from 'react';

const Select = ({ options, onChange }) => (
	<input type="select" onChange={onChange}>
		{options.map(o => (
			<option key={o.value} value={o.value}>
				{o.label}
			</option>
		))}
	</input>
);

export default Select;
