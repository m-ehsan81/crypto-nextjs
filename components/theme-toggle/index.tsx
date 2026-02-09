"use client";

import { setTheme, ThemeItems } from "@/lib/features/theme-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import { Sun1, Moon } from "iconsax-reactjs";

function getInitialTheme(): ThemeItems {
  if (typeof window === "undefined") return "light";

  try {
    const stored = window.localStorage.getItem("theme") as ThemeItems | null;
    if (stored === "light" || stored === "dark") return stored;

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    return systemPrefersDark ? "dark" : "light";
  } catch {
    return "light";
  }
}

export default function ThemeToggle() {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const initial = getInitialTheme();
    dispatch(setTheme(initial));
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

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
      className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-500 dark:from-indigo-600 dark:via-purple-600 dark:to-indigo-700 shadow-lg dark:shadow-purple-900/30 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/50 dark:hover:shadow-purple-500/50 active:scale-95 group overflow-hidden border border-white/20 dark:border-white/10 backdrop-blur-sm"
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-300/30 to-orange-400/30 dark:from-blue-400/30 dark:to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out blur-sm" />

      <div
        className={`relative z-10 transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${theme === "dark" ? "rotate-0 scale-100" : "rotate-180 scale-100"} group-hover:scale-110`}
      >
        {theme === "dark" ? (
          <Sun1
            size={22}
            className="text-amber-50 drop-shadow-lg transition-all duration-300 group-hover:text-yellow-100"
            variant="Bold"
          />
        ) : (
          <Moon
            size={22}
            className="text-slate-100 drop-shadow-lg transition-all duration-300 group-hover:text-purple-100"
            variant="Bold"
          />
        )}
      </div>

      <span className="absolute inset-0 rounded-xl bg-white/40 dark:bg-white/20 scale-0 group-active:scale-150 transition-transform duration-700 ease-out opacity-0 group-active:opacity-100" />

      <span className="absolute inset-0 rounded-xl bg-white/20 dark:bg-white/10 scale-0 group-active:scale-200 transition-transform duration-1000 ease-out opacity-0 group-active:opacity-50 delay-75" />
    </button>
  );
}
