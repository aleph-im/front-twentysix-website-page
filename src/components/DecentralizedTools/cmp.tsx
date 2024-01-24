import { Button, Col, Icon, ObjectImg, Row } from '@aleph-front/core'
import Container from '@/components/Container'

export const DecentralizedTools = () => {
  return (
    <section tw="px-0 py-12 lg:py-36">
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
                href="https://console.twentysix.cloud/computing/functions"
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
                Store any type and amount of data including InterPlanetary File
                System and block-storage.
              </p>
              <Button
                forwardedAs="a"
                href="https://console.twentysix.cloud/storage/volume"
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
                href="https://docs.aleph.im/"
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
            <Col tw="mt-12 sm:mt-36 text-center lg:text-right">
              <Button
                forwardedAs="a"
                href="https://console.twentysix.cloud/"
                target="_blank"
                kind="gradient"
                variant="primary"
                size="lg"
                color="main0"
                tw="!my-0"
              >
                Launch console
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default DecentralizedTools
