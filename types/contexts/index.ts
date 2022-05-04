interface AppContextType {
  error: Error | null,
  setError: React.Dispatch<Error | null>
  theme: "light" | "dark"
  setTheme: React.Dispatch<"light" | "dark">
}

interface AuthContextType {
  isAuthenticated: boolean,
  setIsAuthenticated: React.Dispatch<boolean>
}

export type {
  AppContextType,
  AuthContextType
}
