# CO TU PISZE — Wiktoria Zgódka

One-pager portfolio: **Astro** + **Tailwind**, deploy on **Vercel**.

## Privacy / media

Photos, portfolio graphics, CV and reels are **not** in Git (public repo).

Put them locally here (gitignored):

```
public/media/photos/     wiki-1.jpg … wiki-6.jpg
public/media/graphics/   work-1.png … work-5.png
public/media/cv/         wiktoria-zgodka.pdf
public/videos/           optional .mp4 reels
```

For production on Vercel, host the same files on a CDN (e.g. Cloudinary) and set:

```
PUBLIC_MEDIA_BASE=https://res.cloudinary.com/<cloud>/image/upload/...
```

(or any origin that mirrors `/media/...` paths).

Safe to commit: code, logo, torn-paper textures.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
