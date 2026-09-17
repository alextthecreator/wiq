/**
 * Cloudinary delivery URLs.
 * Public IDs are at account root (wiki-1, work-1, …) — folder in Media Library
 * is only for organization; Copy URL shows the real public ID.
 *
 * Override with PUBLIC_MEDIA_BASE on Vercel if the cloud name / base ever changes.
 * Default: https://res.cloudinary.com/dxpdn6xgr/image/upload
 */
const DEFAULT_BASE = 'https://res.cloudinary.com/dxpdn6xgr/image/upload';
const base = (import.meta.env.PUBLIC_MEDIA_BASE || DEFAULT_BASE).replace(/\/$/, '');

export const media = {
  photos: {
    wiki1: `${base}/wiki-1.jpg`,
    wiki2: `${base}/wiki-2.jpg`,
    wiki3: `${base}/wiki-3.jpg`,
    wiki4: `${base}/wiki-4.jpg`,
    wiki5: `${base}/wiki-5.jpg`,
    wiki6: `${base}/wiki-6.jpg`,
  },
  graphics: {
    work1: `${base}/work-1.png`,
    work2: `${base}/work-2.png`,
    work3: `${base}/work-3.png`,
    work4: `${base}/work-4.png`,
    work5: `${base}/work-5.png`,
    ctpGif: `${base}/ctp.gif`,
    ctp1Gif: `${base}/CTP1-ezgif.com-optimize.gif`,
  },
  /** Set when PDF is uploaded as raw */
  cv: null as string | null,
};
