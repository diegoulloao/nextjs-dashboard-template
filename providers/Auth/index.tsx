import { useState } from 'react'
import { AuthContext } from 'contexts'
import type { Provider } from 'types/providers'
import type { AuthContextType } from 'types/contexts'

const AuthProvider: Provider = ({ children }): React.ReactElement => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  const ctx: AuthContextType = {
    isAuthenticated,
    setIsAuthenticated,
  }

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>
}

export default AuthProvider
