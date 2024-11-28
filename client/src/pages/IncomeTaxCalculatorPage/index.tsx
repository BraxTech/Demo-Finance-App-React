import NetPay from '@components/feature/NetPay';
import SalaryBreakdown from '@components/feature/SalaryBreakdown';
import SalaryRate from '@components/feature/SalaryRate';
import IncomeTaxCalculator from '@components/feature/IncomeTaxCalculator';
import React from 'react';
import TaxSnippet from '@components/common/TaxSnippet';

const IncomeTaxCalculatorPage = () => {
	return (
		<div className='max-w-[1280px]  mt-[30px] m-[auto] flex justify-between'>
			<div className='gap-[25px] flex flex-col'>
				<SalaryRate />
				<SalaryBreakdown />
				<NetPay />
			</div>
			<div className='flex flex-col  gap-[25px]'>
				<IncomeTaxCalculator />
				<TaxSnippet />
			</div>
		</div>
	);
};

export default IncomeTaxCalculatorPage;
