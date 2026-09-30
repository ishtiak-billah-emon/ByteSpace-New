import Image from "next/image";
import { a } from "@/lib/figma";
import Button from "@/components/ui/Button";
import CourseGrid from "@/components/ui/CourseGrid";
import FilterBar from "@/components/ui/FilterBar";
import BlueHero from "../../components/layout/BlueHero";
import Footer from "../../components/layout/Footer";

export const metadata = { title: "PurePearl Studio — ByteSpace" };

export default function CreatorPage() {
  return (
    <main>
      <BlueHero height={592} active="/creator">
        <div className="absolute top-[172px] left-[122px] flex w-[1198px] flex-col gap-10 text-soft">
          <div className="flex items-center gap-6">
            <Image src={a("e8eff.png")} alt="PurePearl Studio" width={96} height={96} className="rounded-3xl object-cover" />
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2">
                <h1 className="font-poppins text-4xl leading-[1.2] font-semibold tracking-[-0.36px]">PurePearl Studio</h1>
                <span className="rounded-3xl bg-lime px-6 py-2 leading-[1.2] font-medium text-ink">Creator</span>
              </div>
              <p className="text-lg leading-[1.6]">Passionate UI/UX, Web designer</p>
            </div>
          </div>
          <div className="text-lg leading-[1.6]">
            <p>Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!</p>
            <p>Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.</p>
          </div>
          <div className="flex items-start justify-between">
            <div className="flex gap-4 text-lg leading-[1.2] font-medium">
              {[["3", "Products"], ["12", "Followers"]].map(([n, l]) => (
                <span key={l} className="flex gap-2 rounded-3xl bg-white px-6 py-3">
                  <span className="text-brand">{n}</span>
                  <span className="text-ink">{l}</span>
                </span>
              ))}
            </div>
            <Button>Follow</Button>
          </div>
        </div>
      </BlueHero>

      <section className="flex flex-col gap-10 py-[62px]">
        <FilterBar />
        <CourseGrid />
      </section>
      <Footer />
    </main>
  );
}
