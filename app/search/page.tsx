import Image from "next/image";
import { a } from "@/lib/figma";
import { courses } from "@/lib/data/courses";
import Button from "@/components/ui/Button";
import CourseGrid from "@/components/ui/CourseGrid";
import FilterBar from "@/components/ui/FilterBar";
import Pill from "@/components/ui/Pill";
import BlueHero from "../../components/layout/BlueHero";
import Footer from "../../components/layout/Footer";

export const metadata = { title: "Find Your Next Course — ByteSpace" };

const tabs = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Cooking"];

export default function SearchPage() {
  return (
    <main>
      <BlueHero height={360} active="/search">
        <div className="absolute top-[164px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-8">
          <h1 className="font-poppins text-4xl leading-[1.2] font-semibold tracking-[-0.36px] text-soft">Find Your Next Course</h1>
          <form role="search" className="flex gap-4">
            <label className="flex h-[52px] w-[461px] items-center gap-2 rounded-3xl bg-white px-6">
              <Image src={a("7c340.svg")} alt="" width={24} height={24} />
              <input type="search" name="q" placeholder="Search" className="w-full bg-transparent text-lg leading-[1.6] text-ink outline-none placeholder:text-muted" />
            </label>
            {/* ponytail: category dropdown is visual only until there's data to filter */}
            <Button className="flex items-center gap-2">
              Courses
              <Image src={a("fdb7a.svg")} alt="" width={24} height={24} />
            </Button>
          </form>
        </div>
      </BlueHero>

      <section className="pt-[72px] pb-[72px]">
        <FilterBar />
        <div className="mx-auto mt-8 flex w-[1200px] justify-between">
          {tabs.map((t, i) => (
            <button key={t}><Pill active={i === 0}>{t}</Pill></button>
          ))}
        </div>
        <div className="mt-[77px]">
          <CourseGrid list={[...courses, ...courses, ...courses]} />
        </div>

        <nav aria-label="Pagination" className="mt-[72px] flex items-center justify-center gap-6 text-lg leading-7 font-medium text-body">
          <button aria-label="Previous page" className="grid h-12 w-14 place-items-center rounded-3xl border border-line hover:border-brand">
            <Image src={a("6d1bc.svg")} alt="" width={24} height={24} />
          </button>
          {[1, 2, 3, 4, 5].map((n) => (
            <a key={n} href="#" aria-current={n === 1 ? "page" : undefined} className={n === 1 ? "text-brand" : "hover:text-brand"}>{n}</a>
          ))}
          <button aria-label="Next page" className="grid h-12 w-14 place-items-center rounded-3xl border border-line hover:border-brand">
            <Image src={a("1940f.svg")} alt="" width={24} height={24} />
          </button>
        </nav>
      </section>
      <Footer />
    </main>
  );
}
