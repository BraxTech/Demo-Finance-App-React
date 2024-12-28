import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const BudgetCategory = ({ category, items }) => {
    return (_jsxs("div", { className: 'flex flex-col  bg-slate-700 rounded-lg p-8', children: [_jsx("p", { className: 'text-[24px] text-[white] mb-[20px]', children: category }), _jsx("div", { className: 'flex gap-[30px] flex-wrap', children: items.map((item) => (_jsx("input", { type: 'text', placeholder: item, className: 'w-[45%] h-[45px] border rounded-lg p-2' }))) })] }));
};
export default BudgetCategory;
