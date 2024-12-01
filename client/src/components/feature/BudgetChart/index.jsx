import React from 'react'

import{PieChart, Pie,Cell, ResponsiveContainer, Legend} from 'recharts'
const BudgetChart = () => {
  const data = [
    { name: 'Savings', value: 400 },
    { name: 'Needs', value: 300 },
    { name: 'Wants', value: 300 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (
    <div className='bg-slate-800 w-[500px] h-[500px]'>
      <ResponsiveContainer width="100%" height="100%">
         <PieChart>
            <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={175}
            fill='#8884d8'
            dataKey='value'
            label={renderCustomizedLabel}
            legendType=''
            >
   {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
            <Legend wrapperStyle={{marginBottom:15}}/>
         </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BudgetChart
