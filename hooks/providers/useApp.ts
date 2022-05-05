import { useContext } from 'react'
import { AppContext } from 'contexts'
import type { App } from 'types/hooks'
import type { AppContextType } from 'types/contexts'

const useApp = (): App => {
  const { error, setError, theme, setTheme } = useContext<AppContextType>(AppContext)

  return {
    error,
    setError,
    theme,
    setTheme,
  }
}

export default useApp
