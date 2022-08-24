import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../main/components/dashboard/header/Header';
import AppointmentPage from '../main/pages/appointment/AppointmentPage';
import AuthPage from '../main/pages/auth/AuthPage';
import DashboardPage from '../main/pages/dashboard/DashboardPage';
import ErrorPage from '../main/pages/error/ErrorPage';
import RecommendationPage from '../main/pages/recommendation/RecommendationPage';
import {
	APPOINTMENT_PAGE,
	DASHBOARD_PAGE,
	HOME_PAGE,
	RECOMMENDATION_PAGE,
} from './routes';

const Routerconfig = () => {
	return (
		<Router>
			<div className="App h-auto w-screen bg-light-gray text-gray-600">
				<Header username={'imvsr'} />
				<Routes>
					<Route path={HOME_PAGE} element={<AuthPage />} />
					<Route path={DASHBOARD_PAGE} element={<DashboardPage />} />
					<Route path={APPOINTMENT_PAGE} element={<AppointmentPage />} />
					<Route path={RECOMMENDATION_PAGE} element={<RecommendationPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
		</Router>
	);
};

export default Routerconfig;
