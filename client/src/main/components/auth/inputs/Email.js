import React from 'react';

const Email = () => {
	return (
		<label className="flex flex-col w-full my-3 ">
			<p className="mb-2 font-semibold text-xs">Email</p>

			<input
				className="p-3 py-2 border border-gray-300 rounded-lg  outline-none"
				placeholder="Enter your email"
				type="email"
				name="email"
				style={{ width: '100%' }}
			/>
		</label>
	);
};

export default Email;
