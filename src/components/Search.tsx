import type { CollectionEntry } from 'astro:content';
import Fuse from 'fuse.js';
import { useState } from 'react';
import type { RecipeType } from '../content/config';

const options = {
  keys: ['title', 'metaInfo.description', 'slug'],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

function Search({ searchList }: { searchList: RecipeType[] }) {
  // console.log(searchList);

  // User's input
  const [query, setQuery] = useState('');

  const fuse = new Fuse(searchList, options);

  // Set a limit to the posts: 5
  const searchResult = fuse
    .search(query)
    .map((result) => {
      console.log(result);

      return result.item;
    })
    .slice(0, 5);

  function handleOnSearch({ target = {} }) {
    const { value } = target;
    setQuery(value);
  }

  return (
    <>
      <label>Search</label>
      <input
        type="text"
        value={query}
        onChange={handleOnSearch}
        placeholder="Search posts"
      />
      {query.length > 1 && (
        <p>
          Found {searchResult.length}{' '}
          {searchResult.length === 1 ? 'result' : 'results'} for '{query}'
        </p>
      )}
      <ul>
        {searchResult &&
          searchResult.map((recipe) => (
            <RecipeCard key={recipe.title} recipe={recipe} />
          ))}
      </ul>
    </>
  );
}

export default Search;
