import React from 'react';
import { useParams } from 'react-router';
import AppointmentTab from '../../components/dashboard/appointment-tab/AppointmentTab';
import Documents from '../../components/dashboard/documents/Documents';
import HealthCard from '../../components/dashboard/health-card/HealthCard';
import UserDetails from '../../components/dashboard/user-details/UserDetails';

const DashboardPage = () => {
	const { username } = useParams();

	return (
		<>
			<div className="bg-custom w-full min-h-screen  ">
				<div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-6 p-2 md:p-4 lg:p-6 gap-4 md:gap-6">
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
