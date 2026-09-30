import { courses, type Course } from "@/lib/data/courses";
import CourseCard from "./CourseCard";

export default function CourseGrid({ list = courses }: { list?: Course[] }) {
  return (
    <div className="mx-auto grid w-full max-w-[1199px] grid-cols-1 justify-items-center gap-5 px-4 sm:grid-cols-2 sm:gap-6 sm:px-0 xl:grid-cols-3 xl:gap-10">
      {list.map((c, i) => <CourseCard key={i} course={c} />)}
    </div>
  );
}
