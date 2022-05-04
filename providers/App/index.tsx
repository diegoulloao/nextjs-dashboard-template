import { useState } from "react"
import { AppContext } from "contexts"
import type { Provider } from "types/providers"
import type { AppContextType } from "types/contexts"

const AppProvider: Provider = ({ children }): React.ReactElement => {
  const [state, setState] = useState<any>()

  const ctx: AppContextType = {
    state,
    setState
  }

  return (
    <AppContext.Provider value={ctx}>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider
