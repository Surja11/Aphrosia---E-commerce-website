// src/utils/csrf.js
export function getCSRFToken() {
  // Try to get CSRF token from meta tag
  const metaTag = document.querySelector('meta[name="csrf-token"]');
  if (metaTag && metaTag.getAttribute('content')) {
    return metaTag.getAttribute('content');
  }
  
  // Try to get from cookie (Django's default approach)
  const name = "csrftoken=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length);
    }
  }
  
  return null;
}

export async function ensureCSRFToken() {
  let token = getCSRFToken();
  
  if (!token) {
    try {
      // Try to get a CSRF token from the server
      const response = await fetch('http://127.0.0.1:8000/api/csrf/', {
        method: 'GET',
        credentials: 'include',
      });
      
      if (response.ok) {
        token = getCSRFToken(); // Try to get the token again after the request
      }
    } catch (error) {
      console.error('Failed to get CSRF token:', error);
      return null;
    }
  }
  
  return token;
}

// Function to make authenticated requests with CSRF handling
export async function makeAuthenticatedRequest(url, options = {}) {
  let token = await ensureCSRFToken();
  
  if (!token) {
    throw new Error('CSRF token not available');
  }
  
  const defaultOptions = {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': token,
    },
  };
  
  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };
  
  const response = await fetch(url, mergedOptions);
  
  // If we get a 403, try to refresh the CSRF token and retry once
  if (response.status === 403) {
    const newToken = await ensureCSRFToken();
    if (newToken && newToken !== token) {
      mergedOptions.headers['X-CSRFToken'] = newToken;
      return await fetch(url, mergedOptions);
    }
  }
  
  return response;
}