"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { a } from "@/lib/figma";
import { SOFT } from "@/lib/design";
import Logo from "./Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Courses" },
  { href: "/creator", label: "Creators" },
];

/** Blue-page header; sits absolutely at the top of a 1440 Canvas. */
export default function Navbar({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20 h-[88px] text-soft xl:h-[120px]">
      <div className="absolute top-6 left-4 sm:left-6 lg:top-[35px] lg:left-[122px]">
        <Logo color={SOFT} />
      </div>
      <nav aria-label="Main navigation" className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 leading-6 xl:flex">
        {nav.map((n) => (
          <Link key={n.href} href={n.href} aria-current={n.href === active ? "page" : undefined} className={`rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime ${n.href === active ? "font-medium" : "hover:text-lime"}`}>
            {n.label}
          </Link>
        ))}
      </nav>
      <div className="absolute top-12 right-[120px] hidden items-center gap-6 leading-6 xl:flex">
        <Link href="/login" className="rounded-sm hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime">Sign In</Link>
        <Link href="/register" className="rounded-sm hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime">Join Us</Link>
        <button aria-label="Cart" className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime">
          <Image src={a("033ef.svg")} alt="" width={24} height={24} />
        </button>
      </div>
      <button
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
        className="absolute top-4 right-4 flex size-12 items-center justify-center rounded-lg border border-white/30 bg-brand text-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime xl:hidden sm:right-6"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {menuOpen ? <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
        </svg>
      </button>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen} className="absolute inset-x-4 top-[76px] rounded-2xl border border-white/20 bg-[#0033c5] p-3 shadow-xl sm:inset-x-6 xl:hidden">
        <div className="flex flex-col">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={n.href === active ? "page" : undefined} onClick={() => setMenuOpen(false)} className={`min-h-12 rounded-lg px-4 py-3 leading-6 focus-visible:outline-2 focus-visible:outline-lime ${n.href === active ? "font-medium text-lime" : "hover:bg-white/10 hover:text-lime"}`}>
              {n.label}
            </Link>
          ))}
          <div className="my-1 border-t border-white/20" />
          <Link href="/login" onClick={() => setMenuOpen(false)} className="min-h-12 rounded-lg px-4 py-3 leading-6 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-lime">Sign In</Link>
          <Link href="/register" onClick={() => setMenuOpen(false)} className="min-h-12 rounded-lg px-4 py-3 leading-6 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-lime">Join Us</Link>
        </div>
      </nav>
    </header>
  );
}
