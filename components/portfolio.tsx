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
    image: "/sunriseseedlings.png",
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="group overflow-hidden transition-all hover:shadow-lg"
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[4/3] w-full overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={`${project.name} website screenshot`}
                  fill
                  className="object-cover object-top transition-transform group-hover:scale-105"
                />
              </Link>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mb-2 text-xs font-medium text-primary">
                  {project.category}
                </p>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Visit Site
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
