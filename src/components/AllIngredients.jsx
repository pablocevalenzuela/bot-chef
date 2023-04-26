import React, {useState} from "react";
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
        <div className="list-all-ingredients-inseted">
            <h3>Your ingredients 🍚 🥩 🧅 🧅</h3>
            {
                ingredients.map((ingredient) =>
                    <Ingredient
                        key={ingredient.id}
                        id={ingredient.id} 
                        text={ingredient.text}
                    />
                )
            }
        </div>
        
        </>

    );
}

export default AllIngredients