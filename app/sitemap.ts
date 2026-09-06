import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/how-it-works", "/services", "/contact"];
  const now = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
