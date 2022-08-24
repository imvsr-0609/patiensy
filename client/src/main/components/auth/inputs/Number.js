import React from 'react';

const Number = ({ placeholder, label }) => {
	return (
		<label className="flex flex-col w-full my-3 ">
			<p className="mb-2 font-semibold Number-xs ">{label}</p>

			<input
				className="p-3 py-2 border border-gray-300 rounded-lg  outline-none"
				placeholder={placeholder}
				type="number"
				name="number"
				style={{ width: '100%' }}
			/>
		</label>
	);
};

export default Number;
