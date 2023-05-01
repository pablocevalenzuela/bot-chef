import React, { useState } from "react";
import FormIngredient from "./FormIngredient"
import Ingredient from "./Ingredient"

function AllIngredients(){

    const [ingredients, setIngredients] = useState([]);

    const addIngredient = ingredient => {
        console.log(ingredient);
        if (ingredient.text.trim()){
            ingredient.text = ingredient.text.trim();
            const updatedIngredients = [ingredient, ...ingredients];
            setIngredients(updatedIngredients);
        }
    }

    return (
        <>
        <FormIngredient onSubmit={addIngredient}/>
        <h3>Your ingrediens 🍚 🥩 🧅 🧅</h3>
        <div className="list-all-ingredients-inseted">
            <p>
            {
                ingredients.map((ingredient) =>
                    <Ingredient
                        id={ingredient.id}
                        text={ingredient.text}
                    />
                )
            }
            </p>
        </div>
        </>

    );
}

export default AllIngredients