import {
  Lightbulb,
  Users,
  BookOpen,
  FileText,
  Calendar,
  Handshake,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Lightbulb,
    title: "Business Planning",
    description:
      "Get guidance on creating a solid business plan, from market research to financial projections.",
    free: true,
  },
  {
    icon: Users,
    title: "Mentorship Program",
    description:
      "Connect with experienced local entrepreneurs who can guide you through your business journey.",
    free: true,
  },
  {
    icon: BookOpen,
    title: "Workshops & Training",
    description:
      "Free workshops on marketing, finance, legal basics, and other essential business skills.",
    free: true,
  },
  {
    icon: FileText,
    title: "Business Templates",
    description:
      "Access ready-to-use templates for business plans, invoices, contracts, and more.",
    free: true,
  },
  {
    icon: Calendar,
    title: "Networking Events",
    description:
      "Regular meetups and events to connect with other entrepreneurs and local business owners.",
    free: true,
  },
  {
    icon: Handshake,
    title: "Partner Connections",
    description:
      "Introductions to local service providers, suppliers, and potential business partners.",
    free: true,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Free Services for Young Entrepreneurs
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe in supporting the next generation. All our core services
            are completely free for young entrepreneurs in the KV area.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden transition-all hover:shadow-lg"
            >
              {service.free && (
                <div className="absolute right-4 top-4 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  Free
                </div>
              )}
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
