import React from 'react';
import Email from './inputs/Email';
import Password from './inputs/Password';
import Text from './inputs/Text';

const Register = ({ changeTab }) => {
	const handleFormSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className=" h-full  ">
			<form
				onSubmit={handleFormSubmit}
				className="w-full h-full flex flex-col   text-xs "
			>
				<div className="flex flex-col justify-between items-center">
					<Text label={'Name'} placeholder={'Enter your name '} />
					<Email />
					<Password label={'Password'} placeholder={'Enter your Password '} />
					<Password
						label={'Confirm Password'}
						placeholder={'Confirm Password '}
					/>
				</div>

				<div>
					{' '}
					<p className="my-2 ">
						Already Registered ?
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
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
