import rss from '@astrojs/rss';
import { getAllRecipes } from '@/data';
import { siteConfig } from '@/config';
export const GET = async () => {
  const recipes = await getAllRecipes();

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: import.meta.env.SITE,
    items: recipes.map((recipe) => ({
      title: recipe.data.title,
      description: recipe.data.metaInfo.description,
      pubDate: recipe.data.createdAt,
      link: `recipes/${recipe.slug}`,
    })),
  });
};
