import { GeistProvider, CssBaseline } from "@geist-ui/core"

export default function ({ children }: { children: JSX.Element }) {
  return (
    <GeistProvider>
      <CssBaseline />
      { children }
    </GeistProvider>
  )
}
