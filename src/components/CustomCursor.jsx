import { useEffect, useRef } from "react";
import gsap from "gsap";

export const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches ||
      navigator.maxTouchPoints > 0;

    if (isTouchDevice) return;

    let hover = false;
    let animationFrameId;

    const mousePos = {
      x: -100,
      y: -100,
    };

    const cursorPos = {
      x: -100,
      y: -100,
    };

    /* -----------------------------
       Track mouse position
    ----------------------------- */

    const handleMouseMove = (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    document.addEventListener(
      "mousemove",
      handleMouseMove
    );

    /* -----------------------------
       Smooth cursor movement
    ----------------------------- */

    const animateCursor = () => {
      if (!hover) {
        const delay = 6;

        cursorPos.x +=
          (mousePos.x - cursorPos.x) / delay;

        cursorPos.y +=
          (mousePos.y - cursorPos.y) / delay;

        gsap.set(cursor, {
          x: cursorPos.x,
          y: cursorPos.y,
        });
      }

      animationFrameId =
        requestAnimationFrame(animateCursor);
    };

    animationFrameId =
      requestAnimationFrame(animateCursor);

    /* -----------------------------
       data-cursor interactions
    ----------------------------- */

    const cursorElements =
      document.querySelectorAll("[data-cursor]");

    const listeners = [];

    cursorElements.forEach((element) => {
      const handleMouseOver = (e) => {
        const target = e.currentTarget;

        const rect =
          target.getBoundingClientRect();

        /*
         * Cursor adapts to icon/social containers
         */
        if (element.dataset.cursor === "icons") {
          cursor.classList.add("cursor-icons");

          cursor.style.setProperty(
            "--cursorH",
            `${rect.height}px`
          );

          gsap.to(cursor, {
            x: rect.left,
            y: rect.top,
            duration: 0.25,
            ease: "power2.out",
          });

          hover = true;
        }

        /*
         * Hide cursor effect
         */
        if (
          element.dataset.cursor === "disable"
        ) {
          cursor.classList.add(
            "cursor-disable"
          );
        }
      };

      const handleMouseOut = () => {
        cursor.classList.remove(
          "cursor-disable",
          "cursor-icons"
        );

        /*
         * Synchronize cursor position before
         * returning control to animation loop.
         */
        cursorPos.x = mousePos.x;
        cursorPos.y = mousePos.y;

        hover = false;
      };

      element.addEventListener(
        "mouseover",
        handleMouseOver
      );

      element.addEventListener(
        "mouseout",
        handleMouseOut
      );

      listeners.push({
        element,
        handleMouseOver,
        handleMouseOut,
      });
    });

    /* -----------------------------
       Cleanup
    ----------------------------- */

    return () => {
      document.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(animationFrameId);

      listeners.forEach(
        ({
          element,
          handleMouseOver,
          handleMouseOut,
        }) => {
          element.removeEventListener(
            "mouseover",
            handleMouseOver
          );

          element.removeEventListener(
            "mouseout",
            handleMouseOut
          );
        }
      );

      gsap.killTweensOf(cursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor-main"
      aria-hidden="true"
    />
  );
};