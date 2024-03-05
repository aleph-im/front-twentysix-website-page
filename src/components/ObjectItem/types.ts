import { IconName } from '@aleph-front/core'
import { HTMLAttributes } from 'react'

export type ObjectItemProps = HTMLAttributes<HTMLElement> & {
  title: string
  content: string
  icon?: IconName
}
