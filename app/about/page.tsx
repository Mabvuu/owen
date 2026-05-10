import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <section className="px-6 pt-12 pb-20 md:px-14 md:pt-16 md:pb-24">
        <section className="border-t border-black py-10 md:py-14">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] md:text-sm">
            About us
          </p>

          <h1 className="max-w-6xl text-4xl leading-none md:text-7xl lg:text-8xl">
            Accurate building information for better property decisions.
          </h1>
        </section>

        <section className="grid gap-8 border-t border-black py-10 md:grid-cols-[280px_1fr] md:gap-12 md:py-14">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] md:text-sm">
            Studio
          </h2>

          <div className="space-y-6 text-xl leading-tight md:text-3xl">
            <p>
              Survedge is a Cape Town based company providing measured building
              surveys, as-built drawings, floor plans, 3D documentation, and
              building information services.
            </p>

            <p>
              We support architects, interior designers, property owners,
              valuers, financial institutions, real estate teams, facility
              managers, and contractors.
            </p>
          </div>
        </section>

        <section className="grid gap-8 border-t border-black py-10 md:grid-cols-[280px_1fr] md:gap-12 md:py-14">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] md:text-sm">
            What we do
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Measured building surveys",
              "As-built drawings",
              "Floor area calculations",
              "3D building documentation",
              "Real estate plans",
              "Facility management records",
            ].map((item) => (
              <div
                key={item}
                className="border border-black p-5 text-lg md:p-6 md:text-2xl"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-t border-black py-10 md:grid-cols-[280px_1fr] md:gap-12 md:py-14">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] md:text-sm">
            Team
          </h2>

          <article className="grid gap-8 lg:grid-cols-[420px_1fr] lg:items-end">
            <div className="relative h-[420px] overflow-hidden bg-neutral-100 sm:h-[520px] lg:h-[560px]">
              <Image
                src="/about/1.JPEG"
                alt="Owen Mabvuu"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
              />
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em]">
                Founder / Building Documentation Lead
              </p>

              <h3 className="text-5xl leading-none md:text-7xl">
                Owen Mabvuu
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl">
                Owen leads Survedge’s measured survey, as-built drawing, and
                property documentation work for clients across South Africa.
              </p>

              <div className="mt-8 grid gap-3 text-sm uppercase tracking-[0.18em] sm:grid-cols-3">
                <p className="border border-black p-4">Surveys</p>
                <p className="border border-black p-4">As-built drawings</p>
                <p className="border border-black p-4">3D documentation</p>
              </div>
            </div>
          </article>
        </section>

        <section className="grid gap-8 border-t border-black py-10 md:grid-cols-[280px_1fr] md:gap-12 md:py-14">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] md:text-sm">
            Based in
          </h2>

          <p className="text-4xl leading-none md:text-7xl">
            Cape Town, South Africa.
          </p>
        </section>
      </section>

      <Footer />
    </main>
  );
}