"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export function ThemeToggle() { const { theme, setTheme } = useTheme(); const [mounted, setMounted] = useState(false); useEffect(() => setMounted(true), []); const dark = mounted && theme === "dark"; return <button className="focus-ring grid size-10 place-items-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground" onClick={() => setTheme(dark ? "light" : "dark")} aria-label="Toggle theme">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>; }
