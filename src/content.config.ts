import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const schema = z.object({
  title: z.string().optional(),
  heading: z.string().optional(),
  order: z.number().optional()
});

const pages = defineCollection({ 
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/pages" }),
  schema
});

export const collections = { 
  pages
};