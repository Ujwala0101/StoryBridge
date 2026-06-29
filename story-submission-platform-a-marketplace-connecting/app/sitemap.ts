import type { MetadataRoute } from "next";
import { stories } from "@/data/stories";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"; return ["", "/browse", "/submit", "/auth", ...stories.map((story) => "/stories/" + story.id)].map((itemPath) => ({ url: base + itemPath, lastModified: new Date() })); }
