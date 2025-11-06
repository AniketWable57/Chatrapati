import FortDetailsPage from "../fort-details/fort-details-page"
import { forts } from "../data"

interface PageProps {
  params: Promise<{
    id: string
  }>
  searchParams: { [key: string]: string | string[] | undefined }
}

// Update this interface to match what FortDetailsPage expects
interface Fort {
  id: string
  name: string
  region: string
  yearBuilt: string
  garrison: string
  description: string
  significance: string
  image: string
  fullHistory: {
    builtBy: string
    constructionPeriod: string
    architecture: string
    majorEvents: string[]
    currentStatus: string
    area: string
    elevation?: string
    materials?: string
    features?: string[]
  }
}

export default async function FortDetails({ params }: PageProps) {
  try {
    const resolvedParams = await params
    const fort = forts.find(f => f.id === resolvedParams.id) as Fort | undefined

    if (!fort) {
      return (
        <div className="fort-not-found" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50vh',
          textAlign: 'center',
          padding: '2rem'
        }}>
          <h1 style={{ 
            fontSize: '2rem', 
            color: 'var(--primary)',
            marginBottom: '1rem',
            fontFamily: '"Playfair Display", serif'
          }}>Fort Not Found</h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'rgba(47, 27, 10, 0.7)',
            maxWidth: '400px'
          }}>
            The fort "{resolvedParams.id}" doesn't exist in our records.
          </p>
        </div>
      )
    }

    // Debug log to see actual fort data
    console.log('Fort data:', fort)

    return <FortDetailsPage fort={fort} />
    
  } catch (error) {
    console.error('Error in FortDetails:', error)
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Error Loading Fort Details</h1>
        <p>Please try again later.</p>
      </div>
    )
  }
}

export async function generateStaticParams() {
  return forts.map((fort) => ({
    id: fort.id,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const fort = forts.find(f => f.id === resolvedParams.id)
  
  if (!fort) {
    return {
      title: 'Fort Not Found'
    }
  }

  return {
    title: `${fort.name} - Maratha Forts`,
    description: fort.description,
  }
}