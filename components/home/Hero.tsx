// Plain <img> is only used for decorative SVG backdrops.
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { a } from "@/lib/figma";
import { deepShadow, LIME, SOFT } from "@/lib/design";
import Ornament from "@/components/shared/Ornament";
import HappyStudents from "@/components/shared/HappyStudents";
import Button from "@/components/ui/Button";
import Canvas from "@/components/layout/Canvas";
import Navbar from "@/components/layout/Navbar";
import LearningProgress from "./LearningProgress";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-brand">
      <div className="relative mx-auto min-h-screen w-full max-w-[1440px] px-4 pb-12 pt-[120px] text-center min-[1440px]:hidden sm:px-6">
        <img src={a("f422c.svg")} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70" />
        <img src={a("ab9fa.svg")} alt="" className="pointer-events-none absolute bottom-0 left-1/2 hidden w-[min(100%,900px)] -translate-x-1/2 opacity-60 sm:block" />
        <Navbar active="/" />

        <div className="relative z-[1] flex flex-col items-center gap-8 sm:gap-10">
          <div className="flex w-full flex-col items-center gap-5 sm:gap-6">
            <h1 className="w-full max-w-[935px] font-poppins text-[clamp(2.25rem,8vw,3.75rem)] leading-[1.15] font-semibold tracking-[-0.04em] text-white sm:text-6xl min-[1024px]:text-[64px]">
              Get Access to Hundreds Courses Available
            </h1>
            <p className="max-w-[720px] text-base leading-[1.6] text-[#e5e6e8] sm:text-lg">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
            </p>
          </div>
          <form role="search" action="/search" className="flex w-full max-w-[600px] flex-col gap-3 min-[480px]:flex-row">
            <label className="flex h-[52px] min-w-0 w-full items-center gap-2 rounded-3xl bg-white px-5 text-left min-[480px]:flex-1">
              <Image src={a("7c340.svg")} alt="" width={24} height={24} />
              <input
                type="search"
                name="q"
                aria-label="Search courses, topics, or creators"
                placeholder="Course, topic, creator"
                className="w-full min-w-0 bg-transparent text-base leading-[1.6] text-ink outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-lime sm:text-lg"
              />
            </label>
            <Button className="min-h-[52px] w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime min-[480px]:w-auto">Search</Button>
          </form>

          <div className="relative w-full max-w-[578px]">
            <div className={`relative aspect-[578/541] w-full overflow-hidden rounded-2xl sm:rounded-3xl ${deepShadow}`}>
              <Image src={a("e3a78.png")} alt="Student with a laptop" fill priority sizes="(max-width: 640px) 100vw, 578px" className="object-cover" />
            </div>
            <div className="absolute bottom-3 left-3 rounded-2xl bg-white/95 p-3 text-left backdrop-blur-[10px] sm:bottom-5 sm:left-5 sm:p-4">
              <p className="leading-[1.2] font-medium text-ink">UI/UX Design</p>
              <p className="flex flex-wrap items-center gap-x-2 text-muted">
                <span className="text-xs leading-[1.6]">200 Courses</span>
                <span className="text-[10px]">•</span>
                <span className="text-xs leading-[1.6]">1000+ Students</span>
              </p>
            </div>
          </div>
          <div className="flex w-full max-w-[578px] flex-col items-stretch gap-3 min-[520px]:flex-row min-[520px]:items-start min-[520px]:justify-center">
            <LearningProgress className="static self-center" />
            <HappyStudents className="static w-full self-center min-[520px]:w-[258px]" />
          </div>
        </div>
      </div>

      <div className="hidden min-[1440px]:block">
      <Canvas className="h-[1024px]">
        <img src={a("f422c.svg")} alt="" className="absolute top-[-2px] left-0 h-[1026px] w-[1442px] max-w-none" />
        <img src={a("ab9fa.svg")} alt="" className="absolute top-[582px] left-1/2 size-[1149px] max-w-none -translate-x-1/2" />

        <Navbar active="/" />

        {/* Headline + search */}
        <div className="absolute top-[169px] left-1/2 flex w-[1200px] -translate-x-1/2 flex-col items-center gap-[60px] text-center">
          <div className="flex flex-col items-center gap-8">
            <h1 className="w-[935px] font-poppins text-[72px] leading-[1.2] font-semibold tracking-[-0.72px] text-white">
              Get Access to Hundreds Courses Available
            </h1>
            <p className="text-lg leading-[1.6] whitespace-nowrap text-[#e5e6e8]">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
            </p>
          </div>
          <form role="search" className="flex gap-4">
            <label className="flex h-[52px] w-[461px] items-center gap-2 rounded-3xl bg-white px-6">
              <Image src={a("7c340.svg")} alt="" width={24} height={24} />
              <input
                type="search"
                name="q"
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-lg leading-[1.6] text-ink outline-none placeholder:text-muted"
              />
            </label>
            <Button>Search</Button>
          </form>
        </div>

        <div className={`absolute top-[512px] left-1/2 h-[541px] w-[578px] -translate-x-1/2 ${deepShadow}`}>
          <Image src={a("e3a78.png")} alt="Student with a laptop" fill priority sizes="578px" className="object-cover" />
        </div>
        <LearningProgress className="top-[651px] left-[842px]" />
        <HappyStudents className="top-[837px] left-[328px]" />

        <Ornament img="80418.png" mask="8a604.png" tint={SOFT} style={{ top: "65.63%", bottom: "2.15%", left: "calc(50% + 572px)", width: 330 }} />
        <Ornament img="eb4eb.png" mask="5f1b4.png" tint={LIME} style={{ top: "21.58%", bottom: "40.82%", left: "calc(50% - 645.5px)", width: 385 }} />
        <Ornament img="eb4eb.png" mask="b8b88.png" tint={SOFT} flip style={{ top: "46.58%", bottom: "36.33%", left: "calc(50% - 449.5px)", width: 175 }} />
        <Ornament img="e89fa.png" mask="82ebe.png" tint={SOFT} style={{ top: "66.6%", bottom: 0, left: "calc(50% - 531px)", width: 342 }} />
        <Ornament img="30652.png" mask="68643.png" tint={LIME} style={{ top: "21.58%", bottom: "42.29%", left: "calc(50% + 696px)", width: 370 }} />
        <Ornament img="5713a.png" mask="dc547.png" tint={SOFT} style={{ top: "45.31%", bottom: "36.33%", left: "calc(50% + 480px)", width: 188 }} />

        <div className="absolute top-[639px] left-[404px] rounded-2xl bg-white p-4 whitespace-nowrap backdrop-blur-[10px]">
          <p className="leading-[1.2] font-medium text-ink">UI/UX Design</p>
          <p className="flex items-center gap-2 text-muted">
            <span className="text-xs leading-[1.6]">200 Courses</span>
            <span className="text-[10px]">•</span>
            <span className="text-xs leading-[1.6]">1000+ Students</span>
          </p>
        </div>
      </Canvas>
      </div>
    </section>
  );
}
