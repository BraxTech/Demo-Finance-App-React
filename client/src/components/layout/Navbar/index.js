import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import NavLink from '@components/common/NavLink';
function Navbar() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'p-4 rounded-lg bg-[#F49D37] w-full  flex justify-between', children: [_jsx("p", { children: "Logo" }), _jsxs("div", { className: 'flex justify-between w-full', children: [_jsxs("ul", { className: 'flex gap-[30px] ', children: [_jsx(NavLink, { name: 'Home', active: false, link: '' }), _jsx(NavLink, { name: 'Resources', active: false, link: '' })] }), _jsxs("div", { className: 'flex gap-[10px]', children: [_jsx("div", { className: 'border rounded-3xl', children: "ico" }), _jsx("div", { className: 'border rounded-3xl', children: "ico" })] })] })] }) }));
}
export default Navbar;
