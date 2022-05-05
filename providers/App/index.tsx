import { useState } from 'react'
import { AppContext } from 'contexts'
import type { Provider } from 'types/providers'
import type { AppContextType } from 'types/contexts'

const AppProvider: Provider = ({ children }): React.ReactElement => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [error, setError] = useState<Error | null>(null)

  const ctx: AppContextType = {
    error,
    setError,
    theme,
    setTheme,
  }

  return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>
}

export default AppProvider
