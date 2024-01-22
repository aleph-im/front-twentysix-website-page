import 'styled-components'
import { CoreTheme } from '@aleph-front/core'

declare module 'styled-components' {
  export type DefaultTheme = CoreTheme
}
