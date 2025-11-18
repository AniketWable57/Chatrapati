"use client"

import { motion } from "framer-motion"
import { Sword, Shield, Zap } from "lucide-react"
import "../../styles/military-section.css"

export default function MilitarySection() {
  const tactics = [
    {
      icon: Sword,
      title: "Guerrilla Warfare",
      description: "Revolutionary hit-and-run tactics using terrain knowledge to outmaneuver larger Mughal armies",
    },
    {
      icon: Shield,
      title: "Fortification Network",
      description: "Strategic placement of 300+ forts creating an interconnected defensive web across territories",
    },
    {
      icon: Zap,
      title: "Rapid Mobilization",
      description: "Fast-moving cavalry units capable of striking targets and withdrawing before enemy retaliation",
    },
  ]

  const weaponry = [
    { name: "Aruval", type: "Curved Sword", usage: "Primary weapon for close combat and cavalry charges" },
    { name: "Talwar", type: "Straight Sword", usage: "Versatile weapon for both infantry and mounted warriors" },
    { name: "Bhala", type: "Spear", usage: "Anti-cavalry weapon used by foot soldiers in formations" },
    { name: "Suryajwala", type: "Artillery", usage: "Early cannon designed for fort defense and siege warfare" },
    { name: "Farjeen", type: "Pistol", usage: "Powder-based firearm adopted from Persian designs" },
    { name: "Aftab", type: "Battle Axe", usage: "Melee weapon effective against armored opponents" },
  ]

  return (
    <section className="military-section">
      <div className="military-content">
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="military-header"
        >
          <p className="military-subtitle">MILITARY EXCELLENCE</p>
          <h2 className="military-title">Military Organization</h2>
           <p className="military-description">
           Chhatrapati Shivaji Maharaj forged his Mavle army not with the promise of wealth, but with the sacred dream of Swarajya. These fierce soldiers were bound to their king not by the cold calculus of salary from the saranjam system alone, but by an unshakeable faith in his leadership and a burning devotion to their motherland. They were not mercenaries; they were devout champions of a holy cause. This profound belief transformed them into an unstoppable force—agile and lightning-fast in the rugged Sahyadris, where their light infantry and swift Bhimthadi cavalry moved like extensions of the mountains themselves. Their discipline was legendary, their valor unquestionable, as they wielded muskets and firangi swords not for plunder, but for liberation. From their impregnable hilltop fortresses, guarded by cannons crafted with the aid of master technicians, to their systematic conquests, every action was a prayer for self-rule. The Mavle were more than an army; they were the living, breathing embodiment of a people's will to be free, and in their hearts, the fire of Swarajya burned brighter than any ambition for gold.


          </p>
        </motion.div>

        {/* Tactics */}
        <div className="tactics-grid">
          {tactics.map((tactic, index) => {
            const Icon = tactic.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="tactic-card"
              >
                <Icon className="tactic-icon" />
                <h3 className="tactic-title">{tactic.title}</h3>
                <p className="tactic-description">{tactic.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Divider */}
        <div className="ornamental-divider" />

        {/* Army Organization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="army-structure"
        >
          <h3 className="army-title">Army Structure</h3>
          <div className="army-grid">
            {[
              { role: "Chhatrapati", count: "1", desc: "Supreme Commander" },
              { role: "Senapati", count: "1-2", desc: "Chief General" },
              { role: "Infantry", count: "50,000+", desc: "Foot Soldiers" },
              { role: "Cavalry", count: "10,000+", desc: "Mounted Warriors" },
            ].map((unit, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="army-unit">
                <p className="unit-count">{unit.count}</p>
                <p className="unit-role">{unit.role}</p>
                <p className="unit-description">{unit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Weaponry */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h3 className="weaponry-title">Arsenal & Weaponry</h3>
          <div className="weaponry-grid">
            {weaponry.map((weapon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="weapon-card"
              >
                <p className="weapon-type">{weapon.type}</p>
                <h4 className="weapon-name">{weapon.name}</h4>
                <p className="weapon-usage">{weapon.usage}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}