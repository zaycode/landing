import type { Metadata } from "next"
import { Montserrat, Press_Start_2P } from "next/font/google"
import type React from "react"
import "./globals.css"
import "./styles.css"
import Footer from "@/components/footer"
import SiteNavbar from "@/components/site-navbar"
import { ThemeProvider } from "@/components/theme-provider"
import ParticlesBackground from "@/components/particles-background"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const gaming = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gaming",
})

export const metadata: Metadata = {
  title: "Gerhana | The Nine-Tailed Fox of Web3",
  description:
    "Harness the mystical power of Gerhana, the all-in-one Super DApp with the spirit of the Nine-Tailed Fox.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${gaming.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="gerhana-theme"
        >
          <div className="min-h-screen overflow-hidden bg-background text-foreground">
            <SiteNavbar />
            <ParticlesBackground />
            <main className="relative min-h-screen pb-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
