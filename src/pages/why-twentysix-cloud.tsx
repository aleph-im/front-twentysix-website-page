import Head from 'next/head'
import { Col, Row, TextGradient, Breadcrumb } from '@aleph-front/core'
import Container from '@/components/Container'
import H2 from '@/components/H2'
import Link from 'next/link'
import DecentralizedTools from '@/components/DecentralizedTools'
import { GetUpdatesSection } from '@/components/GetUpdatesSection/cmp'
export default function WhyTwentysixCloud() {
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
                  href="/src/pages/why-twentysix-cloud"
                  key={'why-twentysix-cloud'}
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
                  Choosing <br />
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
                <p className="fs-18" tw="mx-auto mt-0 max-w-3xl py-12">
                  When it comes to selecting a cloud service provider, Twentysix
                  cloud distinguishes itself through unparalleled security,
                  cost-efficiency, and performance. Our platform is designed to
                  meet the evolving needs of businesses and developers, offering
                  a versatile environment that supports a wide array of
                  applications. With twentysix cloud, you gain access to a
                  decentralized network that ensures your data remains in your
                  control, all while benefiting from a flexible and user-centric
                  service.
                </p>
                <div tw="max-w-3xl mx-auto">
                  <H2 className="tp-h4 md:tp-h3" tw="m-0">
                    The future of cloud is <br />
                    decentralized
                  </H2>
                </div>
                <p className="fs-18" tw="mx-auto mt-0 mb-16 max-w-3xl pt-6">
                  Twentysix cloud is not just another cloud service; it&apos;s a
                  paradigm shift inspired by the core principles of aleph.im. As
                  pioneers in decentralized cloud solutions, we provide an
                  ecosystem that is inherently secure, private, and scalable.
                  This is a network designed to empower, where each node
                  contributes to a larger, more robust, and collectively
                  resilient architecture.
                </p>
                <div tw="max-w-3xl mx-auto">
                  <H2 className="tp-h4 md:tp-h3" tw="m-0">
                    Cutting-edge technology
                  </H2>
                </div>
                <p className="fs-18" tw="mx-auto mt-0 mb-0 max-w-3xl py-6">
                  Twentysix cloud stands at the vanguard of decentralized
                  technology, offering a suite of cloud solutions powered by
                  blockchain&apos;s inherent security and the global reach of a
                  distributed ledger. This means your data isn&apos;t just
                  stored—it&apos;s protected, encrypted, and made interoperable
                  across any network.
                </p>
                <div tw="max-w-3xl mx-auto mb-32">
                  <p className="fs-24" tw="py-6">
                    “The best decentralized infrastructure for AI”
                  </p>
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
