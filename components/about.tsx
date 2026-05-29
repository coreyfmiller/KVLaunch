import { Target, Heart, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "One Clear Mission",
    description:
      "Give young founders in KV a professional online presence — no cost, no strings.",
  },
  {
    icon: Heart,
    title: "Built for This Community",
    description:
      "We live here. We know the valley. Everything we do is for Quispamsis and Rothesay.",
  },
  {
    icon: Users,
    title: "By Young People, For Young People",
    description:
      "We get it because we've been there. Starting something is hard enough without worrying about a website.",
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
                We build free websites for young entrepreneurs in Quispamsis and
                Rothesay. That&apos;s our thing. We also put together a bunch of
                free resources — templates, courses, tools, funding links — so
                you can figure out the rest on your own terms.
              </p>
              <p className="font-medium text-foreground">
                You don&apos;t need to have it all figured out. You just need to
                start.
              </p>
              <p className="text-sm">
                KV Launch is built in partnership with{" "}
                <a
                  href="https://www.fundylogic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  FundyLogic
                </a>
                , a local web development studio in the Kennebecasis Valley.
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
