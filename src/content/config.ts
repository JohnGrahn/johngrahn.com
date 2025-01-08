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
  schema: z.object({
    title: z.string(),
    lastUpdated: z.coerce.date(),
    personalInfo: z.object({
      name: z.string(),
      email: z.string(),
      github: z.string(),
      website: z.string()
    }),
    education: z.object({
      school: z.string(),
      location: z.string(),
      degree: z.string(),
      graduationDate: z.string(),
      coursework: z.array(z.string())
    }),
    workExperience: z.array(z.object({
      company: z.string(),
      location: z.string(),
      title: z.string(),
      period: z.string(),
      details: z.array(z.string())
    })),
    projects: z.array(z.object({
      title: z.string(),
      url: z.string(),
      techStack: z.array(z.string()),
      details: z.array(z.string())
    })),
    skills: z.object({
      languages: z.array(z.string()),
      devops: z.array(z.string()),
      tools: z.array(z.string()),
      certifications: z.array(z.object({
        name: z.string(),
        url: z.string().optional()
      }))
    })
  })
});

export const collections = {
  blog,
  projects,
  resume,
};
