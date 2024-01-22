import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {
  Button,
  Col,
  Row,
  TextGradient,
  Breadcrumb,
  ObjectImg,
} from '@aleph-front/core'
import Container from '@/components/Container'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import SignMeUpForm from '@/components/SignMeUpForm'
import { useScrollTo } from '@/hooks'
import { useRouter } from 'next/router'
import { useBasePath } from '@/hooks/useBasePath'
import Link from 'next/link'
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
        <title>Aleph.im</title>
        <meta name="description" content="Aleph.im" />
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
                  type="header"
                  forwardedAs="h1"
                  tw="mb-0"
                >
                  Use cases
                </TextGradient>
                <p className="tp-h7 text-base2 fs-26" tw="mt-8">
                  subtitle when needed only
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="fx-grain-1" tw="px-0 pt-20 pb-10 md:pb-20" ref={ref3}>
        <Container>
          <Row xs={1} md={2} gap="1.5rem">
            <Col>
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
                  href="https://console.aleph.im/"
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
                    aleph.im&amp;s power for <br />
                    decentralized AI
                  </H2>
                  <p className="fs-18" tw="mt-0 mb-16">
                    Libertai&amp;s large language models run on a combination of
                    technologies such as IPFS and aleph.im. This synergy results
                    in a fully decentralized, uncensored, secure, and resilient
                    computing network that is, in essence, unstoppable. <br />
                    <br />
                    By utilizing Aleph.im&amp;s compute resource nodes, Libertai
                    presents an innovative way to deliver AI technology,
                    reinforcing its resilience, security, and scalability, while
                    ensuring user privacy and data integrity.
                  </p>
                  <Button
                    forwardedAs="a"
                    href="https://console.aleph.im/"
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
              <Col>
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
            <Col>
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
                <H2 className="tp-h4 md:tp-h3">Request network</H2>
                <p className="fs-18" tw="mt-0 mb-16">
                  Aleph.im collaborated with Request Network, the invoicing
                  technology for DeFi, DAOs, and Crypto-first companies.
                  <br />
                  <br />
                  Aleph.im bridged Request's dedicated IPFS network and the IPFS
                  public network, providing backup storage for invoicing and
                  transaction data. This partnership added more resilience and
                  decentralization to the Request network, trusted by notable
                  companies in the crypto industry like Maker, Gnosis, Aave,
                  Ocean, and Near Foundation.
                </p>
                <Button
                  forwardedAs="a"
                  href="https://console.aleph.im/"
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
      <section tw="px-0 py-12 lg:py-36">
        <Container>
          <div tw="relative">
            <Row xs={1} md={2} gap="1.5rem">
              <Col>
                <h3 className="text-base2 tp-h3 md:tp-h3">
                  Decentralized cloud solution
                </h3>
                <p tw="mb-12">
                  TwentySix Cloud is a decentralized cloud solution, offering a
                  full range of blockchain-based storage and compute engine for
                  businesses and applications, enhancing data security ownership
                  in a decentralized ecosystem.
                </p>
              </Col>
            </Row>
            <Row xs={1} md={5} gap="1.5rem">
              <Col>
                <ObjectImg id="Object9" size="100px" color="main0" />
                <p className="tp-h7" tw="mt-6">
                  Computing
                </p>
                <p tw="mt-2 mb-6 min-h-fit">
                  Secure and customizable compute service to create and run
                  Virtual Machines on aleph.im infrastructure layer.
                </p>
                <Button
                  forwardedAs="a"
                  href="https://console.aleph.im/"
                  target="_blank"
                  kind="gradient"
                  variant="secondary"
                  size="lg"
                  color="main0"
                  tw="!my-0"
                >
                  Get started
                </Button>
              </Col>
              <Col>
                <ObjectImg id="Object1" size="100px" color="main0" />
                <p className="tp-h7" tw="mt-6">
                  Storage
                </p>
                <p tw="mt-2 mb-12 min-h-fit">
                  Store any type and amount of data including InterPlanetary
                  File System and block-storage.
                </p>
                <Button
                  forwardedAs="a"
                  href="https://console.aleph.im/"
                  target="_blank"
                  kind="gradient"
                  variant="secondary"
                  size="lg"
                  color="main0"
                  tw="!my-0"
                >
                  Get started
                </Button>
              </Col>
              <Col>
                <ObjectImg id="Object15" size="100px" color="main0" />
                <p className="tp-h7" tw="mt-6">
                  Web3 cloud tooling
                </p>
                <p tw="mt-2 mb-6 min-h-fit">
                  Custom domains, SSH access, Verifiable Random Function for
                  gaming, open-source, multi-chain indexing blockchain data.
                </p>
                <Button
                  forwardedAs="a"
                  href="https://console.aleph.im/"
                  target="_blank"
                  kind="gradient"
                  variant="secondary"
                  size="lg"
                  color="main0"
                  tw="!my-0"
                >
                  Get started
                </Button>
              </Col>
              <Col>
                <Button
                  forwardedAs="a"
                  href="https://console.aleph.im/"
                  target="_blank"
                  kind="gradient"
                  variant="primary"
                  size="lg"
                  color="main0"
                  tw="!my-0"
                >
                  Launch cloud dApp
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="fx-grain-2" tw="px-0 py-12 md:py-20">
        <Container>
          <div tw="md:flex md:justify-center">
            <div tw="md:inline-flex md:flex-col md:items-center">
              <H1 color="base2" type="h3" tw="mb-6">
                Get the latest updates
              </H1>
              <p className="fs-18 text-base2" tw="mt-0 mb-4">
                Be the first to know about new launches
              </p>
              <SignMeUpForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
