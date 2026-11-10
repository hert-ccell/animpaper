# AnimPaper

A responsive, static anime-inspired wallpaper website starter. It includes search, category filters, device filters, previews, mobile/desktop download links, ad placement placeholders and basic policy pages.

## Run locally

No build tools or package installation are required.

1. Extract the ZIP.
2. Open `index.html` in a browser, or run a local server from this folder:
   - Python: `python -m http.server 8000`
   - Visit `http://localhost:8000`

Some browsers restrict downloads or local assets when opening files directly, so a local server is recommended.

## Add your wallpapers

1. Put your files in `assets/wallpapers/`.
2. Edit `assets/js/wallpapers.js`.
3. Add one object per wallpaper, for example:

```js
{
  id: "my-wallpaper",
  title: "My Original Artwork",
  anime: "Original",
  category: "Original",
  tags: ["purple", "night"],
  description: "A short description.",
  credit: "Artist name — used with permission",
  mobile: "assets/wallpapers/my-wallpaper-mobile.webp",
  desktop: "assets/wallpapers/my-wallpaper-desktop.webp",
  featured: true,
  date: "2026-11-10"
}
```

Use real files at both paths. The mobile image should be portrait (e.g. 1440×2560); desktop should be landscape (e.g. 3840×2160 or 1920×1080). Keep images optimized as WebP or AVIF where practical. Add a clear credit and license record for every image.

## Deploy free with Cloudflare Pages

1. Create a GitHub account and a new public repository named `animpaper`.
2. Upload the contents of this folder to the repository root (not the ZIP file itself).
3. Sign in to Cloudflare, open **Workers & Pages**, choose **Create application** → **Pages** → **Connect to Git**.
4. Connect the `animpaper` repository.
5. For a plain HTML site, choose no framework. Leave the build command blank and set the output directory to `/` (or `.` if the dashboard requests a relative directory).
6. Deploy. Cloudflare will provide a free `*.pages.dev` address.
7. Test the homepage, mobile layout, search, category filters and both download links.

Dashboard labels can change; follow Cloudflare's current Pages Git integration instructions if the menu differs.

## Monetization checklist

- A website is not automatically eligible for ads. Build original, useful content and meaningful traffic first.
- Apply to an ad network only after reviewing its current eligibility, content and traffic requirements.
- Keep the ad placeholders in `index.html` until an ad provider approves the site and gives you its exact code. Replace the placeholder with the provider's code; do not click your own ads or encourage others to do so.
- Add the provider's consent-management solution if required for your audience and jurisdictions.
- Complete the Privacy, Contact, About and Copyright pages with accurate details before applying.
- Do not publish scraped Pinterest/Google images or copyrighted anime screenshots/art unless you have the necessary rights or license. Anime titles and character names are not permission to commercially distribute their artwork.
- Keep a record of each asset's creator, source, license, permission and allowed uses.

## Important

This project is a starter template, not a legal or monetization approval guarantee. The policy pages contain placeholders and must be reviewed and completed before launch.
