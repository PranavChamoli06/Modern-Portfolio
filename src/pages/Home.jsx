
import { useEffect, useRef, useState } from "react";

import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

import { Loading, setProgress } from "@/components/Loading";

export const Home = () => {
  const [loadingPercent, setLoadingPercent] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  const progressRef = useRef(null);
  const completedRef = useRef(false);
  const bodyOverflowRef = useRef("");

  useEffect(() => {
    let finishTimer;
    let fallbackTimer;
    let isFinished = false;

    // Preserve the original body overflow.
    bodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Start loading progress.
    const progress = setProgress(setLoadingPercent);
    progressRef.current = progress;

    const finishLoading = () => {
      if (isFinished) return;

      isFinished = true;

      clearTimeout(finishTimer);
      clearTimeout(fallbackTimer);

      window.removeEventListener("load", finishLoading);

      progress.loaded();
    };

    if (document.readyState === "complete") {
      finishTimer = setTimeout(finishLoading, 1200);
    } else {
      window.addEventListener("load", finishLoading, {
        once: true,
      });

      // Fallback prevents the loader from getting stuck.
      fallbackTimer = setTimeout(finishLoading, 4000);
    }

    return () => {
      clearTimeout(finishTimer);
      clearTimeout(fallbackTimer);

      window.removeEventListener("load", finishLoading);

      // Stop progress without forcing it to 100%.
      progress.stop();

      if (progressRef.current === progress) {
        progressRef.current = null;
      }

      document.body.style.overflow = bodyOverflowRef.current;
    };
  }, []);

  const handleLoadingComplete = () => {
    if (completedRef.current) return;

    completedRef.current = true;

    setShowLoader(false);

    // Restore the original scroll behavior.
    document.body.style.overflow = bodyOverflowRef.current;
  };

  return (
    <>
      {/* Opening Loading Animation */}
      {showLoader && (
        <Loading
          percent={loadingPercent}
          onComplete={handleLoadingComplete}
        />
      )}

      {/* Portfolio Content */}
      <div
        className={`portfolio-content min-h-screen overflow-x-hidden bg-background text-foreground ${
          !showLoader ? "portfolio-visible" : ""
        }`}
      >
        <Navbar />

        <main>
          <HeroSection isVisible={!showLoader} />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
};
