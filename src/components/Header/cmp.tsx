import {
  Logo,
  NavbarLink,
  NavbarLinkList,
  RouterNavbar,
} from '@aleph-front/core'
import Link from 'next/link'

import { StyledHeader, StyledButton, StyledNavbar } from './styles'
import { useCallback, useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleCloseMenu = useCallback(() => setIsOpen(false), [setIsOpen])

  return (
    <StyledHeader>
      <RouterNavbar
        Link={function noRefCheck() {}}
        breakpoint="md"
        onToggle={function noRefCheck() {}}
        pathname="/"
        routes={[
          {
            external: true,
            href: 'https://console.twentysix.cloud/',
            name: 'Developers',
            target: '_blank',
          },
          {
            external: true,
            href: 'https://twentysix.cloud/',
            name: 'Solutions',
          },
          {
            external: true,
            href: 'https://explorer.aleph.im/',
            name: 'Use cases',
            target: '_blank',
          },
          {
            external: true,
            href: 'https://swap.aleph.im/',
            name: 'Contact us',
            target: '_blank',
          },
        ]}
      />
    </StyledHeader>
  )
}

export default Header
