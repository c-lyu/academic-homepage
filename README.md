# Academic Homepage

A clean, modern academic homepage built with Astro 5, featuring bilingual support (English/Chinese), dark mode, and responsive design.

## 🖼️ Adding Your Profile Picture

Place your profile photo in the following location:

```
/public/images/photo.jpg
```

### Photo Requirements:
- **Format**: JPG or PNG
- **Size**: Square format recommended (e.g., 126×126px or higher resolution like 512×512px)
- **Filename**: Must be named `photo.jpg` (or update the path in content collections)

The photo will automatically appear:
- In the sidebar on desktop
- At the top on mobile devices

### Alternative: Using a Different Photo Name

If you want to use a different filename, update the `photo` field in:
- `/src/content/profile/en.json`
- `/src/content/profile/zh.json`

Example:
```json
{
  "photo": "/images/my-custom-photo.png",
  ...
}
```

## 📝 Content Management

All content is managed through Astro Content Collections located in `/src/content/`:

### Directory Structure:
```
src/content/
├── profile/          # Profile info (name, bio, contacts)
│   ├── en.json
│   └── zh.json
├── education/        # Education history
│   ├── phd-tum-en.json
│   ├── phd-tum-zh.json
│   └── ...
├── news/            # News items
├── publications/    # Publications list
├── awards/          # Awards and achievements
└── projects/        # Projects
```

### Adding New Content:

1. **Education Entry**:
```json
{
  "lang": "en",
  "dateRange": "2021-Now",
  "institution": "Your University",
  "degree": "Ph.D. in Computer Science",
  "thesis": "Your thesis title",
  "location": "City, Country",
  "order": 1
}
```

2. **Publication Entry**:
```json
{
  "lang": "en",
  "date": "08.2025",
  "year": 2024,
  "authors": "Author1, Author2, ...",
  "title": "Paper Title",
  "venue": "Conference/Journal Name",
  "citation": "Full citation text",
  "links": {
    "paper": "https://...",
    "code": "https://..."
  },
  "featured": true,
  "order": 1
}
```

3. **News Item**:
```json
{
  "lang": "en",
  "date": "08.2025",
  "content": "News description",
  "order": 1
}
```

4. **Award Entry**:
```json
{
  "lang": "en",
  "year": "2022",
  "title": "Award Name",
  "description": "Optional description",
  "badge": {
    "icon": "ri:award-line",
    "text": "First Place"
  },
  "order": 1
}
```

## 🎨 Icons

This project uses [Remix Icon](https://remixicon.com/) via Iconify.

### Common Icon Names:
- Location: `ri:map-pin-2-line`
- Email: `ri:mail-line`
- GitHub: `ri:github-line`
- Scholar: `ri:graduation-cap-line`
- Award: `ri:award-line`
- External link: `ri:arrow-right-up-line`
- Internal link: `ri:arrow-right-line`

Browse all icons at: https://icon-sets.iconify.design/ri/

## 🚀 Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 🌐 Internationalization (i18n)

The site supports English (`/en/`) and Chinese (`/zh/`) with automatic routing.

### Adding Translations:

Edit the translation files:
- `/src/i18n/en.json`
- `/src/i18n/zh.json`

## 🎨 Theme Customization

Colors are managed through CSS custom properties in `/src/styles/globals.css`:

```css
:root {
  --color-primary: #252525;
  --color-background: #fcfcfa;
  /* ... more colors */
}

[data-theme="dark"] {
  --color-primary: #e8e8e8;
  --color-background: #0a0a0a;
  /* ... dark theme colors */
}
```

## 📱 Features

- ✅ Bilingual support (EN/ZH)
- ✅ Dark/Light theme toggle
- ✅ Responsive design
- ✅ Mobile hamburger menu
- ✅ Content Collections with type safety
- ✅ Iconify integration with Remix Icons
- ✅ Clean color system with CSS variables
- ✅ Timeline-based content sections

## 📁 Project Structure

```
/
├── public/
│   ├── images/          # Static images (add photo.jpg here)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer, Sidebar, MainLayout
│   │   ├── sections/    # Content sections (Bio, Education, etc.)
│   │   └── ui/          # Reusable UI components (Icon, LinkButton, etc.)
│   ├── content/         # Content Collections (all your data)
│   ├── i18n/           # Translation files
│   ├── layouts/        # BaseLayout
│   ├── pages/          # Routes
│   └── styles/         # Global styles
├── astro.config.mjs
└── package.json
```

## 🔧 Configuration

Edit `/astro.config.mjs` to customize:
- Site URL
- i18n settings (default locale, available locales)
- Integrations

## 📄 License

Customize this section based on your needs.
