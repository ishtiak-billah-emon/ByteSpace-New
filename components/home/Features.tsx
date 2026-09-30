/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { a } from "@/lib/figma";
import { deepShadow, LIME } from "@/lib/design";
import { courses } from "@/lib/data/courses";
import Ornament from "@/components/shared/Ornament";
import HappyStudents, { studentAvatars } from "@/components/shared/HappyStudents";
import CourseCard from "@/components/ui/CourseCard";
import Canvas from "@/components/layout/Canvas";
import LearningProgress from "./LearningProgress";

const checklist = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

export default function Features() {
  return (
    <section className="overflow-hidden bg-[#fafafa]">
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-14 px-4 py-14 sm:gap-16 sm:px-6 sm:py-16 lg:gap-20 lg:py-20 min-[1440px]:hidden">
        <img src={a("ede30.svg")} alt="" className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover opacity-60 sm:block" />
        <div className="relative grid min-w-0 grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex min-w-0 flex-col gap-6 sm:gap-8">
            <h2 className="max-w-[577px] font-poppins text-[clamp(2rem,5vw,2.75rem)] leading-[1.2] font-semibold tracking-[-0.03em] text-ink">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-[520px] text-base leading-[1.6] text-body sm:text-lg">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <dl className="grid grid-cols-3 gap-3 sm:max-w-[440px] sm:gap-6">
              {[['12K', 'Students'], ['70+', 'Courses'], ['16', 'Creators']].map(([v, l]) => (
                <div key={l} className="flex min-w-0 flex-col-reverse">
                  <dt className="text-sm leading-[1.6] text-body sm:text-base lg:text-lg">{l}</dt>
                  <dd className="font-poppins text-2xl leading-tight font-medium tracking-[-0.36px] text-brand sm:text-3xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex min-w-0 flex-col items-center gap-4">
            <div className={`relative aspect-[577/540] w-full max-w-[577px] overflow-hidden rounded-2xl ${deepShadow}`}>
              <Image src={a("e3a78.png")} alt="Student on a call" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <CourseCard course={courses[0]} dark />
            <div className="flex w-full max-w-[577px] justify-center">
              <div className="flex w-fit flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]">
                <p className="text-sm leading-[1.2] font-medium text-ink">Learning Progress</p>
                <p className="font-poppins text-4xl leading-[1.2] font-semibold tracking-[-0.48px] text-ink">55%</p>
                <div className="h-2 w-[200px] rounded-3xl bg-[#f6f6f6]">
                  <div className="h-2 w-[112px] rounded-3xl bg-lime" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative grid min-w-0 grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex min-w-0 flex-col items-center gap-4">
            <div className={`relative aspect-[435/500] w-full max-w-[435px] overflow-hidden rounded-2xl ${deepShadow}`}>
              <Image src={a("af9cb.png")} alt="Creator with a tablet" fill sizes="(max-width: 1024px) 100vw, 435px" className="object-cover" />
            </div>
            <div className="grid w-full max-w-[435px] grid-cols-2 gap-3">
              <div className="flex flex-col gap-2 rounded-2xl bg-brand p-4 text-soft backdrop-blur-[10px]">
                <div className="leading-[1.2]"><p className="font-medium">Total Revenue</p><p className="text-[10px]">July 1-28</p></div>
                <div className="flex items-center justify-between gap-2">
                  <p className="font-poppins text-xl leading-8 font-semibold tracking-[-0.24px] sm:text-2xl">$120.29</p>
                  <span className="rounded-3xl bg-[#cbfc01] px-2 py-0.5 text-[10px] leading-5 font-medium text-ink">+12$</span>
                </div>
                <div className="h-2 w-full rounded-3xl bg-white"><div className="h-2 w-[56%] rounded-3xl bg-lime" /></div>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl bg-brand p-4 text-soft backdrop-blur-[10px]">
                <div className="leading-[1.2]"><p className="font-medium">Year to Date</p><p className="text-[10px]">2023</p></div>
                <p className="font-poppins text-lg leading-8 font-semibold tracking-[-0.24px] sm:text-2xl">$1,200.38</p>
                <span className="w-fit rounded-3xl bg-[#cbfc01] px-2 py-0.5 text-[10px] leading-5 font-medium text-ink">+12$</span>
              </div>
            </div>
            <div className="flex w-full max-w-[435px] flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]">
              <div>
                <p className="leading-[1.2] font-medium text-ink">Happy Students</p>
                <p className="flex items-center text-xs leading-[1.6] text-muted"><span className="text-ink">4.5&nbsp;</span>(240)<Image src={a("4fa90.svg")} alt="" width={16} height={16} className="p-[1px_1.5px_2.5px]" /></p>
              </div>
              <div className="flex min-w-0 items-center">
                {studentAvatars.map((h) => <Image key={h} src={a(`${h}.png`)} alt="" width={43} height={43} className="-mr-4 size-9 rounded-full sm:size-[43px]" />)}
                <div className="relative size-9 shrink-0 sm:size-[43px]"><Image src={a("0ec7a.svg")} alt="" width={43} height={43} className="size-full" /><span className="absolute top-[13px] left-3 text-xs leading-[1.5] font-bold text-ink">2K+</span></div>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-6 sm:gap-8">
            <h2 className="max-w-[500px] font-poppins text-[clamp(2rem,5vw,2.75rem)] leading-[1.2] font-semibold tracking-[-0.03em] text-ink">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="max-w-[574px] text-base leading-[1.6] text-body sm:text-lg">
              <strong className="font-bold text-ink">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-2 text-base leading-[1.4] font-medium text-ink sm:text-lg">
                  <Image src={a("1e773.svg")} alt="" width={24} height={24} className="shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="hidden min-[1440px]:block">
      <Canvas className="h-[1460px]">
        <img src={a("ede30.svg")} alt="" className="absolute top-[-506px] left-[-548px] h-[2471px] w-[2536px] max-w-none" />
        <img src={a("5400e.svg")} alt="" className="absolute top-[906px] left-[-327px] size-[752px] max-w-none" />

        <div className="absolute top-[120px] left-[121px] flex flex-col gap-[72px]">
          {/* Row 1 */}
          <div className="flex items-center gap-[63px]">
            <div className="flex w-[574px] flex-col gap-10">
              <h2 className="w-[577px] font-poppins text-[44px] leading-[1.2] font-semibold tracking-[-0.44px] text-ink">
                Your Path to Professional Growth Starts Here!
              </h2>
              <p className="w-[477px] text-lg leading-[1.6] text-body">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>
              <dl className="flex items-end gap-14 whitespace-nowrap">
                {[["12K", "Students"], ["70+", "Courses"], ["16", "Creators"]].map(([v, l]) => (
                  <div key={l} className="flex flex-col-reverse">
                    <dt className="text-lg leading-[1.6] text-body">{l}</dt>
                    <dd className="font-poppins text-4xl leading-[44px] font-medium tracking-[-0.36px] text-brand">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative h-[552px] w-[621px] shrink-0">
              <CourseCard course={courses[0]} dark className="absolute top-0 left-0" />
              <div className={`absolute top-3 left-0 h-[540px] w-[577px] ${deepShadow}`}>
                <Image src={a("e3a78.png")} alt="Student on a call" fill sizes="577px" className="object-cover" />
              </div>
              <LearningProgress className="top-[213px] left-[345px]" />
              <Ornament img="80418.png" mask="e5f4c.png" tint={LIME} style={{ top: "12.14%", bottom: "48.91%", left: "calc(50% + 203px)", width: 215 }} />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-[79px]">
            <div className="relative h-[596px] w-[541px] shrink-0">
              <div className="absolute top-11 left-0 flex flex-col gap-2 rounded-2xl bg-brand p-4 text-soft backdrop-blur-[10px]">
                <div className="leading-[1.2]">
                  <p className="font-medium">Total Revenue</p>
                  <p className="text-[10px]">July 1-28</p>
                </div>
                <div className="flex w-[200px] items-center justify-between">
                  <p className="font-poppins text-2xl leading-8 font-semibold tracking-[-0.24px]">$120.29</p>
                  <span className="rounded-3xl bg-[#cbfc01] px-2 py-0.5 text-[10px] leading-5 font-medium text-ink">+12$</span>
                </div>
                <div className="h-2 w-[200px] rounded-3xl bg-white">
                  <div className="h-2 w-[112px] rounded-3xl bg-lime" />
                </div>
              </div>
              <div className="absolute top-[194px] left-0 flex w-[134px] flex-col items-start gap-2 rounded-2xl bg-brand p-4 text-soft backdrop-blur-[10px]">
                <div className="leading-[1.2]">
                  <p className="font-medium">Year to Date</p>
                  <p className="text-[10px]">2023</p>
                </div>
                <p className="font-poppins text-2xl leading-8 font-semibold tracking-[-0.24px]">$1,200.38</p>
                <span className="rounded-3xl bg-[#cbfc01] px-2 py-0.5 text-[10px] leading-5 font-medium text-ink">+12$</span>
              </div>
              <div className={`absolute top-0 left-[28px] h-[596px] w-[435px] overflow-hidden ${deepShadow}`}>
                <div className="absolute top-0 left-[-28.51%] h-[114.6%] w-[157.01%]">
                  <Image src={a("af9cb.png")} alt="Creator with a tablet" fill sizes="683px" />
                </div>
              </div>
              <HappyStudents className="top-[413px] left-[283px]" />
              <Ornament img="eb4eb.png" mask="41fc0.png" tint={LIME} style={{ top: "19.13%", bottom: "44.8%", left: "calc(50% + 142px)", width: 215 }} />
            </div>

            <div className="flex w-[580px] flex-col gap-10">
              <h2 className="w-[391px] font-poppins text-[44px] leading-[1.2] font-semibold tracking-[-0.44px] text-ink">
                Create &amp; Manage Courses Easily.
              </h2>
              <p className="w-[574px] text-lg leading-[1.6] text-body">
                <strong className="font-bold text-ink">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>
              <ul className="flex flex-col gap-4">
                {checklist.map((item) => (
                  <li key={item} className="flex items-end gap-2 text-lg leading-[1.2] font-medium text-ink">
                    <Image src={a("1e773.svg")} alt="" width={24} height={24} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Canvas>
      </div>
    </section>
  );
}
