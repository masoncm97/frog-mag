import Image from "next/image";

export default function Home() {
  return (
    <main className="fixed inset-0 flex items-center justify-center bg-white p-4">
      <div className="w-[90vw] h-[60vh] md:w-[80vw] md:h-[80vh] max-w-4xl relative">
        <Image
          className="w-full h-full object-contain"
          src="/logo.png"
          alt="Frog Mag Home"
          width={500}
          height={500}
        />
        <div className="absolute top-0 left-0 z-10 translate-x-[50vw]">
          <Image
            src="/5.gif"
            alt="Animated Dove"
            width={300}
            height={300}
            className="opacity-80"
          />
        </div>
        {/* <div className="absolute top-0 left-0 z-10 translate-y-64 translate-x-[30vw]">
          <Image
            src="/5.gif"
            alt="Animated Dove"
            width={200}
            height={200}
            className="opacity-80"
          />
        </div> */}
        <div className="absolute top-0 left-0 z-10 translate-x-[50vw] translate-y-64">
          <Image
            src="/10.gif"
            alt="Animated Dove"
            width={150}
            height={150}
            className="opacity-80"
          />
        </div>
        <div className="absolute top-0 left-0 z-10 translate-x-16 translate-y-96">
          <Image
            src="/12.png"
            alt="Animated Dove"
            width={200}
            height={200}
            className="opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-baseline ml-48 justify-center -translate-x-64 -translate-y-80">
          <h1 className="text-7xl font-bold text-blue-500 font-sans transform">
            Welcome to
          </h1>
          <h1 className="text-7xl font-bold text-blue-500 font-sans transform">
            frog-mag.com
          </h1>
        </div>
      </div>
    </main>
  );
}
