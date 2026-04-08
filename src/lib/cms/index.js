export { cmsQuery } from './client';
export { getPublicAssets } from './public';

export const performCmsQuery = async (query, options) => {
  const { cmsQuery } = await import('./client');
  return cmsQuery(query, options);
};
