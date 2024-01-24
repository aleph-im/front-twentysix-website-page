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
import Image from 'next/image'
import H2 from '@/components/H2'
export default function Contact() {
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
              <div className="fx-grain-2" tw="p-6 w-1/2 mx-auto">
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
                    label="Email"
                    placeholder="Email"
                    name="email"
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
                    <DropdownOption value="option-1">Option 1</DropdownOption>
                    <DropdownOption value="option-2">Option 2</DropdownOption>
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
                  forwardedAs="button"
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
            </Col>
          </Row>
        </Container>
      </section>
      <DecentralizedTools />
    </>
  )
}
