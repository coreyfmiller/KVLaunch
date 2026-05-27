import { Globe, Palette, Smartphone, Zap, Search, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Palette,
    title: "Custom Design",
    description:
      "Not a template. We design your site to match your brand, your vibe, and your audience.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly",
    description:
      "Looks great on phones, tablets, and desktops. Your customers are on mobile — your site should be too.",
  },
  {
    icon: Zap,
    title: "Fast & Modern",
    description:
      "Built with modern tech that loads fast and works smoothly. No clunky WordPress sites here.",
  },
  {
    icon: Search,
    title: "SEO Ready",
    description:
      "Set up so people can actually find you on Google. We handle the technical stuff.",
  },
  {
    icon: Globe,
    title: "Your Own Domain",
    description:
      "We'll help you get a real domain name — yourbusiness.com, not some free subdomain.",
  },
  {
    icon: Shield,
    title: "You Own It",
    description:
      "It's your website. You get full access and ownership. No strings attached.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What You Get
          </h2>
          <p className="text-lg text-muted-foreground">
            A professional website built for your business — completely free.
            Here&apos;s what&apos;s included.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
