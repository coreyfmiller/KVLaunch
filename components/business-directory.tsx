import Link from "next/link"
import { ArrowUpRight, Search, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const categories = [
  { name: "Food & Dining", count: 12, color: "bg-primary/10 text-primary" },
  { name: "Retail", count: 8, color: "bg-secondary/10 text-secondary" },
  { name: "Services", count: 15, color: "bg-accent/10 text-accent" },
  { name: "Health & Wellness", count: 6, color: "bg-primary/10 text-primary" },
  { name: "Technology", count: 4, color: "bg-secondary/10 text-secondary" },
  { name: "Arts & Entertainment", count: 5, color: "bg-accent/10 text-accent" },
]

const featuredBusinesses = [
  {
    name: "KV Coffee Co.",
    category: "Food & Dining",
    description: "Local roastery serving artisan coffee in Quispamsis.",
    link: "#",
  },
  {
    name: "Valley Tech Solutions",
    category: "Technology",
    description: "IT services and web development for local businesses.",
    link: "#",
  },
  {
    name: "Rothesay Fitness Studio",
    category: "Health & Wellness",
    description: "Community-focused fitness classes and personal training.",
    link: "#",
  },
]

export function BusinessDirectory() {
  return (
    <section id="directory" className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Local Business Directory
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover and connect with businesses in the Quispamsis and Rothesay
            area. Support local and build your network.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-12 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search businesses by name or category..."
              className="h-12 pl-10"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h3 className="mb-6 text-center text-lg font-semibold text-foreground">
            Browse by Category
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                href="#"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105 ${category.color}`}
              >
                <Building2 className="h-4 w-4" />
                {category.name}
                <span className="rounded-full bg-background px-2 py-0.5 text-xs">
                  {category.count}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Businesses */}
        <div>
          <h3 className="mb-6 text-center text-lg font-semibold text-foreground">
            Featured Businesses
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredBusinesses.map((business) => (
              <Card
                key={business.name}
                className="group transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{business.name}</CardTitle>
                      <CardDescription className="text-sm text-accent">
                        {business.category}
                      </CardDescription>
                    </div>
                    <Link
                      href={business.link}
                      className="rounded-full p-2 transition-colors hover:bg-muted"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {business.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="#">
              View Full Directory
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
