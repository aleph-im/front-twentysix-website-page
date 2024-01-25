import Head from 'next/head'
import {
  Col,
  Row,
  TextGradient,
  Breadcrumb,
  Button,
  TextInput,
  Dropdown,
  DropdownOption,
  TextArea,
} from '@aleph-front/core'
import Container from '@/components/Container'
import Link from 'next/link'
import DecentralizedTools from '@/components/DecentralizedTools'
export default function Contact() {
  return (
    <>
      <Head>
        <title>Talk with an expert | Twentysix Cloud</title>
        <meta
          name="description"
          content="Get in touch with Twentysix Cloud experts for queries on our decentralized cloud computing. Our team is ready to assist you with your cloud service needs."
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
                <Link href="/src/pages/contact" key={'contact'}>
                  Contact us
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
                  Get in touch
                </TextGradient>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section tw="p-0">
        <Container>
          <Row xs={1}>
            <Col>
              <div tw="p-0">
                <p className="fs-18" tw="mx-auto mt-0 max-w-3xl py-12">
                  Our team is here to provide you with the tools and insights
                  you need to get started. If you want to chat, or learn more
                  about our solutions, fill out the form and talk to our
                  experts. You can keep up with developments by joining our
                  Telegram and following us on Twitter.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section tw="px-0 pt-20 pb-10 md:pb-20">
        <Container>
          <Row xs={1}>
            <Col>
              <form
                action="https://aleph.us17.list-manage.com/subscribe/post?u=40af570491d53f28c5ae6f1ab&amp;id=4850a3195f"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                rel="noopener noreferrer"
                noValidate
              >
                <div className="fx-grain-2" tw="p-6 w-full sm:w-1/2 mx-auto">
                  <div
                    style={{ position: 'absolute', left: '-4500px' }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_40af570491d53f28c5ae6f1ab_4850a3195f"
                      tabIndex={-1}
                      defaultValue=""
                    />
                  </div>
                  <div tw="pb-6 mb-4">
                    <TextInput
                      label="Name"
                      placeholder="Name"
                      name="name"
                      required={true}
                    />
                  </div>
                  <div tw="pb-6 mb-4">
                    <TextInput
                      type="email"
                      label="Email"
                      placeholder="Email"
                      name="EMAIL"
                      id="mce-EMAIL"
                      required={true}
                    />
                  </div>
                  <div tw="pb-6 mb-4">
                    <Dropdown
                      label="Interested in"
                      name="interested-in"
                      placeholder="Choose an option"
                      required={true}
                    >
                      <DropdownOption
                        key="Host a Core Channel Node"
                        value="Host a Core Channel Node"
                      >
                        Host a Core Channel Node
                      </DropdownOption>
                      <DropdownOption
                        key="Become a Twentysix Cloud partner"
                        value="Become a Twentysix Cloud partner"
                      >
                        Become a Twentysix Cloud partner
                      </DropdownOption>
                      <DropdownOption
                        key="Building an application"
                        value="Building an application"
                      >
                        Building an application
                      </DropdownOption>
                      <DropdownOption
                        key="Get support with computing"
                        value="Get support with computing"
                      >
                        Get support with computing
                      </DropdownOption>
                      <DropdownOption
                        key="Get support with storage"
                        value="Get support with storage"
                      >
                        Get support with storage
                      </DropdownOption>
                      <DropdownOption key="Careers" value="Careers">
                        Careers
                      </DropdownOption>
                      <DropdownOption
                        key="Other (please describe it below)"
                        value="Other (please describe it below)"
                      >
                        Other (please describe it below)
                      </DropdownOption>
                    </Dropdown>
                  </div>
                  <div tw="pb-6">
                    <TextArea
                      label="Message"
                      name="message"
                      placeholder="Tell us more."
                      required={true}
                      tw="h-48"
                    />
                  </div>
                </div>
                <div tw="p-6 w-1/2 mx-auto mt-2.5 text-center">
                  <Button
                    type="submit"
                    href=""
                    target="_blank"
                    kind="gradient"
                    variant="primary"
                    size="lg"
                    color="main0"
                    tw="!my-0"
                  >
                    Send
                  </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
      <DecentralizedTools />
    </>
  )
}
