import { BindingsChangeTarget } from "@geist-ui/core/esm/use-input/use-input"

export interface InputBinding {
  value: string
  onChange: (event: BindingsChangeTarget) => void
}
