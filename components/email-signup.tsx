"use client"

import { useState } from "react"
import { Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Replace with your email provider's form action
    // Mailchimp, Kit (ConvertKit), etc.
    console.log("Email signup:", email)
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
            <Mail className="h-6 w-6 text-primary" />
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Stay in the loop
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Free resources, event invites, and tips for young founders in KV.
            No spam, no fluff — just stuff that actually helps.
          </p>

          {submitted ? (
            <div className="rounded-xl border border-border bg-background p-6">
              <p className="text-lg font-medium text-foreground">
                You&apos;re in! 🎉
              </p>
              <p className="mt-2 text-muted-foreground">
                Check your inbox — we&apos;ll send you something useful soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 flex-1"
                aria-label="Email address"
              />
              <Button type="submit" size="lg" className="h-12">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}

          <p className="mt-4 text-xs text-muted-foreground">
            Join 10+ young founders already on the list. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
