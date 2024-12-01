import React from 'react';

interface BudgetCategoryProps {
	category: string;
	items: string[];
}

const BudgetCategory: React.FC<BudgetCategoryProps> = ({ category, items }) => {
	return (
		<div className='flex flex-col  bg-slate-700 rounded-lg p-4'>
			<p className='text-[24px] text-[white] mb-[20px]'>{category}</p>
			<div className='flex gap-[30px] flex-wrap'>
			{items.map((item) => (
				<input type="text"  placeholder={item} className='w-[45%] h-[45px] border rounded-lg p-2'/>
			))}
			</div>
		</div>
	);
};

export default BudgetCategory;
