import { SyntheticEvent } from "react";
export default function Animation() {
  return (
    <div className="flex flex-wrap absolute top-0 left-0 ">
      {[...Array(500)].map((_, index) => (
        <div
          key={index}
          className="p-4 transition-all duration-500 border border-[rgba(255,255,255,0.06)] aspect-square h-[48px]"
          onMouseEnter={(e: SyntheticEvent) => {
            const target = e.target as HTMLDivElement;
            target.classList.add("bg-[rgba(255,255,255,0.08)]");
          }}
          onMouseLeave={(e: SyntheticEvent) => {
            const target = e.target as HTMLDivElement;
            target.classList.remove("bg-[rgba(255,255,255,0.08)]");
          }}
        ></div>
      ))}
    </div>
  );
}
