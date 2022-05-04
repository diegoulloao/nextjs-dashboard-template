import type { AuthContextType, AppContextType } from "types/contexts"

export interface Auth extends AuthContextType {
  authenticate: (username: string, password: string) => void
}

export interface App extends AppContextType {}

export interface Login {
  username: string | undefined
  onUsernameChange: React.ChangeEventHandler<HTMLInputElement>
  password: string | undefined
  onPasswordChange: React.ChangeEventHandler<HTMLInputElement>
  onLoginClick: React.MouseEventHandler<HTMLButtonElement>
}
