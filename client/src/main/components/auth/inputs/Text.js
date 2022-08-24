import React from 'react';

const Text = ({ placeholder, label }) => {
	return (
		<label className="flex flex-col w-full my-3 ">
			<p className="mb-2 font-semibold text-xs ">{label}</p>

			<input
				className="p-3  border border-gray-300 rounded-lg  outline-none"
				placeholder={placeholder}
				type="text"
				name="text"
				style={{ width: '100%' }}
			/>
		</label>
	);
};

export default Text;
