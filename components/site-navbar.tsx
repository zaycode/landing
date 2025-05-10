"use client"

import { ModeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

// Menu data
const siteMenu = [
  {
    label: "Home",
    href: "/",
    exact: true,
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "Roadmap",
    href: "/roadmap",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Community",
    items: [
      {
        label: "Discord",
        description: "Join our Discord community",
        href: "https://discord.gg/gerhana",
        icon: () => <span className="h-4 w-4">💬</span>,
      },
      {
        label: "Twitter",
        description: "Follow us on Twitter",
        href: "https://twitter.com/gerhana",
        icon: () => <span className="h-4 w-4">🐦</span>,
      },
      {
        label: "Telegram",
        description: "Join our Telegram group",
        href: "https://t.me/gerhana",
        icon: () => <span className="h-4 w-4">📱</span>,
      },
    ],
  },
]

export default function SiteNavbar() {
  const dappUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.gerhana.xyz"
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  // Memoize active state calculation
  const isActive = useMemo(() => {
    return (href: string, exact = false) => {
      if (exact) return pathname === href
      return pathname.startsWith(href)
    }
  }, [pathname])

  // Render menu items based on device
  const renderMenuItems = useMemo(() => {
    const handleCloseMenu = () => setIsMenuOpen(false)

    if (isMobile) {
      return siteMenu.map((item) =>
        item.href ? (
          <Link
            key={item.href}
            href={item.href}
            className={`py-2 font-medium text-sm transition-colors hover:text-primary ${
              isActive(item.href, item.exact) ? "text-primary" : ""
            }`}
            onClick={handleCloseMenu}
          >
            {item.label}
          </Link>
        ) : (
          <div key={item.label} className="py-2">
            <p className="mb-2 font-medium text-sm">{item.label}</p>
            <div className="space-y-3 pl-4">
              {item.items?.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className="flex items-center py-1 font-medium text-sm transition-colors hover:text-primary"
                  onClick={handleCloseMenu}
                >
                  <subItem.icon />
                  <span className="ml-2">{subItem.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ),
      )
    } else {
      return siteMenu.map((item) =>
        item.href ? (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-md px-3 py-2 font-medium text-sm transition-colors hover:bg-primary/10 hover:text-primary ${
              isActive(item.href, item.exact) ? "bg-primary/5 text-primary" : ""
            }`}
          >
            {item.label}
          </Link>
        ) : (
          <DropdownMenu key={item.label}>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center font-medium text-sm transition-colors hover:text-primary ${
                  item.items?.some((subItem) => isActive(subItem.href)) ? "text-primary" : ""
                }`}
              >
                {item.label} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 border-primary/20 bg-card/95 backdrop-blur-lg">
              {item.items?.map((subItem) => (
                <DropdownMenuItem key={subItem.href} asChild>
                  <Link href={subItem.href} className="flex w-full cursor-pointer items-center p-3 hover:bg-primary/10">
                    <subItem.icon />
                    <div className="ml-2">
                      <span className="font-medium">{subItem.label}</span>
                      <p className="mt-1 text-muted-foreground text-xs">{subItem.description}</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      )
    }
  }, [isActive, isMobile])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Image
                src="/gerhana-logo-primary.svg"
                alt="Gerhana"
                width={140}
                height={40}
                className="mr-2 glow-effect"
              />
            </motion.div>
          </Link>

          {isMobile ? (
            /* Mobile Toggle Button */
            <div className="flex items-center space-x-2 md:hidden">
              <ModeToggle />
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          ) : (
            /* Desktop Navigation */
            <nav className="hidden items-center space-x-8 md:flex">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-8"
              >
                {renderMenuItems}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center space-x-4"
              >
                <ModeToggle />
                <a href={dappUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="mystical-button mystical-glow">Launch App</Button>
                </a>
              </motion.div>
            </nav>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-border border-t bg-card/95 backdrop-blur-lg md:hidden"
            >
              <div className="container mx-auto py-4">
                <nav className="flex flex-col space-y-4">
                  {renderMenuItems}
                  <a href={dappUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="mystical-button mystical-glow w-full">Launch App</Button>
                  </a>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  )
}
