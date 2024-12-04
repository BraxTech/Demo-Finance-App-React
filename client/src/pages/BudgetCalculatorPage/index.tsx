import BudgetCategory from '@components/feature/BudgetCategory';
import React from 'react';
import BudgetChart from '@components/feature/BudgetChart';

const Needs = [
	'Housing(Rent/Mortgage)',
	'Utilities',
	'Groceries',
	'Transportation',
	'Health Care',
	'Student Loans',
	'Credit Card Payemnts',
];
const Wants = ['Dining Out', 'Hobbies', 'Splurges', 'Entertainment'];
const Savings = ['Emergency Fund', 'Investments', 'Retirement'];
const BudgetCalculatorPage = () => {
	return (
		<div className='flex flex-col w-full gap-[35px]'>
			<div className='w-full bg-gray-700   rounded-xl justify-center  text-center flex flex-col gap-[25px] p-4'>
				<p className='text-[45px] text-white'>Budget Calculator</p>
				<p className='w-[1150px] text-[25px]  mx-auto'>
					The 50/30/20 approach can be a helpful way to get started with
					budgeting. It’s a simple rule of thumb that suggests you put up to 50%
					of your after-tax income toward things you need, 30% toward things you
					want, and 20% toward savings.
				</p>
				<div className='flex justify-center gap-[100px] text-center p-6'>
					<div className='w-[300px] text-[25px]'>
						<p>50% Needs</p>
						<p className='text-left text-[20px]'>
							Things you must have or can't live without. Examples: housing,
							groceries, utilities, transportation, child care, debt payments
						</p>
					</div>
					<div className='w-[300px] text-[25px]'>
						<p>30% Wants</p>
						<p className='text-left text-[20px]'>
							Things you can cut back on or do without. Examples: entertainment,
							dining out, clothing, splurges
						</p>
					</div>
					<div className='w-[300px] text-[18px] text-center'>
						<p className='text-[25px]'> 20% Savings</p>
						<p className='text-left text-[20px]'>
							Money you save for future goals. Examples: emergency fund, home,
							vacation, retirement, financial freedom
						</p>
					</div>
				</div>
				<div className='flex flex-row   w-[800px] h-[100px] m-auto justify-evenly'>
					<div className='flex flex-col'>
						<label
							htmlFor='netSalary'
							className='text-[25px]'>
							{' '}
							Net Salary:
						</label>
						<input
							className=' rounded-2xl w-[350px] h-[45px]'
							type='text'
							name='netSalary'
						/>
					</div>
					<div className='flex flex-col'>
						<label
							htmlFor=''
							className='text-[25px]'>
							Frequency:
						</label>
						<select className='w-[350px] rounded-2xl h-[45px]' />
					</div>
				</div>
			</div>
			<div className='flex flex-row w-full justify-between'>
				<div className='flex flex-col w-[600px] gap-[25px]'>
					<BudgetCategory
						category='Savings'
						items={Savings}
					/>
					<BudgetCategory
						category='Needs'
						items={Needs}
					/>
					<BudgetCategory
						category='Wants'
						items={Wants}
					/>
				</div>
				<div className='bg-slate-900 w-[640px]  rounded-lg flex flex-col justify-between items-center'>
					<h1 className='text-[40px] text-center text-[white]'>
						Budget Overeview
					</h1>
					<BudgetChart />
					<div className='flex flex-col p-6 gap-[15px] mx-[50px]'>
						<div className='flex justify-between text-[22px] text-green-400  '>
							<p>Total Monthly Earnings</p>
							<p>$15000</p>
						</div>
						<div className='flex justify-between text-[22px] text-green-400'>
							<p>Total Monthly Savings</p>
							<p>$15000</p>
						</div>
						<div className='flex justify-between gap-[175px] text-[22px] text-green-400'>
							<p>Total Monthly Spending</p>
							<p>$15000</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BudgetCalculatorPage;
