import React from 'react'

interface SalaryItem {
  label: string;
  amount: number;
  type: 'earning' | 'deduction';
}

const salaryData: SalaryItem[] = [
  {
    label: 'Salary',
    amount: 24.64,
    type: 'earning'
  },
  {
    label: 'Federal Income Tax',
    amount: 2.34,
    type: 'deduction'
  },
  {
    label: 'State Income Tax',
    amount: 1.23,
    type: 'deduction'
  },
  {
    label: 'Social Security',
    amount: 1.23,
    type: 'deduction'
  },
  {
    label: 'Medicare',
    amount: 1.23,
    type: 'deduction'
  },
  {
    label: 'SDI(State Disability Insurance)',
    amount: 1.23,
    type: 'deduction'
  },
  {
    label: 'FLI (Family Leave Insurance)',
    amount: 1.23,
    type: 'deduction'
  },
]

const SalaryBreakdown = () => {
  return (
    <div className='border border-black bg-[#1D263B] rounded-lg w-[641px] h-[455px] p-4 flex flex-col gap-7'>
      {salaryData.map((item) => (
        <div key={item.label} className='flex justify-between'>
          <p className='text-[20px] text-slate-300'>{item.label}</p>
          <p className='text-[22px]'>${item.amount.toFixed(2)}</p>
        </div>
      ))}
    </div>
  )
}

export default SalaryBreakdown