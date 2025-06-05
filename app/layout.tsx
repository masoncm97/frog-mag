import "./globals.css";
import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import Header from "./components/Header";

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
      <body className="min-h-screen overflow-hidden">
        <Header />
        <Navigation />
        <div className="fixed inset-0 overflow-hidden">{children}</div>
        <footer className="fixed bottom-2 md:bottom-4 w-full text-center">
          <p className="modernoir text-[10px] md:text-xs">© frog mag 2025</p>
        </footer>
      </body>
    </html>
  );
}
