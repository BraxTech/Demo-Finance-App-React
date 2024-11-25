import React from 'react';
import RateButton from '@components/RateButton'
let salaryFrequence = ['Annualy', 'Monthly', 'Biweekly', 'Weekly','Daily', 'Hourly']
function SalaryRate() {
	return (
		<div className='bg-white border border-gray-400 my-2 rounded-xl w-[901px] h-[64px] mx-[auto]  flex justify-center gap-[2px]'>
			{salaryFrequence.map((frequency) => (
				<RateButton key={frequency} label={frequency} />
			))}
		</div>
	);
}

export default SalaryRate;
