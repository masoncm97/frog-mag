import Image from "next/image";

export default function Home() {
  return (
    <main className="fixed inset-0 flex items-center justify-center bg-white p-4">
      <div className="w-[90vw] h-[60vh] md:w-[80vw] md:h-[80vh] max-w-4xl relative mt-12 sm:mt-0">
        <Image
          className="w-full h-full object-contain"
          src="/logo.png"
          alt="Frog Mag Home"
          width={500}
          height={500}
        />
        <div className="absolute top-0 left-0 z-10 translate-x-[25vw] sm:translate-x-[30vw] md:translate-x-[50vw] scale-50 sm:scale-75 md:scale-100">
          <Image
            src="/5.gif"
            alt="Animated Dove"
            width={300}
            height={300}
            className="opacity-80"
          />
        </div>
        <div className="absolute top-0 left-0 z-10 translate-x-[35vw] sm:translate-x-[40vw] md:translate-x-[50vw] translate-y-32 sm:translate-y-48 md:translate-y-64 scale-50 sm:scale-75 md:scale-100">
          <Image
            src="/10.gif"
            alt="Animated Dove"
            width={150}
            height={150}
            className="opacity-80"
          />
        </div>
        <div className="absolute top-0 left-0 z-10 translate-x-4 sm:translate-x-8 md:translate-x-16 translate-y-48 sm:translate-y-64 md:translate-y-96 scale-50 sm:scale-75 md:scale-100">
          <Image
            src="/12.png"
            alt="Animated Dove"
            width={200}
            height={200}
            className="opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-baseline justify-center ml-4 sm:ml-8 md:ml-48 -translate-x-4 sm:-translate-x-8 md:-translate-x-64 -translate-y-48 sm:-translate-y-32 md:-translate-y-80">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-blue-500 font-sans transform">
            Welcome to
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-blue-500 font-sans transform">
            frog-mag.com
          </h1>
        </div>
      </div>
    </main>
  );
}
