import Image from "next/image";
import { a } from "@/lib/figma";
import H2 from "@/components/ui/H2";
import Pill from "@/components/ui/Pill";

const breakdown: [number, number][] = [[720, 92.28], [120, 36.49], [21, 9.47], [12, 3.51], [16, 5.26]];

const reviews = [
  { name: "PurePearl Studio", img: "1ee12.png", text: "\"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!\"" },
  { name: "Albert Flores", img: "325e7.png", text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!" },
  { name: "Cody Fisher", img: "143ea.png", text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process." },
  { name: "Brooklyn Simmons", img: "551c8.png", text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout." },
];

function Stars() {
  return (
    <span className="flex gap-1" role="img" aria-label="5 stars">
      {Array.from({ length: 5 }, (_, i) => <Image key={i} src={a("93c08.svg")} alt="" width={24} height={24} />)}
    </span>
  );
}

export default function CourseReviews() {
  return (
    <>
      <H2>What Learners Are Saying</H2>
      <p>Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.</p>

      <div className="flex w-full items-center gap-6 rounded-2xl border border-line bg-white p-10">
        <div className="flex flex-col items-center rounded-lg bg-lime p-10 text-ink">
          <p className="text-sm leading-[1.2] font-medium">Ratings</p>
          <p className="font-poppins text-4xl leading-[1.2] font-semibold tracking-[-0.36px]">4.7</p>
        </div>
        <div className="flex flex-1 flex-col gap-1">
          {breakdown.map(([count, pct]) => (
            <div key={count} className="flex items-center gap-4">
              <div className="h-2 flex-1 rounded-3xl bg-[#e5e6e8]">
                <div className="h-2 rounded-3xl bg-lime" style={{ width: `${pct}%` }} />
              </div>
              <Stars />
              <span className="w-10 text-right">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <H2>Individual Reviews:</H2>
      <div className="flex gap-4">
        <button><Pill active>All rating</Pill></button>
        {[5, 4, 3, 2, 1].map((n) => (
          <button key={n}>
            <Pill><Image src={a("93c08.svg")} alt="" width={24} height={24} />{n}</Pill>
          </button>
        ))}
      </div>

      {reviews.map((r) => (
        <article key={r.name} className="flex w-full flex-col gap-6 rounded-3xl border border-line p-10">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex gap-3">
                <Image src={a(r.img)} alt={r.name} width={52} height={52} className="rounded-full" />
                <div>
                  <p className="text-lg leading-[1.2] font-medium text-ink">{r.name}</p>
                  <p>UI/UX Designer</p>
                </div>
              </div>
              <Stars />
            </div>
            <p>a year ago</p>
          </div>
          <p>{r.text}</p>
        </article>
      ))}
    </>
  );
}
