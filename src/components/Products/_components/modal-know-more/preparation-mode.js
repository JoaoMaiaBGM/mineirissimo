export function PreparationMode({ preparation }) {
  if (!preparation) return null;

  return (
    <div id="preparation-mode">
      <p className="p-small text-white mb-2">Modo de preparo</p>
      <p className="p-caption text-white whitespace-pre-line">{preparation}</p>
    </div>
  );
}
