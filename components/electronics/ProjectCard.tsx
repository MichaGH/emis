import type { ElectronicsProject } from "@/lib/types";

function Screw({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute flex h-3 w-3 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 ${className}`}
    >
      <span className="h-px w-2 rotate-45 bg-white/40" />
    </span>
  );
}

// Karta realizácie — hlavička ako čelný štítok prístroja (skrutky, kontrolka, kód).
export function ProjectCard({ project }: { project: ElectronicsProject }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[22px] bg-white ring-1 ring-black/[0.07] transition-shadow hover:shadow-[0_24px_50px_-30px_rgba(6,15,38,0.45)]">
      <div className="relative bg-dark px-6 pb-6 pt-7 text-white">
        <Screw className="left-3 top-3" />
        <Screw className="right-3 top-3" />
        <Screw className="bottom-3 left-3" />
        <Screw className="bottom-3 right-3" />

        <div className="flex items-center justify-between gap-3 px-2">
          <span className="text-[13px] font-semibold text-dark-muted">
            {project.category}
          </span>
          <span
            aria-hidden
            className="h-2 w-2 rounded-full bg-[#4ade80]"
          />
        </div>
        <p className="mt-3 px-2 text-[1.9rem] font-extrabold leading-none tracking-[0.02em]">
          {project.code}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-foreground">
          {project.description}
        </p>
        {project.client && (
          <p className="mt-5 border-t border-border pt-4 text-sm font-semibold">
            <span className="text-muted">Pre </span>
            {project.client}
          </p>
        )}
      </div>
    </article>
  );
}
