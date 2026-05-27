import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    name: "Clean Cut Crew",
    category: "Lawn & Yard Services",
    description:
      "Professional lawn mowing and yard services run by Ryder, Aiden & Jaxon. Serving Quispamsis, Rothesay, Hampton, and Saint John.",
    image: "/cleancutcrew.jpg",
    url: "https://cleancutcrew.ca",
  },
  {
    name: "Sunrise Seedlings",
    category: "Kid-Run Plant Nursery",
    description:
      "A backyard nursery run by three siblings growing heirloom tomatoes, herbs, peppers, and sunflowers for weekend pickup in Quispamsis.",
    image: "/sunriseseedlings.jpg",
    url: "https://sunriseseedlings.com",
  },
  {
    name: "KV Adventure Club",
    category: "Kids Subscription Service",
    description:
      "A monthly snail-mail subscription packed with screen-free missions, scavenger hunts, and local discoveries for kids in the Kennebecasis Valley.",
    image: "/kvadventureclub.jpg",
    url: "https://kvadventureclub.com",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Some of the Sites We&apos;ve Built
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
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} website screenshot`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
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
                    target="_blank"
                    rel="noopener noreferrer"
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
