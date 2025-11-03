"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import FortCard from "./fort-card"
import "../../styles/forts-section.css"

const forts = [
  {
    name: "Raigad Fort",
    region: "Raigad District, Western Ghats",
    yearBuilt: "1656 - Capital Fort",
    garrison: "3,000 soldiers",
    description:
      "The capital fort of the Maratha Empire, Raigad served as the seat of power for Shivaji Maharaj. Perched at an elevation of 820 meters, it was one of the most formidable forts in India.",
    significance: "Coronation site of Shivaji Maharaj and administrative center of the Maratha Empire",
  },
  {
    name: "Sinhagad Fort",
    region: "Pune District, Sahyadri Range",
    yearBuilt: "1646 - Captured",
    garrison: "800 soldiers",
    description:
      "Originally called Kondhana, this strategically important fort was captured by Shivaji through guerrilla tactics. Its siege is legendary in Maratha military history.",
    significance: "Symbolizes Maratha bravery and military innovation; site of famous tank escape",
  },
  {
    name: "Raigarh Fort",
    region: "Kolhapur District, Deccan Plateau",
    yearBuilt: "1645 - Fortified",
    garrison: "1,200 soldiers",
    description:
      "An impregnable mountain fort that served as Shivaji's early headquarters. Its strategic location made it a crucial defensive position against Mughal armies.",
    significance: "Early seat of power and example of fort architecture integrated with natural terrain",
  },
  {
    name: "Pratapgad Fort",
    region: "Satara District, Western Ghats",
    yearBuilt: "1656 - Captured",
    garrison: "600 soldiers",
    description:
      "Site of the historic Battle of Pratapgad where Shivaji defeated Afzal Khan. The fort commands spectacular views of the surrounding valleys and served as a garrison point.",
    significance: "Scene of major military victory establishing Maratha military dominance",
  },
  {
    name: "Daulatabad Fort",
    region: "Aurangabad District, Deccan",
    yearBuilt: "1650s - Captured",
    garrison: "2,000 soldiers",
    description:
      "A historically significant fort that changed hands multiple times. Shivaji's capture of this fort weakened Mughal authority and strengthened Maratha presence in central Deccan.",
    significance: "Demonstrates Maratha expansion into Mughal-held territories",
  },
  {
    name: "Panhala Fort",
    region: "Kolhapur District, Southern Deccan",
    yearBuilt: "1659 - Siege",
    garrison: "3,500 soldiers",
    description:
      "Site of intense Mughal siege under Aurangzeb. The fort's defense under Maratha command showcases their tactical brilliance and determination in the face of overwhelming odds.",
    significance: "Symbol of Maratha resilience during the 1659 siege against Mughal forces",
  },
  {
    name: "Vijaydurg Fort",
    region: "Ratnagiri District, Arabian Sea",
    yearBuilt: "1666 - Naval Base",
    garrison: "1,000 soldiers",
    description:
      "The primary naval arsenal and fort of the Maratha Navy. Located strategically on the coast, it served as a base for Shivaji's fleet of ships and galleons.",
    significance: "Hub of Maratha naval power and center of maritime operations in the Arabian Sea",
  },
  {
    name: "Torna Fort",
    region: "Pune District, Sahyadri Range",
    yearBuilt: "1655 - First Capture",
    garrison: "400 soldiers",
    description:
      "The first fort captured by Shivaji at age 25, marking the beginning of the Maratha Empire. This victory established his reputation as a formidable military commander.",
    significance: "Symbolic starting point of Maratha territorial expansion and military career",
  },
  {
    name: "Kolhapur Fort",
    region: "Kolhapur District, Deccan Plateau",
    yearBuilt: "1660s - Captured",
    garrison: "1,500 soldiers",
    description:
      "An important administrative and military center in southern Deccan. Shivaji's control of this fort extended Maratha influence into the prosperous Kolhapur region.",
    significance: "Key to controlling southern Deccan and trade routes to the Arabian Sea",
  },
  {
    name: "Ponda Fort",
    region: "North Goa, Deccan Coast",
    yearBuilt: "1660 - Captured",
    garrison: "600 soldiers",
    description:
      "Located in present-day Goa, this fort represented Maratha expansion toward coastal territories. It served strategic purposes in monitoring shipping and controlling regional trade.",
    significance: "Marker of Maratha ambitions to control Arabian Sea trade and coastal regions",
  },
]

export default function FortsSection() {
  const [filter, setFilter] = useState<string>("all")

  const regions = ["all", "Western Ghats", "Deccan Plateau", "Arabian Sea", "Deccan Coast"]

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
            Explore over 300 forts built and maintained by the Maratha Empire, representing architectural innovation and
            military strategy
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
            <FortCard key={fort.name} {...fort} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
