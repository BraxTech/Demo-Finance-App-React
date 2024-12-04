import React from 'react';
import Navbar from '@components/layout/Navbar';
import './App.css';
import IncomeTaxCalculatorPage from '@pages/IncomeTaxCalculatorPage';
import BudgetCalculatorPage from '@pages/BudgetCalculatorPage';
import PageWrapper from '@components/layout/PageWrapper';
import { o } from 'react-router/dist/development/fog-of-war-DU_DzpDb';
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
