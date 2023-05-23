import type { RecipeType } from '../content/config';
import { convertToBanglaNumber, generateSlug } from '../utils';

export const RecipeCard = ({ recipe }: { recipe: RecipeType }) => {
  const image =
    'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  return (
    <article className="rounded-3xl bg-gray-100 overflow-hidden drop-shadow">
      <a href={`/recipes/${generateSlug(recipe.title)}`}>
        <div className=" " aria-hidden="true">
          <img
            src={recipe.metaInfo.image || image}
            alt="food"
            className="h-44 w-full object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="font-bold text-primary-600 text-2xl leading-8 mb-2">
            {recipe.title}
          </h2>
          <p className="font-medium">
            প্রস্তুতি: {convertToBanglaNumber(recipe.time.preparation)} মি |
            রান্নাা: {convertToBanglaNumber(recipe.time.cooking)} মি
          </p>
        </div>
      </a>
    </article>
  );
};
