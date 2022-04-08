import React from 'react';
import { AiFillFileAdd } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

const Documents = () => {
	return (
		<div className="flex flex-col  shadow-custom lg:col-span-2 max-w-5xl border-2 border-white bg-white rounded-lg min-h-40 p-4 lg:px-6">
			<div className="flex justify-between">
				<h1 className="font-400">
					<b>Files / Documents</b>
				</h1>
				<button className="flex gap-1 text-blue-500 text-lg">
					<AiFillFileAdd />
					<p className="text-sm font-semibold text-gray-500">Add files</p>
				</button>
			</div>
			<div className="py-4 font-semibold text-gray-500  h-full w-full max-h-80 overflow-y-scroll">
				<div className="flex items-center shadow-md p-4 gap-2">
					<CgFileDocument />
					<p className="text-sm">Check up result.pdf</p>
					<HiOutlineDocumentDownload className="ml-auto" />
				</div>
				<div className="flex items-center shadow-md p-4 gap-2">
					<CgFileDocument />
					<p className="text-sm">Check up result.pdf</p>
					<HiOutlineDocumentDownload className="ml-auto" />
				</div>
				<div className="flex items-center shadow-md p-4 gap-2">
					<CgFileDocument />
					<p className="text-sm">Check up result.pdf</p>
					<HiOutlineDocumentDownload className="ml-auto" />
				</div>
				<div className="flex items-center shadow-md p-4 gap-2">
					<CgFileDocument />
					<p className="text-sm">Check up result.pdf</p>
					<HiOutlineDocumentDownload className="ml-auto" />
				</div>
				<div className="flex items-center shadow-md p-4 gap-2">
					<CgFileDocument />
					<p className="text-sm">Check up result.pdf</p>
					<HiOutlineDocumentDownload className="ml-auto" />
				</div>
				<div className="flex items-center shadow-md p-4 gap-2">
					<CgFileDocument />
					<p className="text-sm">Check up result.pdf</p>
					<HiOutlineDocumentDownload className="ml-auto" />
				</div>
				<div className="flex items-center shadow-md p-4 gap-2">
					<CgFileDocument />
					<p className="text-sm">Check up result.pdf</p>
					<HiOutlineDocumentDownload className="ml-auto" />
				</div>
			</div>
		</div>
	);
};

export default Documents;
