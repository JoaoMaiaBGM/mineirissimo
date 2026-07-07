import { cmsQuery } from './client';
import { ALL_PRODUCTS_QUERY, GET_PRODUCT_QUERY } from './queries';

function normalizeLabel(value) {
  if (typeof value !== 'string') return '';
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .trim();
}

function isIgnoredProduct(productName) {
  const normalized = normalizeLabel(productName);
  return normalized.includes('romeu') || normalized.includes('pizzas');
}

function isIgnoredNutritionalItem(item) {
  const iconKey = normalizeLabel(item.iconKey);
  return iconKey === 'sugar' || iconKey === 'tomato';
}

function filterNutritionalInformationForProduct(items, productName) {
  if (isIgnoredProduct(productName)) return items;
  return items.filter((item) => !isIgnoredNutritionalItem(item));
}

function parseNutritionalInformation(raw) {
  if (!Array.isArray(raw)) return [];

  return raw
    .map((item, index) => {
      if (!item || typeof item !== 'object') return null;

      const name = typeof item.name === 'string' ? item.name.trim() : '';
      const value = typeof item.value === 'string' ? item.value.trim() : '';
      const iconKey = typeof item.iconKey === 'string' ? item.iconKey.trim() : '';

      if (!name && !value) return null;

      return {
        id: item.id ?? `nutritional-${index}`,
        name,
        value,
        iconKey,
      };
    })
    .filter(Boolean);
}

export function mapProductRecord(record) {
  if (!record) return null;

  return {
    id: record.id,
    name: record.name ?? '',
    preparation: record.preparation ?? '',
    image: record.image?.url
      ? {
          url: record.image.url,
          alt: typeof record.image.alt === 'string' ? record.image.alt : '',
        }
      : null,
    ingredients: (record.ingredients ?? [])
      .map((ingredient) => ({
        id: ingredient.id,
        name: ingredient.name ?? '',
        iconKey: ingredient.iconKey ?? '',
      }))
      .filter((ingredient) => ingredient.name),
    nutritionalInformation: filterNutritionalInformationForProduct(
      parseNutritionalInformation(record.nutritionalInformation),
      record.name
    ),
  };
}

export function findProductForCard(cardProduct, allProducts) {
  if (!cardProduct || !allProducts?.length) return null;

  const byId = allProducts.find((product) => product.id === cardProduct.id);
  if (byId) return byId;

  const cardTitle = normalizeLabel(cardProduct.title);
  if (!cardTitle) return null;

  const exact = allProducts.find((product) => normalizeLabel(product.name) === cardTitle);
  if (exact) return exact;

  const partialMatches = allProducts.filter((product) => {
    const name = normalizeLabel(product.name);
    return name.startsWith(cardTitle) || name.startsWith(`${cardTitle} `);
  });

  if (partialMatches.length === 1) return partialMatches[0];

  if (partialMatches.length > 1) {
    return partialMatches.sort((a, b) => a.name.length - b.name.length)[0];
  }

  return null;
}

export function mergeCardWithProductDetails(cardProduct, productRecord) {
  const details = mapProductRecord(productRecord);
  if (!details) return cardProduct;

  return {
    ...cardProduct,
    title: details.name || cardProduct.title,
    url: details.image?.url ?? cardProduct.url,
    alt: details.image?.alt || cardProduct.alt,
    preparation: details.preparation,
    ingredients: details.ingredients,
    nutritionalInformation: details.nutritionalInformation,
  };
}

export async function getAllProducts({ preview = false } = {}) {
  const data = await cmsQuery(ALL_PRODUCTS_QUERY, { preview });
  return (data?.allProducts ?? []).map(mapProductRecord).filter(Boolean);
}

export async function getProductById(id, { preview = false } = {}) {
  if (!id) return null;

  const data = await cmsQuery(GET_PRODUCT_QUERY, {
    preview,
    variables: { id },
  });

  return mapProductRecord(data?.product);
}
