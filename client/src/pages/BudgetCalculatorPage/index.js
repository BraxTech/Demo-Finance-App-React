import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BudgetCategory from '@components/feature/BudgetCategory';
import BudgetChart from '@components/feature/BudgetChart';
const Needs = [
    'Housing(Rent/Mortgage)',
    'Utilities',
    'Groceries',
    'Transportation',
    'Health Care',
    'Student Loans',
    'Credit Card Payments',
];
const Wants = ['Dining Out', 'Hobbies', 'Splurges', 'Entertainment'];
const Savings = ['Emergency Fund', 'Investments', 'Retirement'];
const BudgetCalculatorPage = () => {
    return (_jsxs("div", { className: 'flex flex-col w-full gap-[35px]', children: [_jsxs("div", { className: 'w-full bg-gray-700   rounded-xl justify-center  text-center flex flex-col gap-[25px] p-4', children: [_jsx("p", { className: 'text-[45px] text-white', children: "Budget Calculator" }), _jsx("p", { className: 'w-[1150px] text-[25px]  mx-auto', children: "The 50/30/20 approach can be a helpful way to get started with budgeting. It\u2019s a simple rule of thumb that suggests you put up to 50% of your after-tax income toward things you need, 30% toward things you want, and 20% toward savings." }), _jsxs("div", { className: 'flex justify-center gap-[100px] text-center p-6', children: [_jsxs("div", { className: 'w-[300px] text-[25px]', children: [_jsx("p", { children: "50% Needs" }), _jsx("p", { className: 'text-left text-[20px]', children: "Things you must have or can't live without. Examples: housing, groceries, utilities, transportation, child care, debt payments" })] }), _jsxs("div", { className: 'w-[300px] text-[25px]', children: [_jsx("p", { children: "30% Wants" }), _jsx("p", { className: 'text-left text-[20px]', children: "Things you can cut back on or do without. Examples: entertainment, dining out, clothing, splurges" })] }), _jsxs("div", { className: 'w-[300px] text-[18px] text-center', children: [_jsx("p", { className: 'text-[25px]', children: " 20% Savings" }), _jsx("p", { className: 'text-left text-[20px]', children: "Money you save for future goals. Examples: emergency fund, home, vacation, retirement, financial freedom" })] })] }), _jsxs("div", { className: 'flex flex-row   w-[800px] h-[100px] m-auto justify-evenly', children: [_jsxs("div", { className: 'flex flex-col', children: [_jsxs("label", { htmlFor: 'netSalary', className: 'text-[25px]', children: [' ', "Net Salary:"] }), _jsx("input", { className: ' rounded-2xl w-[350px] h-[45px]', type: 'text', name: 'netSalary' })] }), _jsxs("div", { className: 'flex flex-col', children: [_jsx("label", { htmlFor: '', className: 'text-[25px]', children: "Frequency:" }), _jsx("select", { className: 'w-[350px] rounded-2xl h-[45px]' })] })] })] }), _jsxs("div", { className: 'flex flex-row w-full justify-between', children: [_jsxs("div", { className: 'flex flex-col w-[600px] gap-[25px]', children: [_jsx(BudgetCategory, { category: 'Savings', items: Savings }), _jsx(BudgetCategory, { category: 'Needs', items: Needs }), _jsx(BudgetCategory, { category: 'Wants', items: Wants })] }), _jsxs("div", { className: 'bg-slate-900 w-[640px]  rounded-lg flex flex-col justify-between items-center', children: [_jsx("h1", { className: 'text-[40px] text-center text-[white]', children: "Budget Overeview" }), _jsx(BudgetChart, {}), _jsxs("div", { className: 'flex flex-col p-6 gap-[15px] mx-[50px]', children: [_jsxs("div", { className: 'flex justify-between text-[22px] text-green-400  ', children: [_jsx("p", { children: "Total Monthly Earnings" }), _jsx("p", { children: "$15000" })] }), _jsxs("div", { className: 'flex justify-between text-[22px] text-green-400', children: [_jsx("p", { children: "Total Monthly Savings" }), _jsx("p", { children: "$15000" })] }), _jsxs("div", { className: 'flex justify-between gap-[175px] text-[22px] text-green-400', children: [_jsx("p", { children: "Total Monthly Spending" }), _jsx("p", { children: "$15000" })] })] })] })] })] }));
};
export default BudgetCalculatorPage;