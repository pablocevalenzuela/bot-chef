//import React, { useState } from "react";
import React from "react";

//function Ingredient ({ id, text, deleteIngredient }) {
function Ingredient ({id, text, cant, dropIngredient}) {

    return (
        <div className="ingredients-container">
            <div className="ingredient">
                {text} <a href="#" onClick={ () => dropIngredient(id) }>Drop</a>
            </div>
        </div>
    )
}

export default Ingredient