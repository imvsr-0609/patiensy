import React, { useState } from 'react';
import PastAppointments from './PastAppointments';
import UpcomingAppointment from './UpcomingAppointment';

const AppointmentTab = () => {
	const [activeTab, setActiveTab] = useState('tab1');

	// const tabChange = (value) => {
	//   setActiveTab(value);
	// };
	const tabChange = (val) => {
		setActiveTab(val);
	};
	return (
		<div className="flex flex-col lg:col-span-4  shadow-custom  border-2 border-white bg-white rounded-lg min-h-40 p-2 md:p-4 lg:px-6">
			<ul className="bg-custom flex w-full bg-gray-200 py-3 text-gray-400 justify-between items-center rounded-md cursor-pointer relative text-xs ">
				<button
					className={`text-center text-xs md:text-sm uppercase z-10 ${
						activeTab === 'tab1' && `text-blue-500`
					} font-semibold flex-1`}
					onClick={() => tabChange('tab1')}
				>
					Upcoming Appointment
				</button>
				<button
					className={`text-center text-xs md:text-sm uppercase z-10 ${
						activeTab === 'tab2' && `text-blue-400`
					} font-semibold flex-1`}
					onClick={() => tabChange('tab2')}
				>
					Past Appointments
				</button>
				<div
					style={{
						transform: `translateX(${activeTab === 'tab2' ? `100%` : `0`})`,
					}}
					className={` border-4 rounded-md h-full bg-white   border-gray-200 w-1/2 bg-transparent absolute left-0 top-0  transition-all duration-300 ease-in-out `}
				></div>
			</ul>

			<div className="h-full p-2 md:p-4">
				{activeTab === 'tab1' ? <UpcomingAppointment /> : <PastAppointments />}
			</div>
		</div>
	);
};

export default AppointmentTab;
