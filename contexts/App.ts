import { createContext } from "react"
import { AppContextType } from "types/contexts"

const defaultCtx: AppContextType = {
  error: null,
  setError: () => null
}

const AppContext = createContext(defaultCtx)

export default AppContext
