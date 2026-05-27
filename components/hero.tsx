import Link from "next/link"
import { ArrowRight, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-20 md:px-6 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm backdrop-blur">
            <Rocket className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">
              Empowering the next generation of entrepreneurs
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Launch your business in{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Kennebecasis Valley
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            KV Launch connects young entrepreneurs in Quispamsis & Rothesay with
            local business resources, free services, and a supportive community
            to help you succeed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#services">
                Explore Free Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#directory">Browse Business Directory</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8">
            <div>
              <p className="text-3xl font-bold text-foreground md:text-4xl">50+</p>
              <p className="text-sm text-muted-foreground">Local Businesses</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground md:text-4xl">Free</p>
              <p className="text-sm text-muted-foreground">Core Services</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground md:text-4xl">KV</p>
              <p className="text-sm text-muted-foreground">Community Focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
