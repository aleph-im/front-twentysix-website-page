import Head from 'next/head'
import { Col, Row, TextGradient, Breadcrumb } from '@aleph-front/core'
import Container from '@/components/Container'
import Link from 'next/link'
import DecentralizedTools from '@/components/DecentralizedTools'
import { GetUpdatesSection } from '@/components/GetUpdatesSection/cmp'
export default function WhatIsDecentralizedCloudComputing() {
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
                  href="/src/pages/what-is-decentralized-cloud-computing"
                  key={'what-is-decentralized-cloud-computing'}
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
                  What is <br />
                  decentralized <br />
                  cloud computing ?
                </TextGradient>
                <p className="tp-h7 text-base2 fs-26" tw="mt-8">
                  subtitle when needed only
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
                  Decentralized cloud computing with Twentysix Cloud represents
                  a paradigm shift in how data is stored, accessed, and managed.
                  Unlike centralized networks, our decentralized architecture
                  distributes data across multiple nodes, ensuring no single
                  entity controls the network. This means enhanced security,
                  privacy, and reliability. With Twentysix Cloud, experience the
                  next era of cloud computing, where power is returned to the
                  user, fostering an ecosystem that thrives on transparency and
                  trust.
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
