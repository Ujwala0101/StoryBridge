import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
const inter = Inter({ subsets: ["latin"], display: "swap" });
export const metadata: Metadata = { metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"), title: { default: "StoryBridge", template: "%s | StoryBridge" }, description: "A premium marketplace connecting protected story ideas with verified film and OTT professionals.", openGraph: { title: "StoryBridge", description: "Every great film begins with a story.", type: "website" }, twitter: { card: "summary_large_image" } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en" suppressHydrationWarning><body className={inter.className}><Providers><SiteHeader /><main>{children}</main><SiteFooter /></Providers></body></html>; }
