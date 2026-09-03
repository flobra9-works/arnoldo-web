import type { TimelineBeat } from "@/content/geschichte";

export function Timeline({ beats }: { beats: TimelineBeat[] }) {
  return (
    <ol className="mt-16 space-y-14">
      {beats.map((beat) => (
        <li key={beat.year} className="grid gap-3 border-t border-gold/40 pt-8 md:grid-cols-[7rem_1fr]">
          <p className="text-xs uppercase tracking-[0.22em] text-pistachio">{beat.year}</p>
          <div>
            <h2 className="font-display text-2xl">{beat.title}</h2>
            <p className="mt-2 text-espresso/65">{beat.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
