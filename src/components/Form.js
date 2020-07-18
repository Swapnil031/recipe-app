import React from 'react';

const Form = props => (
  <form onSubmit={props.getRecipe} style={{ marginBottom: '2rem'}}>
	<input className="form__input" type='text' name='recipeName' placeholder="Search for recipes"/>
	<button className="form__button">GO</button>
  </form>
);

export default Form;