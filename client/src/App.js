import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from '@components/layout/Navbar';
import './App.css';
import PageWrapper from '@components/layout/PageWrapper';
import AppRouter from './routes/AppRouter';
function App() {
    return (_jsxs("div", { className: 'App', children: [_jsx(Navbar, {}), _jsx(PageWrapper, { children: _jsx(AppRouter, {}) })] }));
}
export default App;
