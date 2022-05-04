import type { AuthContextType, AppContextType } from "types/contexts"
import type { InputBinding } from "types/geist"

export interface Auth extends AuthContextType {
  authenticate: (username: string, password: string) => void
}

export interface App extends AppContextType {}

export interface Login {
  bindUsername: InputBinding
  bindPassword: InputBinding
  onLoginClick: React.MouseEventHandler<HTMLButtonElement>
}
