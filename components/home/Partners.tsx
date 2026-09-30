import Image from "next/image";
import { a } from "@/lib/figma";

const partners = [
  { src: "c93c5.svg", w: 167, h: 41 },
  { src: "1f085.svg", w: 168, h: 41 },
  { src: "a0f90.svg", w: 170, h: 41 },
  { src: "2a59b.svg", w: 170, h: 41 },
  { src: "f224f.svg", w: 169, h: 42 },
];

export default function Partners() {
  return (
    <section className="bg-soft px-4 py-10 sm:px-6 sm:py-12 xl:h-[202px] xl:px-0 xl:pt-20 xl:pb-0">
      <div className="mx-auto grid max-w-[1000px] grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-10 sm:gap-y-8 xl:flex-nowrap xl:items-end xl:gap-x-[72px] xl:gap-y-0">
        {partners.map((p, i) => (
          <Image
            key={p.src}
            src={a(p.src)}
            alt={`Partner ${i + 1}`}
            width={p.w}
            height={p.h}
            className={`h-auto w-full max-w-[150px] object-contain sm:w-[167px] sm:max-w-[167px] xl:w-auto xl:max-w-none ${i === partners.length - 1 ? "col-span-2" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}
