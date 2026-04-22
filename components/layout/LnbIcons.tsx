import type { LnbIconKind } from "@/lib/lnbNav";
import {
  BarChart3,
  Building2,
  Coins,
  Globe,
  LayoutGrid,
  Layers,
  LineChart,
  MapPin,
  type LucideIcon,
} from "lucide-react";

type LnbIconProps = {
  kind: LnbIconKind;
  className?: string;
};

const icons: Record<LnbIconKind, LucideIcon> = {
  individual: LineChart,
  dividend: Coins,
  bigtech: LayoutGrid,
  schd: Layers,
  krEtf: Building2,
  krStocks: MapPin,
  usEtf: Globe,
  usStocks: BarChart3,
};

export function LnbIcon({ kind, className = "" }: LnbIconProps) {
  const Icon = icons[kind];
  if (!Icon) return null;
  return (
    <Icon
      className={`size-[22px] shrink-0 ${className}`}
      strokeWidth={1.75}
      aria-hidden
    />
  );
}
