type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, subtitle, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "max-w-3xl mx-auto text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
