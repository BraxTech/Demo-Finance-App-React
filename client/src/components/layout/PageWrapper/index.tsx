import React, { ReactNode } from 'react';
interface PageWrapperProps {
	children: ReactNode;
}

const PageWrapper = ({ children }) => {
	return (
		<div className='max-w-[1280px]  mt-[30px] m-[auto] flex justify-between '>
			{children}
		</div>
	);
};

export default PageWrapper;
