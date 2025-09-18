// src/context/AuthContext.jsx
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Define checkAuth OUTSIDE useEffect so it's reusable
  const checkAuth = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/me/", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setIsAuthenticated(true);
        setUser(data);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (err) {
      console.error("Auth check failed:", err);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth(); // runs once on mount (reload/session restore)
  }, []);

  const login = async (credentials) => {
    const response = await fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      // Login worked → refresh user data from /
      const data = await response.json()
      setIsAuthenticated(true)
      setUser(data.user)

      return { success: true };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData };
    }
  };

  const logout = async () => {
    await fetch("http://127.0.0.1:8000/logout/", {
      method: "POST",
      credentials: "include",
    });
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
