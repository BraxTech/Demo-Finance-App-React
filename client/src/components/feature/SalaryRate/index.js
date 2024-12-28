import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useRef } from 'react';
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
    const [selectedButton, setSelectedButton] = useState(null);
    const scrollContainerRef = useRef(null);
    // Add these new states for touch handling
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    // Minimum swipe distance (in px) to trigger scroll
    const minSwipeDistance = 50;
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 145; // Width of one button
            const newPosition = scrollContainerRef.current.scrollLeft +
                (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newPosition,
                behavior: 'smooth',
            });
        }
    };
    // Touch handling states and functions
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };
    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd)
            return;
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
    return (_jsx("div", { className: 'relative bg-white rounded-xl md:w-[641px] w-full h-[64px] max-w-[100%] ', children: _jsx("div", { ref: scrollContainerRef, className: '  h-full flex items-center overflow-x-auto md:overflow-x-hidden scrollbar-hide scroll-smooth px-6', onTouchStart: onTouchStart, onTouchMove: onTouchMove, onTouchEnd: onTouchEnd, children: salaryFrequence.map((frequency) => (_jsx(RateButton, { label: frequency, isSelected: selectedButton === frequency, onClick: () => setSelectedButton(frequency) }, frequency))) }) }));
}
export default SalaryRate;
