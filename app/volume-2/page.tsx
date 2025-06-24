import Image from "next/image";

export default function Volume2Page() {
  return (
    <main className="min-h-screen p-8 lg:ml-48 lg:mt-24 relative overflow-auto" style={{ height: '100vh' }}>
      <div className="fixed inset-0 w-full h-full -z-10 opacity-20">
        <Image
          src="/volume-2-cover.png"
          alt="Volume 2 Cover"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="absolute top-0 left-0 z-10 translate-x-[50vw] sm:translate-x-[40vw] md:translate-x-[70vw] translate-y-32 sm:translate-y-48 md:translate-y-96 scale-50 sm:scale-75 md:scale-100">
        <Image
          src="/yes2.png"
          alt="Animated Dove"
          width={150}
          height={150}
          className="opacity-20"
        />
      </div>
      <h1 className="max-sm:mt-20 text-2xl md:text-4xl mb-4 md:mb-6 font-bold">
        Volume 2
      </h1>
      <div className="max-w-2xl">
        <p className="mb-4 text-sm md:text-base font-medium">
          Volume 2 of Frog Mag was released in 2025.
        </p>
        <div className="mb-4 md:mb-6 font-medium">
          <h2 className="text-xl md:text-2xl mb-2 font-medium">
            Featured Artists and Writers
          </h2>
          <p className="text-sm md:text-base font-medium">
            Lauren Adams, Jane Ingram Allen, Amy, Lovisa Axen, Lucía Cozzi, Chiao, Emma Daley, Josh Dorman, Austin Ellwein, Macaella Gray, Catherine Heard, Clara Cecile Hirsch, Kieran Hodnett, Frances Hoggard, Liv Kelly, Kelly Kirkland, Elisabeth McLaughlin, Amorette Muzingo, Mazlyn Ortiz, Karli Owens, Riley Sanchez, Sierra Schweitzer, Michaela Shuster, Marko Stanišić, Lauren Vaccaro, Dizzy Zaba,
          </p>
        </div>
        <div className="mb-4 md:mb-6 font-medium">
          <h2 className="text-xl md:text-2xl mb-2 font-medium">
            Credits
          </h2>
          <p className="text-sm md:text-base font-medium">
            Ruth Deaton- Creator, Masood Shah-Graphic Design
          </p>
          <p className="text-sm md:text-base font-medium">
            Michael Quint- Literary Editor, Olivia Lynch- Illustrator, Helen Hill- Assistant Editor, Mai Lamb- Paper Technician, Olivia Buck- Archivist, Melise Elliott- Consultant, Mason Mathai- Web Designer
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm md:text-base">
            <a 
              href="https://docs.google.com/forms/d/1rF3oyihxADXk35GTfa_G47QgIii3N0HI7n2LsqAEtpo/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Order Frog Mag 2 here
            </a>
          </p>
          <p className="mb-4 text-sm md:text-base">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScFygqyRQ17Iuum8YSFWtc8pJFVdebuFaruV3dLUKfAJXBzfw/viewform?usp=sharing&ouid=109623407731540164344"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Order Frog Mag 2-Limited Artist Edition here
            </a>
          </p>
        </div>
      </div>
    </main>
  );
} 