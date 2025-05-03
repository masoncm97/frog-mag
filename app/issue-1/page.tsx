export default function Issue1Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl mb-6">Issue 1</h1>
      <div className="max-w-2xl">
        <p className="mb-4">
          Issue 1 of Frog Mag was released in 2024. Only 100 copies were ever
          made and they will never be reprinted.
        </p>
        <div className="mb-6">
          <h2 className="text-2xl mb-2">Featured Artists</h2>
          <p>
            Itala Aguilera, Heather Bartow, Harper Biewen, Julia Brandao, Kai
            Cho, Renata Daina, Duffy, Chelsea Ennen, Greta Gibson, Olivia
            Gossett Cooper, Anne Haddox, Morgan Hale, Vanessa Hodl, Orla
            Keating-Beer, Ashley May, Temishi Onnekikami, Fernando Osuna, Karli
            Owens, Sofia Salcedo, Sara Shaw, Benedicte Thoraval, Christopher
            Tsang-Grosse.
          </p>
        </div>
        <div>
          <p className="mb-4">
            If you would like to receive a miniature (1"x1.4") copy of issue 1,
            please fill out the form below and venmo @frogmag $5. Magnifying
            glass recommended, but not included.
          </p>
          {/* Add form component here when ready */}
        </div>
      </div>
    </main>
  );
}
