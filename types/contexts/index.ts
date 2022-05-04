interface AppContextType {
  error: Error | null,
  setError: React.Dispatch<Error | null>
}

interface AuthContextType {
  isAuthenticated: boolean,
  setIsAuthenticated: React.Dispatch<boolean>
}

export type {
  AppContextType,
  AuthContextType
}
