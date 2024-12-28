import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import NetPay from '@components/feature/NetPay';
import SalaryBreakdown from '@components/feature/SalaryBreakdown';
import SalaryRate from '@components/feature/SalaryRate';
import IncomeTaxCalculator from '@components/feature/IncomeTaxCalculator';
import TaxSnippet from '@components/common/TaxSnippet';
const IncomeTaxCalculatorPage = () => {
    return (_jsxs("div", { className: 'mt-[30px] m-[auto] flex lg:justify-between lg:flex-row  w-full flex-col items-center jutify-center max-w-[90%]  ', children: [_jsxs("div", { className: 'gap-[25px] flex flex-col max-w-[100%] w-full items-center  lg:max-w-[55%]', children: [_jsxs("div", { className: 'max-w-full flex flex-col', children: [_jsx(SalaryRate, {}), _jsx(SalaryBreakdown, {})] }), _jsx(NetPay, {})] }), _jsxs("div", { className: 'flex flex-col max-w-full w-full gap-[25px] items-center lg:max-w-[40%]', children: [_jsx(IncomeTaxCalculator, {}), _jsx(TaxSnippet, {})] })] }));
};
export default IncomeTaxCalculatorPage;
