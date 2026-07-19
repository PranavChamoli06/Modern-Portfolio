import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) return;

    let animationId;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate3d(${e.clientX}px, ${e.clientY}px, 0)
          translate(-50%, -50%)
        `;
      }
    };

    const handleMouseOver = (e) => {
      const interactive = e.target.closest(
        "a, button, input, textarea, select, [role='button'], [data-cursor-hover]"
      );

      setIsHovering(Boolean(interactive));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const animateRing = () => {
      const speed = 0.15;

      ring.current.x += (mouse.current.x - ring.current.x) * speed;
      ring.current.y += (mouse.current.y - ring.current.y) * speed;

      if (ringRef.current) {
        ringRef.current.style.transform = `
          translate3d(${ring.current.x}px, ${ring.current.y}px, 0)
          translate(-50%, -50%)
        `;
      }

      animationId = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    animationId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);

      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />

      <div
        ref={ringRef}
        className={`custom-cursor-ring ${
          isHovering ? "custom-cursor-hover" : ""
        }`}
        style={{
          opacity: isVisible ? undefined : 0,
        }}
      />
    </>
  );
};