import React from 'react'
import SearchBox from './SearchBox'
import DisplayBox from './DisplayBox'

const MainPage = () => {

    const[ingredientList, setIngredientList] = React.useState([])
    const handleData = (newData) => {
        setIngredientList(prevData => [...prevData, newData])
    }

    const handleDelete = (ingredientToDelete) =>{
      setIngredientList(prevData => prevData.filter(ingredient => ingredient !== ingredientToDelete))
    }

  return (
    <div>
      <SearchBox userSubmitAddIngredient={handleData}/>
      <DisplayBox ingredientList={ingredientList} onDelete={handleDelete}/>
    </div>
  )
}

export default MainPage
