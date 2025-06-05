import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 lg:ml-48 lg:mt-24 relative">
      <div className="fixed inset-0 w-full h-full -z-10 opacity-20">
        <Image
          src="/doillie.png"
          alt="Decorative Doillie Background"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="absolute top-0 left-0 z-10 translate-x-[10vw] sm:translate-x-[40vw] md:translate-x-[10vw] translate-y-[50vh] sm:translate-y-48 md:translate-y-[50vh] scale-50 sm:scale-75 md:scale-100">
        <Image
          src="/snip.gif"
          alt="Animated Dove"
          width={500}
          height={150}
          className="opacity-80"
        />
      </div>

      {/* Content */}
      <h1 className="max-sm:mt-20 text-2xl md:text-4xl mb-4 md:mb-6">About</h1>
      <div className="max-w-2xl">
        <p className="mb-4 text-sm md:text-base">
          Frog Mag is an independently-produced textile publication created by
          Ruth Deaton in 2024. Exclusively in print--it only exists in your
          hands.
        </p>
        <p className="text-sm md:text-base">
          Frog Mag is interested in curating works concealed in facebook groups,
          knitting circles, social media stories etc. and platforming them
          through thoughtful and experimental design.
        </p>
      </div>
    </main>
  );
}
