import { useContext } from 'react'
import { AuthContext } from 'contexts'
import type { Auth } from 'types/hooks'
import type { AuthContextType } from 'types/contexts'

const useAuth = (): Auth => {
  const { isAuthenticated, setIsAuthenticated } = useContext<AuthContextType>(AuthContext)

  const authenticate = (username: string, password: string) => {
    alert(`${username} ${password}`)
  }

  return {
    isAuthenticated,
    setIsAuthenticated,
    authenticate,
  }
}

export default useAuth
