"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import "../styles/header.css"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Biography", href: "/biography" },
    { label: "Forts", href: "/forts" },
    { label: "Military", href: "/military" },
    { label: "Navy", href: "/navy" },
    { label: "Administration", href: "/administration" },
    { label: "Culture", href: "/culture" },
    { label: "Gallery", href: "/gallery" },
  ]

  const handleNavigation = (href: string) => {
    console.log(`Navigating to: ${href}`)
    console.log(`Current path: ${pathname}`)
    setIsOpen(false)
  }

  return (
    <header className="header">
      <nav>
        <div className="header-flex">
          {/* Logo - Now visible on mobile */}
          <Link href="/" className="logo-link">
            <div className="logo-title">
              <h1 className="logo-company">
                छत्रपती
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="nav-item"
                onClick={() => handleNavigation(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="mobile-nav-item" 
              onClick={() => handleNavigation(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}