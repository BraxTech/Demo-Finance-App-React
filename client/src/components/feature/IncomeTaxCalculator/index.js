import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
];
const IncomeTaxCalculator = () => {
    const [grossIncome, setGrossIncome] = useState('');
    const [state, setState] = useState('');
    return (_jsxs("div", { className: 'bg-[#1D263B]  md:w-[641px] mt-2 rounded-3xl align-center justify-start text-left flex flex-col p-5 gap-[25px] mt-[25px] w-full md max-w-full lg:mt-0', children: [_jsx("h1", { className: 'text-[35px] text-center text-white mt-[10px]', children: "Income Tax Calculator" }), _jsxs("div", { className: 'mx-[auto] text-left', children: [_jsx("p", { className: 'text-[19px] text-white', children: "Enter Your Gross Income:" }), _jsx("input", { type: 'text', className: 'sm:w-[300px] h-[55px] rounded-lg text-[20px] font-semibold p-2 ', value: `$${grossIncome}`, onChange: (e) => {
                            setGrossIncome(e.target.value.replace('$', ''));
                            console.log(grossIncome);
                        } })] }), _jsxs("div", { className: 'mx-[auto] text-left', children: [_jsx("p", { className: 'text-[19px] text-white', children: "Per:" }), _jsx("select", { className: 'sm:w-[300px] w-[250px] h-[55px] rounded-lg text-[20px] font-semibold ' })] }), _jsxs("div", { className: 'mx-auto text-left', children: [_jsx("p", { className: 'text-[19px] text-white', children: "Where do you work?" }), _jsxs("select", { className: 'w-[250px] sm:w-[300px]  h-[55px] rounded-lg text-[20px] font-semibold p-3', onChange: (e) => setState(e.target.value), value: state, children: [_jsx("option", { value: '', children: "Select a State" }), states.map((state) => (_jsx("option", { value: state, children: state }, state)))] })] }), _jsxs("div", { children: [_jsx("hr", { className: 'my-[10px] ' }), _jsx("div", { className: 'gap-[40px] flex ', children: _jsx("button", { className: 'bg-orange-600 h-[60px] w-[250px] rounded-3xl mx-[auto] my-[10px] text-[25px]', children: "Calculate" }) })] })] }));
};
export default IncomeTaxCalculator;
