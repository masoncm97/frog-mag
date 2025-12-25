import Image from "next/image";

export default function SubmitVolume3Page() {
  return (
    <main className="min-h-screen p-8 lg:ml-48 lg:mt-24">
      {/* <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] -z-10">
        <Image
          src="/newnewnew.png"
          alt="Doily"
          fill
          className="object-contain opacity-20"
          priority
        />
      </div> */}
      <div className="fixed top-[15%] left-[10%] -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] -z-10 rotate-3">
        <Image
          src="/submit_1.png"
          alt="Submit 1"
          fill
          className="object-contain opacity-20"
          priority
        />
      </div>
      <div className="fixed top-[25%] right-[15%] translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] -z-10 -rotate-2">
        <Image
          src="/submit_2.png"
          alt="Submit 2"
          fill
          className="object-contain opacity-20"
          priority
        />
      </div>
      <div className="fixed bottom-[20%] left-[20%] -translate-x-1/2 translate-y-1/2 w-[50vw] h-[50vh] -z-10 rotate-[-4deg]">
        <Image
          src="/submit_3.png"
          alt="Submit 3"
          fill
          className="object-contain opacity-20"
          priority
        />
      </div>
      <div className="fixed bottom-[30%] right-[10%] translate-x-1/2 translate-y-1/2 w-[50vw] h-[50vh] -z-10 rotate-1">
        <Image
          src="/submit_4.png"
          alt="Submit 4"
          fill
          className="object-contain opacity-20"
          priority
        />
      </div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-1 w-[85vw] md:w-[95vw] max-w-5xl md:max-w-7xl h-[65vh] md:h-[80vh] max-h-[800px] md:max-h-[1200px] mt-12 md:mt-14">
        <Image
          src="/writing_call_3.png"
          alt="Writing call for submissions"
          fill
          className="object-contain"
          priority
        />
      </div>
    </main>
  );
}
