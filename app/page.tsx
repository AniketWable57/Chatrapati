import Header from "../components/header"
import HeroSection from "@/components/hero-section"
import EnhancedHomepage from "@/components/enhanced-homepage"

import Footer from "@/components/footer"
import TimelineSection from "./timeline/timeline-page"
import TimelinePage from './timeline/timeline-page';
import RajmudraSeaction from '@/components/RajmudraSection'


export default function Home() {
  return (
    <main>
      
      <HeroSection />
      <EnhancedHomepage />
    <TimelinePage showAll={false} />
    <RajmudraSeaction/>
      
    </main>
  )
}

