import { useEffect, useMemo, useState } from 'react';

let cache;
let cachePromise;

async function fetchPublicAssets() {
  const res = await fetch('/api/public-assets');
  if (!res.ok) throw new Error(`Failed to load public assets (${res.status})`);
  return await res.json();
}

export function usePublicAssets() {
  const [data, setData] = useState(cache ?? null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    if (cache) return;

    cachePromise ??= fetchPublicAssets().then(
      (json) => {
        cache = json;
        return json;
      },
      (err) => {
        cachePromise = undefined;
        throw err;
      }
    );

    cachePromise.then(
      (json) => {
        if (!cancelled) setData(json);
      },
      (err) => {
        if (!cancelled) setError(err);
      }
    );

    return () => {
      cancelled = true;
    };
  }, []);

  return useMemo(
    () => ({
      data,
      error,
      isLoading: !data && !error,
    }),
    [data, error]
  );
}

