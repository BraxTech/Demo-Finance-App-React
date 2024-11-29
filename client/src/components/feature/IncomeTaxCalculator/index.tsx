import React from 'react';

const IncomeTaxCalculator = () => {
	return (
		<div className='bg-[#1D263B] h-[550px] w-[425px] mt-2 rounded-3xl align-center justify-strt text-left flex flex-col p-5 gap-[25px]'>
			<h1 className='text-[35px] text-center text-white mt-[10px]'>
				Income Tax Calculator
			</h1>
			<div className='mx-[auto] text-center'>
				<p className='text-[19px] text-white'>Enter Your Gross Income:</p>
				<input
					type='text'
					className='w-[350px] h-[55px] rounded-lg text-[20px] font-semibold '
				/>
			</div>
			<div className='mx-[auto] text-center'>
				<p className='text-[19px] text-white'>Enter Your Gross Income:</p>
				<select className='w-[350px] h-[55px] rounded-lg text-[20px] font-semibold ' />
			</div>
			<div className='mx-auto text-center'>
				<p className='text-[19px] text-white'>Enter Your Gross Income:</p>
				<select className='w-[350px] h-[55px] rounded-lg text-[20px] font-semibold ' />
			</div>

			<div>
				<hr className='my-[10px] ' />
				<div className='gap-[40px] flex '>
					<button className='bg-orange-600 h-[60px] w-[250px] rounded-3xl mx-[auto] my-[10px] text-[25px]'>
						Calculate
					</button>
				</div>
			</div>
		</div>
	);
};

export default IncomeTaxCalculator;
