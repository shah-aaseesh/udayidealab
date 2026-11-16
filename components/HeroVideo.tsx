"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo({
  src = "/hero.mp4",
  poster = "/work/karkhana-documentary.jpg",
}: {
  src?: string;
  poster?: string;
  videoId?: string;
  start?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => {
      if (reducedMotion.matches) video.pause();
      else void video.play().catch(() => {});
    };
    syncMotion();
    reducedMotion.addEventListener("change", syncMotion);
    return () => reducedMotion.removeEventListener("change", syncMotion);
  }, []);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      void videoRef.current.play().catch(() => {});
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        className="hero__video-local"
        src={src}
        poster={poster}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <button
        type="button"
        className="hero__pause"
        onClick={toggle}
        aria-label={playing ? "Pause background video" : "Play background video"}
      >
        {playing ? "II" : "▶"}
      </button>
    </>
  );
}
