'use client';

import { nutritionalIconMap } from 'lib/icon-maps';

export function NutritionalInformation({ nutritionalInformation = [] }) {
  if (!nutritionalInformation.length) return null;

  return (
    <div id="nutritional-information" className="w-full">
      <p className="p-small text-mine-yellow-100 mb-2">Informações nutricionais</p>

      <div className="grid grid-cols-3 gap-3">
        {nutritionalInformation.map((item) => (
          <div
            key={item.id}
            className="p-caption text-mine-yellow-50 flex flex-col items-center justify-baseline gap-0.5"
          >
            <div className="flex items-center justify-center">
              {nutritionalIconMap[item.iconKey] ?? null}
            </div>
            <span className="p-caption text-mine-yellow-50 text-center">{item.value}</span>
            <span className="p-caption text-mine-yellow-50 text-center capitalize">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
