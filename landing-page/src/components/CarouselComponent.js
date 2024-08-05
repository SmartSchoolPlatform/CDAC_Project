import React, { useState, useEffect } from 'react';
import HomeRenderGif1 from './gifComponents/HomeRenderGif1';
import HomeRenderGif2 from './gifComponents/HomeRenderGif2';
import HomeRenderGif3 from './gifComponents/HomeRenderGif3';

const CarouselComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 10000); // Change slides every 3 seconds (adjust as needed)

        return () => {
            clearInterval(interval);
        };
    }, [activeIndex]);

    const handlePrevSlide = () => {
        const newIndex = (activeIndex === 0) ? 2 : activeIndex - 1;
        setActiveIndex(newIndex);
    };

    const handleNextSlide = () => {
        const newIndex = (activeIndex === 2) ? 0 : activeIndex + 1;
        setActiveIndex(newIndex);
    };

    return (
        <div id="Home" className="carousel slide bg-light border-radius" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
                    <HomeRenderGif1></HomeRenderGif1>
                </div>
                <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
                    <HomeRenderGif2></HomeRenderGif2>
                </div>
                <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
                    <HomeRenderGif3></HomeRenderGif3>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" onClick={handlePrevSlide}>
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" onClick={handleNextSlide} >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default CarouselComponent;
