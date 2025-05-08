import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    function add() {
      setCount(prevCount => prevCount + 1)
    }
  
    function substract() {
      setCount(prevCount => prevCount - 1)
    }
   
  
    return (
      <>
        <main className='container'>
          <h1>State Testing </h1>
          <div className='counter'>
            <button className='minus' onClick={substract} aria-label='Decrease'> - </button>
            <h2 className='count'>{count}</h2>
            <button className='plus' onClick={add} aria-label='Increase'> + </button>
        
          </div>
          
         
        </main>
      </>
    )
  }

export default Counter
