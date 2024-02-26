export const toUrlWithQueryParams = (base: string, params?: Record<string, string | string[]>) => {
  if (!params) return base;

  const url = new URL(base);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key].toString()));
  return url.toString();
}