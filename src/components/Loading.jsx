
import { useEffect, useRef, useState } from "react";
import "./styles/Loading.css";

export const Loading = ({ percent, onComplete }) => {
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  const completedRef = useRef(false);

  const progressPercent = Math.min(
    Math.max(percent, 0),
    100
  );

  // Loading -> Welcome -> Exit
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

  // Complete screen transition
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

  return (
    <div
      className={`loading-screen ${
        clicked ? "loading-screen-exit" : ""
      }`}
      onAnimationEnd={handleExitComplete}
    >
      {/* Background atmosphere */}
      <div className="loading-atmosphere" />

      {/* Top Branding */}
      <header className="loading-header">
        <a href="#hero" className="loader-title">
          pranav<span>.</span>dev
        </a>

        <div className="loading-header-right">
          <span>PORTFOLIO</span>
          <span className="loading-header-dot" />
          <span>2026</span>
        </div>
      </header>

      {/* Main Introduction */}
      <main className="loading-main">
        <div
          className={`loading-intro ${
            loaded ? "loading-intro-complete" : ""
          }`}
        >
          {/* Eyebrow */}
          <div className="loading-eyebrow">
            <span className="loading-eyebrow-line" />
            <span>HELLO, I'M</span>
          </div>

          {/* Main Identity */}
          <h1 className="loading-name">
            PRANAV
            <br />
            CHAMOLI
          </h1>

          {/* Professional Identity */}
          <p className="loading-description">
            Developer. Creator. Problem Solver.
          </p>
        </div>

        {/* Minimal Progress Section */}
        <div className="loading-progress-section">
          <div className="loading-progress-info">
            <span className="loading-progress-label">
              {loaded
                ? "WELCOME TO MY PORTFOLIO"
                : "INITIALIZING EXPERIENCE"}
            </span>

            <span className="loading-percentage">
              {progressPercent}
              <span>%</span>
            </span>
          </div>

          {/* White Progress Line + Pikachu */}
          <div
            className="loading-progress-track"
            role="progressbar"
            aria-label="Portfolio loading progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progressPercent}
          >
            {/* White Progress Fill */}
            <div
              className="loading-progress-fill"
              style={{
                width: `${progressPercent}%`,
              }}
            />

            {/* Animated Pikachu */}
            <div
              className={`loading-runner ${
                progressPercent >= 100 ? "loading-runner-complete" : ""
              }`}
              style={{
                left: `${Math.min(progressPercent, 95)}%`,
              }}
              aria-hidden="true"
            >
              <img
                src="/pikachu.gif"
                alt=""
                draggable="false"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Branding */}
      <footer className="loading-footer">
        <span>SOFTWARE DEVELOPER</span>

        <span className="loading-footer-center">
          <span />
          BUILDING DIGITAL EXPERIENCES
        </span>

        <span>PRANAV CHAMOLI © 2026</span>
      </footer>
    </div>
  );
};


// =========================================
// SIMULATED LOADING PROGRESS
// =========================================

export const setProgress = (setLoading) => {
  let percent = 0;
  let interval = null;
  let stopped = false;

  const stopInterval = () => {
    if (interval !== null) {
      clearInterval(interval);
      interval = null;
    }
  };

  // Stop progress
  const stop = () => {
    stopped = true;
    stopInterval();
  };

  // Complete immediately
  const clear = () => {
    if (stopped) return;

    stopInterval();
    percent = 100;
    setLoading(100);
  };

  // Gradually complete loading
  const loaded = () => {
    stopInterval();

    return new Promise((resolve) => {
      if (stopped) {
        resolve(percent);
        return;
      }

      interval = setInterval(() => {
        if (stopped) {
          stopInterval();
          resolve(percent);
          return;
        }

        if (percent < 100) {
          percent += 1;
          setLoading(percent);
        }

        if (percent >= 100) {
          percent = 100;
          stopInterval();
          resolve(percent);
        }
      }, 20);
    });
  };

  // Initial simulated loading progress
  interval = setInterval(() => {
    if (stopped) {
      stopInterval();
      return;
    }

    if (percent < 50) {
      const increase = Math.round(Math.random() * 5);

      percent = Math.min(percent + increase, 50);
      setLoading(percent);
    } else {
      stopInterval();

      interval = setInterval(() => {
        if (stopped) {
          stopInterval();
          return;
        }

        if (percent < 91) {
          percent += Math.round(Math.random());
          setLoading(percent);
        } else {
          stopInterval();
        }
      }, 300);
    }
  }, 100);

  return {
    loaded,
    clear,
    stop,
    getPercent: () => percent,
  };
};
