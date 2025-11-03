
import FortsSection from "./forts-section"

export default function Forts() {
  const forts = [
    {
      name: "Raigad Fort",
      description: "Capital of the Maratha Empire, where Shivaji Maharaj was crowned",
      significance: "Administrative capital and coronation site"
    },
    {
      name: "Sinhagad Fort",
      description: "Previously known as Kondhana, captured by Tanaji Malusare",
      significance: "Site of the famous Battle of Sinhagad"
    },
    {
      name: "Pratapgad Fort",
      description: "Site where Shivaji Maharaj defeated Afzal Khan",
      significance: "Historic battle that established Maratha power"
    },
    {
      name: "Shivneri Fort",
      description: "Birthplace of Shivaji Maharaj",
      significance: "Birthplace and childhood home"
    },
    {
      name: "Torna Fort",
      description: "First fort captured by Shivaji Maharaj at age 16",
      significance: "First military achievement"
    }
  ]

  return (
    <div className="container">
      <FortsSection/>
      {/* <h1 className="page-title">Forts of Shivaji Maharaj</h1>
      
      <div className="intro-text">
        <p>
          Shivaji Maharaj built and captured over 300 forts throughout his reign. 
          These forts served as military bases, administrative centers, and symbols 
          of Maratha power.
        </p>
      </div>

      <div className="forts-grid">
        {forts.map((fort, index) => (
          <div key={index} className="fort-card">
            <h3>{fort.name}</h3>
            <p>{fort.description}</p>
            <div className="significance">
              <strong>Significance:</strong> {fort.significance}
            </div>
          </div>
        ))}
      </div>

      <div className="additional-info">
        <h3>Fort Architecture</h3>
        <p>
          The forts built by Shivaji Maharaj featured innovative designs including:
        </p>
        <ul>
          <li>Multiple protective walls</li>
          <li>Secret escape routes</li>
          <li>Advanced water storage systems</li>
          <li>Strategic watchtowers</li>
          <li>Hidden gates and passages</li>
        </ul>
      </div> */}
    </div>
  )
}