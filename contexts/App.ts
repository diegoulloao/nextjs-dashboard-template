import { createContext } from "react"
import { AppContextType } from "types/contexts"

const defaultCtx: AppContextType = {
  state: null,
  setState: () => null
}

const AppContext = createContext(defaultCtx)

export default AppContext