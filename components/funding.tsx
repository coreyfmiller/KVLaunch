import { DollarSign, ExternalLink, Users, GraduationCap, Building2, Landmark } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const fundingPrograms = [
  {
    icon: Users,
    title: "Futurpreneur Canada",
    description:
      "Collateral-free startup loan with up to 2 years of one-on-one mentorship. They also have a Side Hustle Program if you want to keep your day job.",
    amount: "Up to $20K (+ $40K from BDC)",
    eligibility: "Ages 18-39, Canadian citizen or PR",
    url: "https://www.futurpreneur.ca/",
    tags: ["Loan", "Mentorship", "No Collateral"],
  },
  {
    icon: DollarSign,
    title: "Futurpreneur Side Hustle",
    description:
      "Keep your full-time job and get financing to launch or grow your side business. Includes mentoring and business planning tools.",
    amount: "Up to $25K",
    eligibility: "Ages 18-39, Canadian citizen or PR",
    url: "https://futurpreneur.ca/offering/side-hustle/",
    tags: ["Loan", "Side Hustle Friendly"],
  },
  {
    icon: GraduationCap,
    title: "SEED Program (NB Government)",
    description:
      "Wage subsidy for post-secondary students running a summer business. The government helps cover your wages while you build your company over the summer.",
    amount: "Wage subsidy (varies)",
    eligibility: "NB post-secondary students",
    url: "https://www2.gnb.ca/content/gnb/en/departments/post-secondary_education_training_and_labour/Skills/content/FinancialSupport/SEED.html",
    tags: ["Grant", "Students", "Summer"],
  },
  {
    icon: Landmark,
    title: "NBIF Startup Investment Fund",
    description:
      "Pre-seed equity investment for NB companies looking to prove their product has commercial viability. Best for tech or scalable businesses.",
    amount: "Up to $200K",
    eligibility: "NB-based companies",
    url: "https://nbif.ca/startup-investment-fund/",
    tags: ["Equity", "Pre-Seed", "Tech"],
  },
  {
    icon: Building2,
    title: "CBDC Loans & Support",
    description:
      "Community Business Development Corporations provide loans and free business counselling. There are 10 CBDCs across NB — find your local one.",
    amount: "Up to $150K",
    eligibility: "Any NB entrepreneur",
    url: "https://cbdc.ca/locations/cbdc-charlotte-kings/",
    tags: ["Loan", "Counselling", "Local"],
  },
  {
    icon: GraduationCap,
    title: "Frank H. Sobey Award",
    description:
      "Annual award for Atlantic Canadian university business students who demonstrate entrepreneurial spirit. Eight winners each year across Atlantic Canada.",
    amount: "$45,000",
    eligibility: "Atlantic Canadian university students",
    url: "https://www.frankhsobeyawards.com/",
    tags: ["Award", "University", "Atlantic Canada"],
  },
]

export function Funding() {
  return (
    <section id="funding" className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Funding & Grants
          </h2>
          <p className="text-lg text-muted-foreground">
            Real money available for young entrepreneurs in New Brunswick.
            Here&apos;s who&apos;s giving it out, how much, and who qualifies — in plain English.
          </p>
        </div>

        {/* Funding Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fundingPrograms.map((program) => (
            <Card key={program.title} className="flex flex-col transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <program.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">Amount</span>
                    <span className="text-sm font-semibold text-foreground">{program.amount}</span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-medium text-muted-foreground">Who</span>
                    <span className="text-right text-sm text-foreground">{program.eligibility}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {program.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a
                  href={program.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Learn more & apply
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
