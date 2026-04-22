type MiniChartProps = {
  values: number[];
  up: boolean;
  className?: string;
};

function buildPath(values: number[], width: number, height: number): string {
  if (values.length === 0) return "";
  const min = Math.min(...values);
  const max = Math.max(...values);
  const pad = 2;
  const span = max - min || 1;
  const step = values.length > 1 ? (width - pad * 2) / (values.length - 1) : 0;

  return values
    .map((v, i) => {
      const x = pad + i * step;
      const t = (v - min) / span;
      const y = height - pad - t * (height - pad * 2);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

export function MiniChart({ values, up, className = "" }: MiniChartProps) {
  const w = 160;
  const h = 52;
  const stroke = up ? "#f04452" : "#3182f6";
  const fill = up ? "rgba(240, 68, 82, 0.12)" : "rgba(49, 130, 246, 0.12)";
  const pathLine = buildPath(values, w, h);
  const pathArea =
    values.length > 0 ? `${pathLine} L ${w - 2} ${h - 2} L 2 ${h - 2} Z` : "";

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={`w-full max-h-[52px] ${className}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <path d={pathArea} fill={fill} />
      <path
        d={pathLine}
        fill="none"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
