import type { ReactNode } from "react";

export default function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-poppins text-xl leading-[1.2] font-semibold tracking-[-0.2px] text-ink">{children}</h2>;
}
