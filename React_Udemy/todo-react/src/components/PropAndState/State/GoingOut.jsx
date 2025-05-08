import React from 'react'

const GoingOut = () => {

  const [isGoingOut, setIsGoingOut] = React.useState(false)

  function changeGoingOut(){
    setIsGoingOut(previousState => !previousState)
  }


    

    
  function setGoingOut(value){
    setIsGoingOut(value)
  }


 


  
  return (
    <div>
    <div className='counter'>
      <h1 className='title'>Do i feel like going out tonight?</h1>
      <button className='minus' onClick={() => {setIsGoingOut(!isGoingOut)}}>{isGoingOut ? "yes " : "no "}</button>
      <button className='plus' onClick={changeGoingOut}>{isGoingOut ? "yes " : "no "}</button>
    </div>
    <div className='counter'>
      <h1 className='title'>Do i feel like going out tonight v2?</h1>
      <button className='minus' onClick={()=> setGoingOut(true)}>Yes</button>
      <button className='plus' onClick={() => setGoingOut(false)}c>No</button>
      <h2 className='count'>{isGoingOut ? "Let's Go Out " : "Let's Stay home "}</h2>
    </div>




    </div>
    
    
  )
}

export default GoingOut
