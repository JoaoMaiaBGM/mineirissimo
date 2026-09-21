'use client';

import { ingredientIconMap } from '@/lib/icon-maps';

export function Ingredients({ ingredients = [] }) {
  if (!ingredients.length) return null;

  return (
    <div id="ingredients" className="w-full">
      <p className="p-small text-mine-yellow-100 mb-2">Ingredientes</p>

      <div className="grid grid-cols-3 gap-3">
        {ingredients.map((ingredient) => (
          <div
            key={ingredient.id}
            className="w-full p-caption text-mine-yellow-100 flex flex-col items-center justify-baseline gap-0.5"
          >
            <div className="flex items-center justify-center">
              {ingredientIconMap[ingredient.iconKey] ?? null}
            </div>
            <span className="p-caption text-mine-yellow-50 capitalize text-center">
              {ingredient.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
