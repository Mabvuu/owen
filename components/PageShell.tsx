import Header from "./Header";
import Footer from "./Footer";

type PageShellProps = {
  children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="px-6 py-8 md:px-12">
        <Header />
        {children}
      </section>

      <Footer />
    </main>
  );
}