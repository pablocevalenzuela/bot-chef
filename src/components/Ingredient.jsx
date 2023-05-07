//import React, { useState } from "react";
import React from "react";

//function Ingredient ({ id, text, cant, deleteIngredient }) {
function Ingredient (props) {

    const recipes = () => {
        let ing = props.text;
        if(ing == 'rice')
        {
            console.log("rice with eggs")
        }
    }

    return (
        <>
        <div className="ingredients-container">
            <p>
                <div className="ingredient">
                {props.text} <a href="#" onClick={ () => props.dropIngredient(props.id) }>Drop</a>
                </div>
            </p>
                <div>
                <button onClick={ recipes() }>Suggest recipes</button>
                </div>
        </div>
        <div>
        </div>
        </>
    )
}

export default Ingredient