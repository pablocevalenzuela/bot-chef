//import React, { useState } from "react";
import React from "react";

//function Ingredient ({ id, text, cant, deleteIngredient }) {
function Ingredient (props) {
    
    return (
        <>
        <div className="ingredients-container">
            <p>
                <div className="ingredient">
                {props.text} <a href="#" onClick={ () => props.dropIngredient(props.id) }>Drop</a>
                </div>
            </p>
        </div>
        <div>
        </div>
        </>
    )
}

export default Ingredient