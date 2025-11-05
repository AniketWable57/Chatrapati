"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import FortCard from "./fort-card"
import { forts } from "./data"
import "../../styles/forts-section.css"

export default function FortsSection() {
  const [filter, setFilter] = useState<string>("all")

  const regions = ["all", "Sahyadri Range", "Konkan Coast", "Deccan Inland", "Sea Forts"]


  const filteredForts = filter === "all" ? forts : forts.filter((fort) => fort.region.includes(filter))

    

  return (
    <section className="forts-section">
      <div className="forts-content">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="forts-header"
        >
          <p className="forts-subtitle">FORTIFICATIONS</p>
          <h2 className="forts-title">Maratha Forts</h2>
          <p className="forts-description">
           Upon the rugged crowns of the Sahyadri mountains, where eagles dare to nest and clouds bow in passage, stand the eternal stone sentinels of the Maratha legacy—the forts of Chhatrapati Shivaji Maharaj. These were not mere structures of rock and mortar, but the very embodiment of a king's vision, forged in the fire of Swarajya and freedom. Under his strategic genius, the mountains themselves became an unassailable fortress; each citadel, from the majestic capital of Raigad to the formidable sea-girt Sindhudurg, was a masterstroke of military brilliance, woven into a "Fist and Arm" defense that guarded a sovereign dream. Shivaji Maharaj was not just a warrior who commanded these forts; he was their soul—a divine force in human form whose spirit echoes in the winds that whip through the Maha Darwazas, whose valor is etched into the ramparts where Tanaji's sacrifice turned a fort into Sinhagad, the Lion's Fort. To walk these hallowed grounds is to tread upon the very bedrock of his empire, to feel the enduring pulse of a kingdom born from unwavering courage, unparalleled ingenuity, and the indomitable will of a ruler who taught a people to be lions. The saffron flag may no longer fly, but the spirit of the great Maratha, the visionary Chhatrapati, is immortalized in every stone, a timeless testament to a glory that defies the ravages of time.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setFilter(region)}
              className={`filter-btn ${filter === region ? "active" : ""}`}
            >
              {region === "all" ? "All Forts" : region}
            </button>
          ))}
        </div>

        {/* Forts Grid */}
        <div className="forts-grid">
          {filteredForts.map((fort, index) => (
            
            <FortCard key={fort.id} {...fort} index={index} />
          ))}
       
        </div>
      </div>
    </section>
  )
}