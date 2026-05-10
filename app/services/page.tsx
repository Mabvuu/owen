"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";

const services = [
  {
    title: "ARCHITECTS + INTERIOR DESIGNERS",
    line: "measured drawings for changes, additions, and interior works.",
    description:
      "Most as-built drawings are requested by architects, contractors, and interior designers. Additions and alterations on existing buildings require accurate sets of drawings to develop from.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=600&auto=format&fit=crop",
    ],
  },
  {
    title: "FACILITIES MANAGEMENT",
    line: "clear building records for asset control.",
    description:
      "As-built plans help companies reduce monthly overheads and manage buildings properly. We help teams maintain, update, and file accurate building information.",
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=600&auto=format&fit=crop",
    ],
  },
  {
    title: "VALUERS + FINANCIAL INSTITUTIONS",
    line: "building surveys for valuation and documentation.",
    description:
      "Valuers and financial institutions need to verify and document existing building conditions during valuation or purchase. We provide measured building surveys in 2D and 3D.",
    images: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop",
    ],
  },
  {
    title: "OWNERS + ASSET MANAGEMENT",
    line: "accurate base plans for property management.",
    description:
      "Our experience helps owners and asset managers prepare accurate base plans, floor area schedules, and documentation for rental, management, and planning use.",
    images: [
      "https://images.unsplash.com/photo-1600607688066-890987f18a86?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=600&auto=format&fit=crop",
    ],
  },
  {
    title: "SUBCONTRACTORS + SHOPFITTERS",
    line: "site measurements for fit-outs and shopfronts.",
    description:
      "We assist with data for fit-outs, new stores, shopfronts, finishes, millwork, and casework. This reduces human error and saves production time.",
    images: [
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=600&auto=format&fit=crop",
    ],
  },
  {
    title: "REAL ESTATE",
    line: "simple plans and visuals for property marketing.",
    description:
      "A clear as-built plan showing room layouts, dimensions, and flow is useful for real estate marketing. We can also provide 3D photographic fly-through models.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=600&auto=format&fit=crop",
    ],
  },
];

export default function ServicesPage() {
  const [openService, setOpenService] = useState(0);

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <section className="px-6 pt-20 pb-24 md:px-14">
        <div className="border-t border-black">
          {services.map((service, index) => {
            const isOpen = openService === index;

            return (
              <article key={service.title} className="border-b border-black">
                <button
                  type="button"
                  onClick={() => setOpenService(isOpen ? -1 : index)}
                  className="grid w-full gap-4 py-5 text-left md:grid-cols-[220px_1fr]"
                >
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">
                    {service.title}
                  </h2>

                  <p className="text-xl leading-none md:text-2xl">
                    {service.line}
                  </p>
                </button>

                {isOpen && (
                  <div className="grid gap-10 pb-12 md:grid-cols-[420px_1fr]">
                    <p className="max-w-xl text-2xl leading-tight">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-3 gap-5">
                      {service.images.map((image, imageIndex) => (
                        <div key={image} className="space-y-2">
                          <p className="text-center text-xs tracking-[0.2em]">
                            {index + 1}.{imageIndex + 1}
                          </p>

                          <div className="relative h-32 overflow-hidden bg-neutral-200 md:h-40">
                            <Image
                              src={image}
                              alt={service.title}
                              fill
                              sizes="(max-width: 768px) 33vw, 180px"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}