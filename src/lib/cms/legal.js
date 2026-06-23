import { render as renderStructuredText } from 'datocms-structured-text-to-html-string';

import { cmsQuery } from './client';
import { GET_LEGAL_BY_SLUG_QUERY } from './queries';

export const LEGAL_SLUGS = {
  privacyPolicy: 'politicas-de-privacidade',
  termsAndConditions: 'termos-e-condicoes',
};

export function mapLegalRecord(record) {
  if (!record) return null;

  const contentHtml = record.content ? renderStructuredText(record.content) : '';

  return {
    id: record.id,
    title: record.title ?? '',
    slug: record.slug ?? '',
    contentHtml,
    description: contentHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
  };
}

export async function getLegalBySlug(slug, { preview = false } = {}) {
  if (!slug) return null;

  const data = await cmsQuery(GET_LEGAL_BY_SLUG_QUERY, {
    preview,
    variables: { slug },
  });

  return mapLegalRecord(data?.legal);
}

export async function getPrivacyPolicy({ preview = false } = {}) {
  return getLegalBySlug(LEGAL_SLUGS.privacyPolicy, { preview });
}

export async function getTermsAndConditions({ preview = false } = {}) {
  return getLegalBySlug(LEGAL_SLUGS.termsAndConditions, { preview });
}
