"use client"
import { CSSProperties, useState } from 'react';

interface Slide {
  url: string;
  text: string;
  title: string; 
}

interface ImageSliderProps {
  slides: Slide[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderTitleStyles: CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const sliderSubtitleStyles: CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '60px',
  };

  const sliderStyles: CSSProperties = {
    height: '60vh',
    position: 'relative',
  };

  const slideStyles: CSSProperties = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyles: CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '45px',
    color: '#f09d0e',
    zIndex: 1,
    cursor: 'pointer',
  };

  const rightArrowStyles: CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '45px',
    color: '#f09d0e',
    zIndex: 1,
    cursor: 'pointer',
  };

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  const dotStyles = {
    margin: '0 3px',
    cursor: 'pointer',
    fontSize: '20px',
    color: '#f09d0e',
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={sliderStyles}>
      <h1 style={sliderTitleStyles}>Our Services</h1>
      <h3 style={sliderSubtitleStyles}>{slides[currentIndex].text}</h3>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        &larr;
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        &rarr;
      </div>
      <div style={slideStyles}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>
            ⬤
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
