import React from 'react';
import { HiOutlineUser } from 'react-icons/hi';
import logo from '../../../assets/img/logo.png';
import { MdLogout } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

const Header = ({ username }) => {
	return (
		<div className="bg-custom flex justify-between p-4 px-6 md:px-10 border-b-2">
			<div className="flex flex-col">
				<img
					className="w-20 md:w-40 h-full object-contain"
					src={logo}
					alt="Patiensy"
				/>
			</div>
			<div className="flex justify-between items-center gap-2 md:gap-3">
				<div className="flex justify-between items-center gap-2">
					<div className="text-xl md:text-2xl text-blue-500">
						<HiOutlineUser />
					</div>
					<h2 className="text-xs md:text-sm font-semibold">{username}</h2>
				</div>

				<button className="p-2 bg-white rounded-full text-base md:text-lg text-gray-600">
					<FiEdit />
				</button>
				<button className=" p-2 bg-white rounded-full text-base md:text-lg text-gray-600">
					<MdLogout />
				</button>
			</div>
		</div>
	);
};

export default Header;
