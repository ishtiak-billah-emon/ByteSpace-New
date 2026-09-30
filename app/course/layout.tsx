import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { a } from "@/lib/figma";
import BlueHero from "../../components/layout/BlueHero";
import Footer from "../../components/layout/Footer";
import { CourseTabs } from "./tabs";

export const metadata = { title: "Build Digital Asset: A Comprehensive Guide — ByteSpace" };

const stats = [
  { icon: "a6e4e.svg", label: "Intermediate" },
  { icon: "dd2bf.svg", label: "4.8 (172 reviews)" },
  { icon: "4c075.svg", label: "199 Students" },
];

const lessons = [
  ["01", "Introduction to Digital Assets", "12 mins"],
  ["02", "Design Principles for Impacts", "21 mins"],
  ["03", "Advanced Techniques in Digital Creation", "16 mins"],
];

const includes = [
  { icon: "f209f.svg", label: "Learning Resources" },
  { icon: "1d4ad.svg", label: "Quality Lesson Videos" },
  { icon: "19633.svg", label: "Certificate of Completion" },
  { icon: "123f1.svg", label: "Private Consultation" },
];

/** Shared shell for Course Details / Lessons / Reviews (Figma 55:4066, 60:102, 60:681). */
export default function CourseLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <BlueHero height={957} active="/search">
        <div className="absolute top-[172px] left-[122px] flex w-[1196px] items-start justify-between text-soft">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 font-poppins font-semibold whitespace-nowrap">
              <h1 className="text-4xl leading-[1.2] tracking-[-0.36px]">Build Digital Asset: A Comprehensive Guide</h1>
              <p className="text-xl leading-[1.2] tracking-[-0.2px]">Unlock the Power of Digital Creation with Expert Guidance</p>
            </div>
            <p className="text-lg leading-[1.2] font-medium text-[#f1f4fe]">
              by <Link href="/creator" className="text-lime">purepearl studio</Link>
            </p>
            <div className="flex gap-4">
              {stats.map((s) => (
                <span key={s.label} className="flex items-center gap-2 rounded-3xl bg-white px-6 py-2 leading-[1.2] font-medium text-ink">
                  <Image src={a(s.icon)} alt="" width={24} height={24} />
                  {s.label}
                </span>
              ))}
            </div>
          </div>
          <button className="flex items-center gap-2 rounded-3xl bg-lime px-6 py-2 leading-6 font-medium text-ink hover:brightness-95">
            <Image src={a("adb46.svg")} alt="" width={24} height={24} />
            Share
          </button>
        </div>

        <div className="absolute top-[416px] left-[125px] h-[479px] w-[720px] overflow-hidden rounded-3xl bg-[#443131]">
          <Image src={a("aa365.jpg")} alt="Course preview" fill priority sizes="720px" className="object-contain" />
          {/* ponytail: no video source in the design — wire this to a player when there is one */}
          <button aria-label="Play preview" className="absolute top-[204px] left-[324px] rounded-3xl border border-grey bg-[rgba(61,61,61,0.24)] p-4 backdrop-blur-[20px]">
            <Image src={a("28f96.svg")} alt="" width={72} height={72} />
          </button>
        </div>

        <aside className="absolute top-[416px] left-[908px] z-10 flex w-[412px] flex-col gap-6 rounded-3xl border border-line bg-white p-10 text-body">
          <h2 className="font-poppins text-xl leading-[1.2] font-semibold tracking-[-0.2px] text-ink">112 Lessons (24 hours)</h2>
          <ol className="flex flex-col gap-3">
            {lessons.map(([n, t, d]) => (
              <li key={n} className="grid grid-cols-[24px_200px_1fr] gap-x-2">
                <span className="leading-[1.2] font-medium text-ink">{n}</span>
                <span className="leading-[1.2] font-medium text-ink">{t}</span>
                <span className="text-right leading-[1.6] text-brand">{d}</span>
              </li>
            ))}
            <li className="leading-[1.6]">99 more videos</li>
          </ol>
          <p className="leading-[1.6]">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
          <p className="flex items-end">
            <span className="font-poppins text-4xl leading-[1.05] font-semibold tracking-[-0.36px] text-brand">$25</span>
            <span className="leading-[1.6]">/lifetime</span>
          </p>
          <button className="rounded-3xl bg-lime px-6 py-3 text-lg leading-[1.2] font-medium text-ink hover:brightness-95">Enroll Now</button>
          <h2 className="font-poppins text-xl leading-[1.2] font-semibold tracking-[-0.2px] text-ink">This course include</h2>
          <ul className="flex flex-col gap-3">
            {includes.map((i) => (
              <li key={i.label} className="flex gap-2 leading-[1.6]">
                <Image src={a(i.icon)} alt="" width={24} height={24} />
                {i.label}
              </li>
            ))}
          </ul>
          <hr className="border-[#d1d1d1]" />
          <div className="flex gap-3">
            <Image src={a("3bfea.png")} alt="PurePearl Studio" width={52} height={52} className="rounded-full" />
            <div>
              <p className="text-lg leading-[1.2] font-medium text-ink">PurePearl Studio</p>
              <p className="leading-[1.6]">Professional Creator</p>
            </div>
          </div>
          <p className="leading-[1.6]">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
          <Link href="/creator" className="self-start rounded-3xl border border-line px-4 py-2 leading-[1.2] font-medium hover:border-brand">
            See Full Profile
          </Link>
        </aside>
      </BlueHero>

      <section className="mx-auto flex w-[1440px] flex-col items-start gap-10 px-[120px] pt-[78px] pb-[120px]">
        <CourseTabs />
        <div className="flex w-[723px] flex-col items-start gap-6 leading-[1.6] text-body">{children}</div>
      </section>
      <Footer />
    </main>
  );
}
