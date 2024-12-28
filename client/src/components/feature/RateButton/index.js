import { jsx as _jsx } from "react/jsx-runtime";
const RateButton = ({ label, isSelected, onClick }) => {
    return (_jsx("div", { className: `flex-shrink-0 w-[105px] md:w-[100px] h-[60px] my-auto rounded-lg flex justify-center items-center text-[16px] md:text-[18px] cursor-pointer 
				${isSelected ? 'bg-red-500 text-white' : 'text-gray-400 hover:bg-gray-200'}`, onClick: onClick, children: _jsx("p", { children: label }) }));
};
export default RateButton;
