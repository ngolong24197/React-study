  import React from 'react';
  import AIButton from './AIButton';
import RecipeDisplay from './RecipeDisplay';

  const DisplayBox = ({ ingredientList,onDelete }) => {

    const[generatedRecipe, setGeneratedRecipe] = React.useState(false)

    const generatedRecipeButtonClick = () =>{
      setGeneratedRecipe(true)
    }



    return (
      <div>
      <div className="display-box-wrapper">
        <div className="display-box">
          <h2>Ingredients</h2>
          <div className="ingredient-list">
            {ingredientList.map((ingredient, index) => (
              <div className="ingredient-item" key={index} onClick={() => onDelete(ingredient)} style={{ cursor: 'pointer' }}
                title="Click to remove" >
                {ingredient}
              </div>
            ))}
          </div>
        </div>
        
      </div>
      {ingredientList.length > 0 && <AIButton onClick={generatedRecipeButtonClick}/>}
      {generatedRecipe && ingredientList.length > 0 && <RecipeDisplay/>}
      </div>
    );
  };

  export default DisplayBox;
