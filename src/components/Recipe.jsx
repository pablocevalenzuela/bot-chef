import React from "react"

function Recipe({recipe}){
    return (
        <>
         <form 
            className="form-ingredient-container"
            >

            <button
            className="btn-add-ingredient"
            >
             😋 Get my Recipe
            </button>
        </form>
            <div className="recipe">
            <h3>Your recipe is 🍲</h3>
            </div>
        </>
    )
}

export default Recipe