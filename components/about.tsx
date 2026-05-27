import { Target, Heart, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We&apos;re dedicated to making entrepreneurship accessible for young people in our community.",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Everything we do is rooted in supporting and strengthening the Kennebecasis Valley.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "We believe in the power of connection and work to bring entrepreneurs together.",
  },
]

export function About() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              About KV Launch
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We started KV Launch because we know what it&apos;s like to have
                a business idea and no idea where to begin. No connections, no
                budget, no clue if it&apos;s even possible.
              </p>
              <p>
                Turns out — it is. And it&apos;s a lot easier when someone shows
                you the ropes.
              </p>
              <p>
                That&apos;s what we do. We help young people in Quispamsis and
                Rothesay turn their ideas into real businesses. Free planning
                help, introductions to people who&apos;ve done it before, and a
                community that actually gets it.
              </p>
              <p className="font-medium text-foreground">
                You don&apos;t need to have it all figured out. You just need to
                start.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 rounded-xl border border-border bg-background p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
