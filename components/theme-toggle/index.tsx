"use client";

import { setTheme, ThemeItems } from "@/lib/features/theme-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

function getInitialTheme(): ThemeItems {
  if (typeof window === "undefined") return "light";

  try {
    const stored = window.localStorage.getItem("theme") as ThemeItems | null;
    if (stored === "light" || stored === "dark") return stored;

    // اگر ذخیره نشده، از سیستم بخوان
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return systemPrefersDark ? "dark" : "light";
  } catch {
    return "light";
  }
}

export default function ThemeToggle() {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();
  // سنکرون کردن state با DOM در کلاینت
  useEffect(() => {
    const initial = getInitialTheme();
    dispatch(setTheme(initial));
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  // هر بار تغییر تم → ذخیره در localStorage و اعمال روی DOM
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem("theme", theme);
    } catch {}
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    dispatch(setTheme(theme === "light" ? "dark" : "light"));

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="px-3 py-1 rounded border text-sm
                 bg-white dark:bg-black
                 text-black dark:text-white"
    >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
