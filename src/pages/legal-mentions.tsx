import React from 'react'
import Head from 'next/head'
import AutoBreadcrumb from '@/components/AutoBreadcrumb/cmp'
import Container from '@/components/Container/cmp'
import H1 from '@/components/H1/cmp'
import H2 from '@/components/H2/cmp'
import { Breadcrumb, Col, Row, TextGradient } from '@aleph-front/core'
import Link from 'next/link'

export default function LegalMentions() {
  return (
    <>
      <Head>
        <title>Aleph.im | Legal Mentions</title>
        <meta name="description" content="Aleph.im legal mentions" />
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
                <Link href="/legal-mentions" key={'legal-mentions'}>
                  Legal mentions
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
                  Legal mentions
                </TextGradient>
                <p className="tp-h7 text-base2 fs-26" tw="mt-8">
                  subtitle when needed only
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section tw="px-0 py-16 pt-32">
        <Container>
          <Row xs={1} md={4}>
            <Col xs={1} md={2} mdOffset={2}>
              <div tw="flex flex-col gap-16">
                <div>
                  <H2 type="h7" color="base2" tw="mb-6">
                    Company
                  </H2>
                  <p className="fs-18">
                    Aleph.im SASU <br />
                    242 Boulevard Voltaire <br />
                    75011 Paris <br />
                    France
                  </p>
                  <p className="tp-body1 fs-10">
                    The company is listed on the Paris Companies Register under
                    the following number 882 412 869 RCS Paris (Code APE 6202 A
                    - Conseil en systèmes et logiciels informatiques)
                  </p>
                </div>
                <div>
                  <H2 type="h7" color="base2" tw="mb-6">
                    Responsible publisher
                  </H2>
                  <p className="fs-18">
                    242 Boulevard Voltaire <br />
                    75011 Paris <br />
                    France <br />
                  </p>
                </div>
                <div>
                  <H2 type="h7" color="base2" tw="mb-6">
                    Web hosting
                  </H2>
                  <p className="fs-18">
                    SCALEWAY SAS <br />
                    BP 438 <br />
                    75366 PARIS <br />
                    CEDEX 08 <br />
                    FRANCE <br />
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
