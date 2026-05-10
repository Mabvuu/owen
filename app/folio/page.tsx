import Link from "next/link";

const interests = [
  "Residential",
  "Commercial",
  "Cultural",
  "Urban",
  "Interior",
  "Full Studio Folio",
];

export default function FolioPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="px-6 py-8 md:px-12">
        <header className="flex items-center justify-between border-b border-black pb-6">
          <Link href="/" className="text-2xl font-semibold tracking-tight">
            Survedge
          </Link>

          <nav className="hidden gap-8 text-sm uppercase tracking-wide md:flex">
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/index">Index</Link>
            <Link href="/themes">Themes</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <section className="grid gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em]">
              Request Folio
            </p>

            <h1 className="text-5xl font-semibold leading-none md:text-8xl">
              Choose the kind of work you want to see.
            </h1>
          </div>

          <div className="flex items-end">
            <p className="max-w-lg text-lg leading-relaxed">
              Request a fictional Survedge folio based on project type,
              material interest, or studio work.
            </p>
          </div>
        </section>

        <section className="grid gap-8 border-t border-black py-12 md:grid-cols-2">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm uppercase tracking-wide">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-black bg-white px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border border-black bg-white px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm uppercase tracking-wide">
                Project Interest
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                {interests.map((interest) => (
                  <label
                    key={interest}
                    className="flex cursor-pointer items-center gap-3 border border-black p-4"
                  >
                    <input type="checkbox" className="h-4 w-4" />
                    <span>{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm uppercase tracking-wide">
                Notes
              </label>
              <textarea
                rows={6}
                placeholder="Tell us what you are looking for"
                className="w-full resize-none border border-black bg-white px-4 py-3 outline-none"
              />
            </div>

            <button
              type="button"
              className="border border-black px-6 py-3 text-sm uppercase tracking-wide transition hover:bg-black hover:text-white"
            >
              Submit Request
            </button>
          </form>

          <div className="border border-black p-6">
            <h2 className="text-3xl font-semibold">Folio Includes</h2>

            <ul className="mt-8 space-y-4 text-lg">
              <li className="border-b border-black pb-3">
                Selected fake project profiles
              </li>
              <li className="border-b border-black pb-3">
                Project codes and categories
              </li>
              <li className="border-b border-black pb-3">
                Image references and material studies
              </li>
              <li className="border-b border-black pb-3">
                Studio philosophy and design themes
              </li>
              <li className="border-b border-black pb-3">
                Contact and consultation details
              </li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}