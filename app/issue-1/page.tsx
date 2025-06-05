import Image from "next/image";

export default function Issue1Page() {
  return (
    <main className="min-h-screen p-8 lg:ml-48 lg:mt-24 relative">
      <div className="fixed inset-0 w-full h-full -z-10 opacity-20">
        <Image
          src="/frog_01.png"
          alt="Frog"
          fill
          className="object-contain"
          priority
        />
      </div>
      <h1 className="text-2xl md:text-4xl mb-4 md:mb-6 font-bold">Issue 1</h1>
      <div className="max-w-2xl">
        <p className="mb-4 text-sm md:text-base font-medium">
          Issue 1 of Frog Mag was released in 2024. Only 100 copies were ever
          made and they will never be reprinted.
        </p>
        <div className="mb-4 md:mb-6 font-medium">
          <h2 className="text-xl md:text-2xl mb-2 font-medium">
            Featured Artists
          </h2>
          <p className="text-sm md:text-base font-medium">
            Itala Aguilera, Heather Bartow, Harper Biewen, Julia Brandao, Kai
            Cho, Renata Daina, Duffy, Chelsea Ennen, Greta Gibson, Olivia
            Gossett Cooper, Anne Haddox, Morgan Hale, Vanessa Hodl, Orla
            Keating-Beer, Ashley May, Temishi Onnekikami, Fernando Osuna, Karli
            Owens, Sofia Salcedo, Sara Shaw, Benedicte Thoraval, Christopher
            Tsang-Grosse.
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm md:text-base">
            If you would like to receive a miniature (1&quot;x1.4&quot;) copy of
            issue 1, please fill out the form below and venmo @frogmag $5.
            Magnifying glass recommended, but not included.
          </p>
          {/* Add form component here when ready */}
        </div>
      </div>
    </main>
  );
}
