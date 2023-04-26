import React, {useState} from "react";
import FormIngredient from "./FormIngredient"
import Ingredient from "./Ingredient"

function AllIngredients(){

    const [ingredients, setIngredients] = useState([]);

    return (
        <>
        <FormIngredient/>
        <div className="list-all-ingredients-inseted">
            <h3>Your ingredients 🍚 🥩 🧅 🧅</h3>
            {
                ingredients.map((ingredient) =>
                    <Ingredient
                        text={ingredient.texto}

                    />
                )
            }
        </div>
        
        </>

    );
}

export default AllIngredients