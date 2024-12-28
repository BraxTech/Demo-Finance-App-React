import BudgetCalculatorPage from '../pages/BudgetCalculatorPage';
import IncomeTaxCalculatorPage from '@pages/IncomeTaxCalculatorPage';

const routes = [
	// Calculator Routes
	{ path: '/budget-calculator', element: <BudgetCalculatorPage /> },
	{ path: '/income-tax-calculator', element: <IncomeTaxCalculatorPage /> },
];
export default routes;
