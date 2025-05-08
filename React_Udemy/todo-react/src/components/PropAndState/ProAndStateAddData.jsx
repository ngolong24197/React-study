import React from 'react'

const ProAndStateAddData = ({addData}) => {
    const[userInput,setUserInput] = React.useState("");

    const handleInputChange = (e) =>{
        setUserInput(e.target.value)
    }
    const addToArray = () =>{
        addData(userInput)
        setUserInput("")

    }


  return (
    
    <div className="div-addArray">
      <h1 className="h1-addArray">Add To Array</h1>
      <div className='button-container'>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Type something..."
        className="input-addArray"
      />

      <button onClick={addToArray} className="button-addArray">Add</button>
      </div>
      
    </div>
  )
}

export default ProAndStateAddData;
