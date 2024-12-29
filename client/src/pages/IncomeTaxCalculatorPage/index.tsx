import NetPay from '@components/feature/NetPay';
import SalaryBreakdown from '@components/feature/SalaryBreakdown';
import SalaryRate from '@components/feature/SalaryRate';
import IncomeTaxCalculator from '@components/feature/IncomeTaxCalculator';
import React from 'react';
import TaxSnippet from '@components/common/TaxSnippet';

const IncomeTaxCalculatorPage = () => {
	return (
		<div className='mt-[30px] m-[auto] flex lg:justify-between lg:flex-row  w-full flex-col items-center jutify-center max-w-[90%]  '>
			<div className='gap-[25px] flex flex-col max-w-[100%] w-full items-center  lg:max-w-[55%]'>
				<div className='max-w-full flex flex-col'>
					<SalaryRate />
					<SalaryBreakdown />
				</div>
				<NetPay />
			</div>
			<div className='flex flex-col max-w-full w-full gap-[25px] items-center lg:max-w-[40%]'>
				<IncomeTaxCalculator />
				<TaxSnippet />
			</div>
		</div>
	);
};

export default IncomeTaxCalculatorPage;
