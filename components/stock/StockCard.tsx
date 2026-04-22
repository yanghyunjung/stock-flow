import type { WatchlistItem } from "@/lib/mockWatchlist";
import { MiniChart } from "./MiniChart";

function formatPrice(n: number): string {
  return n.toLocaleString("ko-KR");
}

function formatChange(p: number): string {
  const sign = p > 0 ? "+" : "";
  return `${sign}${p.toFixed(2)}%`;
}

type StockCardProps = {
  item: WatchlistItem;
};

export function StockCard({ item }: StockCardProps) {
  const up = item.changePercent >= 0;
  const changeClass = up ? "text-sf-up" : "text-sf-down";

  return (
    <article className="group flex flex-col rounded-[20px] bg-sf-card p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-sf-line/70 transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-[12px] font-medium tracking-tight text-sf-muted">
            {item.symbol}
          </p>
          <h2 className="mt-0.5 truncate text-[17px] font-bold tracking-[-0.02em] text-sf-text">
            {item.name}
          </h2>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-mono text-[17px] font-bold tabular-nums tracking-tight text-sf-text">
            {formatPrice(item.price)}
            <span className="ml-0.5 text-[13px] font-semibold text-sf-muted">
              원
            </span>
          </p>
          <p
            className={`mt-0.5 font-mono text-[13px] font-semibold tabular-nums ${changeClass}`}
          >
            {formatChange(item.changePercent)}
          </p>
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-sf-field/80 p-3 ring-1 ring-inset ring-black/3">
        <MiniChart values={item.sparkline} up={up} />
      </div>
    </article>
  );
}
