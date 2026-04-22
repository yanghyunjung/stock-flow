export type LnbIconKind =
  | "individual"
  | "dividend"
  | "bigtech"
  | "schd"
  | "krEtf"
  | "krStocks"
  | "usEtf"
  | "usStocks";

export type LnbNavItem = {
  href: string;
  label: string;
  icon: LnbIconKind;
};

export const lnbNavItems: LnbNavItem[] = [
  { href: "/", label: "개별 종목 분석", icon: "individual" },
  { href: "/dividend-compare", label: "배당주 비교 분석", icon: "dividend" },
  { href: "/big-tech-compare", label: "빅테크 비교 분석", icon: "bigtech" },
  { href: "/schd-holdings", label: "SCHD 세부종목 비교", icon: "schd" },
  { href: "/kr-sector-etf", label: "국내 섹터 ETF 비교", icon: "krEtf" },
  { href: "/kr-sector-stocks", label: "한국 섹터별 세부종목 분석", icon: "krStocks" },
  { href: "/us-sector-etf", label: "미국 섹터 ETF 분석", icon: "usEtf" },
  { href: "/us-sector-stocks", label: "미국 섹터별 세부종목 분석", icon: "usStocks" },
];
