import Image from "next/image";
import { a } from "@/lib/figma";
import H2 from "@/components/ui/H2";

const modules = [
  ["Module 1: Introduction to Digital Assets", "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation."],
  ["Module 2: Design Principles for Impact", "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills."],
  ["Module 4: User-Centric Design Strategies", "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design."],
  ["Module 5: Interactive Media and Engagement", "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences."],
  ["Module 6: Project Showcase and Critique", "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence."],
  ["Module 7: Optimizing Digital Assets for Various Platforms", "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes."],
];

export default function CourseLessons() {
  return (
    <>
      <H2>Explore the Modules</H2>
      <p>Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p>
      <H2>Lesson List</H2>
      {modules.map(([title, text]) => (
        <div key={title} className="flex items-center gap-[13px]">
          <span className="shrink-0 rounded-3xl bg-lime p-4">
            <Image src={a("79b89.svg")} alt="" width={40} height={40} />
          </span>
          <div className="flex w-[638px] flex-col gap-1">
            <p className="leading-[1.2] font-medium text-ink">{title}</p>
            <p>{text}</p>
          </div>
        </div>
      ))}
      <H2>Lesson Content</H2>
      <p>Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.</p>
      <H2>Lesson Progress Tracking</H2>
      <p>Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
      <div className="flex w-full flex-col gap-2 rounded-2xl border border-line bg-white p-4">
        <p className="text-sm leading-[1.2] font-medium text-ink">Learning Progress</p>
        <p className="font-poppins text-4xl leading-[1.2] font-semibold tracking-[-0.36px] text-ink">55%</p>
        <div className="h-2 rounded-3xl bg-[#e5e6e8]">
          <div className="h-2 w-[56%] rounded-3xl bg-lime" />
        </div>
      </div>
    </>
  );
}
