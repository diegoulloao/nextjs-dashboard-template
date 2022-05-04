import { createContext } from "react"
import type { AuthContextType } from "types/contexts"

const defaultCtx: AuthContextType = {
  isAuthenticated: false,
  setIsAuthenticated: () => null
}

const AuthContext = createContext(defaultCtx)

export default AuthContext
