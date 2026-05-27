import { ClipboardList, Paintbrush, Rocket } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Apply",
    description:
      "Fill out a quick form telling us about you and your business. What do you do? Who are your customers? What vibe are you going for?",
  },
  {
    icon: Paintbrush,
    step: "02",
    title: "We Design & Build",
    description:
      "We create a professional website tailored to your business. You'll get to review it and request changes before it goes live.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "You Launch",
    description:
      "Your site goes live. You get the keys. Start sharing it with customers, posting it on social media, and growing your business.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting a website shouldn&apos;t be complicated. Here&apos;s the whole process.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon className="h-8 w-8" />
              </div>
              <span className="mb-2 text-sm font-bold text-primary">
                Step {step.step}
              </span>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
