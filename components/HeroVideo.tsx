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
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be deferred until user interaction if audio unmuted
      });
    }
  }, []);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        className="hero__video-local"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
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
