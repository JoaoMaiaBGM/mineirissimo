export function NutritionalInformation({ nutritionalInformation }) {
  return (
    <div id="nutritional-information" className="w-full">
      <p className="p-small text-white mb-2">Informações nutricionais</p>

      <div className="grid grid-cols-3 gap-3">
        {nutritionalInformation.map((nutritionalInformation) => (
          <div
            key={nutritionalInformation.id}
            className="p-caption text-white flex flex-col items-center justify-baseline gap-0.5"
          >
            <div className="flex items-center justify-center">{nutritionalInformation.icon}</div>
            <span className="p-caption text-white text-center">{nutritionalInformation.value}</span>
            <span className="p-caption text-white text-center">{nutritionalInformation.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
