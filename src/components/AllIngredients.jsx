import React, { useState } from "react";
import FormIngredient from "./FormIngredient"
import Ingredient from "./Ingredient"

function AllIngredients(){

    const [ingredients, setIngredients] = useState([]);
    let [cant = 0, setCant] = useState(null);

    const addIngredient = ingredient => {
        console.log(ingredient);
        if (ingredient.text.trim()){
            ingredient.text = ingredient.text.trim();
            const updatedIngredients = [ingredient, ...ingredients];
            setIngredients(updatedIngredients);
            cant = updatedIngredients.length;
            setCant(cant);
            
        }
    }

    const dropIngredient = id => {
        const updatedIngredients = ingredients.filter(ingredient => ingredient.id !== id);
        setIngredients(updatedIngredients);
        cant = updatedIngredients.length;
        setCant(cant);
        console.log("Ingredient delete!")
    }

    

    return (
        <>
        <FormIngredient onSubmit={addIngredient}/>
        <h3>Your ingrediens 🍚 🥩 🧅 🧅</h3>
        <div className="list-all-ingredients-inseted">
            <div id="ci">
                You have ({cant}) added.
            </div>
            <p>
            {
                ingredients.map((ingredient) =>
                    <Ingredient
                        key={ingredient.id}
                        id={ingredient.id}
                        text={ingredient.text}
                        dropIngredient={dropIngredient}
                    />
                )
            }
            </p>
        </div>
        </>

    );
}
/*this is a comment */
export default AllIngredients