import { useState } from "react"
import { useAuth } from "hooks/providers"
import type { Auth, Login } from "types/hooks"

const useLogin = (): Login => {
  const { authenticate }: Auth = useAuth()

  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()

  const onUsernameChange: React.ChangeEventHandler<HTMLInputElement> = ({ target: username }) => {
    setUsername(username.value)
  }

  const onPasswordChange: React.ChangeEventHandler<HTMLInputElement> = ({ target: password }) => {
    setPassword(password.value)
  }

  const onLoginClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (username && password) {
      authenticate(username, password)
    }
  }

  return {
    username,
    onUsernameChange,
    password,
    onPasswordChange,
    onLoginClick
  }
}

export default useLogin
