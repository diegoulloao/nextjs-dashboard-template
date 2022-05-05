import { createContext } from 'react'
import { AppContextType } from 'types/contexts'

const defaultCtx: AppContextType = {
  error: null,
  setError: () => null,
  theme: 'dark',
  setTheme: () => null,
}

const AppContext = createContext(defaultCtx)

export default AppContext
