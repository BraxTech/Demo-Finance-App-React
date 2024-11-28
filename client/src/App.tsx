import React from 'react';
import Navbar from '@components/layout/Navbar';
import SalaryRate from '@components/feature/SalaryRate';
import IncomeTaxCalculator from '@components/feature/IncomeTaxCalculator';
import './App.css';
import SalaryBreakdown from '@components/feature/SalaryBreakdown';
import NetPay from '@components/feature/NetPay';
import IncomeTaxCalculatorPage from '@pages/IncomeTaxCalculatorPage';
function App() {
	return (
		<div className='App'>
			<Navbar />
			<IncomeTaxCalculatorPage />
		</div>
	);
}

export default App;
