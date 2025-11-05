import FortDetailsPage from "../fort-details/fort-details-page"
import { forts } from "../data"

interface PageProps {
  params: Promise<{
    id: string
  }>
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function FortDetails({ params }: PageProps) {
  // Await the params promise
  const resolvedParams = await params
  console.log('Server Component - Params:', resolvedParams)
  console.log('Server Component - ID:', resolvedParams.id)

  const fort = forts.find(f => f.id === resolvedParams.id)

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
        <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
          Available forts: {forts.map(f => f.id).join(', ')}
        </div>
      </div>
    )
  }

  return <FortDetailsPage fort={fort} />
}

// Generate static params for better performance
export async function generateStaticParams() {
  console.log('Generating static params for forts...')
  
  return forts.map((fort) => ({
    id: fort.id,
  }))
}

// Update metadata generation too
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