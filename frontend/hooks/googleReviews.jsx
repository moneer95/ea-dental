import { useEffect, useRef } from 'react';

const GoogleReviewsComponent = () => {
  const divRef = useRef(null);

  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');

    // Set the source to the external script URL
    script.src = "https://widget.trustmary.com/x8qqv3v7I";
    
    // Ensure the script is loaded asynchronously
    script.async = true;

    // Append the script to the specific div (using ref)
    if (divRef.current) {
      divRef.current.appendChild(script);
    }

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      if (divRef.current) {
        divRef.current.removeChild(script);
      }
    };
  }, []); // Empty dependency array ensures the script runs only once

  return (
    <div>
      {/* This is the div where the script will be appended */}
      <div ref={divRef} className="testimonial-slider"></div>
    </div>
  );
};

export default GoogleReviewsComponent;
