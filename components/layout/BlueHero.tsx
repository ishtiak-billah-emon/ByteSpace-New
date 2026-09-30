import type { ReactNode } from "react";
import { a } from "@/lib/figma";
import Canvas from "./Canvas";
import Navbar from "./Navbar";

export default function BlueHero({ height, active, children }: { height: number; active?: string; children: ReactNode }) {
  return (
    <section className="relative bg-brand">
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <Canvas className="h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={a("937f8.svg")} alt="" className="absolute top-[-2px] left-0 h-[1026px] w-[1442px] max-w-none" />
        </Canvas>
      </div>
      <Canvas>
        <div style={{ height }}>
          <Navbar active={active} />
          {children}
        </div>
      </Canvas>
    </section>
  );
}
