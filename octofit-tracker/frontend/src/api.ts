const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
export const API_BASE_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export function buildApiUrl(resource: string) {
  return `${API_BASE_URL}/api/${resource}`;
}

function normalizeListResponse<T>(data: any): T[] {
  if (Array.isArray(data)) {
    return data;
  }
  if (data?.items && Array.isArray(data.items)) {
    return data.items;
  }
  if (data?.data && Array.isArray(data.data)) {
    return data.data;
  }
  if (data?.results && Array.isArray(data.results)) {
    return data.results;
  }
  return [];
}

export async function fetchResourceList<T>(resource: string): Promise<T[]> {
  const response = await fetch(buildApiUrl(resource));
  const data = await response.json();
  return normalizeListResponse<T>(data);
}
