
import '../App.css'

import places from '../data/data'
import DisplayCard from '../components/DisplayCards'

function Dashboard() {
 

  return (
    <>
    <div>
        {places.map((place) => (
            <DisplayCard key={place.id} place={place} />))}
    </div>
  
    </>
  )
}



export default Dashboard
