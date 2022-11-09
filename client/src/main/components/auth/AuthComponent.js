import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import logo from '../../assets/img/logo.png';
import UserDataForm from './user-data/UserDataForm';

const AuthComponent = () => {
	const [tab, setTab] = useState(0);
	return (
		<div className="  px-4 md:px-2 lg:px-4 py-4  w-full h-full flex flex-col text-sm max-w-lg">
			<div className="flex w-full relative">
				<button
					onClick={() => setTab(0)}
					className={`flex-1 p-2 font-semibold`}
				>
					Login
				</button>
				<button
					onClick={() => setTab(1)}
					className={`flex-1 p-2 font-semibold`}
				>
					Signup
				</button>
				<div
					className={` border rounded-full border-blue-500 w-1/2 h-full bg-transparent absolute left-0 top-0 transform ${
						tab === 1 ? `translate-x-full` : `translate-x-0`
					} transition-all duration-300 ease-in-out `}
				></div>
			</div>

			<div className="flex-1 ">
				{tab === 0 && <Login changeTab={() => setTab(1)} />}
				{tab === 1 && <Register changeTab={() => setTab(0)} />}
				{tab === 2 && <UserDataForm changeTab={() => setTab(0)} />}
			</div>
		</div>
	);
};

export default AuthComponent;
