
export default function LearningProgress({ className }: { className: string }) {
  return (
    <div className={`absolute flex flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px] ${className}`}>
      <p className="text-sm leading-[1.2] font-medium text-ink">Learning Progress</p>
      <p className="w-[200px] font-poppins text-5xl leading-[1.2] font-semibold tracking-[-0.48px] text-ink">55%</p>
      <div className="h-2 w-[200px] rounded-3xl bg-[#f6f6f6]">
        <div className="h-2 w-[112px] rounded-3xl bg-lime" />
      </div>
    </div>
  );
}
