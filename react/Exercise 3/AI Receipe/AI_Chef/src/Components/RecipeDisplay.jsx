import React from 'react'

const RecipeDisplay = ({onClose}) => {
    return (
    <div className='display-box-wrapper'>
    <div className='display-box'>
        <h1>Spaghetti Carbonara</h1>
        <div class="section">
            <img src="https://source.unsplash.com/800x400/?spaghetti" alt="Spaghetti Carbonara"/>
            <p><strong>Description:</strong> A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Quick, creamy, and delicious!</p>
            <p class="time">Prep Time: 10 mins | Cook Time: 15 mins | Serves: 2</p>
        </div>

        <div class="section">
            <h2>Ingredients</h2>
            <ul>
            <li>200g spaghetti</li>
            <li>100g pancetta or bacon</li>
            <li>2 large eggs</li>
            <li>1/2 cup grated Parmesan cheese</li>
            <li>2 cloves garlic, minced</li>
            <li>Salt & black pepper to taste</li>
            <li>Fresh parsley (optional)</li>
            </ul>
        </div>

        <div class="section">
            <h2>Instructions</h2>
            <ol>
            <li>Cook the spaghetti in salted water according to package instructions. Reserve 1/2 cup pasta water before draining.</li>
            <li>While pasta cooks, sauté pancetta in a skillet over medium heat until crispy. Add garlic and cook for 1 minute.</li>
            <li>In a bowl, whisk together eggs and Parmesan cheese.</li>
            <li>Add drained spaghetti to the skillet with pancetta. Toss to coat.</li>
            <li>Remove from heat and slowly pour in the egg mixture, tossing quickly to prevent scrambling. Add pasta water a bit at a time to make a creamy sauce.</li>
            <li>Season with black pepper. Garnish with parsley and extra cheese if desired.</li>
            </ol>
        </div>

        <div class="section">
            <h2>Tips</h2>
            <p class="note">Use freshly grated Parmesan for the best flavor and texture. Serve immediately for best taste!</p>
        </div>
    </div>
    </div>
    )
}

export default RecipeDisplay
