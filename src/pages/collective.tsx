import Head from 'next/head'
import Image from 'next/image'
import {
  Button,
  Col,
  Row,
  BulletList,
  TextGradient,
  Breadcrumb,
} from '@aleph-front/core'
import Container from '@/components/Container'
import H2 from '@/components/H2'
import { useBasePath } from '@/hooks/useBasePath'
import Link from 'next/link'
import GetUpdatesSection from '@/components/GetUpdatesSection'
import ObjectItem from '@/components/ObjectItem'

export default function CollectivePage() {
  const basePath = useBasePath()
  const imgPrefix = basePath?.charAt(0) === '/' ? basePath : ''

  return (
    <>
      <Head>
        <title>Decentralized Cloud Computing | Twentysix Cloud</title>
        <meta
          name="description"
          content="Twentysix Cloud is a Web3 Decentralized Cloud for building, training, deploying, and scaling AI Models & dApps on-chain."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section tw="px-0 py-12 lg:py-20">
        <Container>
          <Breadcrumb
            navLinks={[
              <Link href="/" key={'home'}>
                Home
              </Link>,
              <Link href="/collective" key={'collective'}>
                join the collective
              </Link>,
            ]}
          />
          <div tw="mt-8">
            <TextGradient
              color="main0"
              type="h2"
              as="h1"
              className="tp-h2 md:tp-header"
            >
              Join the Twentysix Cloud Collective
            </TextGradient>
            <p className="tp-h6 fs-28 text-base2" tw="mt-8">
              Help us create the future of AI and decentralized cloud solutions
            </p>
            <div tw="text-center pt-20">
              <Button
                as="a"
                target="_blank"
                size="lg"
                href="https://forms.clickup.com/24395970/f/q8g62-2975/AB3A2GFLA3ED1B6H6O"
                variant="primary"
              >
                Join the Collective
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <section className="fx-grain-1" tw="px-0 pt-20 pb-10 md:pb-20">
        <Container>
          <Row xs={1} md={24} gap="1.5rem">
            <Col xs={1} md={12} tw="order-last sm:order-first">
              <Image
                src={`${imgPrefix}/img/collective-1.svg`}
                alt="Computing"
                fill={true}
                tw="relative!"
              />
            </Col>
            <Col xs={1} md={12}>
              <div className="bg-base0" tw="p-6">
                <span className="tp-info text-main0" tw="mb-0">
                  Become part of Twentysix Cloud Collective
                </span>
                <H2 className="tp-h4 md:tp-h3" tw="m-0">
                  Why become a part of
                </H2>
                <ol className="fs-18" tw="mt-6 mb-16 !list-decimal pl-6">
                  <li>Bring decentralization to the traditional world </li>
                  <li>Influence aleph.im community initiatives</li>
                  <li>Meet other passionates </li>
                  <li>Grow your skills portfolio</li>
                  <li>Get Rewarded</li>
                  <li>Join our exclusive Collective crew </li>
                </ol>
                <Button
                  as="a"
                  href="https://forms.clickup.com/24395970/f/q8g62-2975/AB3A2GFLA3ED1B6H6O"
                  target="_blank"
                  variant="tertiary"
                  size="lg"
                  color="main0"
                >
                  Become a Collective member
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section tw="px-0 pt-20 pb-10 md:pb-20">
        <Container>
          <div>
            <Row xs={1} md={24} gap="1.5rem">
              <Col xs={1} md={13}>
                <div className="bg-base0" tw="p-6">
                  <span className="tp-info text-main0" tw="mb-0">
                    Become part of Twentysix Cloud Collective
                  </span>
                  <H2 className="tp-h4 md:tp-h3" tw="m-0">
                    Collective responsibilities
                  </H2>
                  <p className="fs-18" tw="mt-6 mb-6">
                    The Twentysix Collective is dedicated to creating a
                    welcoming environment where people can interact, contribute,
                    share, and learn. 
                  </p>
                  <div tw="mt-12 mb-16">
                    <BulletList
                      size="regular"
                      gap="0.88rem"
                      items={[
                        {
                          kind: 'success',
                          title:
                            'Be passionate about Twentysix and its mission to be a leading decentralized cloud solution',
                        },
                        {
                          kind: 'success',
                          title:
                            'Host in-person or virtual meetups for your local community',
                        },
                        {
                          kind: 'success',
                          title: 'Be the voice of Twentysix Cloud community',
                        },
                        {
                          kind: 'success',
                          title:
                            'Build connections with projects to integrate Twentysix Cloud',
                        },
                        {
                          kind: 'success',
                          title:
                            'Join monthly calls with the Twentysix Cloud community team',
                        },
                        {
                          kind: 'success',
                          title:
                            'Dedicated to increasing community education around Twentysix Cloud and aleph.im',
                        },
                      ]}
                    />
                  </div>
                  <Button
                    as="a"
                    href="https://forms.clickup.com/24395970/f/q8g62-2975/AB3A2GFLA3ED1B6H6O"
                    target="_blank"
                    variant="tertiary"
                    size="lg"
                    color="main0"
                  >
                    Become a Collective member
                  </Button>
                </div>
              </Col>
              <Col xs={1} md={11} tw="mt-12 sm:mt-0">
                <Image
                  src={`${imgPrefix}/img/collective-2.svg`}
                  alt="Storage"
                  fill={true}
                  tw="relative!"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section tw="px-0 pt-20 pb-10 md:pb-20">
        <Container>
          <div>
            <div tw="p-6 mb-6">
              <H2 className="tp-h4 md:tp-h3" tw="m-0 mx-auto">
                Let’s grow decentralized cloud together
              </H2>
            </div>
            <Row xs={1} md={24} gap="1.5rem">
              <Col xs={1} md={8}>
                <div tw="flex flex-col gap-12 px-6">
                  <ObjectItem
                    title="Developer Relation"
                    content="Our documentation has no secrets for you and you like to chat with devs?"
                  />
                  <ObjectItem
                    title="Growth hacker"
                    content="You like to crawl the web and you want to help us grow Twentysix Cloud?"
                  />
                  <ObjectItem
                    title="Community manager"
                    content="You are multilingual and you like to talk about Twentysix Cloud?"
                  />
                </div>
              </Col>
              <Col xs={1} md={8} tw="mt-12 sm:mt-0">
                <Image
                  src={`${imgPrefix}/img/collective-3.svg`}
                  alt="Storage"
                  fill={true}
                  tw="relative!"
                />
              </Col>
              <Col xs={1} md={8}>
                <div tw="flex flex-col gap-12 px-6">
                  <ObjectItem
                    title="Content creator"
                    content="You like to write tutorials, make videos or you are a master at creating memes?"
                  />
                  <ObjectItem
                    title="Dune wizard analyst"
                    content="Do you like charts and dashboards, and you know how to use Dune? "
                  />
                  <ObjectItem
                    title="Local event coordinator"
                    content="Meet and form friendships with other passionate about decentralization."
                  />
                </div>
              </Col>
            </Row>
            <div tw="text-center pt-20">
              <Button
                as="a"
                target="_blank"
                size="lg"
                href="https://forms.clickup.com/24395970/f/q8g62-2975/AB3A2GFLA3ED1B6H6O"
                variant="primary"
              >
                Join the Collective
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <GetUpdatesSection />
    </>
  )
}
