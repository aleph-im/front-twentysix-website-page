import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Button, Col, Row, TextGradient, Breadcrumb } from '@aleph-front/core'
import Container from '@/components/Container'
import H2 from '@/components/H2'
import { useScrollTo } from '@/hooks'
import { useRouter } from 'next/router'
import { useBasePath } from '@/hooks/useBasePath'
import Link from 'next/link'
import DecentralizedTools from '@/components/DecentralizedTools'
import GetUpdatesSection from '@/components/GetUpdatesSection'

export default function UseCases() {
  const [ref1, handleScroll1] = useScrollTo()
  const [ref2, handleScroll2] = useScrollTo()
  const [ref3, handleScroll3] = useScrollTo()

  const basePath = useBasePath()
  const imgPrefix = basePath?.charAt(0) === '/' ? basePath : ''

  const { asPath } = useRouter()

  useEffect(() => {
    const [, hash] = asPath.split('#')

    switch (hash) {
      case 'solutions': {
        return handleScroll1()
      }
      case 'roadmap': {
        return handleScroll2()
      }
      case 'indexing': {
        return handleScroll3()
      }
    }
  }, [asPath, handleScroll1, handleScroll2, handleScroll3])

  return (
    <>
      <Head>
        <title>Use cases and success stories | Twentysix Cloud</title>
        <meta
          name="description"
          content="Explore real-world applications of Twentysix Cloud's decentralized cloud solutions. See how businesses harness our technology for improved efficiency and security."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section tw="p-0 pt-12 lg:pt-20">
        <Container>
          <div tw="relative">
            <Breadcrumb
              navLinks={[
                <Link href="/" key={'home'}>
                  Home
                </Link>,
                <Link href="/use-cases" key={'use-cases'}>
                  Use cases
                </Link>,
              ]}
            />
            <Row xs={1} md={1} gap="1.5rem">
              <Col>
                <TextGradient
                  color="main0"
                  type="h2"
                  forwardedAs="h1"
                  className="tp-h2 md:tp-header"
                  tw="mb-0"
                >
                  Use cases
                </TextGradient>
                <p className="tp-h7 text-base2 fs-26" tw="mt-8">
                  Solve your business problems with our industry solutions
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="fx-grain-1" tw="px-0 pt-20 pb-10 md:pb-20" ref={ref3}>
        <Container>
          <Row xs={1} md={2} gap="1.5rem">
            <Col tw="order-last sm:order-first">
              <Image
                src={`${imgPrefix}/img/general-ubisoft.svg`}
                alt="Ubisoft"
                fill={true}
                tw="relative!"
              />
            </Col>
            <Col>
              <div className="bg-base0" tw="p-6">
                <span className="tp-info text-main0" tw="mb-0">
                  Use case
                </span>
                <H2 className="tp-h4 md:tp-h3">Ubisoft</H2>
                <p className="fs-18" tw="mt-0 mb-16">
                  Aleph.im joined Ubisoft’s Innovation Lab for the revolutionary
                  integration of dynamic NFTs (Non-Fungible Tokens) in Ubisoft’s
                  AAA game, “Tom Clancy’s Ghost Recon Breakpoint”. Aleph.im
                  provided a decentralized storage system for these NFTs called
                  Digits on Ubisoft’s blockchain-powered platform, Ubisoft
                  Quartz. <br />
                  <br />
                  The NFTs, representing unique in-game evolvable assets,
                  offered a new level of engagement and ownership to players,
                  allowing them to claim, use, and trade their in-game items on
                  the secondary market.
                </p>
                <Button
                  forwardedAs="a"
                  href="https://quartz.ubisoft.com/faq/technology/what-is-aleph"
                  target="_blank"
                  kind="gradient"
                  variant="tertiary"
                  size="lg"
                  color="main0"
                  tw="!my-0"
                >
                  Learn more
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section tw="py-20" ref={ref1}>
        <Container>
          <div tw="relative">
            <Row xs={1} md={2} gap="0">
              <Col xs={1} md={1}>
                <div className="bg-base0" tw="p-6">
                  <span className="tp-info text-main0" tw="mb-0">
                    Use case
                  </span>
                  <H2 className="tp-h4 md:tp-h3">
                    Libertai.io harnessing <br />
                    aleph.im&apos;s power for <br />
                    decentralized AI
                  </H2>
                  <p className="fs-18" tw="mt-0 mb-16">
                    Libertai&apos;s large language models run on a combination
                    of technologies such as IPFS and Twentysix Cloud. This
                    synergy results in a fully decentralized, uncensored,
                    secure, and resilient computing network that is, in essence,
                    unstoppable. By using aleph.im&apos;s Compute Resource
                    Nodes, Libertai presents an innovative way to deliver AI
                    technology, reinforcing its resilience, security, and
                    scalability, while ensuring user privacy and data integrity.
                  </p>
                  <Button
                    forwardedAs="a"
                    href="https://libertai.io/"
                    target="_blank"
                    kind="gradient"
                    variant="tertiary"
                    size="lg"
                    color="main0"
                    tw="!my-0"
                  >
                    Explore the future of AI
                  </Button>
                </div>
              </Col>
              <Col tw="mt-12 sm:mt-0">
                <Image
                  src={`${imgPrefix}/img/general-ai-interface.svg`}
                  alt="Libertai"
                  fill={true}
                  tw="relative!"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="fx-grain-1" tw="px-0 pt-20 pb-10 md:pb-20" ref={ref3}>
        <Container>
          <Row xs={1} md={2} gap="1.5rem">
            <Col tw="order-last sm:order-first">
              <Image
                src={`${imgPrefix}/img/general-ipfs-storage.svg`}
                alt="Developer Friendly"
                fill={true}
                tw="relative!"
              />
            </Col>
            <Col xs={1} md={1}>
              <div className="bg-base0" tw="p-6">
                <span className="tp-info text-main0" tw="mb-0">
                  Use case
                </span>
                <H2 className="tp-h4 md:tp-h3">Request finance</H2>
                <p className="fs-18" tw="mt-0 mb-16">
                  Aleph.im collaborated with Request Network, the invoicing
                  technology for DeFi, DAOs, and Crypto-first companies.
                  <br />
                  <br />
                  Aleph.im bridged Request&apos;s dedicated IPFS network and the
                  IPFS public network, providing backup storage for invoicing
                  and transaction data. This partnership added more resilience
                  and decentralization to the Request network, trusted by
                  notable companies in the crypto industry like Maker, Gnosis,
                  Aave, Ocean, and Near Foundation.
                </p>
                <Button
                  forwardedAs="a"
                  href="https://www.request.finance/post/request-partners-with-aleph-im-expanding-decentralized-storage-of-invoicing-data-on-the-blockchain"
                  target="_blank"
                  kind="gradient"
                  variant="tertiary"
                  size="lg"
                  color="main0"
                  tw="!my-0"
                >
                  Read the case
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <DecentralizedTools />
      <GetUpdatesSection />
    </>
  )
}
