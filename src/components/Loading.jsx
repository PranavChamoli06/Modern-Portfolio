
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import "./styles/Loading.css";

export const Loading = ({ percent, onComplete }) => {
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  const completedRef = useRef(false);

  // Loading -> Welcome -> Expanding capsule
  useEffect(() => {
    if (percent < 100) return;

    const welcomeTimer = setTimeout(() => {
      setLoaded(true);
    }, 600);

    const exitTimer = setTimeout(() => {
      setClicked(true);
    }, 1800);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(exitTimer);
    };
  }, [percent]);

  // Start the Hero only after the screen exit animation finishes.
  const handleExitComplete = (event) => {
    if (event.target !== event.currentTarget) return;
    if (completedRef.current) return;

    if (
      event.animationName === "loaderScreenReveal" ||
      event.animationName === "loaderSimpleExit"
    ) {
      completedRef.current = true;
      onComplete?.();
    }
  };

  // Mouse-follow glow
  const handleMouseMove = (event) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <>
      {/* Loading Header */}
      <div className={`loading-header ${clicked ? "loader-out" : ""}`}>
        <a href="#hero" className="loader-title">
          pranav.dev
        </a>

        <div className="loaderGame">
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index} />
              ))}
            </div>

            <div className="loaderGame-ball" />
          </div>
        </div>
      </div>

      {/* Main Loading Screen */}
      <div
        className={`loading-screen ${
          clicked ? "loading-screen-exit" : ""
        }`}
        onAnimationEnd={handleExitComplete}
      >
        {/* Background Marquee */}
        <div className="loading-marquee">
          <Marquee speed={70} autoFill>
            <span>Software Developer</span>
            <span>Creative Coder</span>
          </Marquee>
        </div>

        {/* Expanding Capsule */}
        <div
          className={`loading-wrap ${
            clicked ? "loading-clicked" : ""
          }`}
          onMouseMove={handleMouseMove}
        >
          <div className="loading-hover" />

          <div
            className={`loading-button ${
              loaded ? "loading-complete" : ""
            }`}
          >
            {/* Loading Percentage */}
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading
                  <span>{Math.min(percent, 100)}%</span>
                </div>
              </div>

              <div className="loading-box" />
            </div>

            {/* Welcome Message */}
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Simulated loading progress
export const setProgress = (setLoading) => {
  let percent = 0;
  let interval;

  interval = setInterval(() => {
    if (percent <= 50) {
      const randomIncrease = Math.round(Math.random() * 5);

      percent = Math.min(percent + randomIncrease, 100);
      setLoading(percent);
    } else {
      clearInterval(interval);

      interval = setInterval(() => {
        percent += Math.round(Math.random());

        if (percent > 91) {
          clearInterval(interval);
          return;
        }

        setLoading(percent);
      }, 300);
    }
  }, 100);

  const clear = () => {
    clearInterval(interval);
    percent = 100;
    setLoading(100);
  };

  const loaded = () => {
    return new Promise((resolve) => {
      clearInterval(interval);

      interval = setInterval(() => {
        if (percent < 100) {
          percent += 1;
          setLoading(percent);
        } else {
          clearInterval(interval);
          resolve(percent);
        }
      }, 20);
    });
  };

  return {
    loaded,
    clear,
    getPercent: () => percent,
  };
};
