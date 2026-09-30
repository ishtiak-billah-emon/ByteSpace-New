import type { ReactNode } from "react";

export default function Canvas({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`relative mx-auto w-[1440px] ${className}`}>{children}</div>;
}
