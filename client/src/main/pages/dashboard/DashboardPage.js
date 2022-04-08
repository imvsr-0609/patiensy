import React, { useState } from 'react';
import { useParams } from 'react-router';
import Documents from '../../components/dashboard/documents/Documents';
import AppointmentTab from '../../components/dashboard/appointment-tab/AppointmentTab';
import UserDetails from '../../components/dashboard/user-details/UserDetails';
import Header from '../../components/dashboard/header/Header';
import HealthCard from '../../components/dashboard/health-card/HealthCard';

const DashboardPage = () => {
	const { username } = useParams();

	return (
		<>
			{/* <Sidebar /> */}
			<div className="bg-custom  ">
				<Header username={username} />
				<div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-6 p-2 md:p-4 lg:p-6 gap-2 md:gap-4 lg:gap-6">
					<UserDetails username={username} />
					<HealthCard />
					<AppointmentTab />
					<Documents />
				</div>
			</div>
		</>
	);
};

export default DashboardPage;
