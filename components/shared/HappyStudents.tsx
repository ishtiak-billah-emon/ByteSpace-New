import Image from "next/image";
import { a } from "@/lib/figma";

export const studentAvatars = ["d0fbe", "cb015", "b27d0", "85dac", "50032", "ce2e1", "9c73f"];

export default function HappyStudents({ className, lime = false }: { className: string; lime?: boolean }) {
  return (
    <div className={`absolute flex w-[258px] flex-col gap-2 rounded-2xl p-4 ${lime ? "bg-lime" : "bg-white"} backdrop-blur-[10px] ${className}`}>
      <div>
        <p className="leading-[1.2] font-medium text-ink">Happy Students</p>
        <p className="flex items-center text-xs leading-[1.6] text-muted">
          <span className="text-ink">4.5&nbsp;</span>(240)
          <Image src={a(lime ? "53d34.svg" : "4fa90.svg")} alt="" width={16} height={16} className="p-[1px_1.5px_2.5px]" />
        </p>
      </div>
      <div className="flex">
        {studentAvatars.map((h) => (
          <Image key={h} src={a(`${h}.png`)} alt="" width={43} height={43} className="-mr-4 rounded-full" />
        ))}
        <div className="relative size-[43px]">
          <Image src={a(lime ? "abf79.svg" : "0ec7a.svg")} alt="" width={43} height={43} />
          <span className={`absolute top-[13px] text-xs leading-[1.5] font-bold ${lime ? "left-[9px] text-soft" : "left-3 text-ink"}`}>2K+</span>
        </div>
      </div>
    </div>
  );
}
