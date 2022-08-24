import React from 'react';
import uuid from 'react-uuid';
const Select = ({ optionArr, label }) => {
	return (
		<label className="flex flex-col w-full my-3 ">
			<p className="mb-2 font-semibold Number-xs ">{label}</p>

			<select
				className="p-3 py-2 border border-gray-300 rounded-lg  outline-none"
				// placeholder={placeholder}
			>
				{optionArr.map((option) => (
					<option className="" value={option} key={uuid()}>
						{option.toUpperCase()}
					</option>
				))}
			</select>
		</label>
	);
};

export default Select;
