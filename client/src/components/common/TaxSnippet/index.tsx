import React from 'react';

const TaxSnippet = () => {
	return (
		<div className='text-left gap-[5px] flex flex-col bg-white border rounded-3xl p-8 md:w-[614px] items-center text-center max-w-full border border-red'>
			<p className='text-[22px]'>Total Tax Paid</p>
			<p className='text-[22px]'>$16,587</p>
			<p className='md:max-w-[425px]  max-w-full text-[18px] '>
				Did you know your employer also pays tax on your salary? It cost the
				employer $4,628 to pay you $55,000. In other words, everytime you spend
				$10 of your hard earned money. $3.02 goes to the government.
			</p>
		</div>
	);
};

export default TaxSnippet;
