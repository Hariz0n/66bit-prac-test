export const toUrlWithQueryParams = (
  base: string,
  params?: Record<string, string | string[] | undefined>
) => {
  if (!params) return base;

  const resultUrl = new URL(base)

  for (const paramKey in params) {
    const value = params[paramKey];
    if (!value || value.length === 0) continue;
    if (Array.isArray(value)) {
      value.forEach(arrayValue => {
        resultUrl.searchParams.append(paramKey, arrayValue);
      })
    } else {
      resultUrl.searchParams.append(paramKey, value);
    }
  }
  
  resultUrl.searchParams.sort()

  return resultUrl.toString()
};
