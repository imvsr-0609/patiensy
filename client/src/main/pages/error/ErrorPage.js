import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../../assets/img/404.png';

const ErrorPage = () => {
	return (
		<div className="grid place-items-center">
			<img src={errorImage} alt="404" />

			<Link to={'/'} className="p-3 rounded-md bg-blue-500 text-white ">
				Back to Home
			</Link>
		</div>
	);
};

export default ErrorPage;
