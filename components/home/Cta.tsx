/* eslint-disable @next/next/no-img-element */
import { a } from "@/lib/figma";
import { LIME, SOFT } from "@/lib/design";
import Ornament from "@/components/shared/Ornament";
import Button from "@/components/ui/Button";
import Canvas from "@/components/layout/Canvas";

export default function Cta() {
  return (
    <section className="overflow-hidden bg-brand">
      <div className="relative mx-auto flex min-h-[420px] w-full max-w-[1440px] flex-col items-center justify-center gap-7 px-5 py-14 text-center text-soft sm:min-h-[440px] sm:gap-8 sm:px-8 sm:py-16 min-[1440px]:hidden">
        <img src={a("937f8.svg")} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="relative z-[1] flex w-full max-w-[964px] flex-col items-center gap-6 sm:gap-8">
          <h2 className="w-full max-w-[710px] font-poppins text-[clamp(2rem,5.5vw,2.75rem)] leading-[1.2] font-semibold tracking-[-0.03em]">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="w-full text-base leading-[1.6] sm:text-lg">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <Button className="min-h-12 w-full max-w-[280px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime sm:w-auto">Join as Creator</Button>
        </div>
      </div>
      <div className="hidden min-[1440px]:block">
      <Canvas className="flex h-[488px] items-center justify-center">
        <img src={a("937f8.svg")} alt="" className="absolute top-[-2px] left-0 h-[1026px] w-[1442px] max-w-none" />

        <Ornament img="5713a.png" mask="dc547.png" tint={LIME} style={{ top: 0, bottom: "61.48%", left: "calc(50% + 454px)", width: 188 }} />
        <Ornament img="80418.png" mask="8a604.png" tint={LIME} style={{ top: "59.22%", bottom: "-26.84%", left: "calc(50% + 555px)", width: 330 }} />
        <Ornament img="eb4eb.png" mask="5f1b4.png" tint={LIME} style={{ top: "-33.2%", bottom: "54.3%", left: "calc(50% - 645.5px)", width: 385 }} />
        <Ornament img="eb4eb.png" mask="b8b88.png" tint={SOFT} flip style={{ top: "1.02%", bottom: "63.11%", left: "calc(50% - 454.5px)", width: 175 }} />
        <Ornament img="682df.png" mask="dc30f.png" tint={SOFT} style={{ top: "46.11%", bottom: "15.37%", left: "calc(50% - 674px)", width: 188 }} />
        <Ornament img="e89fa.png" mask="82ebe.png" tint={LIME} style={{ top: "61.27%", bottom: "-31.35%", left: "calc(50% - 529px)", width: 342 }} />
        <Ornament img="30652.png" mask="68643.png" tint={SOFT} style={{ top: "1.23%", bottom: "22.95%", left: "calc(50% + 691px)", width: 370 }} />

        <div className="relative flex flex-col items-center gap-10 text-center text-soft">
          <h2 className="w-[710px] font-poppins text-[44px] leading-[1.2] font-semibold tracking-[-0.44px]">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="w-[964px] text-lg leading-[1.6]">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <Button>Join as Creator</Button>
        </div>
      </Canvas>
      </div>
    </section>
  );
}
