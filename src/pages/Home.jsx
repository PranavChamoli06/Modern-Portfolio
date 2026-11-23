import { useEffect, useRef, useState } from "react";

import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
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

  useEffect(() => {
    // Disable page scrolling while the opening animation is active.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Start the simulated loading progress.
    const progress = setProgress(setLoadingPercent);
    progressRef.current = progress;

    let finishTimer;
    let fallbackTimer;

    const finishLoading = () => {
      progress.loaded();
    };

    /*
     * In a Vite/React SPA, the browser's load event may already have fired
     * before this component mounts.
     *
     * If everything is already loaded, allow the loader to run briefly
     * before completing it.
     */
    if (document.readyState === "complete") {
      finishTimer = setTimeout(() => {
        finishLoading();
      }, 1200);
    } else {
      window.addEventListener("load", finishLoading, {
        once: true,
      });

      // Safety fallback so the loader can never remain stuck.
      fallbackTimer = setTimeout(() => {
        finishLoading();
      }, 4000);
    }

    return () => {
      window.removeEventListener("load", finishLoading);

      if (finishTimer) {
        clearTimeout(finishTimer);
      }

      if (fallbackTimer) {
        clearTimeout(fallbackTimer);
      }

      progress.clear();

      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleLoadingComplete = () => {
    setShowLoader(false);

    // Re-enable scrolling once the intro has finished.
    document.body.style.overflow = "";
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

      <div
          className={`min-h-screen bg-background text-foreground overflow-x-hidden portfolio-content ${
          !showLoader ? "portfolio-visible" : ""
          }`}
      >
        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <HeroSection isVisible={!showLoader} />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};
