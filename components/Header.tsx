"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/stuff", label: "Index" },
  { href: "/themes", label: "Themes" },
  { href: "/contact", label: "Contact us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-50 flex items-center justify-between border-b border-black bg-white px-6 py-5 md:px-14">
        <Link href="/" className="group">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-black bg-black transition group-hover:bg-white" />

            <div>
              <p className="text-2xl font-medium leading-none tracking-tight">
                Survedge
              </p>
              <p className="mt-1 hidden text-[10px] uppercase tracking-[0.3em] md:block">
                Cape Town / South Africa
              </p>
            </div>
          </div>
        </Link>

        <nav className="hidden text-right text-xl leading-tight md:block">
          {navLinks.map((link, index) => (
            <span key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
              {index < navLinks.length - 1 && <span>, </span>}
            </span>
          ))}
          <span>.</span>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="rounded-full border border-black px-5 py-2 text-sm uppercase tracking-[0.25em] md:hidden"
        >
          Menu
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-black text-white md:hidden">
          <div className="flex items-center justify-between border-b border-white px-6 py-5">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium"
            >
              Survedge
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-white px-5 py-2 text-sm uppercase tracking-[0.25em]"
            >
              Close
            </button>
          </div>

          <nav className="px-6 py-10">
            <div className="space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-end justify-between border-b border-white/40 pb-4"
                >
                  <span className="text-5xl leading-none">{link.label}</span>

                  <span className="text-sm tracking-[0.3em]">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-3 gap-3">
              <div className="h-24 rounded-full bg-white" />
              <div className="h-24 rounded-full border border-white" />
              <div className="h-24 rounded-full bg-white" />
            </div>

            <p className="mt-10 text-sm uppercase tracking-[0.3em]">
              Measured surveys / as-built drawings / 3D documentation
            </p>
          </nav>
        </div>
      )}
    </>
  );
}