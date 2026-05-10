import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-black">
      <section className="max-w-2xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em]">404</p>

        <h1 className="text-5xl font-semibold leading-none md:text-8xl">
          Page not found.
        </h1>

        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed">
          This Survedge page does not exist or the project code is wrong.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block border border-black px-6 py-3 text-sm uppercase tracking-wide transition hover:bg-black hover:text-white"
        >
          Go Home
        </Link>
      </section>
    </main>
  );
}