import { BreadcrumbProps } from '@aleph-front/core'
import { HTMLAttributes } from 'react'

export type AutoBreacrumbProps = HTMLAttributes<HTMLElement> &
  Omit<BreadcrumbProps, 'navLinks'> & {
    names?: Record<string, string | Record<string, string>>
    name?: string
    includeHome?: boolean
  }
