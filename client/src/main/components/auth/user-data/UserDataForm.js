import React from 'react';
import Date from '../inputs/Date';
import Email from '../inputs/Email';
import Number from '../inputs/Number';
import Password from '../inputs/Password';
import Select from '../inputs/Select';
import Text from '../inputs/Text';

const UserDataForm = ({ changeTab }) => {
	const handleFormSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className=" h-full  ">
			<form
				onSubmit={handleFormSubmit}
				className="w-full h-full flex flex-col   text-xs "
			>
				<div className="flex flex-col w-full justify-between items-center">
					<div className="flex flex-col sm:flex-row justify-between sm:gap-4 w-full">
						<Text label={'Name'} placeholder={'Enter your name '} />
						<Text label={'Username'} placeholder={'Enter your username '} />
					</div>
					<div className="flex flex-col sm:flex-row justify-between sm:gap-4  w-full">
						<Date label={'Date of birth'} placeholder={'Enter DOB '} />
						<Text label={'Phone Number'} placeholder={'Enter your Phone '} />
					</div>
					<div className="flex flex-col sm:flex-row justify-between sm:gap-4 w-full">
						<Text label={'City'} placeholder={'Enter City'} />
						<Text label={'Zip Code '} placeholder={'Enter Zipcode'} />
					</div>
					<div className="flex flex-col sm:flex-row justify-between sm:gap-4 w-full">
						<Select
							label={'Gender (kg)'}
							placeholder={' Male'}
							optionArr={['Male ', 'Female', 'Others']}
						/>
						<Number label={'Weight '} placeholder={'Weight (kg)'} />
						<Number label={'Height '} placeholder={'Height (cm)'} />
					</div>
				</div>

				<div>
					{' '}
					<p className="my-2 ">
						Already Registered ?{' '}
						<span
							onClick={changeTab}
							className="text-blue-500 font-semibold cursor-pointer"
						>
							Login
						</span>{' '}
						here .
					</p>
					<button
						className="mt-2 bg-blue-500 text-white w-40 px-3 py-2 font-semibold capitalize border rounded-sm border-blue-500 hover:text-blue-500 hover:bg-white transition-all duration-300 ease-in-out "
						type="submit"
					>
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default UserDataForm;
