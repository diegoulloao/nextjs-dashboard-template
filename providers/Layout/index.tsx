import { SimpleLayout, DashboardLayout } from "layouts"
import { useAuth } from "hooks/providers"
import type { Auth } from "types/hooks"
import type { Provider } from "types/providers"

const LayoutProvider: Provider = ({ children }): React.ReactElement => {
  const { isAuthenticated }: Auth = useAuth()

  if (!isAuthenticated) {
    return (
      <SimpleLayout>
        { children }
      </SimpleLayout>
    )
  }

  return (
    <DashboardLayout>
      { children }
    </DashboardLayout>
  )
}

export default LayoutProvider
