import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-border border-t bg-card/30">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="mb-6 inline-block">
              <div className="flex items-center">
                <Image
                  src="/gerhana-logo-primary.svg"
                  alt="Gerhana Logo"
                  width={140}
                  height={40}
                  className="mr-2 glow-effect"
                />
              </div>
            </Link>
            <p className="mb-6 text-muted-foreground">
              Embrace the mystical power of the Nine-Tailed Fox. Gerhana is revolutionizing the way users interact with
              Web3 through our all-in-one Super DApp.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-bold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-muted-foreground transition-colors hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground transition-colors hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-muted-foreground transition-colors hover:text-primary">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-bold text-lg">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-muted-foreground transition-colors hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground transition-colors hover:text-primary">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted-foreground transition-colors hover:text-primary">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-border border-t pt-8 md:flex-row">
          <p className="mb-4 text-muted-foreground text-sm md:mb-0">
            &copy; {new Date().getFullYear()} Gerhana. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-muted-foreground text-sm transition-colors hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-muted-foreground text-sm transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-muted-foreground text-sm transition-colors hover:text-primary">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
