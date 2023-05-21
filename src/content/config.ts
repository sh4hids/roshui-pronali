import { defineCollection, z } from 'astro:content';
import { categories } from '../utils';

export const collection = {
  recipes: defineCollection({
    schema: z.object({
      title: z.string(),
      cratedAt: z.date().transform((str) => new Date(str)),
      slug: z.string().optional(),
      category: z.enum(categories),
      tags: z.array(z.string()).optional(),
      isPublished: z.boolean().default(false),
      isFeatured: z.boolean().default(false),
      metaInfo: z
        .object({
          title: z.string(),
          description: z.string(),
          image: z.string().optional(),
        })
        .strict(),
    }),
  }),
};