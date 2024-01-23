import { useEffect } from 'react'
import Head from 'next/head'
import { Col, Row, TextGradient, Breadcrumb } from '@aleph-front/core'
import Container from '@/components/Container'
import { useScrollTo } from '@/hooks'
import { useRouter } from 'next/router'
import Link from 'next/link'
import DecentralizedTools from '@/components/DecentralizedTools'
import { GetUpdatesSection } from '@/components/GetUpdatesSection/cmp'
export default function UseCases() {
  const [ref1, handleScroll1] = useScrollTo()
  const [ref2, handleScroll2] = useScrollTo()
  const [ref3, handleScroll3] = useScrollTo()

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
                  key={'why-twentysix'}
                >
                  Why Twentysix
                </Link>,
                <Link
                  href="/src/pages/decentralized-cloud-solution"
                  key={'decentralized-cloud-solution'}
                >
                  ...
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
                  Decentralized <br />
                  cloud <br />
                  solution
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
                <p className="fs-18" tw="mx-auto mt-0 max-w-3xl py-12">
                  Twentysix Cloud redefines cloud computing by decentralizing
                  the very core of its infrastructure. Our decentralized cloud
                  solutions eliminate single points of failure, ensuring higher
                  uptime and resilience against attacks. Embrace a network
                  that&apos;s not just robust but also promotes a
                  community-driven model where you benefit from shared resources
                  and collective growth. Twentysix Cloud is not just a service;
                  it&apos;s a movement towards a more secure, democratic, and
                  efficient cloud ecosystem.
                </p>
                <div tw="max-w-3xl mx-auto mb-32"></div>
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
