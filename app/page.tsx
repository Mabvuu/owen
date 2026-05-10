import Image from "next/image";
import Header from "@/components/Header";

const projects = [
  {
    code: "2401",
    title: "EDGE HOUSE",
    line: "cut by light and shadow.",
    type: "Residential",
    location: "Cape Town",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "2402",
    title: "STONE YARD",
    line: "heavy walls, quiet rooms.",
    type: "Commercial",
    location: "Claremont",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "2403",
    title: "WHITE FRAME",
    line: "a soft interior study.",
    type: "Interior",
    location: "Sea Point",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "2404",
    title: "BLACK COURT",
    line: "to gather and retreat.",
    type: "Cultural",
    location: "Cape Town CBD",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "2405",
    title: "LONG ROOM",
    line: "a narrow urban gesture.",
    type: "Urban",
    location: "Stellenbosch",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "2406",
    title: "PLAIN VILLA",
    line: "low in the landscape.",
    type: "Residential",
    location: "Constantia",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "2407",
    title: "LINE STUDIO",
    line: "work shaped by silence.",
    type: "Workspace",
    location: "Woodstock",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "2408",
    title: "NARROW HALL",
    line: "compressed, then open.",
    type: "Cultural",
    location: "Newlands",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "2409",
    title: "RIDGE HOUSE",
    line: "a house facing distance.",
    type: "Residential",
    location: "Somerset West",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "2410",
    title: "GARDEN ROOM",
    line: "between inside and green.",
    type: "Interior",
    location: "Durbanville",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "2411",
    title: "QUIET BLOCK",
    line: "mass, pause, shade.",
    type: "Commercial",
    location: "Bellville",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "2412",
    title: "OPEN WALL",
    line: "privacy without weight.",
    type: "Residential",
    location: "Observatory",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "2413",
    title: "CIVIC EDGE",
    line: "public space, clear form.",
    type: "Urban",
    location: "Century City",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "2414",
    title: "SHADE HOUSE",
    line: "sun held at the edge.",
    type: "Residential",
    location: "Camps Bay",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "2415",
    title: "COURTYARD OFFICE",
    line: "work around stillness.",
    type: "Commercial",
    location: "Cape Town",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <section className="px-6 pt-20 pb-16 md:px-14">
        <div className="grid gap-x-8 gap-y-20 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.code} className="group">
              <p className="mb-3 text-center text-sm tracking-[0.25em]">
                {project.code}
              </p>

              <div className="relative h-[340px] overflow-hidden bg-neutral-200 md:h-[420px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-end bg-black/0 p-6 opacity-0 transition duration-300 group-hover:bg-black/65 group-hover:opacity-100">
                  <div className="text-white">
                    <p className="mb-2 text-sm uppercase tracking-[0.25em]">
                      {project.type}
                    </p>

                    <h2 className="text-3xl font-semibold">{project.title}</h2>

                    <p className="mt-3 text-sm leading-relaxed">
                      {project.line}
                    </p>

                    <p className="mt-5 text-sm">{project.location}</p>
                  </div>
                </div>
              </div>

              <h2 className="mt-4 text-xl md:text-2xl">
                <span className="uppercase">{project.title}</span>,{" "}
                {project.line}
              </h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}