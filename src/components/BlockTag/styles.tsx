import { getResponsiveCss, Tag } from '@aleph-front/core'
import styled, { css } from 'styled-components'

export const StyledTag = styled(Tag)`
  width: 100%;

  ${getResponsiveCss(
    'md',
    css`
      max-width: 350px;
    `,
  )}
`
