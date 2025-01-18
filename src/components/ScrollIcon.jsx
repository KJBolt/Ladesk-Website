import React, { useState, useEffect } from 'react';
import { BsTriangle } from "react-icons/bs";

function ScrollIcon() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const midPoint = document.body.scrollHeight / 2;

            if (scrollPosition >= midPoint) {
            setIsVisible(true);
            } else {
            setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        const startPosition = window.scrollY;
        const duration = 1000; // Total duration in milliseconds
        const startTime = performance.now();

        const easeOutQuad = (t) => t * (2 - t); // Easing function: starts slow, ends fast

        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1); // Cap progress at 1
            const easeProgress = easeOutQuad(progress);

            window.scrollTo(0, startPosition * (1 - easeProgress));

            if (progress < 1) {
            requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };
    return (
        isVisible && (
            <div
                className='fixed bottom-10 right-10 p-3 hover:scale-100 scale-90 transition-all ease-out flex justify-center cursor-pointer'
                onClick={scrollToTop}
            >
                <BsTriangle className='text-5xl text-white hover:scale-100 scale-90 transition-all ease-out' />
            </div>
        )
    )
}

export default ScrollIcon