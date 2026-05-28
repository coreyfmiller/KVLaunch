"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    whatYouDo: "",
    social: "",
    details: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Wire up to email service or form backend (Formspree, Netlify Forms, etc.)
    console.log("Application submitted:", formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="apply" className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="rounded-2xl border border-border bg-background p-12">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Application received! 🎉
              </h2>
              <p className="text-lg text-muted-foreground">
                We&apos;ll review your info and get back to you within a few days.
                Keep an eye on your inbox.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="apply" className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Apply for a Free Website
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about you and your business. No pressure — even if
              you&apos;re just getting started, we want to hear from you.
              Open to entrepreneurs aged 19 and under in the KV area.
            </p>
          </div>

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="First and last name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name</Label>
              <Input
                id="businessName"
                placeholder="What's your business called? (or what you're thinking of calling it)"
                value={formData.businessName}
                onChange={(e) =>
                  setFormData({ ...formData, businessName: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatYouDo">What do you do?</Label>
              <Textarea
                id="whatYouDo"
                placeholder="In a sentence or two — what's your business? Who are your customers?"
                rows={3}
                value={formData.whatYouDo}
                onChange={(e) =>
                  setFormData({ ...formData, whatYouDo: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="social">Instagram or Social Link (optional)</Label>
              <Input
                id="social"
                placeholder="@yourbusiness or a link"
                value={formData.social}
                onChange={(e) =>
                  setFormData({ ...formData, social: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="details">
                Anything else we should know?
              </Label>
              <Textarea
                id="details"
                placeholder="What do you want from a website? Any inspiration or ideas? Totally optional."
                rows={4}
                value={formData.details}
                onChange={(e) =>
                  setFormData({ ...formData, details: e.target.value })
                }
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="parentConsent"
                  required
                  className="mt-1 h-4 w-4 rounded border-border"
                />
                <Label htmlFor="parentConsent" className="text-sm font-normal text-muted-foreground">
                  I confirm that I am 19 or under. If I am under 16, a parent or
                  guardian is aware of and consents to this application. I have
                  read the{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  .
                </Label>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Submit Application
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
