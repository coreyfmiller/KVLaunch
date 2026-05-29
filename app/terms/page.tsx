import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Terms() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div>
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Terms of Service
                </h1>
                <p className="text-muted-foreground">
                  Last updated: May 2025
                </p>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    The short version
                  </h2>
                  <p>
                    KV Launch builds free websites for young entrepreneurs (19
                    and under) in the Kennebecasis Valley. By applying, you agree
                    to the terms below. They&apos;re straightforward — no tricks.
                  </p>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    What we provide
                  </h2>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>A custom-designed website for your business, built for free</li>
                    <li>Reasonable revisions during the build process</li>
                    <li>Ongoing minor updates when you reach out to us</li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    What we don&apos;t guarantee
                  </h2>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>100% uptime — websites occasionally go down, and while we&apos;ll fix issues quickly, we can&apos;t guarantee zero downtime</li>
                    <li>Specific business results — a website helps, but we can&apos;t promise it will make your business successful</li>
                    <li>Unlimited revisions — we&apos;re happy to help with changes, but major redesigns may not be feasible for free</li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    Eligibility
                  </h2>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>You must be 19 years old or younger at the time of application</li>
                    <li>You must be located in or serving the Quispamsis/Rothesay area</li>
                    <li>Your business must be legitimate and legal</li>
                    <li>If you&apos;re under 16, a parent or guardian must consent to your application</li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    Ownership
                  </h2>
                  <p>
                    You own your website. The content, branding, and business
                    identity are yours. We retain the right to showcase your site
                    in our portfolio unless you ask us not to.
                  </p>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    Our rights
                  </h2>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>We can decline applications at our discretion</li>
                    <li>We can remove or take down a site if the business is used for illegal activity</li>
                    <li>We can feature your site in our portfolio and marketing materials</li>
                    <li>We can update these terms at any time (we&apos;ll update the date above if we do)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    External resources
                  </h2>
                  <p>
                    We link to third-party tools, programs, and resources on our
                    site. We don&apos;t control or endorse these external sites
                    and aren&apos;t responsible for their content, accuracy, or
                    availability.
                  </p>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    Disclaimer
                  </h2>
                  <p>
                    KV Launch is a community project, not a registered business
                    or legal entity providing professional advice. The resources
                    and information on this site are for general guidance only.
                    For legal, financial, or tax advice, consult a qualified
                    professional.
                  </p>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    Questions?
                  </h2>
                  <p>
                    Reach out through the application form on our homepage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
