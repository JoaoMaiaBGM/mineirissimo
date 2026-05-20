'use client';

import { ingredientIconMap } from 'lib/icon-maps';

export function Ingredients({ ingredients = [] }) {
  if (!ingredients.length) return null;

  return (
    <div id="ingredients" className="w-full">
      <p className="p-small text-white mb-2">Ingredientes</p>

      <div className="grid grid-cols-3 gap-3">
        {ingredients.map((ingredient) => (
          <div
            key={ingredient.id}
            className="w-full p-caption text-white flex flex-col items-center justify-baseline gap-0.5"
          >
            <div className="flex items-center justify-center">
              {ingredientIconMap[ingredient.iconKey] ?? null}
            </div>
            <span className="p-caption text-white capitalize text-center">{ingredient.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
