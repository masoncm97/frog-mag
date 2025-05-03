export default function SubmitPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl mb-6">Submit</h1>
      <div className="max-w-2xl">
        <p className="mb-4">
          Frog Mag is always looking for new and exciting textile works to
          feature in our upcoming issues.
        </p>
        <p className="mb-4">
          If you would like to submit your work for consideration, please
          include:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>High-quality images of your work</li>
          <li>A brief description of the piece(s)</li>
          <li>Your artist statement</li>
          <li>Contact information</li>
        </ul>
        <p>Send your submissions to submissions@frogmag.com</p>
      </div>
    </main>
  );
}
