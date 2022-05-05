import combineProviders from 'providers/combineProviders'
import AppProvider from 'providers/App'
import AuthProvider from 'providers/Auth'
import GeistProvider from 'providers/Geist'
import LayoutProvider from 'providers/Layout'
import type { Provider } from 'types/providers'

const Providers: Provider = combineProviders([AppProvider, AuthProvider, GeistProvider, LayoutProvider])

export default Providers
