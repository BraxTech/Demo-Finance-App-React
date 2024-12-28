import { jsx as _jsx } from "react/jsx-runtime";
const NavLink = ({ name, active, link }) => {
    return (_jsx("a", { className: 'text-slate-400', href: link, children: name }));
};
export default NavLink;
