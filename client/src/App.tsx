import React from 'react';
import Navbar from '@components/layout/Navbar';
import './App.css';
import IncomeTaxCalculatorPage from '@pages/IncomeTaxCalculatorPage';
import BudgetCalculatorPage from '@pages/BudgetCalculatorPage';
import PageWrapper from '@components/layout/PageWrapper';
function App() {
	return (
		<div className='App'>
			<Navbar />
			<PageWrapper>
			<BudgetCalculatorPage />
			</PageWrapper>
		</div>
	);
}

export default App;
