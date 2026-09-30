import Image from "next/image";
import Link from "next/link";
import { a } from "@/lib/figma";
import { cardAvatars, type Course } from "@/lib/data/courses";

export default function CourseCard({ course, dark = false, className = "relative" }: { course: Course; dark?: boolean; className?: string }) {
  return (
    <Link href="/course" className={`relative block h-[384px] w-full max-w-[373px] min-w-0 shrink-0 overflow-hidden rounded-3xl border border-line bg-white transition hover:shadow-lg hover:shadow-black/10 ${className}`}>
      <div className="absolute top-[15px] right-[15px] left-[15px] h-[195px] overflow-hidden rounded-xl bg-[#443131]">
        <Image src={a(course.img)} alt="" fill sizes="341px" className="object-cover" />
        <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-2 sm:top-[150px] sm:right-auto sm:bottom-auto sm:left-[13px] sm:flex-nowrap sm:gap-3">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((t) => (
            <span key={t} className="rounded-3xl bg-[rgba(246,246,246,0.6)] px-2 py-1.5 text-[11px] leading-[1.2] font-medium text-grey backdrop-blur-[4px] sm:px-3 sm:text-xs">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-[231px] right-[15px] left-[15px] flex min-w-0 flex-col gap-4">
        <div className="min-w-0 pr-[62px]">
          <h3 title={course.title} className="max-w-[280px] truncate font-poppins text-lg leading-[1.2] font-semibold tracking-[-0.2px] text-black sm:text-xl">{course.title}</h3>
          <p className="text-xs leading-[1.6] text-grey">
            by <span className="text-brand">purepearl studio</span>
          </p>
        </div>
        <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
          <span className="flex items-center gap-1 rounded-3xl bg-soft px-3 py-1.5 text-xs leading-[1.2] font-medium text-body">
            <Image src={a("b9640.svg")} alt="" width={20} height={20} />
            Beginner
          </span>
          <div className="flex">
            {cardAvatars.map((h) => (
              <Image key={h} src={a(`${h}.png`)} alt="" width={32} height={32} className="-mr-2 rounded-full" />
            ))}
            <div className="relative size-8">
              <Image src={a(dark ? "d20ec.svg" : "2d215.svg")} alt="" width={32} height={32} />
              <span className={`absolute inset-0 grid place-items-center text-xs font-medium ${dark ? "text-white" : "text-ink"}`}>26+</span>
            </div>
          </div>
        </div>
        <p className="flex items-end">
          <span className="font-poppins text-xl leading-[1.2] font-semibold tracking-[-0.2px] text-brand">$25</span>
          <span className="text-xs leading-[1.6] text-grey">/lifetime</span>
        </p>
      </div>

      <div className="absolute top-[231px] right-[15px] flex items-center text-base leading-[1.6] text-grey sm:text-lg">
        4.5&nbsp;
        <Image src={a(dark ? "1d448.svg" : "5e7f1.svg")} alt="" width={24} height={24} />
      </div>
    </Link>
  );
}
