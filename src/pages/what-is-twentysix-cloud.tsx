import { useEffect } from 'react'
import Head from 'next/head'
import {
  Button,
  Col,
  Row,
  TextGradient,
  Breadcrumb,
  ObjectImg,
  Icon,
  BulletList,
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
                <Link
                  href="/src/pages/what-is-twentysix-cloud"
                  key={'what-is-twentysix-cloud'}
                >
                  Why Twentysix
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
                  What is <br />
                  Twentysix <br />
                  cloud ?
                </TextGradient>
                <p className="tp-h7 text-base2 fs-26" tw="mt-8">
                  subtitle when needed only
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section tw="px-0 pt-0 pb-10 md:pb-20" ref={ref3}>
        <Container>
          <Row xs={1} md={1} gap="1.5rem">
            <Col>
              <div tw="p-0">
                <p className="fs-18" tw="mx-auto mt-0 mb-12 max-w-3xl py-12">
                  Twentysix Cloud is a groundbreaking cloud service provider
                  that stands at the forefront of decentralized computing. Our
                  platform offers a suite of cloud solutions that mirror the
                  efficiency and scalability you expect from traditional cloud
                  services but with the added benefits of decentralized
                  technology. By leveraging the robustness of Aleph.im,
                  Twentysix Cloud provides a secure, resilient, and transparent
                  cloud experience, setting a new standard for modern cloud
                  infrastructures.
                </p>
                <H2 className="tp-h4 md:tp-h3" tw="mx-auto">
                  Our offerings include
                </H2>
                <div tw="text-center">
                  <BulletList
                    size="big"
                    tw="max-w-md mx-auto text-left mt-6"
                    items={[
                      {
                        kind: 'info',
                        title: 'Computing',
                        text: 'Flexible on-demand and persistent virtual machines (VMs), ensuring secure and confidential computing capabilities.',
                      },
                      {
                        kind: 'info',
                        title: 'Storage',
                        text: 'Decentralized storage options with volumes for persistent storage needs.',
                      },
                      {
                        kind: 'info',
                        title: 'Custom domains',
                        text: 'Personalized IPFS domain services for a unique online presence.',
                      },
                      {
                        kind: 'info',
                        title: 'Oracles',
                        text: 'An indexer for oracle data.',
                      },
                      {
                        kind: 'info',
                        title: 'Indexing',
                        text: 'Enhanced search capabilities across decentralized datasets.',
                      },
                      {
                        kind: 'info',
                        title: 'VRF',
                        text: 'On-chain, verifiable randomness for enhanced security and fairness in application processes.',
                      },
                      {
                        kind: 'info',
                        title: 'Payment solutions',
                        text: 'Streamlined payment gateways for hassle-free transactions.',
                      },
                    ]}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="fx-grain-1" tw="px-0 py-12 lg:py-36">
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
            <Row xs={1} sm={2} md={2} lg={4} gap="1.5rem">
              <Col>
                <ObjectImg id="Object9" size="100px" color="main0" />
                <p className="tp-h7" tw="mt-6">
                  Computing
                </p>
                <p tw="mt-2 mb-12 min-h-fit">
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
                <p tw="mt-2 mb-12 min-h-fit">
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
              <Col tw="mt-36 text-right">
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
                  Launch cloud dApp <Icon name="map" color="base0" />
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
