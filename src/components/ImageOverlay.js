import React, { useRef, useEffect, useState } from "react";

const ImageOverlay = ({ backgroundImage, children }) => {
  const [containerStyles, setContainerStyles] = useState({});
  const componentRef = useRef();

  useEffect(() => {
    if (componentRef.current) {
      const container = componentRef.current;
      const parent = container.parentElement;
      const containerRect = container.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      const newStyles = {
        position: "absolute",
        top: `${containerRect.top - parentRect.top}px`,
        left: `${containerRect.left - parentRect.left}px`,
        width: `${containerRect.width}px`,
        height: `${containerRect.height}px`,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        opacity: "0.25",
      };
      setContainerStyles(newStyles);
    }
  }, [componentRef, backgroundImage]);

  return (
    <div style={{ position: "relative" }}>
      <div ref={componentRef} style={{ position: "absolute" }}>
        {children}
      </div>
      <div style={containerStyles}></div>
    </div>
  );
};

export default ImageOverlay;
