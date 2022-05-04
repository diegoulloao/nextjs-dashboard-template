import combineProviders from "providers/combineProviders"
import AppProvider from "providers/App"
import AuthProvider from "providers/Auth"
import type { Provider } from "types/providers"

const Providers: Provider = combineProviders([
  AppProvider,
  AuthProvider
])

export default Providers
