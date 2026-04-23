export const apiBase =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5001";

export function getToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("access_token");
}

export function saveAuth(token: string, user: unknown) {
  if (typeof window === "undefined") return;
  localStorage.setItem("access_token", token);
  localStorage.setItem("user", JSON.stringify(user));
}

export function clearAuth() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("access_token");
  localStorage.removeItem("user");
}

export async function apiFetch<T>(path: string, options: RequestInit = {}) {
  const token = getToken();
  const headers = new Headers(options.headers || {});

  const method = (options.method || "GET").toUpperCase();
  const hasBody = options.body !== undefined && options.body !== null;

  const isFormData =
    typeof FormData !== "undefined" && options.body instanceof FormData;

  if (hasBody && !headers.has("Content-Type") && !isFormData) {
    headers.set("Content-Type", "application/json");
  }
  if (token) headers.set("Authorization", `Bearer ${token}`);


  const res = await fetch(`${apiBase}${path}`, {
    ...options,
    headers,
    mode: "cors",
  });

  if (res.status === 401) {
    clearAuth();
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
  }

  if (!res.ok) {
    let message = "Request failed";
    try {
      const err = await res.json();
      message = err.message || message;
      if (err.detail) message = `${message}: ${err.detail}`;
    } catch {
      try {
        const text = await res.text();
        if (text) message = `${message}: ${text}`;
      } catch {
        // ignore
      }
    }
    throw new Error(`HTTP ${res.status} ${message}`);
  }

  if (method === "DELETE" || res.status === 204) {
    return undefined as T;
  }

  return (await res.json()) as T;
}
