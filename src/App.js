import React from 'react';
import './App.css';
import Form from './components/Form'
import Recipes from './components/Recipes';

const API_KEY = "b808aac38d1f43e28f1106714813a023";

class App extends React.Component {

  state = {
    recipes: [],
    trivia: ''
  }

  getRandomRecipe = async () => {
    const api_call = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&number=9`);
    
    const data = await api_call.json();
    this.setState({ recipes: data.results });
  }
  
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const api_call = await fetch(`https://api.spoonacular.com/recipes/search?query=${recipeName}&apiKey=${API_KEY}&number=9`);
    
    const data = await api_call.json();
    this.setState({ recipes: data.results });
    //console.log(this.state.recipes);
  }

  getTrivia = async () => {
    const api_call = await fetch(`https://api.spoonacular.com/food/trivia/random?apiKey=${API_KEY}`);
    
    const data = await api_call.json();

    this.setState({ trivia: data.text });  
  }

  componentDidMount = () => {    
    this.getRandomRecipe();
    this.getTrivia();
  }
    
  render() {

	return (
      <div className="App">

        <header className="App-header">
          <h1 className='App-title'>Recipe World</h1>
        </header>
        
        <Form getRecipe={this.getRecipe} />
        <p className='trivia_head'><u>DID YOU KNOW</u></p>
        <p className='trivia_text'>"{this.state.trivia}"</p>
        <Recipes recipes={this.state.recipes} />

      </div>
    );
  }
}

export default App;
