/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { a } from "@/lib/figma";
import Canvas from "@/components/layout/Canvas";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    img: "b6932.png",
    quote: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    img: "31926.png",
    quote: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    img: "c852a.png",
    quote: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#fafafa] min-[1440px]:overflow-hidden">
      <div className="relative mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:py-20 min-[1440px]:hidden">
        <div className="relative z-[1] flex flex-col gap-8 sm:gap-10">
          <div className="mx-auto flex w-full max-w-[900px] flex-col gap-4 text-center">
            <h2 className="font-poppins text-[clamp(2rem,5vw,2.75rem)] leading-[1.2] font-semibold tracking-[-0.03em] text-black">
              Discover What Our Community Is Saying
            </h2>
            <p className="text-base leading-[1.6] text-grey sm:text-lg">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-stretch gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex min-w-0 flex-col gap-5 rounded-3xl bg-white p-5 sm:p-6">
                <Image src={a(t.img)} alt={`${t.name}, ${t.role}`} width={80} height={80} className="size-16 rounded-full object-cover sm:size-20" />
                <figcaption>
                  <p className="font-poppins text-xl leading-7 font-semibold tracking-[-0.2px] text-black">{t.name}</p>
                  <p className="text-base leading-[1.6] text-brand sm:text-lg">{t.role}</p>
                </figcaption>
                <blockquote className="min-w-0 text-base leading-[1.6] text-grey sm:text-lg">&quot;{t.quote}&quot;</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden min-[1440px]:block">
      <Canvas className="h-[784px]">
        <img src={a("29172.svg")} alt="" className="absolute top-[-281px] left-[802px] size-[1217px] max-w-none" />
        <img src={a("5400e.svg")} alt="" className="absolute top-[-178px] left-[355px] size-[752px] max-w-none" />
        <img src={a("60d3b.svg")} alt="" className="absolute top-[109px] left-[-482px] size-[1217px] max-w-none" />

        <div className="absolute top-[74px] left-[118px] flex flex-col gap-[72px]">
          <div className="flex items-end gap-[43px]">
            <h2 className="w-[577px] font-poppins text-[44px] leading-[1.2] font-semibold tracking-[-0.44px] text-black">
              Discover What Our Community Is Saying
            </h2>
            <p className="w-[580px] text-lg leading-[1.6] text-grey">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
          <div className="flex items-start gap-[41px]">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col gap-6 rounded-3xl bg-white p-6">
                <Image src={a(t.img)} alt={t.name} width={80} height={80} className="rounded-full" />
                <figcaption className="whitespace-nowrap">
                  <p className="font-poppins text-xl leading-7 font-semibold tracking-[-0.2px] text-black">{t.name}</p>
                  <p className="text-lg leading-[1.6] text-brand">{t.role}</p>
                </figcaption>
                <blockquote className="w-[326px] text-lg leading-[1.6] text-grey">&quot;{t.quote}&quot;</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </Canvas>
      </div>
    </section>
  );
}
