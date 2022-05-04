import { useContext } from "react"
import { AuthContext } from "contexts"
import type { Auth } from "types/hooks"
import type { AuthContextType } from "types/contexts"

const useAuth = (): Auth => {
  const { isAuthenticated } = useContext<AuthContextType>(AuthContext)

  return {
    isAuthenticated
  }
}

export default useAuth
