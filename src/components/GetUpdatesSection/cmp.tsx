import Container from '@/components/Container'
import H1 from '@/components/H1'
import SignMeUpForm from '@/components/SignMeUpForm'

export const GetUpdatesSection = () => {
  return (
    <section className="fx-grain-2" tw="px-0 py-12 md:py-20">
      <Container>
        <div tw="md:flex md:justify-center">
          <div tw="md:inline-flex md:flex-col md:items-center">
            <H1 color="base2" type="h3" tw="mb-6">
              Get the latest updates
            </H1>
            <p className="fs-18 text-base2" tw="mt-0 mb-4">
              Be the first to know about new launches
            </p>
            <SignMeUpForm />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SignMeUpForm
