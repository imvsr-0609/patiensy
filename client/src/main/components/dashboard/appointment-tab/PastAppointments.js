import React from 'react';
import SingleAppointment from './SingleAppointment';

const PastAppointments = () => {
	return (
		<div className="bg-custom rounded-lg md:p-4 h-full w-full max-h-72 overflow-y-scroll">
			<h3 className="">Past Appointments</h3>
			<div className="">
				<SingleAppointment />
				<SingleAppointment />
			</div>
		</div>
	);
};
export default PastAppointments;
