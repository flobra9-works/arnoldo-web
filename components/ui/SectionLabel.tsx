export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-espresso/65">
      <span className="h-px w-8 bg-gold" aria-hidden />
      {children}
    </p>
  );
}
