export function PreparationMode({ preparation }) {
  if (!preparation) return null;

  return (
    <div id="preparation-mode">
      <p className="p-small text-mine-yellow-100 mb-2">Modo de preparo</p>
      <p className="p-caption text-mine-yellow-100 whitespace-pre-line">{preparation}</p>
    </div>
  );
}
