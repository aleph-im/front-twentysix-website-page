import { Icon } from '@aleph-front/core'
import { ObjectItemProps } from './types'
import { StyledContainer } from './styles'

export default function ObjectItem({
  title,
  content,
  icon = 'wallet',
  ...rest
}: ObjectItemProps) {
  return (
    <StyledContainer {...rest}>
      <div>
        <Icon name={icon} size="2.25rem" />
      </div>
      <div>
        <h3 className="tp-h7" tw="mb-2">
          {title}
        </h3>
        <p tw="m-0">{content}</p>
      </div>
    </StyledContainer>
  )
}
