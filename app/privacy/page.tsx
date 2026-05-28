import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div>
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Privacy Policy
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
                    We collect your name, email, and business info when you apply
                    for a free website. We use it to build your site and
                    communicate with you. We don&apos;t sell your information to
                    anyone. That&apos;s it.
                  </p>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    What we collect
                  </h2>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Your name and email address</li>
                    <li>Your business name and description</li>
                    <li>Social media links (if you provide them)</li>
                    <li>Any additional details you share in the application form</li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    Why we collect it
                  </h2>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>To review your application and build your website</li>
                    <li>To communicate with you about your project</li>
                    <li>To feature your business in our portfolio (with your permission)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    What we don&apos;t do
                  </h2>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>We don&apos;t sell or share your personal information with third parties</li>
                    <li>We don&apos;t use tracking cookies or run ads on this site</li>
                    <li>We don&apos;t send marketing emails unless you ask us to</li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    Applicants under 16
                  </h2>
                  <p>
                    If you&apos;re under 16, we ask that a parent or guardian
                    reviews and consents to your application. We take the privacy
                    of young people seriously and will never share a minor&apos;s
                    information without parental awareness.
                  </p>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    How we store your data
                  </h2>
                  <p>
                    Your information is stored securely and only accessible to
                    the KV Launch team. We don&apos;t store payment information
                    (because everything is free).
                  </p>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    Your rights
                  </h2>
                  <p>
                    You can ask us to delete your information at any time. Just
                    email us at{" "}
                    <a
                      href="mailto:hello@kvlaunch.ca"
                      className="text-primary hover:underline"
                    >
                      hello@kvlaunch.ca
                    </a>{" "}
                    and we&apos;ll take care of it.
                  </p>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    External links
                  </h2>
                  <p>
                    Our site links to third-party resources (government programs,
                    free tools, courses, etc.) for your convenience. We don&apos;t
                    control those sites and aren&apos;t responsible for their
                    content or privacy practices.
                  </p>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    Questions?
                  </h2>
                  <p>
                    If you have any questions about this policy, reach out to us
                    at{" "}
                    <a
                      href="mailto:hello@kvlaunch.ca"
                      className="text-primary hover:underline"
                    >
                      hello@kvlaunch.ca
                    </a>
                    .
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
