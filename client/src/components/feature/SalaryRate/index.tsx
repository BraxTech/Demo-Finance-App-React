import React from 'react';
import RateButton from '@components/feature/RateButton';
let salaryFrequence = [
	'Annualy',
	'Monthly',
	'Biweekly',
	'Weekly',
	'Daily',
	'Hourly',
];
function SalaryRate() {
	return (
		<div className='bg-white border border-black mt-2 rounded-xl w-[641px] h-[64px]   flex justify-center gap-[2px]'>
			{salaryFrequence.map((frequency) => (
				<RateButton
					key={frequency}
					label={frequency}
				/>
			))}
		</div>
	);
}

export default SalaryRate;
