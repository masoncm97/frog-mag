"use client";

import { useEffect, useRef } from "react";

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const animate = () => {
      if (!containerRef.current || !contentRef.current) return;

      const currentPosition = parseFloat(
        contentRef.current.style.transform
          .replace("translateX(", "")
          .replace("px)", "") || "0"
      );
      const contentWidth = contentRef.current.offsetWidth;

      if (currentPosition <= -contentWidth / 2) {
        // Reset position when half the content has scrolled
        contentRef.current.style.transform = `translateX(0px)`;
      } else {
        // Move content left by 1px
        contentRef.current.style.transform = `translateX(${currentPosition - 1}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
  // Duplicate text to ensure smooth looping
  const repeatedText = `${text} ${text}`;

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: "50%",
        left: 0,
        right: 0,
        transform: "translateY(-50%)",
        zIndex: 100,
        overflow: "hidden",
      }}
    >
      <div
        ref={contentRef}
        className="bodoni-smallcaps"
        style={{
          transform: "translateX(0)",
          whiteSpace: "nowrap",
          fontSize: "1rem",
          fontWeight: "bold",
          color: "black",
        }}
      >
        {repeatedText}
      </div>
    </div>
  );
}
