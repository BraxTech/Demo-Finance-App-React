import React from 'react';
import SalaryRate from '../SalaryRate';

interface SalaryItem {
	label: string;
	amount: number;
	type: 'earning' | 'deduction';
}

const salaryData: SalaryItem[] = [
	{
		label: 'Salary',
		amount: 24.64,
		type: 'earning',
	},
	{
		label: 'Federal Income Tax',
		amount: 2.34,
		type: 'deduction',
	},
	{
		label: 'State Income Tax',
		amount: 1.23,
		type: 'deduction',
	},
	{
		label: 'Social Security',
		amount: 1.23,
		type: 'deduction',
	},
	{
		label: 'Medicare',
		amount: 1.23,
		type: 'deduction',
	},
	{
		label: 'SDI(State Disability Insurance)',
		amount: 1.23,
		type: 'deduction',
	},
	{
		label: 'FLI (Family Leave Insurance)',
		amount: 1.23,
		type: 'deduction',
	},
];

const SalaryBreakdown = () => {
	return (
		<>
			<div className='border border-black bg-[#1D263B] rounded-lg md:w-[641px] lg:h-[520px] p-4 flex flex-col gap-7 mt-[10px] max-w-full w-full'>
				{salaryData.map((item) => (
					<div
						key={item.label}
						className='flex justify-between'>
						<p className='md:text-[20px] text-slate-300'>{item.label}</p>
						<p className='md:text-[22px] text-yellow-400'>
							${item.amount.toFixed(2)}
						</p>
					</div>
				))}
			</div>
		</>
	);
};

export default SalaryBreakdown;
