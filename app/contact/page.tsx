import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <section className="px-6 pt-16 pb-24 md:px-14">
        <section className="border-t border-black py-10">
          <p className="mb-4 text-sm uppercase tracking-[0.35em]">
            Contact us
          </p>

          <h1 className="max-w-5xl text-5xl leading-none md:text-8xl">
            Send through your building, survey, or property documentation brief.
          </h1>
        </section>

        <section className="grid gap-12 border-t border-black py-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-sm uppercase tracking-[0.3em]">
              Cape Town Office
            </h2>

            <div className="space-y-6 text-xl">
              <p>
                <span className="block text-sm uppercase tracking-wide">
                  Location
                </span>
                Cape Town, South Africa
              </p>

              <p>
                <span className="block text-sm uppercase tracking-wide">
                  Email
                </span>
                info@survedge.co.za
              </p>

              <p>
                <span className="block text-sm uppercase tracking-wide">
                  Phone
                </span>
                +27 21 000 0000
              </p>

              <p>
                <span className="block text-sm uppercase tracking-wide">
                  Services
                </span>
                As-built drawings, measured surveys, floor plans, 3D building
                documentation
              </p>
            </div>
          </div>

          <form className="space-y-5">
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
              <label className="mb-2 block text-sm uppercase tracking-wide">
                Project type
              </label>
              <input
                type="text"
                placeholder="Measured survey, as-built drawings, 3D model..."
                className="w-full border border-black bg-white px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm uppercase tracking-wide">
                Message
              </label>
              <textarea
                rows={7}
                placeholder="Tell us what you need"
                className="w-full resize-none border border-black bg-white px-4 py-3 outline-none"
              />
            </div>

            <button
              type="button"
              className="border border-black px-6 py-3 text-sm uppercase tracking-wide transition hover:bg-black hover:text-white"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="border-t border-black py-12">
          <h2 className="mb-6 text-sm uppercase tracking-[0.3em]">
            Service Area
          </h2>

          <div className="flex h-96 items-center justify-center border border-black bg-neutral-100 text-3xl">
            Cape Town / South Africa
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}