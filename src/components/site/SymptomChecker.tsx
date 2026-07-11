import { useMemo, useState } from "react";
import {
  Check,
  X,
  ArrowRight,
  ArrowLeft,
  CalendarCheck,
  ShieldCheck,
  Eye,
  Sparkles,
  RotateCcw,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./SectionHeader";
import { CLINIC } from "@/lib/clinic";
import { WhatsAppIcon } from "./WhatsAppIcon";

const SYMPTOMS = [
  { id: "blurry", label: "Blurry vision even with updated glasses" },
  { id: "ghosting", label: "Ghosting or double images while reading" },
  { id: "power", label: "Frequent prescription / power changes" },
  { id: "halos", label: "Halos or starbursts around lights at night" },
  { id: "rubbing", label: "Habit of eye rubbing or eye allergies" },
  { id: "family", label: "Family history of keratoconus" },
] as const;

function CircularProgress({
  value,
  max,
  size = 72,
  stroke = 6,
}: {
  value: number;
  max: number;
  size?: number;
  stroke?: number;
}) {
  const pct = max > 0 ? value / max : 0;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference * pct;

  let color = "var(--color-primary)";
  if (pct >= 3 / 7) color = "#e85d3a";
  else if (pct >= 1 / 7) color = "#d4842a";
  else color = "#5a8a5c";

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-muted/60"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={`${dash} ${circumference}`}
          strokeLinecap="round"
          style={{ transition: "stroke-dasharray 0.5s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-base sm:text-lg font-bold tabular-nums">
          {value}
          <span className="text-[10px] sm:text-xs font-medium text-muted-foreground">
            /{max}
          </span>
        </span>
      </div>
    </div>
  );
}

export function SymptomChecker() {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [step, setStep] = useState(0);

  const score = useMemo(
    () => Object.values(answers).filter((v) => v === true).length,
    [answers],
  );
  const answered = Object.keys(answers).length;
  const complete = answered === SYMPTOMS.length;

  const current = SYMPTOMS[step];
  const currentAnswer = current ? answers[current.id] : undefined;

  const verdict = !complete
    ? null
    : score >= 3
      ? {
          tone: "high" as const,
          title: "Several signs suggest a closer look is warranted.",
          body: "This is not a diagnosis - but with multiple matching symptoms, a corneal mapping (topography) evaluation is the calm, sensible next step. Early detection makes treatment dramatically easier.",
        }
      : score >= 1
        ? {
            tone: "mid" as const,
            title: "A few signs are present.",
            body: "These symptoms can have many causes. A quick corneal mapping at the clinic can rule keratoconus in or out - and give you peace of mind either way.",
          }
        : {
            tone: "low" as const,
            title: "Low likelihood from the symptoms checked.",
            body: "Your answers don't strongly suggest keratoconus. If symptoms persist, a routine eye check is still a good idea.",
          };

  const progressPct = (answered / SYMPTOMS.length) * 100;

  const answer = (val: boolean) => {
    if (!current) return;
    setAnswers((a) => ({ ...a, [current.id]: val }));
    if (step < SYMPTOMS.length - 1) {
      setTimeout(() => setStep((s) => Math.min(s + 1, SYMPTOMS.length - 1)), 180);
    } else {
      setTimeout(() => setStep(SYMPTOMS.length), 180);
    }
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  const showingResult = step >= SYMPTOMS.length;

  return (
    <section id="symptom-checker" className="container-page py-10 sm:py-14 scroll-mt-20">
      <SectionHeader
        align="center"
        eyebrow="Symptom checker"
        title="Do I have keratoconus?"
        subtitle="Answer 6 quick questions. This is not a diagnosis - it's a calm starting point to decide whether a corneal mapping evaluation is worth your time."
      />

      <div className="mt-8 max-w-5xl mx-auto">
        {/* Progress bar */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Progress
          </span>
          <span className="text-xs font-semibold tabular-nums text-muted-foreground">
            {Math.min(step + (showingResult ? 0 : 1), SYMPTOMS.length)}/{SYMPTOMS.length}
          </span>
        </div>
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${showingResult ? 100 : progressPct}%` }}
          />
        </div>
      </div>

      {/* Mobile / tablet: merged single card */}
      <div className="mt-6 lg:hidden max-w-2xl mx-auto">
        <div className="rounded-3xl border border-border bg-card p-5 sm:p-7 shadow-soft">
          {/* Compact score header */}
          <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border">
            <CircularProgress value={score} max={SYMPTOMS.length} size={48} stroke={4} />
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary inline-flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" /> Your result
              </div>
              <div className="text-xs text-muted-foreground mt-0.5 truncate">
                {answered === 0
                  ? "Tap Yes or No to begin."
                  : showingResult
                    ? "All answers complete."
                    : `${answered} of ${SYMPTOMS.length} answered`}
              </div>
            </div>
          </div>

          {!showingResult && current ? (
            <>
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span>Question {step + 1} of {SYMPTOMS.length}</span>
                {currentAnswer !== undefined && (
                  <span className="inline-flex items-center gap-1 text-primary">
                    <Check className="h-3 w-3" /> Answered
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-lg sm:text-xl font-semibold leading-snug">
                {current.label}
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  onClick={() => answer(true)}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-sm font-semibold border transition-all ${
                    currentAnswer === true
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-background border-border hover:bg-muted hover:border-primary/30"
                  }`}
                >
                  <Check className="h-4 w-4" /> Yes
                </button>
                <button
                  onClick={() => answer(false)}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-sm font-semibold border transition-all ${
                    currentAnswer === false
                      ? "bg-foreground text-background border-foreground shadow-sm"
                      : "bg-background border-border hover:bg-muted hover:border-foreground/20"
                  }`}
                >
                  <X className="h-4 w-4" /> No
                </button>
              </div>

              <div className="mt-5 flex items-center justify-center gap-1.5">
                {SYMPTOMS.map((s, i) => {
                  const a = answers[s.id];
                  const isCurrent = i === step;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setStep(i)}
                      aria-label={`Go to question ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        isCurrent
                          ? "w-6 bg-primary"
                          : a !== undefined
                            ? "w-2 bg-primary/40"
                            : "w-2 bg-muted-foreground/25"
                      }`}
                    />
                  );
                })}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                <button
                  onClick={() =>
                    setStep((s) =>
                      complete ? SYMPTOMS.length : Math.min(SYMPTOMS.length - 1, s + 1),
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
                >
                  {step === SYMPTOMS.length - 1 ? "See result" : "Skip"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </>
          ) : verdict ? (
            <div className="animate-fade-in">
              <div
                className={`rounded-2xl p-4 mb-4 ${
                  verdict.tone === "high"
                    ? "bg-destructive/8 border border-destructive/15"
                    : verdict.tone === "mid"
                      ? "bg-amber-500/8 border border-amber-500/15"
                      : "bg-emerald-500/8 border border-emerald-500/15"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck
                    className={`h-4 w-4 ${
                      verdict.tone === "high"
                        ? "text-destructive"
                        : verdict.tone === "mid"
                          ? "text-amber-500"
                          : "text-emerald-500"
                    }`}
                  />
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      verdict.tone === "high"
                        ? "text-destructive"
                        : verdict.tone === "mid"
                          ? "text-amber-500"
                          : "text-emerald-500"
                    }`}
                  >
                    {verdict.tone === "high"
                      ? "Higher concern"
                      : verdict.tone === "mid"
                        ? "Moderate concern"
                        : "Lower concern"}
                  </span>
                </div>
                <h3 className="text-base font-semibold leading-snug">
                  {verdict.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {verdict.body}
              </p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                For information only · not a medical diagnosis
              </p>
              <div className="mt-5 grid gap-2.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-soft hover:opacity-90 transition-opacity"
                >
                  <CalendarCheck className="h-4 w-4" /> Book a corneal mapping
                </Link>
                <a
                  href={CLINIC.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-background border border-border px-5 py-3 text-sm font-semibold hover:bg-muted transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp the clinic
                </a>
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mt-1"
                >
                  <RotateCcw className="h-3 w-3" /> Reset answers
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Desktop: two cards side by side */}
      <div className="mt-6 hidden lg:grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
        {/* Question card */}
        <div className="rounded-3xl border border-border bg-card p-5 sm:p-8 shadow-soft flex flex-col">
          {!showingResult && current ? (
            <>
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span>Question {step + 1} of {SYMPTOMS.length}</span>
                {currentAnswer !== undefined && (
                  <span className="inline-flex items-center gap-1 text-primary">
                    <Check className="h-3 w-3" /> Answered
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-xl sm:text-2xl font-semibold leading-snug">
                {current.label}
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  onClick={() => answer(true)}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-sm font-semibold border transition-all ${
                    currentAnswer === true
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-background border-border hover:bg-muted hover:border-primary/30"
                  }`}
                >
                  <Check className="h-4 w-4" /> Yes
                </button>
                <button
                  onClick={() => answer(false)}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-sm font-semibold border transition-all ${
                    currentAnswer === false
                      ? "bg-foreground text-background border-foreground shadow-sm"
                      : "bg-background border-border hover:bg-muted hover:border-foreground/20"
                  }`}
                >
                  <X className="h-4 w-4" /> No
                </button>
              </div>

              {/* Step dots */}
              <div className="mt-6 flex items-center justify-center gap-1.5">
                {SYMPTOMS.map((s, i) => {
                  const a = answers[s.id];
                  const isCurrent = i === step;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setStep(i)}
                      aria-label={`Go to question ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        isCurrent
                          ? "w-6 bg-primary"
                          : a !== undefined
                            ? "w-2 bg-primary/40"
                            : "w-2 bg-muted-foreground/25"
                      }`}
                    />
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-between mt-auto">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                <button
                  onClick={() =>
                    setStep((s) =>
                      complete ? SYMPTOMS.length : Math.min(SYMPTOMS.length - 1, s + 1),
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
                >
                  {step === SYMPTOMS.length - 1 ? "See result" : "Skip"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-8 h-full">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">All questions answered</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                Your result is on the {complete ? "right" : "side"}. You can revisit any answer below.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {SYMPTOMS.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setStep(i)}
                    className="h-8 w-8 rounded-full border border-border text-xs font-semibold hover:border-primary/40 hover:bg-muted transition-colors"
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={reset}
                className="mt-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <RotateCcw className="h-3 w-3" /> Reset answers
              </button>
            </div>
          )}
        </div>

        {/* Result card */}
        <aside className="rounded-3xl bg-card border border-border p-5 sm:p-8 shadow-soft flex flex-col">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <Sparkles className="h-4 w-4" /> Your result
          </div>

          <div className="mt-5 flex items-center gap-4">
            <CircularProgress value={score} max={SYMPTOMS.length} />
            <div className="min-w-0">
              <div className="text-2xl font-bold tabular-nums">
                {score}
                <span className="text-muted-foreground text-base font-medium">
                  {" "}
                  / {SYMPTOMS.length}
                </span>
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {answered === 0
                  ? "Tap Yes or No to begin."
                  : complete
                    ? "All answers complete."
                    : `${answered} of ${SYMPTOMS.length} answered`}
              </div>
            </div>
          </div>

          {verdict ? (
            <div className="mt-6 animate-fade-in flex-1 flex flex-col">
              <div
                className={`rounded-2xl p-4 mb-4 ${
                  verdict.tone === "high"
                    ? "bg-destructive/8 border border-destructive/15"
                    : verdict.tone === "mid"
                      ? "bg-amber-500/8 border border-amber-500/15"
                      : "bg-emerald-500/8 border border-emerald-500/15"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck
                    className={`h-4 w-4 ${
                      verdict.tone === "high"
                        ? "text-destructive"
                        : verdict.tone === "mid"
                          ? "text-amber-500"
                          : "text-emerald-500"
                    }`}
                  />
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      verdict.tone === "high"
                        ? "text-destructive"
                        : verdict.tone === "mid"
                          ? "text-amber-500"
                          : "text-emerald-500"
                    }`}
                  >
                    {verdict.tone === "high"
                      ? "Higher concern"
                      : verdict.tone === "mid"
                        ? "Moderate concern"
                        : "Lower concern"}
                  </span>
                </div>
                <h3 className="text-base font-semibold leading-snug">
                  {verdict.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {verdict.body}
              </p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                For information only · not a medical diagnosis
              </p>
              <div className="mt-5 grid gap-2.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-soft hover:opacity-90 transition-opacity"
                >
                  <CalendarCheck className="h-4 w-4" /> Book a corneal mapping
                </Link>
                <a
                  href={CLINIC.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-background border border-border px-5 py-3 text-sm font-semibold hover:bg-muted transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp the clinic
                </a>
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mt-1"
                >
                  <RotateCcw className="h-3 w-3" /> Reset answers
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-6 flex-1 flex flex-col">
              <div className="flex items-start gap-3 rounded-2xl bg-muted/50 p-4">
                <Eye className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Most patients we see waited too long because they thought it
                  was &lsquo;just&rsquo; a new glasses number. Catching it
                  early is the single biggest factor in keeping vision stable.
                </p>
              </div>
              <Link
                to="/keratoconus"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
              >
                What is keratoconus? <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
