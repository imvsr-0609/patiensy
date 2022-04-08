import React from 'react';
import { CgFileDocument } from 'react-icons/cg';

const SingleAppointment = () => {
	return (
		<div className="bg-white flex gap-2 justify-between rounded-lg font-semibold p-2 sm:p-3 my-3">
			<div className="md:w-1/5 flex flex-col justify-center items-center">
				<h1 className="text-xs md:text-sm lg:text-xl text-black">
					26 Nov , 19
				</h1>
				<p className="text-xs">9:00 - 10:00</p>
			</div>

			<div className="flex-1 flex flex-col justify-center border-l-2 border-r-2 border-gray-200 items-center ">
				<p className="text-gray-500 text-xs">Treatment</p>
				<h3 className="text-sm md:text-base text-black">Root Canal</h3>
			</div>

			<div className="md:w-1/5 flex flex-col justify-center items-center">
				<p className="text-gray-500 text-xs">Doctor</p>
				<h4 className="text-xs md:text-sm text-black">Dr. George</h4>
			</div>
			<div className=" flex flex-col justify-center items-center">
				<p className="hidden md:block text-gray-500 text-xs mb-2">Notes</p>
				<button>
					<CgFileDocument />
				</button>
			</div>
		</div>
	);
};

export default SingleAppointment;
