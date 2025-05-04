import Image from "next/image";
import FiberScene from "./components/FiberScene";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-white p-4 mt-16 md:mt-0 md:min-h-screen">
      <FiberScene />
      {/* <div className="relative w-[90vw] h-[60vh] md:w-[80vw] md:h-[80vh] max-w-4xl">
        <Image
          src="/home.jpeg"
          alt="Frog Mag Home"
          fill
          className="object-contain"
          priority
        />
      </div> */}
    </main>
  );
}
