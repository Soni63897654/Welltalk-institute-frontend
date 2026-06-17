import React, { createContext, useContext, useState, useEffect } from "react";
import { getProfileAPI } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const [loading, setLoading] = useState(true);

  const getProfile = async () => {
    try {
      const res = await getProfileAPI();
      setUser(res.data);
      localStorage.setItem(
        "user",
        JSON.stringify(res.data)
      );
    } catch (error) {
      console.error("Profile sync failed:", error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (authToken) => {
    try {
      localStorage.setItem("token", authToken);
      setToken(authToken);

      const res = await getProfileAPI();

      setUser(res.data);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data)
      );
    } catch (error) {
      console.error("Login failed:", error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    if (token) {
      getProfile();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        loading,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);