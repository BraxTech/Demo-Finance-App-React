import React from 'react';

const NetPay = () => {
	return (
		<div className='w-[641px] bg-[white] rounded-lg'>
			<div className='flex justify-between p-4 '>
				<p className='text-[22px] font-semibold'>Total Tax</p>
				<p className='text-[22px] font-semibold'>$5.75</p>
			</div>
			<div className='flex justify-between p-4 '>
				<p className='text-[22px] font-semibold text-orange-600'>Net Pay</p>
				<p className='text-[22px] font-semibold text-orange-600'>$20.69</p>
			</div>
			<hr className='mx-6 my-2' />
			<div className='flex justify-between px-6 py-3'>
				<p>Marginal Tax Rate</p>
				<p>36.0%</p>
			</div>
			<div className='flex justify-between px-6 py-3'>
				<p>Marginal Tax Rate</p>
				<p>36.0%</p>
			</div>
		</div>
	);
};

export default NetPay;
