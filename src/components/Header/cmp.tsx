import { LinkComponent, RouterNavbar } from '@aleph-front/core'

import Link from 'next/link'

import { StyledHeader } from './styles'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleCloseMenu = useCallback((open: boolean) => setIsOpen(open), [])

  const router = useRouter()

  return (
    <StyledHeader>
      <RouterNavbar
        Link={Link as LinkComponent}
        breakpoint="md"
        pathname={router.pathname}
        onToggle={handleCloseMenu}
        open={isOpen}
        routes={[
          {
            external: true,
            href: 'https://docs.aleph.im/',
            name: 'Developers',
            target: '_blank',
          },
          {
            href: '/',
            name: 'Solutions',
            exact: true,
          },
          {
            href: '/use-cases',
            name: 'Use cases',
          },
          {
            href: '/contact',
            name: 'Contact us',
          },
        ]}
      />
    </StyledHeader>
  )
}

export default Header
