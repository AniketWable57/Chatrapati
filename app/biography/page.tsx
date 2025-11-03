"use client"

import { motion } from "framer-motion"
import "../../styles/biography-section.css"

export default function BiographySection() {
  return (
    <section className="biography-section">
      <div className="biography-content">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="biography-header"
        >
          <p className="biography-subtitle">HISTORICAL JOURNEY</p>
          <h2 className="biography-title">Life & Legacy</h2>
          <p className="biography-description">
            From a young warrior prince to the founder of the Maratha Empire, Shivaji Maharaj's vision transformed India
            and inspired generations
          </p>
        </motion.div>

        {/* Biography Text */}
        <div className="biography-text-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="biography-paragraph">
              Chhatrapati Shivaji Maharaj (1630-1680) was born during the late Mughal Empire when Indian sovereignty was
              under threat. Under the guidance of his mother Jijabai and military strategist Dadoji Kondadev, he
              developed a keen interest in swordsmanship, military strategy, and governance.
            </p>
            <p className="biography-paragraph">
              From his humble fort of Raigarh, Shivaji systematically expanded Maratha territories through a combination
              of military prowess, diplomatic acumen, and administrative brilliance. He built an empire that respected
              diverse communities and pioneered administrative practices ahead of his time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="biography-paragraph">
              His military innovations included guerrilla warfare tactics, the development of the Maratha Navy to
              control the Arabian Sea, and the organization of a professional standing army. The Ashta Pradhan (council
              of eight ministers) represented one of the first systematic approaches to governance in India.
            </p>
            <p className="biography-paragraph">
              Shivaji's coronation in 1674 marked the formal establishment of the Maratha Empire. His legacy extends
              beyond military conquest to the preservation of Indian culture, promotion of local industries, and the
              creation of a democratic governance system that inspired future Indian administrators.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="ornamental-divider" />

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="achievements-grid"
        >
          {[
            {
              title: "Military Innovation",
              description: "Pioneer of guerrilla warfare and naval power in India, revolutionizing military tactics",
            },
            {
              title: "Democratic Governance",
              description:
                "Established Ashta Pradhan council system of administration centuries before modern democracy",
            },
            {
              title: "Cultural Preservation",
              description:
                "Championed Indian culture, supported arts, and protected Hindu traditions during Mughal era",
            },
          ].map((achievement, index) => (
            <motion.div key={index} whileHover={{ y: -8 }} className="achievement-card parchment">
              <h4 className="achievement-title">{achievement.title}</h4>
              <p className="achievement-description">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
