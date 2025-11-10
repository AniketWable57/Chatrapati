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
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png" },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
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