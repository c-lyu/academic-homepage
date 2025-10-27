import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

// Profile collection - keeping Markdown for rich content
const profileCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/profile" }),
  schema: z.object({
    lang: z.enum(["en", "zh"]),
    name: z.string(),
    photo: z.string(), // Path to photo
    contacts: z.array(
      z.object({
        type: z.enum(["location", "email", "github", "scholar", "linkedin"]),
        icon: z.string(),
        text: z.string(),
        link: z.string().url().optional(),
      })
    ),
  }),
});

// Education collections - separate for each language, using YAML
const educationEnCollection = defineCollection({
  loader: file("src/content/education/en.yaml"),
  schema: z.object({
    dateRange: z.string(), // "2021-Now", "2018-2021"
    institution: z.string(),
    degree: z.string().optional(),
    location: z.string(),
    description: z.string().optional(), // Absorbed from markdown body
    order: z.number(), // For sorting
  }),
});

const educationZhCollection = defineCollection({
  loader: file("src/content/education/zh.yaml"),
  schema: z.object({
    dateRange: z.string(),
    institution: z.string(),
    degree: z.string().optional(),
    location: z.string(),
    description: z.string().optional(), // Absorbed from markdown body
    order: z.number(),
  }),
});

// News collections - separate for each language, using YAML
const newsEnCollection = defineCollection({
  loader: file("src/content/news/en.yaml"),
  schema: z.object({
    date: z.string(), // "08.2025"
    content: z.string(), // Absorbed from markdown body
    order: z.number(), // For sorting (most recent first)
  }),
});

const newsZhCollection = defineCollection({
  loader: file("src/content/news/zh.yaml"),
  schema: z.object({
    date: z.string(),
    content: z.string(), // Absorbed from markdown body
    order: z.number(),
  }),
});

// Publications collections - separate for each language, using YAML
const publicationsEnCollection = defineCollection({
  loader: file("src/content/publications/en.yaml"),
  schema: z.object({
    date: z.union([z.string(), z.number()]), // "08.2025" or 2025
    year: z.number(),
    authors: z.string(),
    title: z.string(),
    venue: z.string(),
    citation: z.string(), // Full formatted citation
    links: z
      .object({
        paper: z.string().url().optional(),
        code: z.string().url().optional(),
        doi: z.string().url().optional(),
        arxiv: z.string().url().optional(),
      })
      .optional()
      .nullable(),
    featured: z.boolean().default(false), // For homepage
    order: z.number(),
  }),
});

const publicationsZhCollection = defineCollection({
  loader: file("src/content/publications/zh.yaml"),
  schema: z.object({
    date: z.union([z.string(), z.number()]),
    year: z.number(),
    authors: z.string(),
    title: z.string(),
    venue: z.string(),
    citation: z.string(),
    links: z
      .object({
        paper: z.string().url().optional(),
        code: z.string().url().optional(),
        doi: z.string().url().optional(),
        arxiv: z.string().url().optional(),
      })
      .optional()
      .nullable(),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

// Awards collections - separate for each language, using YAML
const awardsEnCollection = defineCollection({
  loader: file("src/content/awards/en.yaml"),
  schema: z.object({
    year: z.string(), // "2022"
    title: z.string(),
    description: z.string().optional(),
    badge: z.object({
      icon: z.string().optional(), // Icon name or SVG path
      text: z.string().optional(), // "Second Place", "First Place", etc.
    }).optional(),
    order: z.number(),
  }),
});

const awardsZhCollection = defineCollection({
  loader: file("src/content/awards/zh.yaml"),
  schema: z.object({
    year: z.string(),
    title: z.string(),
    description: z.string().optional(),
    badge: z.object({
      icon: z.string().optional(),
      text: z.string().optional(),
    }).optional(),
    order: z.number(),
  }),
});

// Projects collections - separate for each language, using YAML
const projectsEnCollection = defineCollection({
  loader: file("src/content/projects/en.yaml"),
  schema: z.object({
    dateRange: z.string(), // "2021-Now"
    title: z.string(),
    collaboration: z.string().optional(),
    description: z.string().optional(),
    links: z
      .object({
        website: z.string().url().optional(),
        github: z.string().url().optional(),
      })
      .optional(),
    order: z.number(),
  }),
});

const projectsZhCollection = defineCollection({
  loader: file("src/content/projects/zh.yaml"),
  schema: z.object({
    dateRange: z.string(),
    title: z.string(),
    collaboration: z.string().optional(),
    description: z.string().optional(),
    links: z
      .object({
        website: z.string().url().optional(),
        github: z.string().url().optional(),
      })
      .optional(),
    order: z.number(),
  }),
});

// Lectures collection - keeping Markdown for rich content
const lecturesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lectures" }),
  schema: z.object({
    lang: z.enum(["en", "zh"]),
    title: z.string(),
  }),
});

// Supervision collection - keeping Markdown for rich content
const supervisionCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/supervision" }),
  schema: z.object({
    lang: z.enum(["en", "zh"]),
    title: z.string(),
  }),
});

// Reviewing collection - keeping Markdown for rich content
const reviewingCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/reviewing" }),
  schema: z.object({
    lang: z.enum(["en", "zh"]),
    title: z.string(),
  }),
});

export const collections = {
  profile: profileCollection,
  "education-en": educationEnCollection,
  "education-zh": educationZhCollection,
  "news-en": newsEnCollection,
  "news-zh": newsZhCollection,
  "publications-en": publicationsEnCollection,
  "publications-zh": publicationsZhCollection,
  "awards-en": awardsEnCollection,
  "awards-zh": awardsZhCollection,
  "projects-en": projectsEnCollection,
  "projects-zh": projectsZhCollection,
  lectures: lecturesCollection,
  supervision: supervisionCollection,
  reviewing: reviewingCollection,
};
