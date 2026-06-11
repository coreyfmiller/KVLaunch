"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#portfolio", label: "Our Work" },
  { href: "#resources", label: "Resources" },
  { href: "#funding", label: "Funding" },
  { href: "#faq", label: "FAQ" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-32 items-center justify-between px-4 md:px-6">
        {/* Logo — takes up equal space on the left */}
        <div className="flex flex-1 items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.png"
              alt="KV Launch"
              width={560}
              height={160}
              className="h-24 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation — centered */}
        <nav className="hidden items-center justify-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA — takes up equal space on the right */}
        <div className="hidden flex-1 items-center justify-end lg:flex">
          <Button asChild>
            <Link href="#apply">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background lg:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link href="#apply" onClick={() => setMobileMenuOpen(false)}>
                Apply Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
