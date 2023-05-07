import React, { useState } from "react";
import FormIngredient from "./FormIngredient"
import Ingredient from "./Ingredient"

function AllIngredients(){

    const [ingredients, setIngredients] = useState([]);
    let [cant = 0, setCant] = useState(null);
    let [msg, setMsg] = useState(true);

    const addIngredient = ingredient => {
        if (ingredient.text.trim() && ingredients.length <= 2){
            ingredient.text = ingredient.text.trim();
            const updatedIngredients = [ingredient, ...ingredients];
            setIngredients(updatedIngredients);
            cant = updatedIngredients.length;
            setCant(cant);
        } else {
           msg = <h5>¡Only You can enter Three Ingredients!.</h5>;
           setMsg(msg);
        }
    }

    const dropIngredient = id => {
        const updatedIngredients = ingredients.filter(ingredient => ingredient.id !== id);
        setIngredients(updatedIngredients);
        cant = updatedIngredients.length;
        setCant(cant);
    }

    

    return (
        <>
        <FormIngredient onSubmit={addIngredient}/>
        <h3>Your ingrediens 🍚 🥩 🧅 🧅</h3>
        <div className="list-all-ingredients-inseted">
            <div style={{color: "red"}} id="msg-error">
                {msg}
            </div>
            <div id="ci">
                You have added <b>({cant})</b>
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

export default AllIngredients