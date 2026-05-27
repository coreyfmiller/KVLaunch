import { Phone, Mail, MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const helpServices = [
  {
    title: "NB Business Navigators",
    description:
      "A free government service most people don't know about. Call or email and a real person will walk you through permits, registrations, regulations — whatever red tape is confusing you. They exist specifically to help entrepreneurs cut through the bureaucracy.",
    contact: {
      phone: "1-833-799-7966",
      email: "nav@navnb.ca",
      hours: "Monday–Friday, 8:15am–4:30pm",
    },
    url: "https://www.gnb.ca/en/topic/business-economy/starting-managing-business.html",
    highlight: true,
  },
  {
    title: "Planet Hatch (Fredericton)",
    description:
      "Co-working space and startup incubator. They offer mentorship, programs, events, and a community of other founders. If you're building something tech-related or scalable, this is your spot.",
    location: "50 Crowther Lane, Fredericton, NB",
    url: "http://planethatch.com/",
    highlight: false,
  },
  {
    title: "J. Herbert Smith Centre (UNB)",
    description:
      "UNB's entrepreneurship centre runs the Energia Ventures accelerator — a 12-week hybrid program with mentorship, networking, and investment readiness training. Open to entrepreneurs in the region.",
    location: "University of New Brunswick",
    url: "https://blogs.unb.ca/newsroom/2025/02/j-herbert-smith-centre.php",
    highlight: false,
  },
  {
    title: "CBDC (Community Business Development)",
    description:
      "10 offices across NB offering free business counselling, training, and loans up to $150K. They specialize in helping people who might not qualify for traditional bank loans.",
    url: "https://www.cbdc.ca/",
    highlight: false,
  },
  {
    title: "Opportunities NB",
    description:
      "The provincial crown corporation for business development. They help businesses grow, access new markets, and connect with industry partners. More relevant once you're up and running.",
    url: "https://www.gnb.ca/en/org/opportunities-nb.html",
    highlight: false,
  },
]

export function FreeHelp() {
  return (
    <section id="free-help" className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Free Help Available Right Now
          </h2>
          <p className="text-lg text-muted-foreground">
            Real people and organizations in New Brunswick that will help you
            for free. Most young founders don&apos;t know these exist.
          </p>
        </div>

        {/* Featured: Business Navigators */}
        <div className="mx-auto mb-12 max-w-3xl">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                ⭐ Most useful for getting started
              </div>
              <CardTitle className="text-2xl">{helpServices[0].title}</CardTitle>
              <CardDescription className="text-base">
                {helpServices[0].description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href={`tel:${helpServices[0].contact!.phone}`} className="font-medium hover:underline">
                    {helpServices[0].contact!.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href={`mailto:${helpServices[0].contact!.email}`} className="font-medium hover:underline">
                    {helpServices[0].contact!.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{helpServices[0].contact!.hours}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Services */}
        <div className="grid gap-6 md:grid-cols-2">
          {helpServices.slice(1).map((service) => (
            <Card key={service.title} className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {service.location && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span>{service.location}</span>
                  </div>
                )}
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Visit website
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
