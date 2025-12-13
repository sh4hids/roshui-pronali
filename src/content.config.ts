import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

import { recipeSchema } from '@/schemas';

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

export const collections = { recipes };
