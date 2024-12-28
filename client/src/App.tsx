import React from 'react';
import Navbar from '@components/layout/Navbar';
import './App.css';
import IncomeTaxCalculatorPage from '@pages/IncomeTaxCalculatorPage';
import BudgetCalculatorPage from '@pages/BudgetCalculatorPage';
import PageWrapper from '@components/layout/PageWrapper';
import AppRouter from './routes/AppRouter';
function App() {
	return (
		<div className='App'>
			<Navbar />
			<PageWrapper>
				<AppRouter />
			</PageWrapper>
		</div>
	);
}

export default App;
