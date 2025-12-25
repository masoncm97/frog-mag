import Image from "next/image";
import Link from "next/link";

export default function Volume3Page() {
  return (
    <main className="min-h-screen p-8 lg:ml-48 lg:mt-24 relative overflow-auto" style={{ height: '100vh' }}>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] -z-10">
        <Image
          src="/newnewnew.png"
          alt="Doily"
          fill
          className="object-contain opacity-20"
          priority
        />
      </div>
      <Link className="bodoni-smallcaps text-xl md:text-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800 underline" href="/submit">Submit</Link>
    </main>
  );
} 