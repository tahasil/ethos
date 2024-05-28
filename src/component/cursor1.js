import React, { useEffect, useCallback, useRef, useState } from "react";
import "../app/master.css"; // Import CSS file for cursor styles

function AnimatedCursor({
  color = "220, 90, 90",
  outerAlpha = 0.4,
  innerSize = 8,
  outerSize = 8,
  outerScale = 5,
  innerScale = 0.7,
}) {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const onMouseMove = useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
  }, []);

  useEffect(() => {
    const onMouseMoveHandler = (event) => onMouseMove(event);

    document.addEventListener("mousemove", onMouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", onMouseMoveHandler);
    };
  }, [onMouseMove]);

  useEffect(() => {
    // Update cursor position
    if (cursorInnerRef.current && cursorOuterRef.current) {
      cursorInnerRef.current.style.transform = `translate3d(${coords.x}px, ${coords.y}px, 0) scale(${innerScale})`;
      cursorOuterRef.current.style.transform = `translate3d(${coords.x}px, ${coords.y}px, 0) scale(${outerScale})`;
    }
  }, [coords, innerScale, outerScale]);

  useEffect(() => {
    // Update cursor visibility
    if (cursorInnerRef.current && cursorOuterRef.current) {
      if (isVisible) {
        cursorInnerRef.current.style.opacity = 1;
        cursorOuterRef.current.style.opacity = 1;
      } else {
        cursorInnerRef.current.style.opacity = 0;
        cursorOuterRef.current.style.opacity = 0;
      }
    }
  }, [isVisible]);

  useEffect(() => {
    // Update cursor activity
    if (cursorInnerRef.current && cursorOuterRef.current) {
      if (isActive) {
        cursorInnerRef.current.classList.add("active");
        cursorOuterRef.current.classList.add("active");
      } else {
        cursorInnerRef.current.classList.remove("active");
        cursorOuterRef.current.classList.remove("active");
      }
    }
  }, [isActive]);

  return (
    <React.Fragment>
      <div ref={cursorOuterRef} className="cursor-outer" />
      <div ref={cursorInnerRef} className="cursor-inner" />
    </React.Fragment>
  );
}

export default AnimatedCursor;
