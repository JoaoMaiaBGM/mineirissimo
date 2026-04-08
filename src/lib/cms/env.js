export function getDatoCdnConfig({ preview = false } = {}) {
  const token = preview
    ? process.env.NEXT_DATOCMS_PREVIEW_API_TOKEN?.trim()
    : process.env.NEXT_DATOCMS_API_TOKEN?.trim();

  if (!token) {
    throw new Error(
      `[DatoCMS] Missing ${preview ? 'NEXT_DATOCMS_PREVIEW_API_TOKEN' : 'NEXT_DATOCMS_API_TOKEN'}`
    );
  }

  const environment = process.env.NEXT_DATOCMS_ENVIRONMENT?.trim();

  return {
    token,
    ...(environment ? { environment } : {}),
  };
}

export function assertServerOnly() {
  if (typeof window !== 'undefined') {
    throw new Error('[DatoCMS] This module must only run on the server');
  }
}
