import { Provider } from "types/providers"

const combineProviders = (providers: Provider[]): Provider => {
  return providers.reduce(
    (Combined, Provider) => {
      return ({ children }) => {
        return (
          <Combined>
            <Provider>
              { children }
            </Provider>
          </Combined>
        )
      }
    }
  )
}

export default combineProviders
