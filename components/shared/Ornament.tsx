import Image from "next/image";
import type { CSSProperties } from "react";
import { a } from "@/lib/figma";

/** 3D squiggle/cone ornament: a white render tinted with a hard-light colour layer masked to its shape. */
export default function Ornament({ img, mask, tint, style, flip }: {
  img: string; mask: string; tint: string; style: CSSProperties; flip?: boolean;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute -translate-x-1/2" style={style}>
      <div className={`absolute inset-0 ${flip ? "-scale-x-100" : ""}`}>
        <Image src={a(img)} alt="" fill sizes="400px" className="object-cover" />
        <div
          className="absolute inset-0 mix-blend-hard-light"
          style={{
            background: tint,
            maskImage: `url(${a(mask)})`,
            maskSize: "100% 100%",
            WebkitMaskImage: `url(${a(mask)})`,
            WebkitMaskSize: "100% 100%",
          }}
        />
      </div>
    </div>
  );
}
