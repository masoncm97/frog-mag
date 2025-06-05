import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="h-full p-8 lg:pl-48 lg:pt-24 relative">
      <div className="fixed inset-0 w-full h-full -z-10 opacity-20">
        <Image
          src="/doillie.png"
          alt="Decorative Doillie Background"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="h-full">
        <h1 className="text-2xl md:text-4xl mb-4 md:mb-6">About</h1>
        <div className="max-w-2xl">
          <p className="mb-4 text-sm md:text-base">
            Frog Mag is an independently-produced textile publication created by
            Ruth Deaton in 2024. Exclusively in print--it only exists in your
            hands.
          </p>
          <p className="text-sm md:text-base">
            Frog Mag is interested in curating works concealed in facebook
            groups, knitting circles, social media stories etc. and platforming
            them through thoughtful and experimental design.
          </p>
        </div>
      </div>
    </main>
  );
}
