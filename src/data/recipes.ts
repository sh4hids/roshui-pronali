import { generateSlug } from '@/utils';
import { type CollectionEntry, getCollection } from 'astro:content';

export type ItemWithCount = [string, number];

export const getAllRecipes = async () => {
  return await getCollection('recipes', ({ data }) => {
    return import.meta.env.PROD ? data.isPublished !== false : true;
  });
};

export const sortRecipeByDate = (
  recipes: Array<CollectionEntry<'recipes'>>
) => {
  return recipes.sort((a, b) => b.data.createdAt - a.data.createdAt);
};

export const getAllTags = (recipes: Array<CollectionEntry<'recipes'>>) => {
  return recipes.flatMap((recipe) => [...recipe.data.tags]);
};

export const getUniqueTags = (recipes: Array<CollectionEntry<'recipes'>>) => {
  return [...new Set(getAllTags(recipes))];
};

export const getUniqueTagsWithCount = (
  recipes: Array<CollectionEntry<'recipes'>>
): Array<ItemWithCount> => {
  return [
    ...getAllTags(recipes).reduce(
      (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
      new Map<string, number>()
    ),
  ];
};

export const getAllRecipesByTag = (
  recipes: Array<CollectionEntry<'recipes'>>,
  tagSlug: string
) => {
  return recipes.filter((recipe) =>
    recipe.data.tags.some((tag) => generateSlug(tag) === tagSlug)
  );
};

export const getAllCategories = (
  recipes: Array<CollectionEntry<'recipes'>>
) => {
  return recipes.map((recipe) => recipe.data.category);
};

export const getUniqueCategories = (
  recipes: Array<CollectionEntry<'recipes'>>
) => {
  return [...new Set(getAllCategories(recipes))];
};

export const getUniqueCategoriesWithCount = (
  recipes: Array<CollectionEntry<'recipes'>>
): Array<ItemWithCount> => {
  return [
    ...getAllCategories(recipes).reduce(
      (acc, c) => acc.set(c, (acc.get(c) || 0) + 1),
      new Map<string, number>()
    ),
  ];
};

export const getAllRecipesByCategory = (
  recipes: Array<CollectionEntry<'recipes'>>,
  categorySlug: string
) => {
  return recipes.filter(
    (recipe) => generateSlug(recipe.data.category) === categorySlug
  );
};
