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
