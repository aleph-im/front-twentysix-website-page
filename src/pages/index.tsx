import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Button, Col, Row, BulletList, TextGradient } from '@aleph-front/core'
import Container from '@/components/Container'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import SignMeUpForm from '@/components/SignMeUpForm'
import { useScrollTo } from '@/hooks'
import { useRouter } from 'next/router'
import { useBasePath } from '@/hooks/useBasePath'

export default function Home() {
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
      <section tw="px-0 py-12 lg:py-36">
        <Container>
          <div tw="relative">
            <Row xs={1} md={2} gap="1.5rem">
              <Col>
                <TextGradient color="main0" type="h1" as="h1">
                  All in one <br />
                  Web3&apos;s cloud
                </TextGradient>
                <p className="tp-body1 fs-28" tw="pb-20">
                  TwentySix Cloud helps you integrate all your services <br />
                  seamlessly in one platform
                </p>
                <Button
                  forwardedAs="a"
                  target="_blank"
                  size="lg"
                  href="https://console.twentysix.cloud"
                  kind="functional"
                  variant="primary"
                  tw="py-80"
                >
                  Start building
                </Button>
              </Col>
              <Col>
                <Image
                  src={`${imgPrefix}/img/main-illustration.svg`}
                  alt="Twentysix Cloud"
                  fill={true}
                  tw="relative!"
                  priority={true}
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
                src={`${imgPrefix}/img/general-computing.svg`}
                alt="Computing"
                fill={true}
                tw="relative!"
              />
            </Col>
            <Col>
              <div className="bg-base0" tw="p-6">
                <span className="tp-info text-main0" tw="mb-0">
                  Solana - Ethereum - Binance smart chain
                </span>
                <H2 className="tp-h4 md:tp-h3">Computing</H2>
                <p className="fs-18" tw="mt-0 mb-16">
                  A secure and adaptable computing solution that enables the
                  creation and operation of virtual machines on the network.
                  Create and run customizable VMs, on-demand and persistent
                  functions.
                </p>
                <Button
                  forwardedAs="a"
                  href="https://console.twentysix.cloud/"
                  target="_blank"
                  kind="gradient"
                  variant="primary"
                  size="lg"
                  color="main0"
                  tw="!my-0"
                >
                  Go to console
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
                    Solana - Ethereum - Binance smart chain
                  </span>
                  <H2 className="tp-h4 md:tp-h3">Storage</H2>
                  <p className="fs-18" tw="mt-0 mb-16">
                    Easily store and manage your most important information with
                    IPFS and block-storage. It allows you to efficiently host
                    and serve content, simultaneously reducing the volume of
                    dynamic requests to your dApps.
                  </p>
                  <Button
                    forwardedAs="a"
                    href="https://console.twentysix.cloud/"
                    target="_blank"
                    kind="gradient"
                    variant="primary"
                    size="lg"
                    color="main0"
                    tw="!my-0"
                  >
                    Go to console
                  </Button>
                </div>
              </Col>
              <Col tw="mt-12 sm:mt-0">
                <Image
                  src={`${imgPrefix}/img/general-storage.svg`}
                  alt="Storage"
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
                src={`${imgPrefix}/img/general-developer-friendly.svg`}
                alt="Developer Friendly"
                fill={true}
                tw="relative!"
              />
            </Col>
            <Col>
              <div className="bg-base0" tw="p-6">
                <span className="tp-info text-main0" tw="mb-0">
                  SOLANA - ETHEREUM - BNB SMART CHAIN
                </span>
                <H2 className="tp-h4 md:tp-h3">
                  Developer friendly <br /> Web3 cloud tooling
                </H2>
                <BulletList
                  size="big"
                  items={[
                    {
                      kind: 'info',
                      title: 'Indexing',
                      text: 'Open-source, multi-chain indexing blockchain data.',
                    },
                    {
                      kind: 'info',
                      title: 'VRF',
                      text: 'Verifiable Random Function for games and on-chain applications.',
                    },
                    {
                      kind: 'info',
                      title: 'Custom domains',
                      text: 'Host your website with IPFS or on our serveless architecture.',
                    },
                    {
                      kind: 'info',
                      title: 'SSH access',
                      text: 'Secure way to access and manage servers over an encrypted connection.',
                    },
                  ]}
                />
                <div tw="pt-16">
                  <Button
                    forwardedAs="a"
                    href="https://docs.aleph.im"
                    target="_blank"
                    kind="gradient"
                    variant="tertiary"
                    size="lg"
                    color="main0"
                    tw="!my-0"
                  >
                    Explore solutions
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="" tw="px-0 py-20">
        <Container>
          <div tw="flex flex-col items-center justify-center">
            <H1 color="base2" type="h3" tw="mb-16 md:mb-6">
              Trusted by
            </H1>
            <div tw="flex items-center justify-center flex-wrap opacity-40 gap-20">
              <div tw="w-48 basis-1/4 sm:basis-auto relative">
                <Image
                  src={`${imgPrefix}/img/partner/p1.svg`}
                  width={104}
                  height={81}
                  alt="Ubisoft"
                />
              </div>
              <div tw="w-48 basis-1/4 sm:basis-auto relative">
                <Image
                  src={`${imgPrefix}/img/partner/p2.svg`}
                  width={157}
                  height={31}
                  alt="Request"
                />
              </div>
              <div tw="w-48 basis-1/4 sm:basis-auto relative">
                <Image
                  src={`${imgPrefix}/img/partner/p3.svg`}
                  width={144}
                  height={26}
                  alt="Libertai"
                />
              </div>
              <div tw="w-48 basis-1/4 sm:basis-auto relative">
                <Image
                  src={`${imgPrefix}/img/partner/p4.png`}
                  width={51}
                  height={48}
                  alt="Campfire"
                />
              </div>
            </div>
            <div tw="flex items-center justify-center flex-wrap opacity-40 pt-10 gap-20">
              <div tw="w-48 basis-1/4 sm:basis-auto relative">
                <Image
                  src={`${imgPrefix}/img/partner/p5.svg`}
                  width={185}
                  height={25}
                  alt="Synaps"
                />
              </div>
              <div tw="w-48 basis-1/4 sm:basis-auto relative">
                <Image
                  src={`${imgPrefix}/img/partner/p6.svg`}
                  width={144}
                  height={26}
                  alt="Anima"
                />
              </div>
              <div tw="w-48 basis-1/4 sm:basis-auto relative">
                <Image
                  src={`${imgPrefix}/img/partner/p7.png`}
                  width={144}
                  height={26}
                  alt="Fishnet"
                />
              </div>
              <div tw="w-48 basis-1/4 sm:basis-auto relative">
                <Image
                  src={`${imgPrefix}/img/partner/p8.svg`}
                  width={144}
                  height={26}
                  alt="Strateg"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section tw="px-0 py-16">
        <Container>
          <div tw="flex flex-col items-center justify-center">
            <H1 color="base2" type="h3" tw="mb-12 sm:mb-6 text-center">
              Supported blockchains
            </H1>
            <div tw="flex items-center justify-center flex-wrap opacity-40 gap-16">
              <div tw="w-12 h-12 basis-1/3 sm:basis-auto relative">
                <Image
                  src={`${imgPrefix}/img/blockchains/blck1.svg`}
                  fill={true}
                  alt="Ethereum"
                />
              </div>
              <div tw="w-12 h-12 basis-1/3 sm:basis-auto relative">
                <Image
                  src={`${imgPrefix}/img/blockchains/blck2.svg`}
                  fill={true}
                  alt="Solana"
                />
              </div>
              <div tw="w-12 h-12 basis-1/3 sm:basis-auto relative">
                <Image
                  src={`${imgPrefix}/img/blockchains/blck3.svg`}
                  fill={true}
                  alt="Binance Chain"
                />
              </div>
              <div tw="w-12 h-12 basis-1/3 sm:basis-auto relative">
                <Image
                  src={`${imgPrefix}/img/blockchains/blck4.svg`}
                  fill={true}
                  alt="Cosmos"
                />
              </div>
              <div tw="w-12 h-12 basis-1/3 sm:basis-auto relative">
                <Image
                  src={`${imgPrefix}/img/blockchains/blck5.svg`}
                  fill={true}
                  alt="Avalanche"
                />
              </div>
              <div tw="w-12 h-12 basis-1/3 sm:basis-auto relative">
                <Image
                  src={`${imgPrefix}/img/blockchains/blck6.svg`}
                  fill={true}
                  alt="Tezos"
                />
              </div>
              <div tw="w-12 h-12 basis-1/3 sm:basis-auto relative">
                <Image
                  src={`${imgPrefix}/img/blockchains/blck7.svg`}
                  fill={true}
                  alt="Polkadot"
                />
              </div>
              <div tw="w-12 h-12 basis-1/3 sm:basis-auto relative">
                <Image
                  src={`${imgPrefix}/img/blockchains/blck8.svg`}
                  fill={true}
                  alt="Polygon"
                />
              </div>
            </div>
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
