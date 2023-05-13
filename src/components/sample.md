import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function CustomCursor() {
  const [showCursor, setShowCursor] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${event.clientX}px`;
      cursorRef.current.style.top = `${event.clientY}px`;
    }
  };

  const handleMouseEnter = () => {
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCursor(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {showCursor ? null : <div className="custom-cursor" ref={cursorRef}></div>}
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {/* Add your app content here */}
        <h1>Hello World</h1>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <CustomCursor />
    </div>
  );
}

export default App;
