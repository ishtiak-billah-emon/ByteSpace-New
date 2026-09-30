import Image from "next/image";
import Link from "next/link";
import { a } from "@/lib/figma";

export default function Logo({ color }: { color: string }) {
  return (
    <Link href="/" className="flex items-start gap-2 font-clash text-2xl font-bold" style={{ color }}>
      <Image src={a("b8d7a.svg")} alt="" width={29} height={32} />
      <span className="mt-[7px]">ByteSpace</span>
    </Link>
  );
}
