"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { lnbNavItems } from "@/lib/lnbNav";
import { LnbIcon } from "@/components/layout/LnbIcons";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type AppLnbProps = {
  collapsed: boolean;
  widthClass: string;
  onToggle: () => void;
};

export function AppLnb({ collapsed, widthClass, onToggle }: AppLnbProps) {
  const pathname = usePathname();

  return (
    <aside
      className={[
        "fixed inset-y-0 left-0 z-40 flex flex-col overflow-visible",
        "border-r border-sf-line/60 bg-linear-to-b from-white via-white to-sf-field/35",
        "shadow-[6px_0_32px_rgba(25,31,40,0.06)]",
        "transition-[width] duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]",
        widthClass,
      ].join(" ")}
      aria-label="주 메뉴"
    >
      <div
        className={[
          "flex shrink-0 border-b border-sf-line/50",
          collapsed
            ? "flex-col items-center justify-center px-2 py-3"
            : "h-[60px] flex-row items-center justify-between gap-2 px-3 sm:px-4",
        ].join(" ")}
      >
        {!collapsed && (
          <Link
            href="/"
            className="order-1 flex min-w-0 flex-1 items-center gap-2.5 rounded-xl py-1 transition-opacity hover:opacity-90"
            title="Stock Flow"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sf-primary to-[#2563eb] text-[13px] font-bold text-white">
              SF
            </span>
            <span className="truncate text-base font-bold tracking-[-0.03em] text-sf-text">
              Stock Flow
            </span>
          </Link>
        )}
        <button
          type="button"
          onClick={onToggle}
          className={[
            "flex size-9 shrink-0 items-center justify-center rounded-xl border border-sf-line/80 bg-white text-sf-muted transition hover:border-sf-primary/35 hover:bg-sf-field/90 hover:text-sf-primary cursor-pointer hover:cursor-pointer",
            collapsed ? "" : "order-2",
          ].join(" ")}
          aria-expanded={!collapsed}
          aria-label={collapsed ? "메뉴 펼치기" : "메뉴 접기"}
        >
          {collapsed ? (
            <ChevronsRight className="size-4" strokeWidth={2} aria-hidden />
          ) : (
            <ChevronsLeft className="size-4" strokeWidth={2} aria-hidden />
          )}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-3 pb-6">
        <ul className="flex flex-col gap-2">
          {lnbNavItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  title={collapsed ? item.label : undefined}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "group relative flex items-center rounded-xl font-semibold transition-all duration-200",
                    collapsed
                      ? "mx-auto size-11 justify-center p-0"
                      : "gap-3 border-l-[3px] border-transparent py-2.5 pl-[11px] pr-3 text-[14px] leading-snug tracking-[-0.01em]",
                    active
                      ? collapsed
                        ? "bg-sf-primary-soft text-sf-primary shadow-[inset_0_0_0_1px_rgba(49,130,246,0.22)]"
                        : "border-l-sf-primary bg-sf-primary-soft text-sf-primary shadow-sm"
                      : collapsed
                        ? "text-sf-muted hover:bg-white hover:text-sf-text hover:shadow-sm"
                        : "text-sf-muted hover:border-sf-line/80 hover:bg-white hover:text-sf-text hover:shadow-sm",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex shrink-0 items-center justify-center transition-colors",
                      active
                        ? "text-sf-primary"
                        : "text-sf-muted group-hover:text-sf-text",
                    ].join(" ")}
                  >
                    <LnbIcon kind={item.icon} />
                  </span>
                  {!collapsed && (
                    <span className="min-w-0 flex-1 truncate">
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
