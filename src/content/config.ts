import { defineCollection, z } from 'astro:content';
import { type ImageMetadata } from 'astro';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    liveDemoUrl: z.string(),
    githubUrl: z.string(),
    techStack: z.array(z.string()),
    featured: z.boolean().optional().default(false),
    pubDate: z.coerce.date(),
  }),
});

export const collections = {
  blog,
  projects,
};
