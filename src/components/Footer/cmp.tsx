import { Footer as BaseFooter, LinkComponent } from '@aleph-front/core'
import Link from 'next/link'

export const Footer = () => {
  return (
    <BaseFooter
      {...{
        Link: Link as LinkComponent,
        small: false,
        buttons: [
          {
            label: 'Work with us',
            href: '/contact',
          },
          {
            label: 'Try our cloud',
            href: '',
          },
          {
            label: 'Start a project',
            href: 'https://docs.aleph.im/computing/',
            target: '_blank',
          },
        ],
        media: [
          {
            name: 'x',
            icon: 'x',
            label: 'Follow us',
            href: 'https://twitter.com/TwentySixCloud',
            target: '_blank',
            small: true,
          },
          {
            name: 'telegram',
            icon: 'telegram',
            label: 'Telegram',
            href: 'https://t.me/alephim',
            target: '_blank',
          },
          {
            name: 'medium',
            icon: 'medium',
            label: 'Medium',
            href: 'https://medium.com/aleph-im',
            target: '_blank',
            small: true,
          },
        ],
        mainLinks: [
          {
            label: 'Documentation',
            href: 'https://docs.aleph.im',
            target: '_blank',
          },
          {
            label: 'Telegram Developers',
            href: 'https://t.me/alephim/119590',
            target: '_blank',
          },
        ],
        links: [
          {
            title: 'Solutions',
            links: [
              {
                label: 'Computing',
                href: 'https://console.twentysix.cloud/computing/function/new/',
                target: '_blank',
              },
              {
                label: 'Storage',
                href: 'https://console.twentysix.cloud/storage/volume/new/',
                target: '_blank',
              },
              {
                label: 'Custom domains',
                href: 'https://console.twentysix.cloud/configure/domain/new/',
                target: '_blank',
              },
              {
                label: 'SSH',
                href: 'https://console.twentysix.cloud/configure/ssh/new/',
                target: '_blank',
              },
            ],
          },
          {
            title: 'Developers',
            links: [
              {
                label: 'Documentation',
                href: 'https://docs.aleph.im',
                target: '_blank',
              },
              {
                label: 'Developer telegram',
                href: 'https://t.me/alephim/119590',
                target: '_blank',
              },
              {
                label: 'Github',
                href: 'https://github.com/aleph-im',
                target: '_blank',
              },
              {
                label: 'SDK',
                href: 'https://docs.aleph.im/libraries/Aleph.im-Python-SDK/',
                target: '_blank',
              },
            ],
          },
          {
            title: 'Why twentysix',
            links: [
              {
                label: 'What is twentysix cloud?',
                href: '/what-is-twentysix-cloud',
              },
              {
                label: 'Choosing twentysix cloud',
                href: '/choosing-twentysix-cloud',
              },
              {
                label: 'Decentralized cloud solution',
                href: '/decentralized-cloud-solution',
              },
              {
                label: 'What is decentralized cloud computing?',
                href: '/what-is-decentralized-cloud-computing',
              },
            ],
          },
          {
            title: 'About',
            links: [
              {
                label: 'Media kit',
                href: 'https://ipfs.aleph.cloud/ipfs/QmaFMoSzV3tncoHsD4bDKKqLHWrAQjGM2hWeDXSwoD2DCs?filename=twentysix-media.zip',
                target: '_blank',
              },
              {
                label: 'Aleph.im technology',
                href: 'https://aleph.im',
                target: '_blank',
              },
            ],
          },
        ],
      }}
    />
  )
}

export default Footer
