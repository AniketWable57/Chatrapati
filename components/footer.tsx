"use client"

import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import "../styles/footer.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* About */}
          <div>
            <h4 className="footer-section-title">About</h4>
            <p className="footer-section-text">
              Dedicated to preserving and celebrating the legacy of Chhatrapati Shivaji Maharaj and the Maratha Empire.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-section-title">Navigation</h4>
            <ul className="footer-links">
              {["Biography", "Forts", "Military", "Navy", "Culture", "Gallery"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="footer-link">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="footer-section-title">Resources</h4>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Historical Texts
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Timeline Archive
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Educational Materials
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Bibliography
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-section-title">Contact</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <span>India</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <a href="mailto:info@shivaji.com" className="footer-link">
                  info@shivaji.com
                </a>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <span>+91 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider">
          <div className="footer-bottom">
            <p className="footer-copyright">© {currentYear} Chhatrapati Shivaji Maharaj Legacy. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">
                Privacy
              </a>
              <a href="#" className="footer-bottom-link">
                Terms
              </a>
              <a href="#" className="footer-bottom-link">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
