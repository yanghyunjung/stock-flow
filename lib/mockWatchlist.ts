export type WatchlistItem = {
  symbol: string;
  name: string;
  price: number;
  changePercent: number;
  sparkline: number[];
};

export const mockWatchlist: WatchlistItem[] = [
  {
    symbol: "005930",
    name: "삼성전자",
    price: 71200,
    changePercent: 1.24,
    sparkline: [
      69800, 70100, 69950, 70400, 70650, 70800, 70900, 71100, 71050, 71200,
    ],
  },
  {
    symbol: "000660",
    name: "SK하이닉스",
    price: 186500,
    changePercent: -0.82,
    sparkline: [
      189200, 188800, 188200, 187900, 187500, 187200, 186900, 186700, 186600,
      186500,
    ],
  },
  {
    symbol: "035420",
    name: "NAVER",
    price: 218000,
    changePercent: 0.45,
    sparkline: [
      215000, 215800, 216200, 216000, 216800, 217200, 217000, 217500, 217800,
      218000,
    ],
  },
  {
    symbol: "035720",
    name: "카카오",
    price: 52300,
    changePercent: -1.15,
    sparkline: [
      53400, 53100, 52800, 52650, 52500, 52400, 52350, 52320, 52300, 52300,
    ],
  },
  {
    symbol: "373220",
    name: "LG에너지솔루션",
    price: 412000,
    changePercent: 2.08,
    sparkline: [
      399000, 401000, 403500, 404800, 406000, 407500, 408800, 410000, 411200,
      412000,
    ],
  },
  {
    symbol: "207940",
    name: "삼성바이오로직스",
    price: 892000,
    changePercent: 0.11,
    sparkline: [
      886000, 887500, 888000, 889200, 888500, 890000, 891000, 890500, 891500,
      892000,
    ],
  },
];
