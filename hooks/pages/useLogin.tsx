import { useAuth } from "hooks/providers"
import { useInput } from "@geist-ui/core"
import type { Auth, Login } from "types/hooks"

const useLogin = (): Login => {
  const { authenticate }: Auth = useAuth()

  const { state: username, bindings: bindUsername } = useInput("")
  const { state: password, bindings: bindPassword } = useInput("")

  const onLoginClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (username && password) {
      authenticate(username, password)
    }
  }

  return {
    bindUsername,
    bindPassword,
    onLoginClick
  }
}

export default useLogin
