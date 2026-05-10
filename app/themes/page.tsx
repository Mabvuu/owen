"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";

const themes = [
  {
    title: "CEILING-SCAPES",
    line: "connecting with the endless.",
    description:
      "Ceilings shape how a room feels before you even notice them. This theme studies height, openness, shadow, and the quiet space above the body.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=600&auto=format&fit=crop",
    ],
  },
  {
    title: "FORM VS SPACE",
    line: "where form asserts, space listens.",
    description:
      "Form is the solid thing. Space is what moves around it. This theme looks at rooms, courtyards, passages, and how buildings make emptiness feel intentional.",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop",
    ],
  },
  {
    title: "LIGHT + SHADOW",
    line: "soft edges, hard contrast.",
    description:
      "Light gives architecture emotion. Shadow gives it depth. This theme studies how openings, walls, screens, and courtyards control brightness.",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607688066-890987f18a86?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=600&auto=format&fit=crop",
    ],
  },
  {
    title: "MATERIAL MEMORY",
    line: "surfaces that hold time.",
    description:
      "Concrete, timber, glass, plaster, and stone all age differently. This theme explores texture, weathering, weight, and touch.",
    images: [
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=600&auto=format&fit=crop",
    ],
  },
  {
    title: "THRESHOLDS",
    line: "between inside and outside.",
    description:
      "A threshold is not just a door. It is the moment where one space becomes another. This theme studies entries, passages, screens, and transitions.",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607688066-890987f18a86?q=80&w=600&auto=format&fit=crop",
    ],
  },
];

export default function ThemesPage() {
  const [openTheme, setOpenTheme] = useState(0);

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <section className="px-6 pt-20 pb-24 md:px-14">
        <div className="border-t border-black">
          {themes.map((theme, index) => {
            const isOpen = openTheme === index;

            return (
              <article key={theme.title} className="border-b border-black">
                <button
                  type="button"
                  onClick={() => setOpenTheme(isOpen ? -1 : index)}
                  className="grid w-full gap-4 py-5 text-left md:grid-cols-[220px_1fr]"
                >
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">
                    {theme.title}
                  </h2>

                  <p className="text-xl leading-none md:text-2xl">
                    {theme.line}
                  </p>
                </button>

                {isOpen && (
                  <div className="grid gap-10 pb-12 md:grid-cols-[420px_1fr]">
                    <p className="max-w-xl text-2xl leading-tight">
                      {theme.description}
                    </p>

                    <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                      {theme.images.map((image, imageIndex) => (
                        <div key={image} className="space-y-2">
                          <p className="text-center text-xs tracking-[0.2em]">
                            {index + 1}.{imageIndex + 1}
                          </p>

                          <div className="relative h-32 overflow-hidden bg-neutral-200 md:h-40">
                            <Image
                              src={image}
                              alt={theme.title}
                              fill
                              sizes="(max-width: 768px) 50vw, 180px"
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