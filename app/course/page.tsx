import Image from "next/image";
import { a } from "@/lib/figma";
import H2 from "@/components/ui/H2";

const peeks = ["f50f8.jpg", "277ad.jpg", "53d66.jpg", "cda37.jpg"];
const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

export default function CourseAbout() {
  return (
    <>
      <H2>Description</H2>
      <div className="flex flex-col gap-[1.6em]">
        <p>Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.</p>
        <p>In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.</p>
        <p>As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.</p>
      </div>
      <H2>Sneak Peak</H2>
      <div className="flex w-[725px] justify-between">
        {peeks.map((p) => (
          <div key={p} className="relative h-[125px] w-[167px] overflow-hidden rounded-2xl bg-[#d9d9d9]">
            <Image src={a(p)} alt="" fill sizes="167px" className="object-cover" />
          </div>
        ))}
      </div>
      <H2>Key Points</H2>
      <ul className="flex flex-col gap-3">
        {keyPoints.map((k) => (
          <li key={k} className="flex gap-2">
            <Image src={a("1e773.svg")} alt="" width={24} height={24} />
            {k}
          </li>
        ))}
      </ul>
    </>
  );
}
