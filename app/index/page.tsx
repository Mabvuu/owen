"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Urban",
  "Cultural",
  "Workspace",
  "Courtyard",
  "Landscape",
  "Concrete",
  "Glass",
  "Timber",
  "Stone",
];

const images = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607688066-890987f18a86?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=400&auto=format&fit=crop",
];

const archiveItems = Array.from({ length: 180 }, (_, index) => {
  const code = `${1600 + index}.${(index % 9) + 1}`;
  const category = categories[(index % (categories.length - 1)) + 1];

  return {
    code,
    category,
    image: images[index % images.length],
  };
});

export default function IndexPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? archiveItems
      : archiveItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <section className="px-6 pt-10 pb-24 md:px-14">
        <div className="grid gap-10 md:grid-cols-[140px_1fr]">
          <aside className="md:sticky md:top-8 md:h-fit">
            <p className="mb-5 text-xs uppercase tracking-[0.35em]">INDEX</p>

            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`block text-left text-lg leading-tight hover:underline ${
                    activeCategory === category ? "underline" : ""
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>

          <section>
            <div className="grid grid-cols-4 gap-x-5 gap-y-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
              {filteredItems.map((item) => (
                <article key={item.code} className="group">
                  <p className="mb-2 text-center text-xs tracking-[0.2em]">
                    {item.code}
                  </p>

                  <div className="relative h-16 overflow-hidden bg-neutral-100">
                    <Image
                      src={item.image}
                      alt={item.code}
                      fill
                      sizes="90px"
                      className="object-cover transition duration-300 group-hover:scale-110"
                    />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}