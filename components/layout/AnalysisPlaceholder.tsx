import { Jua } from "next/font/google";

const analysisTitle = Jua({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: [
    "Malgun Gothic",
    "Apple SD Gothic Neo",
    "Noto Sans KR",
    "system-ui",
    "sans-serif",
  ],
});

type AnalysisPlaceholderProps = {
  title: string;
  description?: string;
};

export function AnalysisPlaceholder({
  title,
  description = "",
}: AnalysisPlaceholderProps) {
  return (
    <div className="mx-auto w-full max-w-[min(100%,1400px)]">
      <header className="mb-8">
        <h1
          className={`${analysisTitle.className} text-[21px] font-normal leading-snug tracking-[-0.01em] text-sf-text sm:text-[23px]`}
        >
          {title}
        </h1>
        <p className="mt-2 text-[15px] leading-relaxed text-sf-muted">
          {description}
        </p>
      </header>
      <div className="rounded-[20px] bg-sf-card p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-sf-line/70">
        <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
          <span className="rounded-full bg-sf-field px-3 py-1 text-xs font-semibold text-sf-muted">
            준비 중
          </span>
        </div>
      </div>
    </div>
  );
}
