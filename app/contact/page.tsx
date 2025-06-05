import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      {/* Centered Image */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] -z-10">
        <Image
          src="/home.jpeg"
          alt="Frog Mag Home"
          fill
          className="object-contain opacity-60"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-sm:mt-20 relative p-8 lg:ml-48 lg:mt-24">
        <h1 className="text-2xl md:text-4xl mb-4 md:mb-6 text-black font-bold">
          Contact
        </h1>
        <div className="max-w-2xl">
          <p className="mb-4 text-sm md:text-base text-black font-medium">
            For inquiries, collaborations, or questions about Frog Mag, please
            reach out through:
          </p>
          <p className="mb-2 text-sm md:text-base text-black font-medium">
            Email: frogmagworldwide@gmail.com
          </p>
          <p className="mb-8 text-sm md:text-base text-black font-medium">
            Instagram: @frogmagworldwide
          </p>
        </div>
      </div>
    </main>
  );
}
