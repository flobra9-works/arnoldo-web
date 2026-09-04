import { withBase } from "@/lib/paths";

export type GalleryShot = { src: string; alt: string; caption?: string };

export function SalonGallery({ shots }: { shots: GalleryShot[] }) {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {shots.map((shot, i) => (
          <li key={shot.src} className={i === 0 ? "md:col-span-2" : ""}>
            <figure>
              <img
                src={withBase(shot.src)}
                alt={shot.alt}
                className="h-72 w-full rounded-2xl object-cover md:h-96"
              />
              {shot.caption ? (
                <figcaption className="mt-2 text-sm text-espresso/65">{shot.caption}</figcaption>
              ) : null}
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
