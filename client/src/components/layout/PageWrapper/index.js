import { jsx as _jsx } from "react/jsx-runtime";
const PageWrapper = ({ children }) => {
    return (_jsx("div", { className: 'max-w-[1280px]  mt-[30px] m-[auto] flex justify-between ', children: children }));
};
export default PageWrapper;
