import React from 'react';
import Email from './inputs/Email';
import Password from './inputs/Password';

const Login = ({ changeTab }) => {
	const handleFormSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className=" h-full  ">
			<form
				onSubmit={handleFormSubmit}
				className="w-full h-full flex flex-col justify-between  text-xs "
			>
				<div className="flex flex-col justify-between items-center">
					<Email />
					<Password label={'Password'} placeholder={'Enter your Password '} />
				</div>

				<div>
					{' '}
					<p className="my-2 ">
						New User ?{' '}
						<span
							onClick={changeTab}
							className="text-blue-500 font-semibold cursor-pointer"
						>
							Signup
						</span>{' '}
						instead .
					</p>
					<div className="flex gap-2">
						<button
							className="mt-2 bg-blue-500 text-white w-40 px-3 py-2 font-semibold capitalize border rounded-sm border-blue-500 hover:text-blue-500 hover:bg-white transition-all duration-300 ease-in-out "
							type="submit"
						>
							Login as user
						</button>
						<button
							className="mt-2 bg-blue-500 text-white w-40 px-3 py-2 font-semibold capitalize border rounded-sm border-blue-500 hover:text-blue-500 hover:bg-white transition-all duration-300 ease-in-out "
							type="submit"
						>
							Login as guest
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
