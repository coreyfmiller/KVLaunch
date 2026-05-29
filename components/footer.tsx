import Link from "next/link"
import Image from "next/image"
import { MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/Logo.png"
              alt="KV Launch"
              width={120}
              height={35}
              className="h-9 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Free websites and resources for entrepreneurs aged 19 and under in
              Quispamsis & Rothesay.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="#how-it-works"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                How It Works
              </Link>
              <Link
                href="#services"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                What You Get
              </Link>
              <Link
                href="#portfolio"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Our Work
              </Link>
              <Link
                href="#apply"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Apply
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="#resources"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Business Templates
              </Link>
              <Link
                href="#resources"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Free Courses
              </Link>
              <Link
                href="#resources"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Funding & Grants
              </Link>
              <Link
                href="#faq"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Quispamsis & Rothesay, NB</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} KV Launch. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
              <p className="text-sm text-muted-foreground">
                In partnership with{" "}
                <a
                  href="https://www.fundylogic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:underline"
                >
                  FundyLogic
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
