import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from '../main/pages/auth/AuthPage';
import DashboardPage from '../main/pages/dashboard/DashboardPage';
import ErrorPage from '../main/pages/error/ErrorPage';

const Routerconfig = () => {
	return (
		<Router>
			<div className="App h-auto w-screen bg-light-gray text-gray-600">
				<Routes>
					<Route path="/" element={<AuthPage />} />
					<Route path="/dashboard/:username" element={<DashboardPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
		</Router>
	);
};

export default Routerconfig;
