import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    title: "Figure out what you're selling",
    description:
      "Product or service? Who's buying it? You don't need a full business plan — just be able to explain it in one sentence.",
  },
  {
    title: "Pick a business name",
    description:
      "Search the NB Business Name Registry to make sure it's not taken. Keep it simple and easy to spell.",
    link: "https://www.pxw1.snb.ca/snb7001/e/2000/2500e.asp",
    linkText: "Search NB business names →",
  },
  {
    title: "Decide: sole proprietorship or corporation?",
    description:
      "Most young founders start as a sole proprietorship — it's simpler and cheaper. You can incorporate later if you grow. Sole prop costs ~$60 to register in NB.",
  },
  {
    title: "Register your business",
    description:
      "If you're using any name other than your legal name, you need to register it with Service New Brunswick. Takes about 15 minutes online.",
    link: "https://www2.gnb.ca/content/gnb/en/services/services_renderer.14702.Register_a_Business_Name.html",
    linkText: "Register a business name →",
  },
  {
    title: "Figure out HST",
    description:
      "If you make less than $30,000/year in revenue, you don't need to register for HST. Once you cross that threshold, you'll need a GST/HST number from the CRA.",
    link: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/register-gst-hst.html",
    linkText: "CRA HST registration →",
  },
  {
    title: "Open a business bank account",
    description:
      "Keep your business money separate from personal. Most banks offer free or low-cost business accounts. You'll need your business registration to open one.",
  },
  {
    title: "Set up a way to get paid",
    description:
      "Square (free POS), Stripe (online payments), or e-transfer. Pick whatever fits how your customers want to pay.",
  },
  {
    title: "Get a website",
    description:
      "That's where we come in. Apply for a free website from KV Launch and we'll build you something professional.",
  },
  {
    title: "Tell people about it",
    description:
      "Set up an Instagram, tell your friends, post in local Facebook groups. You don't need a marketing budget — you need to start talking about it.",
  },
  {
    title: "Keep track of your money",
    description:
      "Use Wave (free) or a simple spreadsheet. Track what comes in and what goes out. You'll thank yourself at tax time.",
    link: "https://www.waveapps.com/",
    linkText: "Wave (free accounting) →",
  },
]

export function GettingStarted() {
  return (
    <section id="getting-started" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Getting Started Checklist
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to do to go from &quot;I have an idea&quot; to
            &quot;I have a business&quot; — step by step, in plain English.
          </p>
        </div>

        {/* Checklist */}
        <div className="mx-auto max-w-3xl space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-xl border border-border bg-background p-6 transition-all hover:shadow-sm"
            >
              <div className="flex shrink-0 items-start pt-0.5">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">
                  <span className="mr-2 text-primary">{index + 1}.</span>
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
                {step.link && (
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    {step.linkText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
