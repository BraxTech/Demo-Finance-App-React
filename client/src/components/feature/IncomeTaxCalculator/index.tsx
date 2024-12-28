import React, { useState } from 'react';

const states = [
	'Alabama',
	'Alaska',
	'Arizona',
	'Arkansas',
	'California',
	'Colorado',
	'Connecticut',
	'Delaware',
	'Florida',
	'Georgia',
	'Hawaii',
	'Idaho',
	'Illinois',
	'Indiana',
	'Iowa',
	'Kansas',
	'Kentucky',
	'Louisiana',
	'Maine',
	'Maryland',
	'Massachusetts',
	'Michigan',
	'Minnesota',
	'Mississippi',
	'Missouri',
	'Montana',
	'Nebraska',
	'Nevada',
	'New Hampshire',
	'New Jersey',
	'New Mexico',
	'New York',
	'North Carolina',
	'North Dakota',
	'Ohio',
	'Oklahoma',
	'Oregon',
	'Pennsylvania',
	'Rhode Island',
	'South Carolina',
	'South Dakota',
	'Tennessee',
	'Texas',
	'Utah',
	'Vermont',
	'Virginia',
	'Washington',
	'West Virginia',
	'Wisconsin',
	'Wyoming',
];

const IncomeTaxCalculator = () => {
	const [grossIncome, setGrossIncome] = useState('');
	const [state, setState] = useState('');

	return (
		<div className='bg-[#1D263B]  md:w-[641px] mt-2 rounded-3xl align-center justify-start text-left flex flex-col p-5 gap-[25px] mt-[25px] w-full md max-w-full lg:mt-0'>
			<h1 className='text-[35px] text-center text-white mt-[10px]'>
				Income Tax Calculator
			</h1>
			<div className='mx-[auto] text-left'>
				<p className='text-[19px] text-white'>Enter Your Gross Income:</p>
				<input
					type='text'
					className='sm:w-[300px] h-[55px] rounded-lg text-[20px] font-semibold p-2 '
					value={`$${grossIncome}`}
					onChange={(e) => {
						setGrossIncome(e.target.value.replace('$', ''));
						console.log(grossIncome);
					}}
				/>
			</div>
			<div className='mx-[auto] text-left'>
				<p className='text-[19px] text-white'>Per:</p>
				<select className='sm:w-[300px] w-[250px] h-[55px] rounded-lg text-[20px] font-semibold ' />
			</div>
			<div className='mx-auto text-left'>
				<p className='text-[19px] text-white'>Where do you work?</p>
				<select
					className='w-[250px] sm:w-[300px]  h-[55px] rounded-lg text-[20px] font-semibold p-3'
					onChange={(e) => setState(e.target.value)}
					value={state}>
					<option value=''>Select a State</option>
					{states.map((state) => (
						<option
							key={state}
							value={state}>
							{state}
						</option>
					))}
				</select>
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
