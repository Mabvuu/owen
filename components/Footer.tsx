export default function Footer() {
  return (
    <footer className="border-t border-black px-6 py-10 text-black md:px-14">
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-medium">Survedge</h2>

          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Measured building surveys, as-built drawings, 3D documentation, and
            property information services based in Cape Town, South Africa.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-[0.3em]">Company</h3>

          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Services</li>
            <li>Index</li>
            <li>Themes</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-[0.3em]">Studio</h3>

          <ul className="space-y-2 text-sm">
            <li>Cape Town, South Africa</li>
            <li>info@survedge.co.za</li>
            <li>+27 21 000 0000</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-[0.3em]">Services</h3>

          <ul className="space-y-2 text-sm">
            <li>As-built drawings</li>
            <li>Measured surveys</li>
            <li>3D documentation</li>
            <li>Real estate plans</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-between gap-4 border-t border-black pt-6 text-xs uppercase tracking-wide md:flex-row">
        <p>© 2026 Survedge</p>
        <p>Cape Town / South Africa</p>
      </div>
    </footer>
  );
}