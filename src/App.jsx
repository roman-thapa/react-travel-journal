import Header from "./Header"
import Places from "./Places"
import data from "./data"



export default function App() {
  const places = data.map(place => {
    return (
      <Places 
      key={place.id}
        place = {place}
      />
    )
  })

  return (
    <>
      <Header />
      <div className="container">
        {places}
      </div>
    </>
  )
}