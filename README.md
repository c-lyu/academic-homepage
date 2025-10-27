# Academic Homepage

A bilingual academic homepage with dark mode support.

## 🖼️ Profile Picture

Add your photo at `/public/images/photo.jpg` (square format recommended).

To use a different filename, update the `photo` field in `/src/content/profile/en.json` and `/src/content/profile/zh.json`.

## 📝 Content Management

All content is in `/src/content/` organized by type:

- **profile/** - Name, bio, contact info (en.json, zh.json)
- **education/** - Education history (one JSON file per entry)
- **publications/** - Papers and publications
- **news/** - News items
- **awards/** - Awards and achievements
- **projects/** - Research projects

Each content type has bilingual files (English and Chinese). Copy existing files as templates when adding new entries.

## 🎨 Icons

Uses [Remix Icon](https://remixicon.com/). Browse icons at https://icon-sets.iconify.design/ri/

Common icons: `ri:mail-line`, `ri:github-line`, `ri:graduation-cap-line`, `ri:award-line`

## 🌐 Languages

The site supports English (`/en/`) and Chinese (`/zh/`).

Edit translations in `/src/i18n/en.json` and `/src/i18n/zh.json`.

## 🚀 Running the Site

```bash
pnpm run dev
```
