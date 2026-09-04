/** Prefix absolute app paths for GitHub Pages basePath. */
export function withBase(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (!base) return path;
  return `${base}${path}`;
}
