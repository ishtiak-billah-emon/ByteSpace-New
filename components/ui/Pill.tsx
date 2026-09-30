import type { ReactNode } from "react";

export default function Pill({ active, children, className = "" }: { active?: boolean; children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-3xl px-4 py-3 leading-[1.2] font-medium transition ${active ? "bg-lime text-ink" : "bg-soft text-body hover:bg-[#e5e6e8]"} ${className}`}>
      {children}
    </span>
  );
}
