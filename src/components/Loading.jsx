import { useEffect, useRef, useState } from "react";
import "./styles/Loading.css";

export const Loading = ({ percent, onComplete }) => {
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  const progressRef = useRef(null);

  // Connect React progress to the Sakuga custom element.
  useEffect(() => {
    let cancelled = false;

    customElements.whenDefined("sakuga-progress").then(() => {
      if (cancelled || !progressRef.current) return;

      const value = Math.min(
        Math.max(Number(percent) || 0, 0),
        100
      );

      progressRef.current.set(value / 100);
    });

    return () => {
      cancelled = true;
    };
  }, [percent]);

  // Preserve the existing welcome and exit sequence.
  useEffect(() => {
    if (percent < 100) return;

    const welcomeTimer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    const exitTimer = setTimeout(() => {
      setClicked(true);
    }, 900);

    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 1850);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [percent, onComplete]);

  const handleMouseMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();

    target.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`
    );

    target.style.setProperty(
      "--mouse-y",
      `${e.clientY - rect.top}px`
    );
  };

  return (
    <>
      {/* Existing portfolio header */}
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

      {/* Main loading screen */}
      <div
        className={`loading-screen ${
          clicked ? "loading-screen-exit" : ""
        }`}
      >
        <div
          className={`loading-wrap loading-sakuga-wrap ${
            clicked ? "loading-clicked" : ""
          }`}
          onMouseMove={handleMouseMove}
        >
          <div className="loading-hover" />

          {/* Sakuga animated progress */}
          <sakuga-progress
            ref={progressRef}
            class="loading-sakuga-progress"
            label="Loading portfolio"
          />
          
          {/* Completion message */}
          <div
            className={`loading-content2 ${
              loaded ? "loading-welcome-visible" : ""
            }`}
          >
            <span>Welcome</span>
          </div>
        </div>
      </div>
    </>
  );
};

// Existing simulated loading progress system.
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
