import React, { useState, useRef } from 'react';
import RateButton from '@components/feature/RateButton';
let salaryFrequence = [
	'Annualy',
	'Monthly',
	'Biweekly',
	'Weekly',
	'Daily',
	'Hourly',
];
function SalaryRate() {
	const [selectedButton, setSelectedButton] = useState<string | null>(null);
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	// Add these new states for touch handling
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);

	// Minimum swipe distance (in px) to trigger scroll
	const minSwipeDistance = 50;

	const scroll = (direction: 'left' | 'right') => {
		if (scrollContainerRef.current) {
			const scrollAmount = 145; // Width of one button
			const newPosition =
				scrollContainerRef.current.scrollLeft +
				(direction === 'left' ? -scrollAmount : scrollAmount);
			scrollContainerRef.current.scrollTo({
				left: newPosition,
				behavior: 'smooth',
			});
		}
	};

	// Touch handling states and functions
	const onTouchStart = (e: React.TouchEvent) => {
		setTouchEnd(null);
		setTouchStart(e.targetTouches[0].clientX);
	};

	const onTouchMove = (e: React.TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const onTouchEnd = () => {
		if (!touchStart || !touchEnd) return;

		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > minSwipeDistance;
		const isRightSwipe = distance < -minSwipeDistance;

		if (isLeftSwipe) {
			scroll('right');
		}
		if (isRightSwipe) {
			scroll('left');
		}
	};

	return (
		<div className='relative bg-white rounded-xl md:w-[641px] w-full h-[64px] max-w-[100%] '>
			<div
				ref={scrollContainerRef}
				className='  h-full flex items-center overflow-x-auto md:overflow-x-hidden scrollbar-hide scroll-smooth px-6'
				onTouchStart={onTouchStart}
				onTouchMove={onTouchMove}
				onTouchEnd={onTouchEnd}>
				{salaryFrequence.map((frequency) => (
					<RateButton
						key={frequency}
						label={frequency}
						isSelected={selectedButton === frequency}
						onClick={() => setSelectedButton(frequency)}
					/>
				))}
			</div>
		</div>
	);
}

export default SalaryRate;
