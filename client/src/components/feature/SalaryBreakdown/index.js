import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const salaryData = [
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
    return (_jsx(_Fragment, { children: _jsx("div", { className: 'border border-black bg-[#1D263B] rounded-lg md:w-[641px] lg:h-[520px] p-4 flex flex-col gap-7 mt-[10px] max-w-full w-full', children: salaryData.map((item) => (_jsxs("div", { className: 'flex justify-between', children: [_jsx("p", { className: 'md:text-[20px] text-slate-300', children: item.label }), _jsxs("p", { className: 'md:text-[22px] text-yellow-400', children: ["$", item.amount.toFixed(2)] })] }, item.label))) }) }));
};
export default SalaryBreakdown;
