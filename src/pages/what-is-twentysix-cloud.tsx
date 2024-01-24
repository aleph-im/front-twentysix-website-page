import Head from 'next/head'
import {
  Col,
  Row,
  TextGradient,
  Breadcrumb,
  BulletList,
} from '@aleph-front/core'
import Container from '@/components/Container'
import H2 from '@/components/H2'
import Link from 'next/link'
import DecentralizedTools from '@/components/DecentralizedTools'
import { GetUpdatesSection } from '@/components/GetUpdatesSection/cmp'
export default function WhatIsTwentysixCloud() {
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
      <section tw="px-0 pt-0 pb-10 md:pb-20">
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
      <DecentralizedTools />
      <GetUpdatesSection />
    </>
  )
}
