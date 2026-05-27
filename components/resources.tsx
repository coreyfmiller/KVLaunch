import { ExternalLink, FileText, GraduationCap, DollarSign, Wrench, Scale } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const resourceCategories = [
  {
    icon: FileText,
    title: "Business Plan Templates",
    description: "Free templates to help you think through your idea.",
    links: [
      { name: "One-Page Business Plan (Google Doc)", url: "https://docs.google.com/document/d/1PbFAGJmMDl0Mzl1xGRXMfEzpNfMhLfYnHbsQiYoEmQ/template/preview" },
      { name: "Canva Business Plan Templates", url: "https://www.canva.com/templates/s/business-plan/" },
      { name: "LivePlan Free Sample Plans", url: "https://www.liveplan.com/sample-business-plans" },
    ],
  },
  {
    icon: DollarSign,
    title: "Funding & Grants",
    description: "Money available for young entrepreneurs in New Brunswick.",
    links: [
      { name: "SEED (Student Entrepreneur Program)", url: "https://www2.gnb.ca/content/gnb/en/services/services_renderer.10849.SEED_-_Self-Employment_Benefit.html" },
      { name: "Futurpreneur Canada", url: "https://www.futurpreneur.ca/" },
      { name: "CBDC Fundy (Loans & Support)", url: "https://www.cbdc.ca/en/cbdc-westmorland-albert" },
      { name: "NB Student Venture Capital", url: "https://www2.gnb.ca/content/gnb/en/departments/petl/people/content/EmploymentDevelopment/StudentVentureCapital.html" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Free Courses",
    description: "Learn marketing, finance, and business basics for free.",
    links: [
      { name: "Google Digital Garage", url: "https://learndigital.withgoogle.com/digitalgarage" },
      { name: "HubSpot Academy (Marketing)", url: "https://academy.hubspot.com/" },
      { name: "Coursera - How to Start a Startup", url: "https://www.coursera.org/learn/startup" },
      { name: "Khan Academy - Entrepreneurship", url: "https://www.khanacademy.org/college-careers-more/entrepreneurship2" },
    ],
  },
  {
    icon: Wrench,
    title: "Free Tools",
    description: "Run your business without spending a dime on software.",
    links: [
      { name: "Canva (Design & Social Media)", url: "https://www.canva.com/" },
      { name: "Wave (Free Invoicing & Accounting)", url: "https://www.waveapps.com/" },
      { name: "Square (Free POS & Payments)", url: "https://squareup.com/ca" },
      { name: "Notion (Organize Everything)", url: "https://www.notion.so/" },
      { name: "Calendly (Free Scheduling)", url: "https://calendly.com/" },
    ],
  },
  {
    icon: Scale,
    title: "Legal & Registration",
    description: "How to make it official in New Brunswick.",
    links: [
      { name: "Register a Business in NB", url: "https://www2.gnb.ca/content/gnb/en/services/services_renderer.14702.Register_a_Business_Name.html" },
      { name: "Do I Need to Charge HST?", url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/register-gst-hst.html" },
      { name: "Free Business Name Search (NB)", url: "https://www.pxw1.snb.ca/snb7001/e/2000/2500e.asp" },
    ],
  },
]

export function Resources() {
  return (
    <section id="resources" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Free Resources
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to start and run a business — curated links,
            templates, and tools. All free, no sign-up required.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resourceCategories.map((category) => (
            <Card key={category.title} className="flex flex-col">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <category.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {category.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <ExternalLink className="h-3 w-3 shrink-0" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
