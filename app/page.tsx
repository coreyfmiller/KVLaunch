import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Resources } from "@/components/resources"
import { FAQ } from "@/components/faq"
import { EmailSignup } from "@/components/email-signup"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Services />
        <Portfolio />
        <Resources />
        <FAQ />
        <EmailSignup />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
