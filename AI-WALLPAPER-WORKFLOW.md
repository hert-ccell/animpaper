# AnimPaper: AI wallpaper naming and SEO workflow

## Use ChatGPT as your wallpaper assistant

Upload a batch of wallpapers (around 10–20 images at a time for easier review) and paste this prompt:

> You are the image librarian and SEO editor for my wallpaper website, AnimPaper. Inspect every uploaded image individually. Do not guess an anime or character identity: if uncertain, write "Unknown / needs review". For each image, return a table with: original filename, accurate visual description, anime/franchise (if confidently identifiable), character (if confidently identifiable), category, dominant colours, orientation (mobile/desktop/square), recommended SEO filename in lowercase kebab-case, SEO title, meta description (around 140–160 characters), descriptive alt text, and suggested tags. Flag duplicates or near-duplicates. Never claim an image is official or licensed unless I provide that information. Keep names descriptive and avoid keyword stuffing.

## Suggested naming convention

- `gojo-satoru-purple-mobile.webp`
- `sukuna-red-dark-desktop.webp`
- `anime-night-sky-aesthetic-mobile.webp`

Use `.webp` for compressed images where practical. Keep the original file until you have checked the renamed copy.

## Add the results to the website

Edit `assets/js/wallpapers.js`. For each item, set:
- `title`: human-readable wallpaper title
- `anime`: anime/franchise or `Original`
- `category`: one of your category labels
- `tags`: short, relevant search terms
- `description`: accurate short description
- `credit`: creator and permission/license details
- `mobile` and `desktop`: paths to the actual files

The current gallery is client-rendered from this JavaScript catalogue. Search engines may not index every item as a separate result. For stronger SEO, create a dedicated HTML page for each important wallpaper and link to those pages from the category pages and sitemap.

## Before publishing

1. Replace every `YOUR-DOMAIN.pages.dev` placeholder in `robots.txt`, `sitemap.xml` and the JSON-LD in `index.html` with your actual deployed domain.
2. Add a unique title, meta description, canonical URL and descriptive text to every dedicated wallpaper page.
3. Submit the sitemap in Google Search Console.
4. Optimise image dimensions and file sizes; use descriptive filenames and alt text.
5. Only publish original or properly licensed images. AI can describe an image but cannot determine whether you own its copyright or have permission to distribute it.
6. Avoid keyword stuffing, duplicate thin pages and misleading anime/character labels.
