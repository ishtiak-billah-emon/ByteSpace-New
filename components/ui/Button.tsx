import type { ReactNode } from "react";

export default function Button({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <button className={`rounded-3xl bg-lime px-6 py-3 text-lg leading-[1.2] font-medium text-ink transition hover:brightness-95 ${className}`}>
      {children}
    </button>
  );
}
