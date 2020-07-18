import React from 'react';
import { Link } from 'react-router-dom';

const IMAGE_URL = "https://spoonacular.com/recipeImages/";
const API_KEY = "b808aac38d1f43e28f1106714813a023";

class Recipe extends React.Component {
  state = {
	activeRecipe: []
  }

  componentDidMount = async () => {
	const title = this.props.location.state.recipe;

    const req = await fetch(`https://api.spoonacular.com/recipes/search?query=${title}&apiKey=${API_KEY}`);
    
    const res = await req.json();
    console.log(res.results[0]);
	this.setState({ activeRecipe: res.results[0] });
  }

  render() {
	
	const recipe = this.state.activeRecipe ;

	return (
	  <div className="container">
	  {	
		  recipe.length !== 0 && 		
		  <div className="active-recipe">
			<img className="active-recipe__img" src={ `${IMAGE_URL}${recipe.id}-556x370.jpg` } />
			<h3 className="active-recipe__title">{ recipe.title }</h3>
			<p className='active-recipe__website'>SOURCE: <a href={ recipe.sourceUrl }>{ recipe.sourceUrl }</a></p>
			<button className="active-recipe__button">
			  <Link to="/">GO HOME</Link>
			</button>
		  </div>		
	  }
	  </div>
	);
  }  
};

export default Recipe;