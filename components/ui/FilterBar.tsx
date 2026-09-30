import Image from "next/image";
import { a } from "@/lib/figma";

const filters = [
  { label: "Filter", icon: "25350.svg" },
  { label: "Level", icon: "f5a09.svg" },
  { label: "Category", icon: "34c7e.svg" },
];

export default function FilterBar() {
  const chip = "flex items-center gap-1 rounded-3xl border border-line bg-white px-4 py-3 leading-[1.2] font-medium text-body transition hover:border-brand";
  return (
    <div className="mx-auto flex w-[1201px] items-start justify-between">
      <div className="flex gap-4">
        {filters.map((f) => (
          <button key={f.label} className={chip}>
            <Image src={a(f.icon)} alt="" width={24} height={24} />
            {f.label}
          </button>
        ))}
      </div>
      <button className={chip}>
        <Image src={a("d4e04.svg")} alt="" width={24} height={24} />
        Most relevant
      </button>
    </div>
  );
}
