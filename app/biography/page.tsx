"use client"

import { motion } from "framer-motion"
import "../../styles/biography-section.css"
import TimelinePage from '../timeline/timeline-page';
import Biography from "./biography";

export default function BiographySection() {
  return (
    <main>
      <Biography/>
     <TimelinePage showAll={false} />
    </main>
    
  )
}
