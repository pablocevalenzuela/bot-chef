import React, {useState} from "react";
import { v4 as uiidv4 } from "uuid";

function FormIngredient(props){

    const [input, setInput] = useState('');

    const manageChange = e => {
        setInput(e.target.value);
    }

    const manageAddIngredients = e => {
        e.preventDefault();

        const newIngredient = {
            id: uiidv4(),
            text: input
        }

        props.onSubmit(newIngredient);
    }

    const validateIngredients = e => {
        if (e.target.value == null ) {
            alert('Please, enter an ingredient :)');
        }
    }

    return (
        <form 
            className="form-ingredient-container"
            onSubmit={ manageAddIngredients }>
            <h3>What ingredients do you have?</h3>
            <input
            className="ingredient-input" 
            type="text"
            name="ingredient"
            placeholder="Enter an ingredient"
            onChange={ manageChange }
            autoFocus
            />
            <button
            className="btn-add-ingredient"
            onClick={ validateIngredients }
            >Add ingredient</button>
        </form>
    );
}

export default FormIngredient