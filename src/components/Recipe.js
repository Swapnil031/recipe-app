import React from 'react';
import { Link } from 'react-router-dom';

const IMAGE_URL = "https://spoonacular.com/recipeImages/";
const API_KEY = "b808aac38d1f43e28f1106714813a023";

class Recipe extends React.Component {
  state = {
	activeRecipe: []
  }

  componentDidMount = async () => {
	const id = this.props.location.state.recipe;

	const req = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
    
    const res = await req.json();

	this.setState({ activeRecipe: res });
  }

  render() {
	
	const recipe = this.state.activeRecipe ;

	 return (
		<div className="container">
		{	
			recipe.length !== 0 && 		
			<div className="active-recipe">
			  <img className="active-recipe__img" src={ recipe.image } />
			  <h3 className="active-recipe__title">{ recipe.title }</h3>
			  <p className='active-recipe__website'>SOURCE: <a href={ recipe.sourceUrl }>{ recipe.sourceName }</a></p>
			  <button className="active-recipe__button">
				<Link to="/">GO HOME</Link>
			  </button>
			  <p className='active-recipe__summary' dangerouslySetInnerHTML={{__html: recipe.summary }}></p>
			</div>		
		}
		</div>
	 );
  }  
};

export default Recipe;