import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Crimson_Text } from "next/font/google"
import Header from "../components/header"
import Footer from "../components/footer"
// import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"

const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] })
const crimsonText = Crimson_Text({ subsets: ["latin"], weight: ["400", "600"] })

export const metadata: Metadata = {
  title: "Chhatrapati Shivaji Maharaj - Maratha Empire Legacy",
  description: "Explore the life, legacy, and achievements of Chhatrapati Shivaji Maharaj and the Maratha Empire",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ fontFamily: playfairDisplay.style.fontFamily }}>
      <body style={{ fontFamily: crimsonText.style.fontFamily }} className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {/* <Analytics /> */}
      </body>
    </html>
  )
}