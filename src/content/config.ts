import { defineCollection, z } from 'astro:content';
import { categories } from '../utils';

const recipeSchema = z.object({
  title: z.string(),
  cratedAt: z.date().transform((str) => new Date(str)),
  slug: z.string().optional(),
  category: z.enum(categories),
  tags: z.array(z.string()).optional(),
  isPublished: z.boolean().default(false),
  isFeatured: z.boolean().default(false),
  ingredients: z.array(z.string()),
  serving: z.number(),
  time: z.object({
    preparation: z.number(),
    cooking: z.number(),
  }),
  metaInfo: z
    .object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
    })
    .strict(),
});

export type RecipeType = z.infer<typeof recipeSchema>;

export const collection = {
  recipes: defineCollection({
    schema: recipeSchema,
  }),
};
