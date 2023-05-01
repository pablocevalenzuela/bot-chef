import React, { useState }from "react";

//function Ingredient ({ id, text, deleteIngredient }) {
function Ingredient (props) {

    const [input, setInput] = useState('');

    const dropIngredient = e => {
        alert("¿Drop?");
    }

    return (
        <div className="ingredients-container">
            <div className="ingredient">
    
            </div>
            <div className="option">
               {props.text} <a href="#" onClick={ () => dropIngredient()}>Drop</a>
            </div>
        </div>
    )
}

export default Ingredient