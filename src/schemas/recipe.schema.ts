import { z } from 'astro:content';

import { categories } from '@/data';

export const recipeSchema = z.object({
    title: z.string(),
    createdAt: z.string().transform((str) => new Date(str)),
    updatedAt: z.string().transform((str) => new Date(str)),
    category: z.enum(categories),
    tags: z.array(z.string()).optional(),
    isPublished: z.boolean().default(false),
    isFeatured: z.boolean().default(false),
    ingredients: z.record(z.string(), z.array(z.string())),
    serving: z.number(),
    time: z.object({
        preparation: z.number(),
        cooking: z.number(),
    }),
    originalSource: z.string().url().optional(),
    slug: z.string(),
});
