type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  centered?: boolean;
  splitAfter?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  accent,
  description,
  centered = false,
  splitAfter,
}: SectionHeaderProps) {
  const [beforeAccent, afterAccent] = splitAfter && title.includes(splitAfter) ? title.split(splitAfter, 2) : [title, ""];

  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-sm font-bold uppercase tracking-[0.34em] text-[color:var(--muted)]">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold uppercase leading-[1.02] sm:text-4xl lg:text-5xl">
        {splitAfter ? (
          <>
            {beforeAccent}
            <span className="text-[color:var(--accent)]">{splitAfter}</span>
            {afterAccent}
          </>
        ) : (
          <>
            {title}
            {accent ? <span className="text-[color:var(--accent)]"> {accent}</span> : null}
          </>
        )}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}