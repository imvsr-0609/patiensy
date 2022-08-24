import React from 'react';

const HealthCard = () => {
	return (
		<div className="grid grid-cols-2 gap-4 lg:col-span-2 max-w-5xl   rounded-lg min-h-40  ">
			<div className="flex flex-col gap-2 rounded-xl bg- font-semibold bg-white shadow-custom p-4">
				<h1 className="text-xl font-bold text-red-500">
					102 <span className="text-sm text-red-400 font-semibold">bpm</span>{' '}
				</h1>

				<h2 className="font-bold text-sm">Heart rate</h2>

				<p className="text-gray-400 text-xs">
					Pulse is the most important psychological indicator
				</p>
			</div>
			<div className="flex flex-col gap-2 rounded-xl bg- font-semibold bg-yellow-50 shadow-custom p-4">
				<h1 className="text-xl text-yellow-600">36.6 °C </h1>

				<h2 className="font-bold text-sm">Temperature</h2>

				<p className="text-gray-400 text-xs">
					Temperature below 35 C indicates a serious illness
				</p>
			</div>
			<div className="flex flex-col gap-2 rounded-xl bg- font-semibold bg-blue-900 text-white shadow-custom p-4">
				<h1 className="text-xl">120/80 </h1>

				<h2 className="font-bold text-sm">Blood Pressure</h2>

				<p className="text-gray-300 text-xs">
					Blood pressure can rise and fall several times a day
				</p>
			</div>
			<div className="flex flex-col gap-2 rounded-xl bg- font-semibold bg-white shadow-custom p-4">
				<h1 className="text-xl">
					21.2 <span className="text-sm">kg/m²</span>{' '}
				</h1>

				<h2 className="font-bold sm">BMI</h2>

				<p className="text-gray-400 text-xs">
					BMI is an index coined to assess the body composition and weight risk.
				</p>
			</div>
		</div>
	);
};

export default HealthCard;
