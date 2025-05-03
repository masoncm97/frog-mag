import "./globals.css";
import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frog Mag",
  description: "An independently-produced textile publication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
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
        <Navigation />
        {children}
        <footer className="fixed bottom-2 md:bottom-4 w-full text-center">
          <p className="modernoir text-[10px] md:text-xs">© frog mag 2025</p>
        </footer>
      </body>
    </html>
  );
}
