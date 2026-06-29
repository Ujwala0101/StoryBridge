import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./features/**/*.{ts,tsx}", "./hooks/**/*.{ts,tsx}"],
  theme: { extend: { fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"] }, colors: { border: "hsl(var(--border))", background: "hsl(var(--background))", foreground: "hsl(var(--foreground))", muted: "hsl(var(--muted))", "muted-foreground": "hsl(var(--muted-foreground))", card: "hsl(var(--card))", "card-foreground": "hsl(var(--card-foreground))", primary: "hsl(var(--primary))", "primary-foreground": "hsl(var(--primary-foreground))", accent: "hsl(var(--accent))", gold: "hsl(var(--gold))", electric: "hsl(var(--electric))", destructive: "hsl(var(--destructive))" }, boxShadow: { soft: "0 18px 60px rgba(15,23,42,.08)", glow: "0 24px 80px rgba(37,99,235,.16)", gold: "0 20px 60px rgba(245,158,11,.18)" }, borderRadius: { xl: "1rem", "2xl": "1.25rem" } } },
  plugins: [animate]
};
export default config;
