import Image from "next/image";

export default function SubmitPage() {
  return (
    <main className="min-h-screen p-8 lg:ml-48 lg:mt-24">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] -z-10">
        <Image
          src="/newnewnew.png"
          alt="Frog Mag Home"
          fill
          className="object-contain opacity-20"
          priority
        />
      </div>
      <h1 className="text-2xl md:text-4xl mb-4 md:mb-6 font-bold">Submit</h1>
      <div className="max-w-2xl">
        <p className="mb-4 text-sm md:text-base font-medium">
          Frog Mag is always looking for new and exciting textile works to
          feature in our upcoming issues.
        </p>
        <p className="mb-4 text-sm md:text-base font-medium">
          If you would like to submit your work for consideration, please
          include:
        </p>
        <ul className="list-disc ml-6 mb-4 text-sm md:text-base">
          <li>High-quality images of your work</li>
          <li>A brief description of the piece(s)</li>
          <li>Your artist statement</li>
          <li>Contact information</li>
        </ul>
        <p className="text-sm md:text-base font-medium">
          Send your submissions to submissions@frogmag.com
        </p>
      </div>
    </main>
  );
}
