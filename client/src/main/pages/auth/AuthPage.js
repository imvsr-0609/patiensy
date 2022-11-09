import React from 'react';
import AuthComponent from '../../components/auth/AuthComponent';
import authbg from '../../assets/img/auth-bg.png';

const AuthPage = () => {
	return (
		<div className="w-full min-h-screen flex">
			<div className="flex-1 w-full md:max-w-2xl flex items-center justify-center p-4 sm:p-6 lg:p-10">
				<AuthComponent />
			</div>
			<div className="flex-1  bg-blue-500 hidden md:flex">
				<img
					className="w-full h-full object-cover lg:object-contain"
					src={authbg}
					alt="authbg"
				/>
			</div>
		</div>
	);
};

export default AuthPage;
