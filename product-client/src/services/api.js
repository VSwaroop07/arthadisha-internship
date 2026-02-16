const BASE_URL = 'https://localhost:7072'
const TOKEN_KEY = 'auth_token'

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}

const redirectToLogin = () => {
  clearToken()
  if (window.location.pathname !== '/login') {
    window.location.replace('/login')
  }
}

const buildHeaders = (headers = {}) => {
  const token = getToken()
  const merged = {
    'Content-Type': 'application/json',
    ...headers,
  }

  if (token) {
    merged.Authorization = `Bearer ${token}`
  }

  return merged
}

const request = async (path, options = {}) => {
  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: buildHeaders(options.headers),
  })

  if (response.status === 401) {
    redirectToLogin()
    throw new Error('Unauthorized')
  }

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || 'Request failed')
  }

  if (response.status === 204) {
    return null
  }

  return response.json()
}

export const apiGet = (path) => request(path)

export const apiPost = (path, body) =>
  request(path, {
    method: 'POST',
    body: JSON.stringify(body),
  })
