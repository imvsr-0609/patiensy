import React from 'react';
import SingleAppointment from './SingleAppointment';

const UpcomingAppointment = () => {
	return (
		<div className="bg-custom rounded-lg p-2 md:p-4 h-full w-full max-h-72 overflow-y-scroll">
			<h3 className="">Upcoming Appointments</h3>
			<div className="">
				<SingleAppointment />
				<SingleAppointment />
				<SingleAppointment />
			</div>
		</div>
	);
};
export default UpcomingAppointment;
