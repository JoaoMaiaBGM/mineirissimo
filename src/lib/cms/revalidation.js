/** Fallback ISR window (seconds) when no webhook fires. */
export const CMS_ISR_REVALIDATE_SECONDS = 60;

export const CMS_PATHS = {
  home: '/',
  contact: '/contato/',
  privacyPolicy: '/politicas_de_privacidade/',
  termsAndConditions: '/termos_e_condicoes/',
};

export const ALL_CMS_PATHS = Object.values(CMS_PATHS);

/**
 * Maps DatoCMS item type API keys to the static pages that depend on them.
 * Adjust keys here if your DatoCMS models use different api_key values.
 */
const ITEM_TYPE_PATHS = {
  public: [CMS_PATHS.home, CMS_PATHS.contact],
  product: [CMS_PATHS.home],
  legal: [CMS_PATHS.privacyPolicy, CMS_PATHS.termsAndConditions],
};

const LEGAL_SLUG_PATHS = {
  'politicas-de-privacidade': CMS_PATHS.privacyPolicy,
  'termos-e-condicoes': CMS_PATHS.termsAndConditions,
};

function uniquePaths(paths) {
  return [...new Set(paths.filter(Boolean))];
}

function getItemTypeApiKey(payload) {
  const related = payload?.related_entities;
  if (!Array.isArray(related)) return null;

  const itemType = related.find((entity) => entity?.type === 'item_type');
  if (itemType?.attributes?.api_key) return itemType.attributes.api_key;

  const itemTypeId = payload?.entity?.relationships?.item_type?.data?.id;
  if (!itemTypeId) return null;

  const matched = related.find((entity) => entity?.type === 'item_type' && entity?.id === itemTypeId);
  return matched?.attributes?.api_key ?? null;
}

function shouldRevalidatePublishedRecord(payload) {
  const status = payload?.entity?.meta?.status;
  return status === 'published' || status === 'updated';
}

/**
 * Resolves which static pages should be revalidated from a DatoCMS webhook payload.
 *
 * Supports:
 * - Item publish/unpublish/delete/update events (entity_type: "item")
 * - CDA cache tag invalidation (entity_type: "cda_cache_tags")
 */
export function getPathsToRevalidate(payload) {
  if (!payload || typeof payload !== 'object') return [];

  if (payload.entity_type === 'cda_cache_tags' && payload.event_type === 'invalidate') {
    return ALL_CMS_PATHS;
  }

  if (payload.entity_type !== 'item') return [];

  const { event_type: eventType } = payload;
  const apiKey = getItemTypeApiKey(payload);

  if (!apiKey) {
    if (eventType === 'publish' || eventType === 'unpublish' || eventType === 'delete') {
      return [CMS_PATHS.home];
    }
    return [];
  }

  if (apiKey === 'legal') {
    const slug = payload.entity?.attributes?.slug;
    const path = LEGAL_SLUG_PATHS[slug];
    return uniquePaths(path ? [path] : ITEM_TYPE_PATHS.legal);
  }

  const paths = ITEM_TYPE_PATHS[apiKey];
  if (paths) {
    if (eventType === 'update' && !shouldRevalidatePublishedRecord(payload)) {
      return [];
    }
    return uniquePaths(paths);
  }

  if (eventType === 'publish' || eventType === 'unpublish' || eventType === 'delete') {
    return [CMS_PATHS.home];
  }

  return [];
}

export function describeWebhookPayload(payload) {
  return {
    event_type: payload?.event_type ?? null,
    entity_type: payload?.entity_type ?? null,
    item_type_api_key: getItemTypeApiKey(payload),
    entity_id: payload?.entity?.id ?? null,
    entity_status: payload?.entity?.meta?.status ?? null,
    environment: payload?.environment ?? null,
    is_environment_primary: payload?.is_environment_primary ?? null,
  };
}

export function verifyDatoCmsWebhookSecret(req) {
  const secret = process.env.DATOCMS_WEBHOOK_SECRET?.trim();
  if (!secret) {
    console.warn('[cms/revalidation] DATOCMS_WEBHOOK_SECRET is not configured');
    return false;
  }

  const headerSecret = req.headers['x-datocms-webhook-secret'];
  if (typeof headerSecret === 'string' && headerSecret === secret) {
    return true;
  }

  const webhookToken = req.headers['webhook-token'];
  return typeof webhookToken === 'string' && webhookToken === secret;
}
