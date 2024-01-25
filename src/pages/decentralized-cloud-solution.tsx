import Head from 'next/head'
import { Col, Row, TextGradient, Breadcrumb } from '@aleph-front/core'
import Container from '@/components/Container'
import Link from 'next/link'
import DecentralizedTools from '@/components/DecentralizedTools'
import { GetUpdatesSection } from '@/components/GetUpdatesSection/cmp'
export default function DecentralizedCloudSolution() {
  return (
    <>
      <Head>
        <title>Decentralized Cloud Solutions | Twentysix Cloud</title>
        <meta
          name="description"
          content="Experience the future of cloud computing with Twentysix Cloud's decentralized solutions. Tailored for businesses seeking secure, scalable, and efficient cloud solutions."
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
                <Link
                  href="/decentralized-cloud-solution"
                  key={'decentralized-cloud-solution'}
                >
                  Decentralized cloud solutions
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
                  Flexibility to build and run dApps
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section tw="px-0 pt-0 pb-10 md:pb-20">
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
                  and collective growth. <br />
                  Build, deploy, and and manage applications on our scalable
                  infrastructure. Store any type and amount of data, anywhere
                  and anytime with our GDPR compliant technology.
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
