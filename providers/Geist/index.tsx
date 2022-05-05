import { GeistProvider, CssBaseline } from '@geist-ui/core'
import { useApp } from 'hooks/providers'
import type { App } from 'types/hooks'
import type { Provider } from 'types/providers'

const _GeistProvider: Provider = ({ children }): React.ReactElement => {
  const { theme }: App = useApp()

  return (
    <GeistProvider themeType={theme}>
      <CssBaseline />
      {children}
    </GeistProvider>
  )
}

export default _GeistProvider
