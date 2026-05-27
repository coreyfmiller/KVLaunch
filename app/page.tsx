import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { BusinessDirectory } from "@/components/business-directory"
import { Resources } from "@/components/resources"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <BusinessDirectory />
        <Resources />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
