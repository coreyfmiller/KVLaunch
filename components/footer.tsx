import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/images/logo.png"
              alt="KV Launch"
              width={120}
              height={35}
              className="h-9 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Supporting young entrepreneurs in Quispamsis & Rothesay with local
              resources, mentorship, and community connections.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="#services"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Our Services
              </Link>
              <Link
                href="#directory"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Business Directory
              </Link>
              <Link
                href="#resources"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Resources
              </Link>
              <Link
                href="#about"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                About Us
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Getting Started Guide
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Business Templates
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Funding Opportunities
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Events Calendar
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Quispamsis & Rothesay, NB</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:hello@kvlaunch.ca" className="hover:text-foreground">
                  hello@kvlaunch.ca
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+15065551234" className="hover:text-foreground">
                  (506) 555-1234
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} KV Launch. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
