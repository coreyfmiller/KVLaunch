import Link from "next/link"
import { ArrowRight, Download, ExternalLink, FileText, Video, Bookmark } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const resources = [
  {
    icon: FileText,
    title: "Business Plan Template",
    description: "A comprehensive template to help you structure your business idea.",
    type: "Download",
    typeIcon: Download,
    link: "#",
  },
  {
    icon: Video,
    title: "Getting Started Guide",
    description: "Video series covering the basics of starting a business in NB.",
    type: "Video",
    typeIcon: ExternalLink,
    link: "#",
  },
  {
    icon: Bookmark,
    title: "Funding Resources",
    description: "List of grants, loans, and funding opportunities for young entrepreneurs.",
    type: "Guide",
    typeIcon: ExternalLink,
    link: "#",
  },
]

const externalLinks = [
  { name: "Town of Quispamsis", url: "#" },
  { name: "Town of Rothesay", url: "#" },
  { name: "NB Business Support", url: "#" },
  { name: "CBDC Fundy", url: "#" },
]

export function Resources() {
  return (
    <section id="resources" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Resources & Tools
          </h2>
          <p className="text-lg text-muted-foreground">
            Free downloadable resources, guides, and links to help you start and
            grow your business in the Kennebecasis Valley.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <Card
              key={resource.title}
              className="group transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <resource.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={resource.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <resource.typeIcon className="h-4 w-4" />
                  {resource.type}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* External Links */}
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-muted/30 p-8">
          <h3 className="mb-6 text-center text-lg font-semibold text-foreground">
            Helpful External Links
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {externalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="flex items-center justify-between rounded-lg border border-border bg-background p-4 transition-all hover:border-primary hover:shadow-sm"
              >
                <span className="text-sm font-medium text-foreground">
                  {link.name}
                </span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="#">
              Browse All Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
