/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useCallback, useEffect, useState } from "react";
import { AppLnb } from "@/components/layout/AppLnb";

const LNB_STORAGE_KEY = "sf-lnb-collapsed";

export function MainShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      if (
        typeof window !== "undefined" &&
        localStorage.getItem(LNB_STORAGE_KEY) === "1"
      ) {
        setCollapsed(true);
      }
    } catch {
      //
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(LNB_STORAGE_KEY, collapsed ? "1" : "0");
    } catch {
      //
    }
  }, [collapsed, hydrated]);

  const toggle = useCallback(() => setCollapsed((c) => !c), []);

  const lnbWidthClass = collapsed ? "w-[80px]" : "w-[280px]";
  const mainPadClass = collapsed ? "pl-[80px]" : "pl-[280px]";

  return (
    <div className="min-h-full">
      <AppLnb
        collapsed={collapsed}
        onToggle={toggle}
        widthClass={lnbWidthClass}
      />
      <div
        className={`min-h-screen min-w-0 bg-sf-bg transition-[padding] duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] ${mainPadClass}`}
      >
        <div className="mx-auto w-full max-w-[min(100%,1720px)] px-5 py-8 sm:px-10 sm:py-10">
          {children}
        </div>
      </div>
    </div>
  );
}
