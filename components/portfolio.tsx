import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    name: "KV Coffee Co.",
    category: "Food & Beverage",
    description: "Local roastery website with online menu and location info.",
    url: "#",
  },
  {
    name: "Valley Cuts",
    category: "Services",
    description: "Barbershop site with booking integration and pricing.",
    url: "#",
  },
  {
    name: "Rothesay Tutoring",
    category: "Education",
    description: "Tutoring service with subject listings and contact form.",
    url: "#",
  },
  {
    name: "KV Lawn Care",
    category: "Services",
    description: "Landscaping business with service areas and quote requests.",
    url: "#",
  },
  {
    name: "Quispamsis Candles",
    category: "Retail",
    description: "Handmade candle shop with product gallery and ordering.",
    url: "#",
  },
  {
    name: "Valley Pet Sitting",
    category: "Services",
    description: "Pet care service with booking calendar and testimonials.",
    url: "#",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Sites We&apos;ve Built
          </h2>
          <p className="text-lg text-muted-foreground">
            Real websites for real young founders in the KV area. Each one
            designed and built for free.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="group overflow-hidden transition-all hover:shadow-lg"
            >
              {/* Placeholder for screenshot */}
              <div className="aspect-video w-full bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {project.name}
                    </h3>
                    <p className="mb-2 text-xs font-medium text-primary">
                      {project.category}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <Link
                    href={project.url}
                    className="shrink-0 rounded-full p-2 transition-colors hover:bg-muted"
                    aria-label={`Visit ${project.name} website`}
                  >
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
