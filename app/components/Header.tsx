"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollableContainer = document.getElementById("scrollable-container");
    if (!scrollableContainer) return;

    const handleScroll = () => {
      setIsScrolled(scrollableContainer.scrollTop > 0);
    };

    // Check initial scroll position
    handleScroll();

    scrollableContainer.addEventListener("scroll", handleScroll);
    return () => scrollableContainer.removeEventListener("scroll", handleScroll);
  }, []);

  if (isHomePage) {
    return null;
  }

  return (
    <header
      className={`max-sm:mt-3 text-center pt-10 md:pt-8 relative z-10 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-sm" : ""
      }`}
    >
      <Link
        href="/"
        className="inline-block hover:opacity-70 transition-opacity"
      >
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-normal bodoni-smallcaps">
          frog mag
        </h1>
      </Link>
    </header>
  );
}
