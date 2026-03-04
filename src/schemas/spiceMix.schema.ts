import { z } from 'astro:content';

export const spiceMixSchema = z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    isPublished: z.boolean().default(false),
    ingredients: z.record(z.string(), z.array(z.string())),
    time: z.object({
        preparation: z.number(),
        cooking: z.number().optional(),
    }),
    originalSource: z.string().url().optional(),
    slug: z.string(),
    createdAt: z.string().transform((str) => new Date(str)),
    updatedAt: z.string().transform((str) => new Date(str)),
});
