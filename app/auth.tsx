"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import { a } from "@/lib/figma";
import { LIME, SOFT } from "@/lib/design";
import { courses } from "@/lib/data/courses";
import Button from "@/components/ui/Button";
import CourseCard from "@/components/ui/CourseCard";
import HappyStudents from "@/components/shared/HappyStudents";
import Ornament from "@/components/shared/Ornament";
import Canvas from "../components/layout/Canvas";

export type Field = { label: string; name: string; type: string; placeholder: string; autoComplete: string };

/** Shared Login / Register layout (Figma frames 49:195 and 47:351). */
export function AuthShell({ intro, eyebrow, title, fields, submit, social, footer }: {
  intro: { title: string; text: string };
  eyebrow: string;
  title: string;
  fields: Field[];
  submit: string;
  social?: boolean;
  footer: ReactNode;
}) {
  // ponytail: no auth backend yet — hook a server action / API call in here.
  const onSubmit = (e: FormEvent) => e.preventDefault();

  return (
    <main className="min-h-screen bg-brand">
      <div className="relative isolate min-h-dvh overflow-hidden px-4 py-6 text-soft sm:px-8 sm:py-8 min-[1440px]:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={a("937f8.svg")} alt="" className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-80" />
        <div className="mx-auto flex w-full max-w-[560px] flex-col gap-7 sm:gap-8">
          <Link href="/" aria-label="ByteSpace home" className="inline-flex min-h-11 w-fit items-center rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime">
            <Image src={a("b8d7a.svg")} alt="" width={29} height={32} />
          </Link>

          <div className="flex flex-col gap-3">
            <p className="font-poppins text-xl leading-[1.2] font-semibold tracking-[-0.2px]">{intro.title}</p>
            <p className="text-base leading-[1.6] sm:text-lg">{intro.text}</p>
          </div>

          <section className="flex w-full flex-col gap-8 rounded-3xl bg-white p-5 text-ink sm:gap-9 sm:p-8">
            <div>
              <p className="text-base leading-[1.6] text-brand sm:text-lg">{eyebrow}</p>
              <h1 className="font-poppins text-[clamp(2rem,8vw,2.75rem)] leading-[1.2] font-semibold tracking-[-0.03em] text-ink">{title}</h1>
            </div>
            <form onSubmit={onSubmit} className="flex w-full min-w-0 flex-col items-stretch gap-5 sm:gap-6">
              {fields.map((f) => (
                <label key={f.name} className="flex w-full min-w-0 flex-col gap-2 text-sm leading-[1.2] font-medium text-ink">
                  {f.label}
                  <input
                    required
                    name={f.name}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    placeholder={f.placeholder}
                    minLength={f.type === "password" ? 8 : undefined}
                    className="h-[52px] w-full min-w-0 rounded-xl border border-[#e5e6e8] px-4 text-base leading-[1.6] font-normal outline-none placeholder:text-muted focus:border-brand focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand sm:px-6 sm:text-lg"
                  />
                </label>
              ))}
              <Button className="min-h-[52px] w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">{submit}</Button>
            </form>

            {social && (
              <div className="flex flex-col items-center gap-6 sm:gap-8">
                <div className="flex w-full items-center gap-3 text-base leading-[1.6] text-[#888] sm:text-lg">
                  <span className="h-px min-w-0 flex-1 bg-[#d1d1d1]" />
                  or
                  <span className="h-px min-w-0 flex-1 bg-[#d1d1d1]" />
                </div>
                <div className="flex gap-4">
                  {[['d93bc.svg', 'Continue with Facebook'], ['4d27b.svg', 'Continue with Google']].map(([icon, label]) => (
                    <button key={icon} type="button" aria-label={label} className="grid size-16 place-items-center rounded-3xl border border-[#d1d1d1] transition hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:size-[72px]">
                      <Image src={a(icon)} alt="" width={40} height={40} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <p className="flex flex-wrap justify-center gap-x-1 text-center leading-[1.6] text-[#888]">{footer}</p>
          </section>
        </div>
      </div>

      <div className="hidden overflow-hidden min-[1440px]:block">
      <Canvas className="h-[1024px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={a("937f8.svg")} alt="" className="absolute top-[-2px] left-0 h-[1026px] w-[1442px] max-w-none" />

        <Link href="/" aria-label="ByteSpace home" className="absolute top-[35px] left-[122px]">
          <Image src={a("b8d7a.svg")} alt="" width={29} height={32} />
        </Link>

        <div className="absolute top-[120px] left-[122px] flex flex-col gap-4 text-soft">
          <p className="font-poppins text-xl leading-[1.2] font-semibold tracking-[-0.2px]">{intro.title}</p>
          <p className="w-[475px] text-lg leading-[1.6]">{intro.text}</p>
        </div>

        <CourseCard course={courses[1]} dark className="absolute top-[394px] left-[122px]" />
        <CourseCard course={courses[2]} dark className="absolute top-[305px] left-[233px]" />
        <HappyStudents lime className="top-[740px] left-[348px]" />
        <Ornament img="eb4eb.png" mask="b8b88.png" tint={SOFT} flip style={{ top: "61.13%", bottom: "21.78%", left: "calc(37.5% + 17.5px)", width: 175 }} />
        <Ornament img="e89fa.png" mask="01240.png" tint={LIME} style={{ top: "31.25%", bottom: "54.49%", left: "calc(12.5% + 44px)", width: 146 }} />
        <Ornament img="5713a.png" mask="dc547.png" tint={LIME} style={{ top: "68.55%", bottom: "13.09%", left: "calc(8.33% + 71px)", width: 188 }} />

        <section className="absolute top-[120px] left-[741px] flex h-[784px] w-[579px] flex-col items-center justify-between rounded-3xl bg-white px-[63px] pt-[61px] pb-[40px]">
          <div className="flex w-[453px] flex-col gap-10">
            <div>
              <p className="text-lg leading-[1.6] text-brand">{eyebrow}</p>
              <h1 className="font-poppins text-[44px] leading-[1.2] font-semibold tracking-[-0.44px] text-ink">{title}</h1>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col items-end gap-6">
              {fields.map((f) => (
                <label key={f.name} className="flex w-full flex-col gap-2 text-sm leading-[1.2] font-medium text-ink">
                  {f.label}
                  <input
                    required
                    name={f.name}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    placeholder={f.placeholder}
                    minLength={f.type === "password" ? 8 : undefined}
                    className="h-[52px] rounded-xl border border-[#e5e6e8] px-6 text-lg leading-[1.6] font-normal outline-none placeholder:text-muted focus:border-brand"
                  />
                </label>
              ))}
              <Button>{submit}</Button>
            </form>
          </div>

          {social && (
            <div className="flex flex-col items-center gap-10">
              <div className="flex w-[453px] items-center gap-[11px] text-lg leading-[1.6] text-[#888]">
                <span className="h-px w-[200px] bg-[#d1d1d1]" />
                or
                <span className="h-px w-[200px] bg-[#d1d1d1]" />
              </div>
              <div className="flex gap-4">
                {[["d93bc.svg", "Continue with Facebook"], ["4d27b.svg", "Continue with Google"]].map(([icon, label]) => (
                  <button key={icon} type="button" aria-label={label} className="grid size-[72px] place-items-center rounded-3xl border border-[#d1d1d1] transition hover:border-brand">
                    <Image src={a(icon)} alt="" width={40} height={40} />
                  </button>
                ))}
              </div>
            </div>
          )}

          <p className="flex gap-1 leading-[1.6] text-[#888]">{footer}</p>
        </section>
      </Canvas>
      </div>
    </main>
  );
}
