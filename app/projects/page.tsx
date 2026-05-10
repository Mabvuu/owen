import Image from "next/image";
import Header from "@/components/Header";

const projects = [
  {
    code: "2401",
    title: "RESIDENTIAL SURVEY",
    type: "Measured Drawing",
    location: "Cape Town",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "2402",
    title: "HOUSE EXTENSION",
    type: "3D Model",
    location: "Claremont",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "2403",
    title: "SHOPFRONT FITOUT",
    type: "As-Built Plan",
    location: "Sea Point",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "2404",
    title: "OFFICE BLOCK",
    type: "Commercial Survey",
    location: "Cape Town CBD",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "2405",
    title: "LODGE CONCEPT",
    type: "Concept Render",
    location: "Stellenbosch",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "2406",
    title: "FLOOR PLAN STUDY",
    type: "Raw Drawing",
    location: "Woodstock",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "2407",
    title: "WAREHOUSE SURVEY",
    type: "Industrial",
    location: "Epping",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "2408",
    title: "APARTMENT BLOCK",
    type: "3D Massing",
    location: "Century City",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "2409",
    title: "INTERIOR MEASURE",
    type: "Interior Survey",
    location: "Constantia",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "2410",
    title: "ROOF STUDY",
    type: "Technical Drawing",
    location: "Durbanville",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "2411",
    title: "REAL ESTATE PLAN",
    type: "Marketing Plan",
    location: "Camps Bay",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "2412",
    title: "SITE MODEL",
    type: "Survey Model",
    location: "Somerset West",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "2413",
    title: "STRUCTURE STUDY",
    type: "Raw Site Work",
    location: "Bellville",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "2414",
    title: "BUILDING RECORD",
    type: "Asset Documentation",
    location: "Observatory",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "2415",
    title: "PLAN REDRAW",
    type: "CAD Drawing",
    location: "Newlands",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=900&auto=format&fit=crop",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <section className="px-6 pt-16 pb-24 md:px-14">
        <div className="grid gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.code} className="group">
              <p className="mb-3 text-center text-sm tracking-[0.25em]">
                {project.code}
              </p>

              <div className="relative h-[360px] overflow-hidden rounded-[50%] bg-neutral-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/65 group-hover:opacity-100">
                  <div className="px-8 text-center text-white">
                    <p className="text-xs uppercase tracking-[0.25em]">
                      {project.type}
                    </p>

                    <h2 className="mt-3 text-3xl font-medium">
                      {project.title}
                    </h2>

                    <p className="mt-3 text-sm">{project.location}</p>
                  </div>
                </div>
              </div>

              <h2 className="mt-5 text-center text-xl uppercase">
                {project.title}
              </h2>

              <p className="mt-1 text-center text-sm">{project.type}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}