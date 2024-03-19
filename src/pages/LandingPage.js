import { useEffect, useState } from "react"

export default function LandingPage() {
  const [digimons, setDigimons] = useState([])

  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then(res => res.json())
      .then(data => setDigimons(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>List Digimon</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, justifyContent: "center" }}>
        {
          digimons.map((el, i) => {
            return (
              <div key={i}>
                <img src={el.img} width={200} height={200} alt={i} />
                <p>{i + 1}. {el.name}</p>
              </div>
            )
          })
        }


      </div>
    </div>
  )
}