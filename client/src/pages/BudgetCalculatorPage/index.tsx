import BudgetCategory from '@components/feature/BudgetCategory';
import React from 'react'
import BudgetChart from '@components/feature/BudgetChart';


const Needs = [ 'Housing(Rent/Mortgage)', 'Utilities', 'Groceries', 'Transportation', 'Health Care', 'Student Loans', 'Credit Card Payemnts']
const Wants = ['Dining Out', 'Hobbies', 'Splurges','Entertainment']
const Savings = ['Emergency Fund', 'Investments', 'Retirement']
const BudgetCalculatorPage = () => {
	return(
		<div className='flex flex-row w-[100%] justify-between'>
		<div className='flex flex-col w-[600px] gap-[25px]'>
		<BudgetCategory category='Savings' items={Savings}/>
		<BudgetCategory category='Needs' items={Needs}/>
		<BudgetCategory category='Wants' items={Wants}/>
		</div>
		<div className='bg-slate-900 w-[640px]  rounded-lg flex flex-col justify-between items-center'>
			<h1 className='text-[40px] text-center text-[white]'>Budget Overeview</h1>
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
	)
};

export default BudgetCalculatorPage;
