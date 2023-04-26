import React from "react"

function FormIngredient(props){
    return (
        <form className="form-ingredient-container">
            <h3>What ingredients do you have?</h3>
            <input
            className="ingredient-input" 
            type="text"
            name="ingredient"
            placeholder="Enter an ingredient"
            />
            <button onClick={ () => alert('Hello!') }
            className="btn-add-ingredient"
            >Add ingredient</button>
        </form>
    );
}

export default FormIngredient