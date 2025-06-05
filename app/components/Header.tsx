"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return null;
  }

  return (
    <header className="text-center pt-10 md:pt-8 relative z-10">
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
