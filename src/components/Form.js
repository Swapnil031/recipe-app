import React from 'react';

const Form = props => (
  <form onSubmit={props.getRecipe} style={{ marginBottom: '2rem'}}>
	<input className="form__input" type='text' name='recipeName' placeholder="Search for keywords"/>
	<button className="form__button">SEARCH</button>
  </form>
);

export default Form;