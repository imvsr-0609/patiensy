import { Avatar, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const UserDetails = ({ username }) => {
	return (
		<div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 md:gap-4  lg:col-span-4 ">
			<div className="flex flex-col justify-between items-center lg:w-1/3 max-w-5xl border-2 shadow-custom border-white bg-white rounded-lg min-h-40 p-4">
				<Avatar
					className="rounded-full  object-contain"
					alt="Remy Sharp"
					src="https://austinareajazzfestival.com/wp-content/uploads/2015/04/speaker-3-v2.jpg"
					sx={{ width: 50, height: 50 }}
				/>
				<p className="text-xl text-gray-800 font-bold">{username}</p>
				<p className="text-xs mt-1 font-semibold text-gray-500">
					{username}@gmail.com
				</p>
				<div className="flex  my-2 text-center text-xs font-semibold text-gray-500 w-full">
					<div className="flex flex-col justify-center items-center w-1/2 px-2 border-r-2 border-gray-300 border-opacity-50">
						<p className="text-gray-800 font-bold text-base">15</p>
						<p>Appointment</p>
					</div>

					<div className="flex flex-col justify-center items-center w-1/2 px-2 ">
						<p className="text-gray-800 font-bold text-base">2</p>
						<p>Upcoming</p>
					</div>
				</div>
				<button className="rounded-md px-3 text-xs font-semibold w-full border-2 border-transparent  bg-blue-500 transition-all duration-300 ease-in-out text-white hover:bg-white hover:text-blue-500  hover:border-blue-400 mt-2 py-2 ">
					Book an Appointment
				</button>
			</div>

			<div className="grid grid-cols-3 gap-2 w-full shadow-custom max-w-5xl border-2 border-white bg-white rounded-lg min-h-40 p-2 md:p-4 lg:px-6">
				<div className="text-center flex flex-col justify-center items-center">
					<h3 className="font-semibold text-sm text-gray-400 mb-1">Gender</h3>
					<h2 className="text-base font-semibold">Male</h2>
				</div>
				<div className="text-center  flex flex-col justify-center items-center">
					<h3 className="font-semibold text-sm text-gray-400 mb-1">Birthday</h3>
					<h2 className="text-base font-semibold">06-09-2000</h2>
				</div>
				<div className="text-center  flex flex-col justify-center items-center">
					<h3 className="font-semibold text-sm text-gray-400 mb-1">
						Phone Number
					</h3>
					<h2 className="text-base font-semibold">9955995599</h2>
				</div>
				<div className="text-center  flex flex-col justify-center items-center">
					<h3 className="font-semibold text-sm text-gray-400 mb-1">Weight</h3>
					<h2 className="text-base font-semibold">65 kg</h2>
				</div>
				<div className="text-center  flex flex-col justify-center items-center">
					<h3 className="font-semibold text-sm text-gray-400 mb-1">Height</h3>
					<h2 className="text-base font-semibold">180 cm</h2>
				</div>
				<div className="text-center  flex flex-col justify-center items-center">
					<h3 className="font-semibold text-sm text-gray-400 mb-1">City</h3>
					<h2 className="text-base font-semibold">Chennai</h2>
				</div>
				<div className="text-center  flex flex-col justify-center items-center">
					<h3 className="font-semibold text-sm text-gray-400 mb-1">Zipcode</h3>
					<h2 className="text-base font-semibold">603203</h2>
				</div>
			</div>
		</div>
	);
};

export default UserDetails;
