"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Pill from "@/components/ui/Pill";

const tabs = [
  { href: "/course", label: "About" },
  { href: "/course/lessons", label: "Lessons" },
  { href: "/course/reviews", label: "Reviews" },
];

export function CourseTabs() {
  const path = usePathname();
  return (
    <nav className="flex gap-4">
      {tabs.map((t) => (
        <Link key={t.href} href={t.href} scroll={false} aria-current={path === t.href ? "page" : undefined}>
          <Pill active={path === t.href}>{t.label}</Pill>
        </Link>
      ))}
    </nav>
  );
}
