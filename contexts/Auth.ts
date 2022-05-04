import { createContext } from "react"
import type { AuthContextType } from "types/contexts"

const defaultCtx: AuthContextType = {
  state: null,
  setState: () => null
}

const AuthContext = createContext(defaultCtx)

export default AuthContext
