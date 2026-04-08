function requiredEnv(name) {
  const value = process.env[name];
  if (!value || !String(value).trim()) {
    throw new Error(`[DatoCMS] Missing required env var: ${name}`);
  }
  return String(value).trim();
}

export function getDatoCdnConfig({ preview = false } = {}) {
  const token = preview
    ? process.env.NEXT_DATOCMS_PREVIEW_API_TOKEN?.trim()
    : process.env.NEXT_DATOCMS_API_TOKEN?.trim();

  if (!token) {
    throw new Error(
      `[DatoCMS] Missing ${preview ? 'NEXT_DATOCMS_PREVIEW_API_TOKEN' : 'NEXT_DATOCMS_API_TOKEN'}`
    );
  }

  return {
    token,
    environment: process.env.NEXT_DATOCMS_ENVIRONMENT?.trim() || 'main',
  };
}

export function assertServerOnly() {
  if (typeof window !== 'undefined') {
    throw new Error('[DatoCMS] This module must only run on the server');
  }
}
