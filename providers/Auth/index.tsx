import { useState } from "react"
import { AuthContext } from "contexts"
import type { Provider } from "types/providers"
import type { AuthContextType } from "types/contexts"

const AuthProvider: Provider = ({ children }): React.ReactElement => {
  const [state, setState] = useState<any>()

  const ctx: AuthContextType = {
    state,
    setState
  }

  return (
    <AuthContext.Provider value={ctx}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider
