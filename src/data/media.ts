/**
 * Private / sensitive media lives in public/media (gitignored).
 * Keep files locally for preview; for public Vercel deploy host them on CDN (e.g. Cloudinary)
 * and set PUBLIC_MEDIA_BASE to that origin.
 */
const base = (import.meta.env.PUBLIC_MEDIA_BASE ?? '').replace(/\/$/, '');

export const media = {
  photos: {
    wiki1: `${base}/media/photos/wiki-1.jpg`,
    wiki2: `${base}/media/photos/wiki-2.jpg`,
    wiki3: `${base}/media/photos/wiki-3.jpg`,
    wiki4: `${base}/media/photos/wiki-4.jpg`,
    wiki5: `${base}/media/photos/wiki-5.jpg`,
    wiki6: `${base}/media/photos/wiki-6.jpg`,
  },
  graphics: {
    work1: `${base}/media/graphics/work-1.png`,
    work2: `${base}/media/graphics/work-2.png`,
    work3: `${base}/media/graphics/work-3.png`,
    work4: `${base}/media/graphics/work-4.png`,
    work5: `${base}/media/graphics/work-5.png`,
  },
  cv: `${base}/media/cv/wiktoria-zgodka.pdf`,
};
