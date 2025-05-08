import React from 'react'

const SearchBox = ({userSubmitAddIngredient}) => {


  const [userInput, setUserInput] = React.useState('')
  const handleInputChange = (e) =>{
    setUserInput(e.target.value)
  }

  const addToList =() =>{
    userSubmitAddIngredient(userInput)
    setUserInput('')
  }
  
   

    
  return (
    <form className='search-box-wrapper' 
    onSubmit={(e) => { 
    e.preventDefault(); 
    addToList()
    }}>
       
            <div className='search-box'>
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Type something..."
              className="input-addArray"
            />


            <button type='submit'> + Add Ingredient</button>
            </div>
      
    </form>
  )
}

export default SearchBox
