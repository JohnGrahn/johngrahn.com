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
    image: z.string().nullable(),
    liveDemoUrl: z.string(),
    githubUrl: z.string(),
    techStack: z.array(z.string()),
    featured: z.boolean().optional().default(false),
    pubDate: z.coerce.date(),
  }),
});

const resume = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lastUpdated: z.coerce.date(),
    workExperience: z.array(z.object({
      company: z.string(),
      location: z.string(),
      title: z.string(),
      period: z.string(),
      details: z.array(z.string())
    }))
  }),
});

export const collections = {
  blog,
  projects,
  resume,
};
