import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who is this for?",
    answer:
      "Entrepreneurs aged 20 and under in the Quispamsis and Rothesay area who need a website for their business. Whether you're mowing lawns, selling candles, tutoring, or freelancing — if you're 20 or younger and building something, this is for you.",
  },
  {
    question: "Is it really free? What's the catch?",
    answer:
      "It's genuinely free. No hidden fees, no monthly charges, no equity. We do this because we believe young founders in KV deserve a professional online presence regardless of budget. The only thing we ask is that you're serious about your business.",
  },
  {
    question: "What do I need to apply?",
    answer:
      "Just a business idea that you're actively working on (or about to start). You don't need a registered business, a logo, or any content ready. We'll figure that out together.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most sites are designed and built within 1-2 weeks after we chat about what you need. Timelines depend on complexity and how quickly you can provide feedback.",
  },
  {
    question: "Do I own the website?",
    answer:
      "Yes, 100%. You get full ownership and access to your site. It's yours to keep, update, and grow with your business.",
  },
  {
    question: "What kind of website will I get?",
    answer:
      "A modern, mobile-friendly website custom-designed for your business. Not a generic template. It'll include the pages you need — home, about, services, contact — and we'll set it up so Google can find you.",
  },
  {
    question: "Do I need to know anything about tech?",
    answer:
      "Nope. We handle all the technical stuff. You just need to tell us about your business and what you want customers to see.",
  },
  {
    question: "What if I need changes later?",
    answer:
      "We'll show you how to make basic updates yourself. For bigger changes, just reach out and we'll help.",
  },
  {
    question: "Can I start a business as a teenager?",
    answer:
      "Yes. There's no minimum age to run a business in New Brunswick. You can register a sole proprietorship, open a business bank account (some banks require a parent to co-sign if you're under 18), and start earning money. Plenty of teens in KV already do — lawn care, tutoring, baking, social media management, you name it.",
  },
  {
    question: "Do I need to register my business?",
    answer:
      "If you're operating under any name other than your legal name, yes — you need to register with Service New Brunswick (~$60). If you're just freelancing under your own name, you technically don't need to, but registering looks more professional and protects your business name.",
  },
  {
    question: "When do I need to charge HST?",
    answer:
      "Not until you make more than $30,000 in revenue in a 12-month period. Below that, you're a 'small supplier' and HST registration is optional. Once you cross $30K, you have 29 days to register with the CRA.",
  },
  {
    question: "What's the cheapest way to accept payments?",
    answer:
      "E-transfer is free. Square gives you a free card reader (they take 2.65% per tap). Stripe works for online payments (2.9% + 30¢). For most young founders starting out, e-transfer + Square covers everything.",
  },
  {
    question: "What's the difference between a sole proprietorship and incorporating?",
    answer:
      "Sole proprietorship: simple, cheap (~$60), you and the business are the same legal entity. Corporation: more complex, costs ~$400+, the business is its own legal entity (protects your personal assets). Start as a sole prop. Incorporate later when you're making real money or need liability protection.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Questions? We got you.
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you&apos;re probably wondering, answered.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
