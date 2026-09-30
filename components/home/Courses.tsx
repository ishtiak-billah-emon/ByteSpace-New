import Image from "next/image";
import { a } from "@/lib/figma";
import CourseGrid from "@/components/ui/CourseGrid";

function SectionHeading({ title, text, titleClass }: { title: string; text: string; titleClass: string }) {
  return (
    <div className="mx-auto flex w-full max-w-[917px] flex-col items-center gap-4 px-4 text-center sm:px-6">
      <h2 className={`font-poppins leading-[1.2] font-semibold text-[#040819] ${titleClass}`}>{title}</h2>
      <p className="text-lg leading-[1.6] text-muted">{text}</p>
    </div>
  );
}

const tabRows = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

const categories = [
  { name: "Design", icon: "02f93.svg" },
  { name: "Development", icon: "53111.svg" },
  { name: "IT & Software", icon: "16811.svg" },
  { name: "Business", icon: "375cd.svg" },
  { name: "Marketing", icon: "b0c08.svg" },
  { name: "Photography", icon: "32a0b.svg" },
];

export default function Courses() {
  return (
    <section className="px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 xl:px-0 xl:pt-[72px] xl:pb-[120px]">
      <SectionHeading
        title="Discover Your Passion, Build Your Skills"
        titleClass="w-full max-w-[588px] text-[clamp(2rem,5vw,2.75rem)] tracking-[-0.03em] xl:text-[44px] xl:tracking-[-0.44px]"
        text="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />

      <div className="mt-[42px] flex flex-col items-center gap-[21px]">
        {tabRows.map((row, i) => (
          <div key={i} className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {row.map((t) => (
              <button
                key={t}
                className={`min-h-11 max-w-full rounded-3xl px-3 py-3 text-sm leading-[1.2] font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:px-4 sm:text-base ${t === "Featured" ? "bg-lime text-ink" : "bg-soft text-body hover:bg-[#e5e6e8]"}`}
              >
                {t}
              </button>
            ))}
            {i === tabRows.length - 1 && <a href="#" className="min-h-11 rounded-lg px-2 py-3 leading-[1.2] font-medium text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">+ More</a>}
          </div>
        ))}
      </div>

      <div className="mt-12 sm:mt-16 xl:mt-[77px]">
        <CourseGrid />
      </div>

      <div className="mt-16 sm:mt-20 xl:mt-[72px]">
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          titleClass="w-full max-w-[900px] text-[clamp(1.75rem,4vw,2.25rem)] tracking-[-0.02em] xl:text-4xl xl:tracking-[-0.36px]"
          text="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />
      </div>

      <div className="mx-auto mt-10 grid w-full max-w-[1202px] grid-cols-2 justify-items-center gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-5 xl:mt-[68px] xl:grid-cols-6 xl:gap-10">
        {categories.map((c) => (
          <a key={c.name} href="#" className="flex aspect-square w-full max-w-[167px] flex-col items-center justify-center gap-2 rounded-3xl border border-line transition hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:gap-3">
            <span className="rounded-[40px] bg-lime p-3">
              <Image src={a(c.icon)} alt="" width={36} height={36} />
            </span>
            <span className="px-1 text-center text-base leading-[1.2] font-medium text-ink sm:text-lg xl:text-xl">{c.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
