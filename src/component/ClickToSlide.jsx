import '../cssStyling/clicktoslide.css' // You can define your CSS styles for the component
import React, { useRef } from 'react';

const ClickToSlide = ({ children }) => {
  const contentRef = useRef(null);

  const scrollToNext = () => {
    const content = contentRef.current;
    if (content) {
    //   const scrollWidth = content.scrollWidth;
      const clientWidth = content.clientWidth;
      content.scrollLeft += clientWidth;
    }
  };

  return (
    <div className="click-to-slide">
      <div className="click-to-slide-content" ref={contentRef}>
        {children}
      </div>
      <button className="next-button" onClick={scrollToNext}>
        Next
      </button>
    </div>
  );
};

export default ClickToSlide;

