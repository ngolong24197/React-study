import React from 'react'

const Test = () => {
    function handleClick(){
        console.log("Button Clicked !!!!!!")
    }
  return (
    <div className='container'>
      <h1>Test</h1>
      <button onClick={handleClick()}>Test</button>
    </div>
  )
}

export default Test
