export function priceFormat(price) {
  if (!price) return '';
  const priceNumber = parseFloat(price);

  if (isNaN(priceNumber)) return '';

  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(priceNumber);
}
