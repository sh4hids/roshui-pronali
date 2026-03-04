import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

import { recipeSchema, spiceMixSchema } from '@/schemas';

const recipes = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/recipes' }),
    schema: ({ image }) =>
        recipeSchema.extend({
            metaInfo: z
                .object({
                    description: z.string(),
                    coverImage: z
                        .object({
                            src: image(),
                            alt: z.string(),
                        })
                        .optional(),
                })
                .strict(),
        }),
});

const spiceMixes = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/spice-mixes' }),
    schema: ({ image }) =>
        spiceMixSchema.extend({
            metaInfo: z
                .object({
                    description: z.string(),
                    coverImage: z
                        .object({
                            src: image(),
                            alt: z.string(),
                        })
                        .optional(),
                })
                .strict(),
        }),
});

export const collections = { recipes, spiceMixes };
