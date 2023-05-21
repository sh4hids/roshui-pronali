import type { RecipeType } from '../content/config';
import { generateSlug } from '../utils';

export const RecipeCard = ({ recipe }: { recipe: RecipeType }) => {
  return (
    <article className="mb-4">
      <a href={`/recipes/${generateSlug(recipe.title)}`}>
        <h2 className="font-bold text-primary-600 text-2xl">{recipe.title}</h2>
        <p>{recipe.metaInfo.description}</p>
      </a>
    </article>
  );
};
