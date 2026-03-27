import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

function ContactSection() {
  return (
    <Reveal as="section" id="contact" variant="scale" className="min-h-[76vh] border-t border-white/6 px-5 pb-8 pt-24 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1280px]">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s connect."
          description="Keep the ending simple and clear with one strong call to action."
        />

        <div className="mt-8 flex flex-wrap gap-4">
          <a className="simple-button-primary" href="mailto:hello@example.com">
            Email Me
          </a>
          <a className="simple-button-secondary" href="#home">
            Back Home
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default ContactSection
