import React from 'react';
import { Link } from 'react-router-dom';

const IMAGE_URL = "https://spoonacular.com/recipeImages/";

const Recipes = (props) => (

  <div className="container">
    <div className='row'>
      { props.recipes.map( (recipeInfo) => {

          return (
            <div key={recipeInfo.id} className='col-md-4' style={{ marginBottom: '2rem' }}>
              <div className='recipes__box'>
                <img 
                  className='recipe__box-img'
                  src={ `${IMAGE_URL}${recipeInfo.id}-556x370.jpg` }
                  alt={ recipeInfo.title }/>
                <div className='recipe__text' style={{ margin: "1rem" }}>
                  <h5>
                    { recipeInfo.title.length < 20 ? `${recipeInfo.title}` : `${recipeInfo.title.substring(0, 25)}...` }
                  </h5> 
                </div>
                <button className='recipe_buttons'>
                  <Link to={{ 
                    pathname: `/recipe/${recipeInfo.id}`,
                    state: { recipe: recipeInfo.id }  
                  }}>View Recipe</Link>
                </button>
              </div>
            </div>
          );

        }) 
      }
    </div>
  </div> 
);

export default Recipes;