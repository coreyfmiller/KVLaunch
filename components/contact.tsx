"use client"

import { useState } from "react"
import { Send, MessageCircle, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

type FormType = "apply" | "question"

export function Contact() {
  const [formType, setFormType] = useState<FormType>("apply")
  const [submitted, setSubmitted] = useState(false)

  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    businessName: "",
    whatYouDo: "",
    social: "",
    details: "",
  })

  const [questionData, setQuestionData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "977155ad-4d90-49c5-acbc-428748ce64d6",
        subject: `New KV Launch Application: ${applicationData.businessName}`,
        from_name: applicationData.name,
        formType: "Application",
        ...applicationData,
      }),
    })
    if (response.ok) setSubmitted(true)
  }

  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "977155ad-4d90-49c5-acbc-428748ce64d6",
        subject: `KV Launch Question from ${questionData.name}`,
        from_name: questionData.name,
        formType: "General Question",
        ...questionData,
      }),
    })
    if (response.ok) setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="apply" className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="rounded-2xl border border-border bg-background p-12">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                {formType === "apply" ? "Application received! 🎉" : "Message sent! 🎉"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {formType === "apply"
                  ? "We'll review your info and get back to you within a few days. Keep an eye on your inbox."
                  : "Thanks for reaching out. We'll get back to you as soon as we can."}
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
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Want to apply for a free website? Have a question? Parents,
              teachers, and community members are welcome to reach out too.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Currently accepting applications — 2–3 spots per month
            </div>
          </div>

          {/* Form Type Toggle */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-lg border border-border bg-background p-1">
              <button
                type="button"
                onClick={() => setFormType("apply")}
                className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all ${
                  formType === "apply"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Rocket className="h-4 w-4" />
                Apply for a Website
              </button>
              <button
                type="button"
                onClick={() => setFormType("question")}
                className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all ${
                  formType === "question"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                Ask a Question
              </button>
            </div>
          </div>

          {/* For Parents callout */}
          {formType === "question" && (
            <div className="mb-8 rounded-xl border border-border bg-background p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Parents & guardians:</span>{" "}
                We&apos;re happy to answer any questions about the program, how it
                works, and what&apos;s involved. This is a safe, free initiative
                — no strings attached. Ask us anything.
              </p>
            </div>
          )}

          {/* Application Form */}
          {formType === "apply" && (
            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="First and last name"
                    value={applicationData.name}
                    onChange={(e) =>
                      setApplicationData({ ...applicationData, name: e.target.value })
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
                    value={applicationData.email}
                    onChange={(e) =>
                      setApplicationData({ ...applicationData, email: e.target.value })
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
                  value={applicationData.businessName}
                  onChange={(e) =>
                    setApplicationData({ ...applicationData, businessName: e.target.value })
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
                  value={applicationData.whatYouDo}
                  onChange={(e) =>
                    setApplicationData({ ...applicationData, whatYouDo: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="social">Instagram or Social Link (optional)</Label>
                <Input
                  id="social"
                  placeholder="@yourbusiness or a link"
                  value={applicationData.social}
                  onChange={(e) =>
                    setApplicationData({ ...applicationData, social: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Anything else we should know?</Label>
                <Textarea
                  id="details"
                  placeholder="What do you want from a website? Any inspiration or ideas? Totally optional."
                  rows={4}
                  value={applicationData.details}
                  onChange={(e) =>
                    setApplicationData({ ...applicationData, details: e.target.value })
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
                    I confirm that the applicant is 19 or under. If the applicant
                    is under 16, a parent or guardian is aware of and consents to
                    this application. I have read the{" "}
                    <a href="/privacy" className="inline text-primary hover:underline">
                      Privacy Policy
                    </a>.
                  </Label>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Application
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}

          {/* General Question Form */}
          {formType === "question" && (
            <form onSubmit={handleQuestionSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="q-name">Your Name</Label>
                  <Input
                    id="q-name"
                    placeholder="First and last name"
                    value={questionData.name}
                    onChange={(e) =>
                      setQuestionData({ ...questionData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="q-email">Email</Label>
                  <Input
                    id="q-email"
                    type="email"
                    placeholder="you@example.com"
                    value={questionData.email}
                    onChange={(e) =>
                      setQuestionData({ ...questionData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="q-message">Your Question or Message</Label>
                <Textarea
                  id="q-message"
                  placeholder="What would you like to know? We're happy to help with anything — no question is too small."
                  rows={5}
                  value={questionData.message}
                  onChange={(e) =>
                    setQuestionData({ ...questionData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
